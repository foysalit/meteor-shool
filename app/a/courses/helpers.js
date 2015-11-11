App.Courses.collection.helpers({
	klass: function () {
		return App.Klasses.collection.findOne(this.klassId);
	},
	teacher: function () {
		return App.Users.collection.findOne(this.teacherId);
	},
	lectures: function () {
		return App.Lectures.getByCourse(this._id);
	},
	students: function () {
		return App.Users.getByCourse(this._id);
	},
	lecturesCount: function () {
		return _.size(App.Lectures.getByCourse(this._id));
	},
	studentsCount: function () {
		return _.size(App.Users.getByCourse(this._id));
	}
});