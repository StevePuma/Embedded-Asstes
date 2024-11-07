 
  /******************************************************************/
/********Change the Axis Titles, Color, Font Size, and Font********/
/******************************************************************/
widget.on('processresult', function(se,ev){
	

    ev.result.xAxis.title = {text:'Tier', style:{color:'#ffcb05', fontSize:'50px',fontFamily: 'Verdana'}}
    ev.result.yAxis[0].title = {text:'General Satisfaction', style:{color:'#ffcb05', fontSize:'32px',fontFamily: "Arial"}}
    //ev.result.yAxis[1].title = {text:'Secondary Y Axis Title', style:{color:'#ffcb05', fontSize:'24px',fontFamily: "Comic Sans MS"}}
   
       
   
   }) 
   
   
       
   /*************************************************/
   /********Change the Axis Labels Formatting********/
   /*************************************************/ 	
   
   widget.on('render', function(se,ev){
       
    
         /*Change the X Axis Labels' Rotation, Distance from Axis, Color, Font Size, Font Weight, and Style*/
    
    se.queryResult.xAxis.labels.rotation = -45;
    se.queryResult.xAxis.labels.y = 30;
    se.queryResult.xAxis.labels.style.color = "#ffcb05";
    se.queryResult.xAxis.labels.style.fontSize = 12;
    se.queryResult.xAxis.labels.style.fontWeight = "bold";
    se.queryResult.xAxis.labels.style.fontFamily = "Verdana";
    
    
         /*Change the Primary Y Axis Labels' Rotation, Distance from Axis, Color, Font Size, Font Weight, and Style*/
    
    se.queryResult.yAxis[0].labels.rotation = 45;
    se.queryResult.yAxis[0].labels.x = 15;
    se.queryResult.yAxis[0].labels.style.color = "#ffcb05";
    se.queryResult.yAxis[0].labels.style.fontSize = 12;
    se.queryResult.yAxis[0].labels.style.fontWeight = "bold";
    se.queryResult.yAxis[0].labels.style.fontFamily = "Arial";
    
    
    
         /*Change the Secondary Y Axis Labels' Rotation, Distance from Axis, Color, Font Size, Font Weight, and Style*/
    
   // se.queryResult.yAxis[1].labels.rotation = -45;
    //se.queryResult.yAxis[1].labels.x = 10;
    //se.queryResult.yAxis[1].labels.style.color = "#ffcb05";
   // se.queryResult.yAxis[1].labels.style.fontSize = 15;
   // se.queryResult.yAxis[1].labels.style.fontWeight = "bold";
    //se.queryResult.yAxis[1].labels.style.fontFamily = "Calibri";
   }) 
   
   
   
   
       
       
   
   
   