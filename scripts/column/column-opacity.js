/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://developer.sisense.com/pages/viewpage.action?pageId=557127
*/


widget.on('beforeviewloaded', (w, args) => {
    args.options.series[0].color = 'rgba(0, 0, 0, 0.2)';
    args.options.series[0].data.forEach(d => d.color = 'rgba(0, 0, 0, 0.2)');
});