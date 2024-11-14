{
    "type": "SearchBarMultipleValues_Checklist",
    "title": "title"
  }

  //Variable that stores the Data Source
var dataSource = payload.widget.datasource;
//Variable that stores the user input
var userInput = payload.data.userInput;
//Variable that splits user input values and store them in an array
var userInputArr = userInput.split(',').map(item => item.trim());

//Define and apply JAQL structure
payload.widget.metadata.panels[0].items.forEach(function (item) {
    var column = item.jaql.column;
    var dimension = item.jaql.dim;
    var table = item.jaql.table;
    var title = item.jaql.title;

    //Variable that stores the JAQL to add
    var topJAQL = {
        jaql: {
            datasource: dataSource,
            table: table,
            column: column,
            dim: dimension,
            datatype: "text",
            merged: true,
            title: title,
            filter: {
                explicit: true,
                multiSelection: true,
                members: userInputArr
            }

        }
    }

    //Apply JAQL structure to dashboard filter
    payload.widget.dashboard.filters.update(topJAQL);
})

payload.widget.dashboard.refresh();