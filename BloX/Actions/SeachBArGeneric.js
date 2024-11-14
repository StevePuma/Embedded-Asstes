{
    "type": "SearchBarGeneric",
    "title": "SearchBarGeneric"
  }

  //Variable for Operation
var type = payload.data.type;

//Variables for Dimension 
var dataSource = prism.activeDashboard.datasource;
var table = payload.data.table;
var column = payload.data.column;
var dim = "[" + table + "." + column + "]";
var columnTitle = payload.data.columnTitle;
//Variable that stores the Search String 
var userInput = payload.data.userInput;
//Variable that stores all widgets that should be affected
var widgetIndexArray = payload.data.widgetArray;

//Creating the JAQL object that will be used for string searching
var searchJAQL = {
    jaql: {
        datasource: dataSource,
        table: table,
        column: column,
        dim: dim,
        datatype: "text",
        merged: true,
        title: columnTitle,
        filter: {
            "contains": userInput
        }
    }
};

var clearJAQL = {
    jaql: {
        datasource: dataSource,
        table: table,
        column: column,
        dim: dim,
        datatype: "text",
        merged: true,
        title: columnTitle,
        filter: {
            "all": true,
            "collapsed": true
        }
    }
};

var filterJAQL;

if (type == "Search") {
    filterJAQL = searchJAQL;
}
else if (type == "Clear") {
    filterJAQL = clearJAQL;
}

if (payload.data.filterDashboard != "true") {
    //Loop through the widgetIndexArray
    for (var i = 0; i < widgetIndexArray.length; i++) {
        //Get the widget index that corresponds to the index
        var widgetOID = widgetIndexArray[i];
        //Get the widget object
        var widget = prism.activeDashboard.widgets.$$widgets.find(w => w.oid === widgetOID);
        var filterPanel = widget.metadata.panels.find(panel => panel.name == "filters");
        if (typeof filterPanel.items === undefined) {
            // does not exist
            widget.metadata.panels[filterIndex].items.push(filterJAQL)
        }
        else {
            // does exist
            var filterFound = false;
            //loop through all filters in the widget, only remove the BloX custom filter
            //before adding another one. 
            for (var k = 0; k < filterPanel.items.length; k++) {
                //if the title of the filter == columnTitle, then remove
                if (filterPanel.items[k].jaql.title == columnTitle) {
                    filterFound = true;
                    delete filterPanel.items[k]
                    filterPanel.items[k] = filterJAQL;
                }
            }

            //A widget filter exists, but it did not have the title of the columnTitle
            //We need to add the filter.
            if (filterFound == false) {
                filterPanel.items.push(filterJAQL)
            }
        }
        //refresh the widget
        widget.refresh()
    }
    payload.widget.refresh(); 
}
else if (payload.data.filterDashboard == "true") {
    payload.widget.dashboard.filters.update(filterJAQL,{ refresh: true, save: true });
    payload.widget.dashboard.refresh();
}
