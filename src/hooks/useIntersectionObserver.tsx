import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
    options: UseIntersectionObserverOptions = {}
) {
    const { threshold = 0, root = null, rootMargin = '0px', freezeOnceVisible = false } = options;
    const [entry, setEntry] = useState<IntersectionObserverEntry>();
    const elementRef = useRef<HTMLElement>(null);
    const frozen = useRef(false);

    useEffect(() => {
        const element = elementRef.current;
        const hasIOSupport = !!window.IntersectionObserver;

        if (!hasIOSupport || !element) return;

        if (frozen.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setEntry(entry);
                if (entry.isIntersecting && freezeOnceVisible) {
                    frozen.current = true;
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, root, rootMargin, freezeOnceVisible]);

    return { ref: elementRef, entry };
}
