function reseizeHomePanel () {
	var $panel = $('.masthead');
	$panel.height($(window).height() - 30);
}

function movePageNav (inside) {
	var $nav = $('.page-nav'),
		$mast = $('.ui.masthead');

	if (inside && $nav.parent().hasClass('page-content')) {
		// console.log('moving in');
		$mast.prepend($nav.clone());
		$nav.remove();
	} else {
		// console.log('moving out');
		$nav.clone().insertBefore($mast);
		$nav.remove();
	}
}

Template.home.rendered = function() {
	reseizeHomePanel();
	$(window).resize(reseizeHomePanel);

	// movePageNav(true);
};

// Template.home.onDestroyed(movePageNav);

Template.home.events({
	'click .down-scroller': function () {
		$('html, body').animate({ scrollTop: $(window).height() }, 100);
	}
});

Template.home.helpers({
	'members': function () {
		return _(_.random(2, 5)).times(function () {
			return {}
		});
	}
});
