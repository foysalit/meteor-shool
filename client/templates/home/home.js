function reseizeHomePanel () {
	var $panel = $('.masthead');
	$panel.height($(window).height() - 25);
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
