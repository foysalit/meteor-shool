App.Lectures.Controller = RouteController.extend({
	layoutTemplate: 'appLayout',
	waitOn: function () {
		var route = Router.current().route.getName(),
			subs = [];

		if (_.contains(['admin.lectures.list'], route)) {
			subs.push(this.subscribe('lectures.list'));
		}

		if (_.contains(['admin.lectures.create'], route)) {
			subs.push(this.subscribe('courses.list'));
		}

		if (_.contains(['admin.lectures.edit'], route)) {
			subs.push(this.subscribe('lectures.single', this.params._id));
			subs.push(this.subscribe('courses.list'));
		}

		return subs;
	},
	data: function () {
		var route = Router.current().route.getName(),
			data = {};

		if (_.contains(['admin.lectures.edit'], route)) {
			data.lecture = App.Lectures.get(this.params._id);
		}

		return data;
	}
});