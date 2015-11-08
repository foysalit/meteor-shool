StaticController = RouteController.extend({
	layoutTemplate: 'staticLayout',
	waitOn: function () {
		return [
			this.subscribe('members.list')
		];
	}
});

StaticController.events({
	'click [data-action=logout]' : function() {
		AccountsTemplates.logout();
	}
});
