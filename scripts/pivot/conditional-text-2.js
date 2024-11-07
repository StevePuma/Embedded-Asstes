/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://sisense.dev/guides/js/extensions
*/

widget.transformPivot(
	{

	},
	function (metadata, cell) 
	{
		if(metadata.type.includes('member') && cell.content!='') {
			if(cell.content=='Apple Mac Desktops') {
				cell.style.backgroundColor = 'crimson';
				cell.style.color = 'white';
			}
			else if(cell.content=='Apple Mac Laptops') {
				cell.style.backgroundColor = 'black';
				cell.style.color = 'white';
			}
			else if(cell.content=='Cell Phones') {
				cell.style.backgroundColor = 'royalblue';
				cell.style.color = 'white';
			}
			else {
				cell.style.backgroundColor = 'white';
				cell.style.color = 'black';
			}
		}
		else {
				cell.style.backgroundColor = 'white';
				cell.style.color = 'black';
		}
		
	}

);