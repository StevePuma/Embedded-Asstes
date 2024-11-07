/*

Welcome to your Widget's Script. 



	- You can access your Widget via the 'widget' variable name.

	- You can access your Widget's DOM via the 'element' variable name (undefined until DOM creation).

	- You can access your Dashboard by accessing the 'dashboard' variable name.



	- For a complete API reference for Widgets and Dashboards go here: https://docs.google.com/document/d/1nQBZtWAdNFAd9nBhPWGVT3qOMS4Qm0PzBZVIzz5DfE8/

*/

widget.on("processresult", function (widget, args){
    args.result.xAxis.plotBands = [{
               color: '#E0E0E0',
               from: '15',
               to: '22' }];
 });