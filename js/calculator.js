/*
 *
 *	Calculator JS
 *	
 *	Aaron Moradi - 10 / 2014
 *	aaronmoradi.com
 *
 */

var buttons = document.getElementsByTagName('button'); // calculator buttons

/*
 *	
 */
function calcClick()
{

	var	currentValue 	= this.value, 						// clicked button's value
	    totalScreen 	= document.getElementById('total'), // total screen
		totScrVal 		= totalScreen.value, 				// total screen value (string)
		totScrArray 	= totScrVal.split(""); 

	/*
	 *	click equals  
	 */
	if (currentValue == "=")
	{

		/*
		 *	if total screen is populated
		 */
		if(totScrVal != "")
		{
			/*
			 * if screen has ^ and is longer than 2 characters, tokenize, add to Math.pow(-3,3);
			 */
			if( (totScrVal.indexOf('\u221A') >= 0) && (totScrVal.length > 3) && ((totScrVal.charAt((totScrVal.length)-1)) == ')' ) )
			{
				
				totScrVal = totScrVal.replace(/\u221A/g,'math.sqrt');
				totScrVal = totScrVal.replace(/tan/g,'math.tan');
				totScrVal = totScrVal.replace(/cos/g,'math.cos');
				totScrVal = totScrVal.replace(/sin/g,'math.sin');
				totalScreen.value = eval(totScrVal);	
			}
					/*
					 *	case insensitive and global (all matches)
					 *	dont let 2+3^2-1 compute -1 in the ^ 
					 
					var re = /[0-9.-]+\^[0-9.-]+/i,
						matches = totScrVal.match(re); // ["9^2", "10^10"]
					alert(matches);
					/*
					 *	compute power
					 
					function raisePow(x,y) {
						return Math.pow(x,y)
					}
					/*
					 *	compute each ^ expression
					 
					matches.forEach(function(item) 
					{
						var power = item.indexOf('^'),
							x = item.slice(0, power),
							y = item.slice(power+1),
							computedPow = raisePow(x, y);
						
						/*	
						 *	var strComputedPow = computedPow.toString();
						 
						rplTotScrVal = totScrVal.replace(item, computedPow);
						totScrVal = rplTotScrVal;
					});
				}
				totalScreen.value = math.eval(totScrVal); 
			}*/
			/*else 
			{
				/*
				 *	added exception for 2^
				 */
				totalScreen.value = math.eval(totScrVal); 
			/*}*/	

			
		}
		/* 
		 *	total screen is empty
		 */
		else 
		{
			totalScreen.value = "";
		}	

	} // end click equals

	/*
	 *	click delete  
	 */
	else if (currentValue == "delete")
	{
		var totScrArr 			= totalScreen.value,
			totScrArr 			= totScrArr.split(""),
			last 				= totScrArr.splice(-1, 1),
			totScrArr 			= totScrArr.join("");
			totalScreen.value 	= totScrArr;
	}


	/*
	 *	click clear
	 */
	else if (currentValue == "clear")
	{
		totalScreen.value = "";
	}

	/*
	 *	click everything except equals, clear, and delete
	 */
	else 
	{
		if(currentValue == "PI")
		{
			currentValue = Math.PI;
		}
		if(currentValue == "e")
		{
			currentValue = Math.E;
		}  
		
		if (totScrVal) // is total screen is already populated 
		{
		totalScreen.value = totalScreen.value + currentValue;
		}
		else
		{
		totalScreen.value = currentValue;
		}
	}
} // end calcClick()

/*
 *	add event listener to buttons 
 */
if (addEventListener) // non-IE, IE 9 +
{
	for (var i=0; i < buttons.length; i++) 
	{
  		buttons[i].addEventListener('click', calcClick, false);
	}	
} 
else if (buttons.attachEvent) // IE 8 and earlier 
{
	for (var i=0; i < buttons.length; i++) 
	{
  		buttons[i].attachEvent('onclick', calcClick);
  	}
}
