/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

widget.on('domready', function(se, ev) {
	
	//*******USER INPUT*****************************************
	const valueNum = 1; //Update your value# from which color needs to spread to entire row e.g., 1 = First Value | 2 = Second Value (The position of the value ONLY) 
	const separator = ","; //Update the thousands separator separator of your value from which color needs to spread to entire row e.g., "," \ "."
	//**********************************************************
	
	const valIndex = valueNum-1;
	const rows = (widget.metadata.panels.filter(panel => panel.name === "rows")[0].items).length;
	colIndex = rows + valueNum -1; 
	const valueConditions = widget.metadata.panels.filter(panel => panel.name === "values")[0].items[valIndex].format.color.conditions;
	
	var conditions = [];
	
	valueConditions.forEach(function (valueCondition, index){
		var operator = "";
		switch (valueCondition.operator) {
			case "≥":
				operator = ">=";
				break;
			case "≤":
				operator = "<=";
				break;
			case "≠":
				operator = "!=";
				break;
			case "=":
				operator = "==";
				break;
			default:
				operator = valueCondition.operator;
		}
		
		var cond = { "color": valueCondition.color , "operator": operator , "expression": valueCondition.expression }
		
		conditions.push(cond);
		
		
	});
	
	$('[widgetid="'+ se.oid + '"] pivot2 .pivot-scroller table tbody tr').each(function(index, trElement){
		if(index > 0){
			var cell = $(trElement).find('.table-grid__cell--col-' + colIndex);
			if(cell.length > 0){
				var value = getValue( ($(cell).find('.table-grid__content')[0].innerText), separator );
				var bgColor = getConditonalColor(value,conditions);
			}
			console.log(value + ':' + bgColor);
			 
			
			$(trElement).find('td').each(function(tdIndex, tdElement){
				$(tdElement).css('background-color', bgColor);
			});
			
			$('[widgetid="'+ se.oid + '"] pivot2 .table-grid--rows table tbody tr').each(function(rowIndex, rowElement){
				if(rowIndex > 0 && index == rowIndex){
					$(rowElement).find('td').css('backgroundColor', bgColor)
				}
			});
			
		}
	})
	
	
});

		
function getConditonalColor(value,conditions){
	var colors = [];
	conditions.forEach(function (c, index){
		if( eval(value + c.operator + c.expression) ){
			colors.push(c.color);
		}
	});
	
	return colors[0];
};

function getValue(valueText,separator){
	
	if(separator==','){
		var valueNum = valueText.replace(/,/g, '');
	}
	else if(separator=='.'){
		var valueNum = valueText.replace(/./g, '');
	}
	else{
		var valueNum = valueText;
	}
	
	if(valueNum.includes('K')){
		valueNum = parseFloat(valueNum) * 1000;
	}
	else if(valueNum.includes('M')){
		valueNum = parseFloat(valueNum) * 1000000;
	}
	else if(valueNum.includes('B')){
		valueNum = parseFloat(valueNum) * 1000000000;
	}
	else if(valueNum.includes('T')){
		valueNum = parseFloat(valueNum) * 1000000000000;
	}
	
	return valueNum;

};
