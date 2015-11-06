Template.membersList.helpers({
	roles: App.Members.roles,
	findByRole: App.Members.findByRole
});

Template.membersList.events({
	'click .remove': function () {
		App.Members.remove(this._id);
	}
});

