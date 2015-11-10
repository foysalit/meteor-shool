App.Lectures.collection.allow({
	'insert': function (userId, doc) {
		return App.Users.isAdmin(userId) || App.Users.isTeacher(userId);
	},
	'update': function (userId, doc) {
		return App.Users.isAdmin(userId) || App.Users.isTeacher(userId);
	},
	'remove': function (userId, doc) {
		return App.Users.isAdmin(userId) || App.Users.isTeacher(userId);
	}
});