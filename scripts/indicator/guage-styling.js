widget.on('initialized', function(w) {
	
	//Edit the following Options
  var options = {
      title: {
          fontFamily: 'Helvetica, sans-serif',
          fontWeight: 'bold',
          fontSizes: {
              big: 40,
              medium: 30
          },
          color: '#29aba4'
      },
      value: {
          fontFamily: 'Helvetica, sans-serif',
          fontStyle: 'italic',
          color: '#e9e0d6'
      },
	  backgroundColor: '#000000'
  };
  w.indicatorInstance.setOptions('gauge', options);
	debugger
})
