Meteor.startup(function () {
	AutoForm.setDefaultTemplate("semanticUI");
});

function returnToList (err, result) {
	var currentRoute = Router.current(),
		routeName = currentRoute.route.getName(),
		fragments = routeName.split(".");

	fragments.splice(-1,1);
	var listRoute = fragments.join(".") +'.list';
	console.log(listRoute);
	if (!err)
		Router.go(listRoute);
}

function formsNeedingReturnToDoc () {
	var entities = ['Members', 'Courses', 'Classes'];

	return _.flatten(_.map(entities, function (entity) {
		return [
			'edit'+ entity,
			'insert'+ entity
		];
	}));
}

AutoForm.addHooks(formsNeedingReturnToDoc(), {
	after: {
		insert: returnToList,
		update: returnToList
	}
});