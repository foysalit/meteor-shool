Meteor.publishComposite("members.list", function(query) {
	query = query || {};
	return {
		find: function() {
			return App.Members.collection.find(query);
		}
	}
});

Meteor.publishComposite("members.single", function(id) {
	return {
		find: function() {
			return App.Members.collection.find({_id: id});
		}
	}
});
