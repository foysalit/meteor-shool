App.Users.isAdmin = function (userId) {
	return this.hasRole(this.getUserId(userId), 'admin');
};

App.Users.isTeacher = function (userId) {
	return this.hasRole(this.getUserId(userId), 'teacher');
};

App.Users.isStudent = function (userId) {
	return this.hasRole(this.getUserId(userId), 'student');
};

App.Users.getUserId = function (userId) {
	if (userId)
		return userId;

	if (Meteor.isClient)
		return Meteor.userId();

	if (Meteor.isServer) {
		if (this.userId)
			return this.userId;
		if (Meteor.user())
			return Meteor.user()._id;
	}

	return null;
};

App.Users.addToRole = function (userId, name) {
	var name = name || 'student',
		role = App.Users.ROLES[name];
	Roles.addUsersToRoles(this.getUserId(userId), role.permissions, role.group);
};

App.Users.hasRole = function (userId, name) {
	var name = name || 'student',
		role = App.Users.ROLES[name];

	return Roles.userIsInRole(this.getUserId(userId), role.permissions, role.group);
};

App.Users.getRole = function (userId) {
	return _.first(Roles.getGroupsForUser(this.getUserId(userId)));	
};

App.Users.enrollInCourse = function (courseId, userId) {
	var user = App.Users.collection.findOne(this.getUserId(userId));

	if (user.profile.courses.length > 3) {
		if (Meteor.isClient) {
			Bert.alert({
				title: 'Max 4 Courses Are Allowed!', 
				type: 'danger', 
				style: 'fixed-top', 
				icon: 'icon frown'
			});
		}
		return false;
	}

	App.Users.collection.update({
		_id: user._id
	}, {
		$addToSet: {
			'profile.courses': courseId
		}
	});
};

App.Users.disenrollFromCourse = function (courseId, userId) {
	App.Users.collection.update({
		_id: this.getUserId(userId)
	}, {
		$pull: {
			'profile.courses': courseId
		}
	});
};