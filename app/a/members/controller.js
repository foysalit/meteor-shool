App.Members.Controller = RouteController.extend({
	layoutTemplate: 'appLayout',
	waitOn: function () {
		var route = Router.current().route.getName(),
			subs = [];

		if (_.contains(['admin.members.list'], route)) {
			subs.push(this.subscribe('members.list'));
		}

		if (_.contains(['admin.members.edit'], route)) {
			subs.push(this.subscribe('members.single', this.params._id));
		}

		return subs;
	},
	data: function () {
		var route = Router.current().route.getName(),
			data = {};

		if (_.contains(['admin.members.edit'], route)) {
			data.member = App.Members.get(this.params._id);
		}

		return data;
	}
});