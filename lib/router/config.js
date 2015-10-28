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

// Router.plugin('loading', {loadingTemplate: 'loading'});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});
