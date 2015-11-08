App.Users.ROLES = {
	admin: {
		group: 'admin',
		permissions: [
			'course.manage',
			'members.manage',
		]
	}, 
	teacher: {
		group: 'teacher',
		permissions: [
			'course.manage'
		]
	}, 
	student: {
		group: 'student',
		permissions: [
			'course.take'
		]
	}
};

Meteor.startup(function () {
	if (!Meteor.isServer)
		return;

	var admin = App.Users.collection.findOne({'username': 'admin'}),
		role = App.Users.ROLES.admin;

	// console.log(admin, role);
	if (admin)
		Roles.addUsersToRoles(admin._id, role.permissions, role.group);
})