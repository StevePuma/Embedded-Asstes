/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

widget.transformPivot(
	{

	},
	function (metadata, cell) 
	{
		if(metadata.type.includes('value') && metadata.colIndex >= 2 && cell.content!='') {
			if(Number(cell.content.replace(',', ''))<2500) {
				cell.content = 'Ignore';
				cell.style.backgroundColor = 'black';
				cell.style.color = 'white';
			}
			else if(Number(cell.content.replace(',', ''))<5000) {
				cell.content = 'Bad';
				cell.style.backgroundColor = '#FEDDDD';
				cell.style.color = '#951A0F';
			}
			else if(Number(cell.content.replace(',', ''))<7500) {
				cell.content = 'Okay';
				cell.style.backgroundColor = '#EAEAEA';
				cell.style.color = '#000000';
			}
			else if(Number(cell.content.replace(',', ''))<10000) {
				cell.content = 'Good';
				cell.style.backgroundColor = '#FFF8D6';
				cell.style.color = '#986502';
			}
			else if(Number(cell.content.replace(',', ''))>=10000) {
				cell.content = 'Excellent';
				cell.style.backgroundColor = '#DDF7DA';
				cell.style.color = '#41753B';
			}			
			else {
				cell.content = cell.content;
			}
		}
		else {
			cell.content = cell.content;
		}
		
	}

);