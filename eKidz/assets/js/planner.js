$(function() {
	var events = ["11-9-2015","11-11-2015","11-27-2015"];	
	var eventText = ["Dhanteras","Diwali","Picnic"];
	var eventTime = ["Holiday","Holiday","9 AM"];
	function DisableSpecificDates(date){
		
		var m = date.getMonth();
		var d = date.getDate();
		var y = date.getFullYear();

		var currentdate = (m + 1) + '-' + d + '-' + y ;		
		for (var i = 0; i < events.length; i++) {			
				if (currentdate == events[i]) {					
				return [true,"present"];
				}				
		}
				var weekenddate = $.datepicker.noWeekends(date);
		return weekenddate;		
	}
	function DisplayText(date, inst){			      
            var day = $.datepicker.formatDate('dd', $("#datepicker").datepicker('getDate'));
			var month = $.datepicker.formatDate('M', $("#datepicker").datepicker('getDate'));	
			var flag=false;	
			//alert(month+"  "+day);
	for (var i = 0; i < events.length; i++) {			
				if (Date.parse(date) == Date.parse(events[i])) {	
				flag=true;
				$(".eventdes").html('<div id="event"><p>'+eventText[i]+'</p></div><div id="cdate"><p>'+month+" "+day+'</p><p>'+eventTime[i]+'</p></div></div>');
				}			
		}
		if(flag == false){
			$(".eventdes").html('<div id="nodate"><p>No event for Selected date</p></div>');
		}
		
	}
 $('#datepicker').datepicker({
                firstDay: 1,
beforeShowDay: DisableSpecificDates,
onSelect: DisplayText				
            });
});