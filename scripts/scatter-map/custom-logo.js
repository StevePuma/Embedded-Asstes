
widget.on('beforeviewloaded', function(widget, args){ 
	var myIconUrl = '\\branding\\SI icon.png' 
	debugger
	var map = args.options.map;
	
	$.each(map._layers, function(){
		if(!(typeof this._latlng==='undefined')){
			map.removeLayer(this)
		}
	})
	
	$.each(args.options.markersArray, function(){		
		L.marker([this._latlng.lat, this._latlng.lng], 
				 {icon: L.icon({
					iconUrl: myIconUrl,
					iconSize: this._radius * 2
					})
				 }).addTo(map);
	})
})
