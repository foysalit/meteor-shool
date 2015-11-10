App.Courses.get = function (id) {
	return this.collection.findOne(id);
};

App.Courses.remove = function (id) {
	return this.collection.remove(id);
};