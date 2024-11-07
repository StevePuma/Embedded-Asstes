widget.on("beforedatapointtooltip", function (se, args){
	seriesName="Total Overall Score";
	
	args.template = args.template.replace('<div class="cartesian-tooltip">', '<div style="background-color: #091833" class="cartesian-tooltip">');
	
	if (args.context.pointScope.series.name==seriesName){
			//debugger;
		if(args.context.category == 'Australia'){
		args.context.points[0].value = args.context.points[0].value.substr(1);
		args.context.category = "This is an altered tooltip. Please edit the widget's script to find how this was changed";
		}
	} 
 })