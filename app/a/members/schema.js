App.Members.roles = [{
	name: 'advisers',
	value: 'advisers',
	label: 'Advisers Panel'
}, {
	name: 'founder',
	value: 'founder',
	label: 'Founder and director'
}, {
	name: 'teachers',
	value: 'teachers',
	label: 'Teachers and Course Coordinator'
}, {
	name: 'tech',
	value: 'tech',
	label: 'Technical design and Development'
}, {
	name: 'research',
	value: 'research',
	label: 'Research & Developments '
}, {
	name: 'finance',
	value: 'finance',
	label: 'Finance and Accounting'
}, {
	name: 'public',
	value: 'public',
	label: 'Public Administration'
}, {
	name: 'branding',
	value: 'branding',
	label: 'Branding and Social Networking'
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
	linkedin: {
		type: String,
		label: "Linkedin profile:",
		optional: true
	},
	facebook: {
		type: String,
		label: "Facebook profile:",
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
