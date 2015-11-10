Router.route('/admin/lectures/create', {
	name: 'admin.lectures.create',
	controller: App.Lectures.Controller
});

Router.route('/admin/lectures/:_id/edit', {
	name: 'admin.lectures.edit',
	controller: App.Lectures.Controller
});

Router.route('/admin/lectures', {
	name: 'admin.lectures.list',
	template: 'lecturesList',
	controller: App.Lectures.Controller
});