function reseizeHomePanel () {
	var $panel = $('.masthead');
	$panel.height($(window).height() - 30);
}

Template.home.rendered = function() {
	reseizeHomePanel();
	$(window).resize(reseizeHomePanel);
};

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
