Meteor.publish(null, function (){ 
	return Meteor.roles.find({})
});

Meteor.publishComposite("tabularUsersList", function (tableName, ids, fields) {
	var table = Tables[tableName];
	fields = _.extend(fields, table.extraFields);
	check(tableName, String);
	check(ids, Array);
	check(fields, Match.Optional(Object));

	this.unblock(); 
	var userId = this.userId;

	return {
		find: function () {
			this.unblock(); 

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
		children: [{
			find: function (user) {
				return App.Users.enrolledCourses(user._id);
			}
		}]
	};
});

Meteor.publish("users.teachers", function () {
	if (!App.Users.isAdmin(this.userId))
		return [];

	return App.Users.allInRole('teacher');
});