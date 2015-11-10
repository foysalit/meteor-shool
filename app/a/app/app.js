App = {
	Members: {
		collection: new Mongo.Collection('members')
	},
	Courses: {
		collection: new Mongo.Collection('courses')
	},
	Klasses: {
		collection: new Mongo.Collection('klasses')
	},
	Lectures: {
		collection: new Mongo.Collection('lectures')
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
