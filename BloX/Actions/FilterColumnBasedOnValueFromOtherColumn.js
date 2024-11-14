{
    "type": "FilterColumnBasedOnValueFromOtherColumn",
    "title": "title"
  }

  //Initialize variables
var dataSource = payload.widget.datasource;
var filterDims = JSON.stringify(payload.data.FilterField).replace('["', "").replace(']"', "");
var filterDimsClean = filterDims.replace('[', '').replace(']', '');
var userInput = payload.data.userInput;

//Define and apply JAQL structure
var column = filterDimsClean.split('.')[1];
var dimension = filterDims;
var table = filterDimsClean.split('.')[0];
var title = column;

//Define a variable that stores the JAQL to add
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
            contains: userInput
        }

    }
}

//Apply JAQL structure to dashboard filter
payload.widget.dashboard.filters.update(topJAQL, { refresh: true, save: true });