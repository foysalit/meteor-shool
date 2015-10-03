Users = Meteor.users;

Meteor.users.helpers({
	hasSelectedInterest: function () {
		return !_.isEmpty(this.profile.interests);
	},
	hasSelectedSchool: function () {
		return !_.isEmpty(this.profile.schools);
	},
	hasSelectedClass: function () {
		return !_.isEmpty(this.profile.class);
	},
});

Users.before.insert(function (userId, doc) {
	doc.createdAt = moment().toDate();
});
