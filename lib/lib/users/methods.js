App.Users.isAdmin = function (userId) {
	var userId = userId || Meteor.user();

	return Roles.userIsInRole(userId, 'members.manage', 'admin');
};

App.Users.addToRole = function (userId, name) {
	var name = name || 'student',
		role = App.Users.ROLES[name];
	Roles.addUsersToRoles(userId, role.permissions, role.group);
};

App.Users.hasRole = function (userId, name) {
	var name = name || 'student',
		role = App.Users.ROLES[name];

	return Roles.userIsInRole(userId, role.permissions, role.group);
};