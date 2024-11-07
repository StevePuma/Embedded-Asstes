widget.on("beforedatapointtooltip", function (se, args){
	
	args.template = args.template.replace('<div class="cartesian-tooltip-value">', '<div style="color: brown" class="cartesian-tooltip-value">');
	 
 })