Meteor.publish(null, function (){ 
	return Meteor.roles.find({})
});

Meteor.publishComposite("tabularUsersList", function (tableName, ids, fields) {
	var table = Tables[tableName];
	fields = _.extend(fields, table.extraFields);
	check(tableName, String);
	check(ids, Array);
	check(fields, Match.Optional(Object));

	this.unblock(); // requires meteorhacks:unblock package
	var userId = this.userId;
	// console.log(tableName, ids, fields);

	return {
		find: function () {
			this.unblock(); // requires meteorhacks:unblock package

			// check for admin role with alanning:roles package
			if (!App.Users.isAdmin(userId)) {
				return [];
			}

			var users = App.Users.collection.find({
					_id: {$in: ids, $ne: userId}
				}, {
					fields: fields
				});

			return users;
		},
		children: []
	};
});