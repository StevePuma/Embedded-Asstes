widget.on('processresult', function(se,ev){

    ev.result.plotOptions.series.dataLabels.formatter = function(){
    
    return this.point.options.pointText;
    }
    
    })