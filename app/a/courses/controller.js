App.Courses.Controller = AppController.extend({
	layoutTemplate: 'appLayout',
	waitOn: function () {
		var route = Router.current().route.getName(),
			subs = [];

		if (_.contains(['admin.courses.list', 'student.courses.choices'], route)) {
			subs.push(this.subscribe('courses.list'));
		}

		if (_.contains(['student.courses.list'], route)) {
			subs.push(this.subscribe('courses.list', {student: true}));
		}

		if (_.contains(['admin.courses.create'], route)) {
			subs.push(this.subscribe('klasses.list'));
		}

		if (_.contains(['admin.courses.edit'], route)) {
			subs.push(this.subscribe('courses.single', {_id: this.params._id}));
			subs.push(this.subscribe('klasses.list'));
		}

		if (_.contains(['student.courses.view'], route)) {
			subs.push(this.subscribe('courses.single', {
				_id: this.params._id, 
				student: true
			}));
		}

		return subs;
	},
	data: function () {
		var route = Router.current().route.getName(),
			data = {};

		if (_.contains([
			'admin.courses.list', 
			'student.courses.list', 
			'student.courses.choices'
		], route)) {
			data.courses = App.Courses.collection.find().fetch();
		}

		if (_.contains(['admin.courses.edit'], route)) {
			data.course = App.Courses.collection.findOne(this.params._id);
		}

		return data;
	}
});