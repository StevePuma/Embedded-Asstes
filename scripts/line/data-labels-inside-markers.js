// You can modify the variable values in the script to set marker and label properties
widget.on('processresult', function(e, args) {
 
    var markerRadius = 18;
    var markerColor = '#FF0000';
    var markerHoverColor = '#C0C0C0';
    var labelSize = '9px';
    var labelColor = '#FFFFFF';
    var lineStyle = 'shortdash';
    var lineWidth = 2;
    
    var chartS = args.result.series;
    
    for(var s = 0; s < chartS.length; s++ ) {
    var dd;
    
    chartS[s].dashStyle = lineStyle;
    chartS[s].lineWidth = lineWidth;
    
    chartS[s].marker = {
    symbol: 'circle'
    }
    
    
    for(var d = 0; d < chartS[s].data.length; d++) {
    dd = chartS[s].data[d];
    
    var dataLabelsTemplate = {
    enabled : true,
    y : (markerRadius /2),
    style: {
    color: labelColor,
    textOutline: 'none',
    fontSize : labelSize, 
    fontWeight : "bold"
    }
    };
    
    dd.dataLabels = dataLabelsTemplate;
    
    dd.marker.radius = markerRadius;
    dd.marker.enabled = true;
    dd.marker.fillColor = chartS[s].color;
    dd.marker.states.hover.fillColor = chartS[s].color;
    dd.marker.states.hover.radius = markerRadius;
    dd.marker.states.hover.enabled = true; 
    
    }
    }
    
   
   });