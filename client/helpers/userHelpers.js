Template.registerHelper('currentUser', function() {
	var user = Meteor.user();
	return user || null;
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