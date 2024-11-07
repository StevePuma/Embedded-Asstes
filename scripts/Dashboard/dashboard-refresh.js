/*
Welcome to your Dashboard's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/


dashboard.on('initialized', function(dashboard, ev){
	
	//Set below variable to change refresh interval (Mili Seconds)
    var refreshIntervalMiliSec = 10000;
	
    var refreshDashboard = function(){
        dashboard.refresh();
		setTimeout(refreshDashboard, refreshIntervalMiliSec);
    }
})
    setTimeout(refreshDashboard, refreshIntervalMiliSec);