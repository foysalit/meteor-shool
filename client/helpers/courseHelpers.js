Template.registerHelper('sectionClass', function(section) {
	if (section == 'curricular')
		return 'blue';
	if (section == 'co-curricular')
		return 'violet';

	return 'grey';
});
