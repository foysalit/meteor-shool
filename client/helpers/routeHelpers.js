Template.registerHelper('isRoute', function(name) {
	var route = Router.current().route.getName();
	return route == name;
});
