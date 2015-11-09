Router.route('/admin', {
	name: 'admin.home'
});

Router.plugin('ensureSignedIn', {
	except: ['home', 'atSignUp', 'atSignIn']
});
