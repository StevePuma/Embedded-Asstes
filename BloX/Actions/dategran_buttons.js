//Title dategran_buttons

const dategran = payload.dategran; // Holds the chosen granularity from the selected button 'months' for example

var widgets = ['5f33224e15e4d70d748910f6','5f34d3218a3c0d1bc43ddb48']; //Include the widgetsIDs here as array of strings ['widgetID_1', 'widgetID_2']

/*for each widget id, we grab the granularity from the selected button, 
  apply it to all the widgets listed in the array above, 
  save the changes and then refresh*/

widgets.forEach(myfunction);

function myfunction (item){

    var widgetfindid = prism.activeDashboard.widgets.$$widgets.find(w => w.oid === item) 

    widgetfindid.metadata.panels[0].items[0].jaql.level = dategran //change the level of granularity to the chosen value from our button: 'months' for example

    widgetfindid.changesMade() //apply changes to MongoDB - the application database

    widgetfindid.refresh() //refresh the widget

};

{
    "type": "dategran_buttons",
    "title": "dategran_buttons"
  }