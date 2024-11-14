{
    "type": "ParameterSwap_V2",
    "title": "title"
  }

  //initialize variables
var widgetIds = payload.data.widgetToModify;
var swapParam = [];

//create an array of swap_levers
for (d = 0; d < payload.data.paramsToModify; d++) {
    swapParam[d] = "swap_lever" + (d + 1);
}

//loop through each of the specified widgets
payload.widget.dashboard.widgets.$$widgets
    .filter(i => widgetIds.includes(i.oid))
    .forEach(function (widget) {

        //loop through each panel in the widget
        //exclude the filter panel (last panel)
        for (p = 0; p < widget.metadata.panels.length - 1; p++) {

            //loop through each item in the panel
            for (i = 0; i < widget.metadata.panels[p].items.length; i++) {

                //check if the panel item contains context (i.e. a formula)
                if (widget.metadata.panels[p].items[i].jaql.context != undefined) {
                    var queryContext = widget.metadata.panels[p].items[i].jaql.context;

                    //loop through each context in the item
                    for (let [k, v] of Object.entries(queryContext)) {

                        //loop through each swap_lever
                        for (s = 0; s < swapParam.length; s++) {

                            //check if the formula contains the swap_lever
                            if (v.title == swapParam[s]) {
                                var val = 'selectVal' + (s + 1);

                                //update the formula with the swap_lever value that the user entered
                                v.formula = payload.data[val];
                            }
                        }
                    }
                }
            }
        }

        //apply and save changes to the widget
        widget.changesMade('plugin-BloX', ['metadata'])

        //refresh the widget
        widget.refresh();
    })
