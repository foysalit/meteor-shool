Template.coursesList.helpers({
	inSection: function (section) {
		return _.where(this.courses, {section: section});
	}
});

Template.coursesList.events({
	'click .select': function () {
		return App.Users.enrollInCourse(this._id, Meteor.userId());
	},
	'click .unselect': function () {
		return App.Users.disenrollFromCourse(this._id, Meteor.userId());
	}
});

Template.courseListItem.helpers({
	isChosenCourse: function () {
		return _.contains(Meteor.user().profile.courses, this._id);
	}
});