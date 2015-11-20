Meteor.publish(null, function (){ 
	return Meteor.roles.find({});
});

Meteor.publish(null, function (){ 
	return Meteor.users.find({_id: this.userId}, {
		fields: {
			"profile": 1, 
			"_id": 1, 
			"roles": 1, 
			"services.twitter.profile_image_url_https": 1,
			"services.facebook.id": 1,
			"services.google.picture": 1,
			"services.github.username": 1,
			"services.instagram.profile_picture": 1,
			"services.linkedin.pictureUrl": 1,
		}
	});
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