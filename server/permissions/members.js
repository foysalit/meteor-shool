App.Members.collection.allow({
	'insert': App.Users.isAdmin.bind(App.Users),
	'update': App.Users.isAdmin.bind(App.Users),
	'remove': App.Users.isAdmin.bind(App.Users)
});
