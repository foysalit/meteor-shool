Router.route('/admin/members/create', {
	name: 'admin.members.create',
	controller: App.Members.Controller
});

Router.route('/admin/members/:_id/edit', {
	name: 'admin.members.edit',
	controller: App.Members.Controller
});

Router.route('/admin/members', {
	name: 'admin.members.list',
	template: 'membersList',
	controller: App.Members.Controller
});