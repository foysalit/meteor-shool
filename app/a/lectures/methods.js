App.Lectures.get = function (id) {
	return this.collection.findOne(id);
};

App.Lectures.remove = function (id) {
	return this.collection.remove(id);
};

App.Lectures.findByCourse = function (courseId) {
	return this.collection.find({courseId: courseId});
};

App.Lectures.getByCourse = function (courseId) {
	return this.findByCourse(courseId).fetch();
};