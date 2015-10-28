App.Members.findByRole = function (role) {
	return App.Members.collection.find({role: role});
};

App.Members.get = function (id) {
	return this.collection.findOne(id);
};