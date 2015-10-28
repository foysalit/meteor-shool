Meteor.publishComposite("members.list", function() {
	return {
		find: function() {
			return App.Members.collection.find({});
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
