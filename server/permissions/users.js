App.Users.collection.allow({
	update: function (userId, doc, fields, modifier) {
		var isAdmin = App.Users.isAdmin(userId);

		if (isAdmin)
			return true;

		if (doc._id !== userId)
			return false;

		// if trying to update roles but user is not admin then DENY
		if (_.contains(fields, 'roles'))
			return false;

		return true;
	}
});