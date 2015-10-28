StaticController = RouteController.extend({
	layoutTemplate: 'staticLayout'
});

StaticController.events({
	'click [data-action=logout]' : function() {
		AccountsTemplates.logout();
	}
});
