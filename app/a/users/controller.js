App.Users.Controller = AppController.extend({
	layoutTemplate: 'appLayout',
	waitOn: function () {
		var route = Router.current().route.getName(),
			subs = [];

		if (_.contains(['admin.users.edit'], route)) {
			subs.push(this.subscribe('users.single', this.params._id));
		}

		return subs;
	},
	data: function () {
		var route = Router.current().route.getName(),
			data = {};

		if (_.contains(['admin.users.edit'], route)) {
			data.user = App.Users.get(this.params._id);
		}

		return data;
	}
});