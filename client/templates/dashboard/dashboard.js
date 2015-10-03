Template.dashboard.rendered = function() {

};

AutoForm.hooks({
	createItems: {
		onSubmit: function (doc) {
			console.log('submitted');
			var self = this;
			Meteor.setTimeout(function () {
				doc.test = new Date().toString();
				console.log(doc);
				
				self.done();
			}, 5000);

			return false;
		},
		onError: function (err, x) {
			console.log(err, x);
		}
	}
});