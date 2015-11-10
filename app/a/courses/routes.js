Router.route('/admin/courses', {
	name: 'admin.courses.list',
	controller: App.Courses.Controller
});

Router.route('/student/courses', {
	name: 'student.courses.list',
	controller: App.Courses.Controller
});

Router.route('/admin/courses/create', {
	name: 'admin.courses.create',
	controller: App.Courses.Controller
});

Router.route('/student/courses/choices', {
	name: 'student.courses.choices',
	controller: App.Courses.Controller
});

Router.route('/student/courses/:_id', {
	name: 'student.courses.view',
	controller: App.Courses.Controller
});

Router.route('/admin/courses/:_id', {
	name: 'admin.courses.view',
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