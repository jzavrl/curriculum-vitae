(function($) {

	'use strict';

	// Save all the configs
	var configs = {
		parallax: {
			invertX: true,
			invertY: true,
			frictionX: 0.2,
			frictionY: 0.8
		},
		particles: {
			density: 70000,
			dotColor: '#37474F',
			lineColor: '#37474F',
			directionX: 'center',
			directionY: 'center',
			particleRadius: 8,
			lineWidth: 2,
			parallax: false,
			proximity: 500,
			minSpeedX: 0.6,
			minSpeedY: 0.6
		}
	};

	// Run the parallax plugin first
	$('.parallax').parallax(configs.parallax);

	var particles = false,
		_particles = $('.particles');

	$('.section.hero').waypoint(function(direction) {
		// Hide the particles once we go back up
		if (direction == 'up') {
			_particles.fadeOut();
		} else {
			// Show particles and initialize if necessary
			if (!particles) {
				particles = _particles.particleground(configs.particles).hide();
			}

			_particles.fadeIn();
		}
	}, {
		offset: '-60%'
	});

	// Make specific texts reveal after going into viewport
	$('.waypoint-reveal').waypoint(function(direction) {
		if (direction == 'down') {
			baffle(this.element).start().reveal(2000);
		}
	}, {
		offset: '100%'
	});

	// Switch between description fields
	$('#switcher a').on('click', function() {
		var _this = $(this),
			_target = _this.data('toggle-target');

		// Change the button style
		_this.parent().siblings().find('a.active').removeClass('active');
		_this.addClass('active');

		// Show and hide the description
		$('.story .description.active').removeClass('active');
		$('.story #' + _target).addClass('active');

		$('.story #' + _target).children().each(function(index, value) {
			// There might be some additional tags inside so check for those too
			var children = $(value).children();
			if (children.length == 1) {
				baffle(children[0]).start().reveal(1000);
			} else {
				baffle(value).start().reveal(1000);
			}
		});

		// Trigger window resize so waypoints gets the new positions
		$(window).resize();
	});

})(jQuery);

//# sourceMappingURL=../scripts/application.js.map
