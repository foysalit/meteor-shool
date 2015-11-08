Meteor.publishComposite("klasses.list", function (section) {
	return {
		find: function() {
			if (!App.Users.isAdmin(this.userId))
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
}];

Meteor.publishComposite("courses.list", function() {
	var userId = this.userId;

	return {
		find: function() {
			if (!App.Users.isAdmin(userId))
				return [];
			
			return App.Courses.collection.find();
		},
		children: courseChildren
	}
});

Meteor.publishComposite("courses.single", function(id) {
	var userId = this.userId;

	return {
		find: function() {
			if (!App.Users.isAdmin(userId))
				return [];

			return App.Courses.collection.find({_id: id});
		},
		children: courseChildren
	}
});
