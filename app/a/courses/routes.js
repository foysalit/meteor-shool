Router.route('/admin/courses', {
	name: 'admin.courses.list',
	controller: App.Courses.Controller
});

Router.route('/admin/courses/create', {
	name: 'admin.courses.create',
	controller: App.Courses.Controller
});

Router.route('/admin/courses/:_id/edit', {
	name: 'admin.courses.edit',
	controller: App.Courses.Controller
});

Router.route('/admin/classes/create', {
	name: 'admin.classes.create',
	controller: App.Courses.Controller
});