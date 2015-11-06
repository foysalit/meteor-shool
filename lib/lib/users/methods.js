App.Users.isAdmin = function (userId) {
	var userId = userId || Meteor.user();

	return Roles.userIsInRole(userId, 'members.manage', 'admin');
};