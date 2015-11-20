App.Members.findByRole = function (role) {
	var members = App.Members.collection.find({role: role});
	return members.count() > 0 ? members : null;
};

App.Members.get = function (id) {
	return this.collection.findOne(id);
};

App.Members.remove = function (id) {
	return this.collection.remove(id);
};