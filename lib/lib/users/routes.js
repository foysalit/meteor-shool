Router.route('/admin/users', {
	name: 'admin.users.list',
	template: 'adminUsersList',
	controller: App.Users.Controller
});