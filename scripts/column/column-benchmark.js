widget.on('processresult',function(w,ev){

    ev.result.yAxis[0].plotLines= [{
    
                   color: '#FF0000',
    
                   width: 2,
    
                   value: 2750,
        
                    dashStyle: "dash"
    
               }]
    
    })