StaticController = RouteController.extend({
	layoutTemplate: 'staticLayout',
	waitOn: function () {
		var route = Router.current().route.getName();

		if (route == 'home') {
			return [
				this.subscribe('members.list', {role: 'founder'}),
				this.subscribe('courses.random'),
			];
		}

		if (route == "members.static") {
			return this.subscribe('members.list');
		}
	},
	data: function () {
		var route = Router.current().route.getName();
		var data = {};

		if (route == 'home')
			data.courses = App.Courses.collection.find().fetch();

		return data;
	}
});

StaticController.events({
	'click [data-action=logout]' : function() {
		AccountsTemplates.logout();
	}
});
