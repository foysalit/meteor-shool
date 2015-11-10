Template.adminUsersListActions.events({
	'click .make-teacher': function () {
		App.Users.addToRole(this._id, 'teacher');
	},
	'click .make-student': function () {
		App.Users.addToRole(this._id, 'student');
	},
	'click .make-admin': function () {
		App.Users.addToRole(this._id, 'admin');
	}
});