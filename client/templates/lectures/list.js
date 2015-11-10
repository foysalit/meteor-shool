Template.lecturesList.helpers({
	some: function (lectures) {
		return _.first(lectures, 2);
	},
	rest: function (lectures) {
		return _.rest(lectures, 2);
	}
})