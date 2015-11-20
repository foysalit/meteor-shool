function signinRedirection () {
	var userId = Meteor.userId();

	if (App.Users.isAdmin(userId)) {
		return Router.go('admin.users.list');
	} else if(App.Users.isStudent(userId)) {
		if (Meteor.user().profile.courses.length <= 0)
			return Router.go('student.courses.choices');
		else
			return Router.go('student.courses.list');
	} else if (App.Users.isTeacher(userId)) {
		return Router.go('home');
	}

	return Router.go('home');
}

AccountsTemplates.configureRoute('signIn', {
	layoutTemplate: 'staticLayout',
	redirect: signinRedirection
});
AccountsTemplates.configureRoute('signUp', {
	layoutTemplate: 'staticLayout',
	redirect: signinRedirection
});
AccountsTemplates.configureRoute('ensureSignedIn', {
	layoutTemplate: 'staticLayout'
});

AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    required: true,
    func: function(value){
        if (Meteor.isClient) {
            console.log("Validating username...");
            var self = this;
            Meteor.call("userExists", value, function(err, userExists){
                if (!userExists)
                    self.setSuccess();
                else
                    self.setError(userExists);
                self.setValidating(false);
            });
            return;
        }
        // Server
        return Meteor.call("userExists", value);
    },
});

if (Meteor.isServer) {
	Accounts.onCreateUser(function(options, user) {
		if (options.profile)
		    user.profile = options.profile;
		else
			user.profile = {};

		user.profile.courses = [];

		Meteor.setTimeout(function () {
			App.Users.addToRole(user._id, 'student');
		}, 100)

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