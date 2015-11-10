App.Lectures.Schema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 200
	},
	video: {
		type: String,
		label: "Video URL",
		autoform: {
			afFieldInput: {type: 'url'}
		}
	},
	courseId: {
		type: String,
		autoform: {
			type: "select",
			options: function () {
				var courses = App.Courses.collection.find().fetch();
				return _.map(courses, function (course) {
					return {label: course.name, value: course._id};
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
	},
	createdAt: {
		type: Date,
		optional: true
	},
	updatedAt: {
		type: Date,
		optional: true
	}
});

App.Lectures.collection.attachSchema(App.Lectures.Schema);

function addCreationDate (userId, doc) {
	doc.createdAt = moment().toDate();
}

function addUpdateDate (userId, doc, modifier) {
	modifier.$set = modifier.$set || {};
	modifier.$set.updatedAt = moment().toDate();
}

App.Lectures.collection.before.insert(addCreationDate);
App.Lectures.collection.before.update(addUpdateDate);
