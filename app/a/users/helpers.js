App.Users.collection.helpers({
	hasSelectedInterest: function () {
		return !_.isEmpty(this.profile.interests);
	},
	hasSelectedSchool: function () {
		return !_.isEmpty(this.profile.schools);
	},
	hasSelectedClass: function () {
		return !_.isEmpty(this.profile.class);
	},
	role: function () {
		return App.Users.getRole(this._id);
	},
	chosenCourses: function () {
		return App.Courses.collection.find({_id: {$in: this.profile.courses}}).fetch();
	},
	totalChosenCourses: function () {
		return this.profile.courses.length;
	}
});

App.Users.collection.before.insert(function (userId, doc) {
	doc.createdAt = moment().toDate();
});
