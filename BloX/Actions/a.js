//Title a

debugger

var memberListLength = payload.memberList.length - 1;

// GETS BLOX PERSISTANT VARIABLE - LATEST SET FILTER MEMBER
// var lastSelected = payload.widget.style.currentCard.body[0].text;
var lastSelected = payload.widget.style.currentCard.cycleDimsLatestSelection;

// GET FILTER THAT MATCHES ACTION ARGUMENT DIMENSION NAME
var filterToUpdate = prism.activeDashboard.filters.$$items.filter(i=>i.jaql.title==payload.dashFilterName)[0];

if(lastSelected){

    var lastSelectedIndex = payload.memberList.indexOf(lastSelected);

    // IS THE COUNT UP OR DOWN
    // var incrementor = payload.direction == "up" ? 1 : -1;

    // var nextElement = lastSelectedIndex + 1 > memberListLength ? payload.memberList[0] : payload.memberList[lastSelectedIndex+1];
    if(payload.direction=="up"){
    	var nextElement = lastSelectedIndex + 1 > memberListLength ? payload.memberList[0] : payload.memberList[lastSelectedIndex+1];
    } else {
    	var nextElement = lastSelectedIndex - 1 < 0 ? payload.memberList[memberListLength] : payload.memberList[lastSelectedIndex-1];
    }

    // SETS BLOX PERSISTANT VARIABLE
    // payload.widget.style.currentCard.body[0].text = nextElement;
    payload.widget.style.currentCard.cycleDimsLatestSelection = nextElement;

    // SETS THE DASHBOARD FILTER
    prism.activeDashboard.filters.update(
    	{
    		'jaql':{
    			'dim': 		filterToUpdate.jaql.dim,
    			'title': 	filterToUpdate.jaql.title,
    			'datatype': filterToUpdate.jaql.datatype,
    			'filter': {
    				'members': [nextElement]
    			}
    		}
    	},
    	{'save':true, 'refresh':true});

} else {

	// SETS BLOX PERSISTANT VARIABLE
	// payload.widget.style.currentCard.body[0].text = payload.memberList[0];
	payload.widget.style.currentCard.cycleDimsLatestSelection = payload.memberList[0];

	// SETS THE DASHBOARD FILTER
	prism.activeDashboard.filters.update(
		{
			'jaql':{
				'dim': 		filterToUpdate.jaql.dim,
				'title': 	filterToUpdate.jaql.title,
				'datatype': filterToUpdate.jaql.datatype,
				'filter': {
					'members': [payload.memberList[0]]
				}
			}
		},
		{'save':true,'refresh':true});
}


payload.widget.changesMade();
payload.widget.redraw();

{
    "type": "a",
    "title": "a"
  }