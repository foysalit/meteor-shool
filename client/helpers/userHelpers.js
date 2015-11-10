Template.registerHelper('isAdmin', function(userId) {
	return App.Users.isAdmin(App.Users.getUserId(userId));
});

Template.registerHelper('isTeacher', function(userId) {
	return App.Users.isTeacher(App.Users.getUserId(userId));
});

Template.registerHelper('isStudent', function(userId) {
	return App.Users.isStudent(App.Users.getUserId(userId));
});

Template.registerHelper('hasSelected', function(user, query) {
	var user = Meteor.user(),
		method = 'hasSelected'+ query.charAt(0).toUpperCase() + query.slice(1);

	if (user && _.isFunction(user[method])) {
		// console.log(method, user.hasSelectedInterest(), );
		return user[method]();
	}

	return false;
});