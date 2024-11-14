{
  "type": "CompareTwoDimMembers",
  "title": "title"
}

//initialize variables
var widgetIds = payload.data.widgetToModify;
var dimToCompare = payload.data.dimToCompare;

console.log("selectval1:" + payload.data.selectVal1);
console.log("selectval2:" + payload.data.selectVal2);

//loop through each of the specified widgets
payload.widget.dashboard.widgets.$$widgets
    .filter(i => widgetIds.includes(i.oid))
    .forEach(function (widget) {

        /***** Dim Member 1 - Set the first member as the filter into the Measured Value *****/

        //check if the panel item contains context (i.e. a formula)
        if (widget.metadata.panels[1].items[0].jaql.context != undefined
            && payload.data.selectVal1 != "All Values" ) {
            //get the JAQL context of the panel item
            var queryContext = widget.metadata.panels[1].items[0].jaql.context;

            //loop through each context in the item
            for (let [k, v] of Object.entries(queryContext)) {
                //find the context that contains the date measured value
                if (v.dim == dimToCompare) {
                    console.log(v);
                    //update the first measured value
                    v.filter.all = false;
                    v.filter.explicit = true;
                    v.filter.members = [payload.data.selectVal1];
                    widget.metadata.panels[1].items[0].jaql.title = payload.data.selectVal1;
                }
            }
        }

        else if (payload.data.selectVal1 == "All Values"){
            var queryContext = widget.metadata.panels[1].items[0].jaql.context;

            //loop through each context in the item
            for (let [k, v] of Object.entries(queryContext)) {
                //find the context that contains the date measured value
                if (v.dim == dimToCompare) {
                    console.log(v);
                    //update the first measured value
                    v.filter.all = true;
                    delete v.filter.explicit;
                    delete v.filter.members;
                    widget.metadata.panels[1].items[0].jaql.title = payload.data.allText;
                }
            }
        }

        /***** Dim Member 2 - Set the second member as the filter into the Measured Value *****/

        //check if the panel item contains context (i.e. a formula)
        if (widget.metadata.panels[1].items[1].jaql.context != undefined
            && payload.data.selectVal2 != "All Values" ) {
            //get the JAQL context of the panel item
            var queryContext = widget.metadata.panels[1].items[1].jaql.context;

            //loop through each context in the item
            for (let [k, v] of Object.entries(queryContext)) {
                //find the context that contains the date measured value
                if (v.dim == dimToCompare) {
                    console.log(v);
                    //update the second measured value
                    v.filter.all = false;
                    v.filter.explicit = true;
                    v.filter.members = [payload.data.selectVal2];
                    widget.metadata.panels[1].items[1].jaql.title = payload.data.selectVal2;
                }
            }
        }

        else if (payload.data.selectVal2 == "All Values") {
            var queryContext = widget.metadata.panels[1].items[1].jaql.context;

            //loop through each context in the item
            for (let [k, v] of Object.entries(queryContext)) {
                //find the context that contains the date measured value
                if (v.dim == dimToCompare) {
                    console.log(v);
                    //update the first measured value
                    v.filter.all = true;
                    delete v.filter.explicit;
                    delete v.filter.members;
                    widget.metadata.panels[1].items[1].jaql.title = payload.data.allText;
                }
            }
        }
        
        //apply and save changes to the widget
        widget.changesMade('plugin-BloX', ['metadata'])

        //refresh the widget
        widget.refresh();
    })