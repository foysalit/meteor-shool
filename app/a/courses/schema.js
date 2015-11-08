App.Courses.sections = [{
	name: 'curricular',
	value: 'curricular',
	label: 'Curricular'
}, {
	name: 'co-curricular',
	value: 'co-curricular',
	label: 'Co-curricular Team'
}];

App.Klasses.Schema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 200
	},
	section: {
		type: String,
		label: "Section",
		autoform: {
			options: App.Courses.sections
		}
	},
	photo: {
		type: String,
		defaultValue: 'https://placeimg.com/350/350/people',
		autoform: {
			afFieldInput: {type: 'url'}
		}
	}
});

App.Courses.Schema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 200
	},
	section: {
		type: String,
		label: "Section",
		autoform: {
			options: App.Courses.sections
		}
	},
	klassId: {
		type: String,
		autoform: {
			type: "select",
			options: function () {
				var klasses = App.Klasses.collection.find().fetch();
				return _.map(klasses, function (klass) {
					return {label: klass.name, value: klass._id};
				});
			}
		}
	},
	photo: {
		type: String,
		defaultValue: 'https://placeimg.com/350/350/people',
		autoform: {
			afFieldInput: {type: 'url'}
		}
	}
});

App.Courses.collection.attachSchema(App.Courses.Schema);
App.Klasses.collection.attachSchema(App.Klasses.Schema);

function addCreationDate (userId, doc) {
	doc.createdAt = moment().toDate();
}

App.Courses.collection.before.insert(addCreationDate);
App.Klasses.collection.before.insert(addCreationDate);
