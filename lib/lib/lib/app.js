App = {
	Members: {
		collection: new Mongo.Collection('members')
	},
	Users: {
		collection: Meteor.users
	}
};