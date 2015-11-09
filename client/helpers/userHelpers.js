Template.registerHelper('isAdmin', function() {
	return App.Users.isAdmin(Meteor.userId());
});

Template.registerHelper('isTeacher', function() {
	return App.Users.isTeacher(Meteor.userId());
});

Template.registerHelper('isStudent', function() {
	return App.Users.isStudent(Meteor.userId());
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