Router.route('/', {
	name: 'home',
	controller: 'StaticController'
});

Router.route('/unauthorized', {
	name: 'unauthorized',
	controller: 'StaticController'
});