function hexToRgbA(hex,opacity){
	var c;

	if (opacity < 0 || opacity > 1) throw new Error('Bad Opacity');
	if(!(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex))) throw new Error('Bad Hex');

	c = hex.substring(1).split('');
	if(c.length== 3){ c= [c[0], c[0], c[1], c[1], c[2], c[2]]; }
	c = '0x'+c.join('');
	return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',' + opacity + ')';
}

widget.on('processresult', function(widget,result) {

	seriesCount = widget.metadata.panel('values').items.length;
	
	for (let i = 0 ; i < seriesCount ; i++) {
		baseColor = widget.metadata.panel('values').items[i].format.color.color;
		gradientStopA = hexToRgbA(baseColor,0.5);
		gradientStopB = hexToRgbA(baseColor,0);

		result.result.series[i].fillColor = {
			linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1 },
			stops: [
				[0, gradientStopA],
				[1, gradientStopB]
			]
		}
	}

})