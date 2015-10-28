App.Members.roles = [{
	name: 'founder',
	value: 'founder',
	label: 'Founder'
}, {
	name: 'tech',
	value: 'tech',
	label: 'Tech Team'
}];

App.Members.Schema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 100
	},
	profession: {
		type: String,
		optional: true,
		label: "Profession"
	},
	role: {
		type: String,
		label: "Role",
		autoform: {
			options: App.Members.roles
		}
	},
	bio: {
		type: String,
		optional: true
	},
	photo: {
		type: String,
		defaultValue: 'https://placeimg.com/350/350/people',
		autoform: {
			afFieldInput: {type: 'url'}
		}
	}
});

App.Members.collection.attachSchema(App.Members.Schema);

App.Members.collection.before.insert(function (userId, doc) {
	doc.createdAt = moment().toDate();
});
