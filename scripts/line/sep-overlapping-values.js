/******* user configuration **********/
var seriesNames = ["Lettuce", "Taco"];
var paddingMultiplier = -30;
/*************************************/
widget.on('processresult', function(sender, ev){
	for (i = 0; i < seriesNames.length; i++) { 
 var data = _.find(ev.result.series, function (ser) {return ser.name == seriesNames[i]}).data
 _.each(data, function(value){ 
      value.dataLabels = {
	y:paddingMultiplier*(i+1), 
	color:value.color,
	crop:false,
	overflow:'none'}
 })
}
})