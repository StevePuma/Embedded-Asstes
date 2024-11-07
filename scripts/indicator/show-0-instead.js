/*
Welcome to your Dashboard's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://developer.sisense.com/pages/viewpage.action?pageId=557127
*/


dashboard.on('widgetready',function(d) {

     

    //Card view

    $('.dashboard-layout-column').css('background-color', '#f0f0f0');

    $('.dashboard-layout').css('background-color', '#f0f0f0');

    $('.dashboard-layout-cell-horizontal-divider').remove();

   

    $('.dashboard-layout-subcell-vertical').css('background-color', 'white').css('box-shadow', '4px 5px 12px #00000078')

   

    $('.dashboard-layout-subcell-host').css('padding', '10');

    $('.dashboard-layout').css('padding-right', '20px');

    $('.dashboard-layout').css('padding-left', '20px');

});