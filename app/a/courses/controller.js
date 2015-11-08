App.Courses.Controller = AppController.extend({
	layoutTemplate: 'appLayout',
	waitOn: function () {
		var route = Router.current().route.getName(),
			subs = [];

		if (_.contains(['admin.courses.list'], route)) {
			subs.push(this.subscribe('courses.list'));
		}

		if (_.contains(['admin.courses.create'], route)) {
			subs.push(this.subscribe('klasses.list'));
		}

		if (_.contains(['admin.courses.edit'], route)) {
			subs.push(this.subscribe('courses.single', this.params._id));
			subs.push(this.subscribe('klasses.list'));
		}

		return subs;
	},
	data: function () {
		var route = Router.current().route.getName(),
			data = {};

		if (_.contains(['admin.courses.list'], route)) {
			data.courses = App.Courses.collection.find().fetch();
		}

		if (_.contains(['admin.courses.edit'], route)) {
			data.course = App.Courses.collection.findOne(this.params._id);
		}

		return data;
	},
	// onBeforeAction: function () {
	// 	var courseId = Meteor.courseId();

	// 	console.log(courseId, App.Courses.isAdmin(courseId));
	// 	if (courseId && App.Courses.isAdmin(courseId)) {
	// 		this.next();
	// 	} else {
	// 		Meteor.setTimeout(function () {
	// 			Router.go('unauthorized');
	// 		}, 500);
	// 	}
	// }
});