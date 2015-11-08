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
	extraFields: ['roles'],
	columns: [
		{data: "username", title: "Username"},
		{data: "role()", title: "Role"},
		{
			data: "emails",
			title: "Email Addresses",
			render: function (emails, type, doc) {
				if (emails.length > 0) {
					return _.map(emails, function (email) {
						return email.address
					}).join(', ');
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