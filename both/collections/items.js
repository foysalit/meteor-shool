Items = new Mongo.Collection('items');

Items.helpers({

});

ItemSchema = new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 200
	},
	rating: {
		type: Number,
		label: "Rating"
	},
	test: {
		type: String,
		optional: true
	}
});

Items.attachSchema(ItemSchema);

Items.before.insert(function (userId, doc) {
	doc.createdAt = moment().toDate();
});
