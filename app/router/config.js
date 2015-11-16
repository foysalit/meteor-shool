Router.configure({
	loadingTemplate: 'loading'
});

Router.configure({
	controller: 'AppController',
	except: ['home']
});

Router.configure({
	controller: 'StaticController',
	only: ['home']
});

Router.plugin('ensureSignedIn', {
	except: ['home', 'atSignUp', 'atSignIn', 'unauthorized']
});

Router.onBeforeAction(checkPermission, {
	except: ['home', 'atSignUp', 'atSignIn', 'unauthorized']
});

// Router.plugin('loading', {loadingTemplate: 'loading'});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});

function checkPermission () {
	var routeName = Router.current().route.getName();

	// console.log('checkPermission: ', routeName);

	if (_.contains(['unauthorized', 'atSignIn', 'atSignUp']), routeName)
		return this.next();

	if (Meteor.loggingIn()) {
		console.log('[authenticate filter] loading');
		this.render('loading');
		this.next();
	} else {
		Permission.check(this, routeName);
	}
}

var Permission = {
	check: function (route, routeName) {
		var filter = 'is'+ this.getFilter(routeName),
			hasPermission = App.Users[filter];

		if (_.isFunction(hasPermission) 
			&& hasPermission.call(App.Users, Meteor.userId()))
			return route.next();	
		
		return Router.go('unauthorized');
	},
	getFilter: function (name) {
		var fragments = name.split('.');

		if (_.contains(fragments, 'admin'))
			return 'Admin';
		if (_.contains(fragments, 'student'))
			return 'Student';
		if (_.contains(fragments, 'teacher'))
			return 'Teacher';

		return 'none';
	},
};