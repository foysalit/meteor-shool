App.Courses.collection.allow({
	'insert': App.Users.isAdmin.bind(App.Users),
	'update': App.Users.isAdmin.bind(App.Users),
	'remove': App.Users.isAdmin.bind(App.Users)
});

App.Klasses.collection.allow({
	'insert': App.Users.isAdmin.bind(App.Users),
	'update': App.Users.isAdmin.bind(App.Users),
	'remove': App.Users.isAdmin.bind(App.Users)
});
