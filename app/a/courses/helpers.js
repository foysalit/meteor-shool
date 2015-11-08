App.Courses.collection.helpers({
	klass: function () {
		return App.Klasses.collection.findOne(this.klassId);
	}
});