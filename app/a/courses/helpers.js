App.Courses.collection.helpers({
	klass: function () {
		return App.Klasses.collection.findOne(this.klassId);
	},
	teacher: function () {
		return App.Users.collection.findOne(this.teacherId);
	},
	lectures: function () {
		return App.Lectures.getByCourse(this._id);
	}
});