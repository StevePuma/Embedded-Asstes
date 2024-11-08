//Title SearchClear

//Variable that stores the Data Source
var dataSource = {title: "Sample ECommerce", 
fullname: "LocalHost/Sample ECommerce", 
id: "aLOCALHOST_aSAMPLEIAAaECOMMERCE", 
address: "LocalHost",
 database: "aSampleIAAaECommerce"}
//Variable that stores the user input
var userInput = payload.data.userInput;
//Variable that stores all widgets that sound be affected
//Modified to store the widget OID
var widgetIndexArray = ["5f1604e3dd808d1dec7051da"];

//Variable that stores the JAQL to add
var topJAQL = {
    jaql:{
                datasource: dataSource,
                table: "Brand",
				column: "Brand",
				dim: "[Brand.Brand]",
				datatype: "text",
				merged: true,
				title: "Brand",
                filter: {
					"explicit": false,
                    "multiSelection": true,
                    "all": true
				}				
}
}

//Loop through the widgetInsexArray
for(var i = 0;i<widgetIndexArray.length;i++){
    //Get the widget index that corresponds to the index
    var widgetOID = widgetIndexArray[i];
    //Get the widget object
    var widget = prism.activeDashboard.widgets.$$widgets.find(w => w.oid === widgetOID) 

    if(typeof widget.metadata.panels[3].items[0] === 'undefined') {
        // does not exist
        widget.metadata.panels[3].items.push(topJAQL)
        }
    else {
        // does exist
        var filterFound = false;
        //loop through all filters in the widget, only remove the BloX custom filter
        //before adding another one. 
        for(var k = 0; k < widget.metadata.panels[3].items.length;k++){
            //if the title of the filter == 'Brand, then remove'
            if(widget.metadata.panels[3].items[k].jaql.title == 'Brand'){
                filterFound = true;
                delete widget.metadata.panels[3].items[k]
                widget.metadata.panels[3].items[k] = topJAQL;
            }
        }

        //A widget filter exists, but it did not have the title 'Brand'
        //We need to add the filter.
        if(filterFound == false){
            widget.metadata.panels[3].items.push(topJAQL)
        }
    }
    //refresh the widget
    widget.refresh()
}


{
    "type": "SearchClear",
    "title": "SearchClear"
}