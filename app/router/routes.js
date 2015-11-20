Router.route('/', {
	name: 'home'
});

Router.route('/board-of-members', {
	name: 'members.static',
	controller: 'StaticController'
});

Router.route('/unauthorized', {
	name: 'unauthorized'
});