AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});

if (Meteor.isServer) {
	Accounts.onCreateUser(function(options, user) {
		if (options.profile)
		    user.profile = options.profile;
		else
			user.profile = {};

		user.profile.interests = [];
		user.profile.schools = [];
		user.profile["class"] = '';

		return user;
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		var settings = Meteor.settings['development'];

		// console.log(settings);
		ServiceConfiguration.configurations.upsert({ 
			service: "facebook"
		}, {
			$set: {
			    appId: settings.facebook.api_key,
			    secret: settings.facebook.api_secret
			}
		});

		ServiceConfiguration.configurations.upsert({ 
			service: "twitter"
		}, {
			$set: {
			    consumerKey: settings.twitter.api_key,
			    secret: settings.twitter.api_secret
			}
		});

	});
}