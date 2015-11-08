Tables = {
	paginationStyles: function () {
		var $table = $('.table.dataTable').DataTable();
		var $paginator = $('.dataTables_paginate .pagination');

		function changeClasses () {
			$paginator.addClass("ui right floated menu");
			$paginator.find('li').each(function (i, el) {
				var $el = $(el);

				$el.addClass('item');
				
				if($el.hasClass("current")){
	            	$el.addClass("active");
		        }

		        if($el.hasClass("ellipsis")){
		            $el.addClass("disabled");
		        }
			});

		}
		changeClasses();
	},
	filtersStyle: function(settings, json) {
	    // Tidy up length select
	    var tableLength = $(".dataTables_length");
	    var select = tableLength.find("select").clone(true);
	    tableLength.find("select").remove();
	    select.attr("id", select.attr("name") + "_select").addClass("ui dropdown");
	    tableLength.find("label").attr("for", select.attr("name") + "_select");
	    tableLength.append(select);
	    tableLength.addClass("field");
	    select.dropdown();
	    // Tidy up search
	    var tableFilter = $(".dataTables_filter");
	    var input = tableFilter.find("input").clone(true);
	    tableFilter.find("input").remove();
	    input.attr("id", tableFilter.attr("id") + "_input");
	    tableFilter.find("label").attr("for", tableFilter.attr("id") + "_input");
	    tableFilter.append(input);
	},
	dom: '<"ui grid form"<"four wide column"l><"eight wide column"><"four wide column"f>>t<"ui grid"<"eight wide column"i><"right floated eight wide column"p>>',
}