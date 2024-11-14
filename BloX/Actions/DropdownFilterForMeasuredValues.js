{
    "type": "DropdownFilterForMeasuredValues",
    "title": "title"
  }

  //initialize variables
var measuredValueColumnName = payload.data.measuredValueColumnName;
var measure1Title = payload.data.measure1Title;
var measure2Title = payload.data.measure2Title;
var selectVal1 = payload.data.selectVal1;
var selectVal2 = payload.data.selectVal2;

//loop through each of the specified widgets
payload.widget.dashboard.widgets.$$widgets
    //.filter(i => i.oid != payload.widget.oid)
    .forEach(function (widget) {

        //loop through each panel in the widget
        //exclude the filter panel (last panel)
        for (p = 0; p < widget.metadata.panels.length - 1; p++) {

            //loop through each item in the panel
            for (i = 0; i < widget.metadata.panels[p].items.length; i++) {

                var widgetJAQL = widget.metadata.panels[p].items[i].jaql;
                var queryContext = widgetJAQL.context;

                //check if the panel item contains context (i.e. a formula)
                if (queryContext != undefined) {

                    //loop through each context in the item
                    for (let [k, v] of Object.entries(queryContext)) {

                        //check if the panel item title matches the value of measure1Title, a measured value is defined, and the measured value is set on the value of measuredValueColumnName
                        if (widgetJAQL.title == measure1Title && v.filter != undefined && v.column == measuredValueColumnName) {
                            //update the measured value filter with the first user-selected value
                            v.filter.members[0] = selectVal1;
                        }
                        //check if the panel item title matches the value of measure2Title, a measured value is defined, and the measured value is set on the value of measuredValueColumnName
                        else if (widgetJAQL.title == measure2Title && v.filter != undefined && v.column == measuredValueColumnName) {
                            //update the measured value filter with the second user-selected value
                            v.filter.members[0] = selectVal2;
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
