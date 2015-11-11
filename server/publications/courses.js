Meteor.publishComposite("klasses.list", function (section) {
	return {
		find: function() {
			if (!this.userId)
				return [];

			var query = {};
			
			if (section)
				query.section = section;

			return App.Klasses.collection.find();
		}
	}
});

var courseChildren = [{
	find: function (course) {
		return App.Klasses.collection.find({_id: course.klassId})
	}
}, {
	find: function (course) {
		return App.Users.collection.find({
			_id: course.teacherId
		}, {
			fields: {profile: 1, username: 1}
		});
	}
}, {
	find: function (course) {
		return App.Lectures.findByCourse(course._id);
	}
}, {
	find: function (course) {
		return App.Users.findByCourse(course._id);
	}
}];

Meteor.publishComposite("courses.list", function (config) {
	var userId = this.userId,
		query = {};

	if (config && config.student) {
		var user = App.Users.collection.findOne(this.userId);
		query._id = {$in: user.profile.courses};
	}

	return {
		find: function() {
			if (!userId)
				return [];
			
			return App.Courses.collection.find(query);
		},
		children: courseChildren
	}
});

Meteor.publishComposite("courses.single", function(config) {
	var userId = this.userId,
		query = {_id: config._id};

	if (config && config.student) {
		// console.log('for student');
	}

	return {
		find: function() {
			if (!userId)
				return [];

			return App.Courses.collection.find(query);
		},
		children: courseChildren
	}
});
