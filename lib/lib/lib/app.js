App = {
	Members: {
		collection: new Mongo.Collection('members')
	},
	Users: {
		collection: Meteor.users
	}
};

AppController = RouteController.extend({
	layoutTemplate: 'appLayout'
});

AppController.events({
	'click [data-action=logout]' : function() {
		AccountsTemplates.logout();
	}
});
