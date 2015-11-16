App.Users.ListTable = new Tabular.Table({
	name: "UsersList",
	collection: App.Users.collection,
	pub: "tabularUsersList",
	limit: 3,
	allow: function (userId) {
		// check for admin role with alanning:roles package
		return App.Users.isAdmin(userId);
	},
	dom: Tables.dom,
	drawCallback: Tables.paginationStyles.bind(Tables),
	initComplete: Tables.filtersStyle.bind(Tables),
	extraFields: ['roles', 'profile', 'services'],
	columns: [
		{data: "username", title: "Username"},
		{data: "role()", title: "Role"},
		{
			data: "chosenCourses()",
			title: 'Courses',
			render: function (data, type, user) {
				var data = _.map(data, function (course) {
					return [
						'<a class="ui image label">',
						'<img src="'+ course.photo +'">',
						course.name,
						'</a>'
					].join("");
				});

				return data.length > 0 ? data.join('') : 'None';
			}
		},
		{
			data: "emails",
			title: "Email Addresses",
			render: function (emails, type, doc) {
				if (emails && emails.length > 0) {
					return _.map(emails, function (email) {
						return email.address
					}).join(', ');
				} else if (doc.services && doc.services.facebook) {
					return doc.services.facebook.email;
				} else {
					return 'None';
				}
			}
		},
		{
			title: "Actions",
			tmpl: Meteor.isClient && Template.adminUsersListActions
		}
	]
});

Tables.UsersList = App.Users.ListTable;