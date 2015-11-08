Router.route('/admin', {
	name: 'admin.home'
});

Router.plugin('ensureSignedIn', {
	only: ['admin']
});
