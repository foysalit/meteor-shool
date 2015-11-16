function initSidebar () {
	$('.masthead').visibility({
		once: false,
		onBottomPassed: function() {
			$('.fixed.menu').transition('fade in');
		},
		onBottomPassedReverse: function() {
			$('.fixed.menu').transition('fade out');
		}
	});

	// create sidebar and attach to menu open
	$('.ui.sidebar').sidebar('attach events', '.toc.item, .sidebar.menu .item');
}

function addStaticClass () {
	$('body').addClass('static');
}

Template.staticLayout.onRendered(function () {
	initSidebar();
	addStaticClass();
});
Template.appLayout.onRendered(initSidebar);

Template.staticLayout.onDestroyed(function () {
	$('body').removeClass('static');
});