$(function() {
	var disableddates = ["11-4-2015","11-2-2015","11-5-2015","11-6-2015","11-3-2015","11-11-2015","11-9-2015", "11-12-2015", "11-13-2015", "11-16-2015","11-19-2015","11-17-2015","11-23-2015","11-26-2015","11-30-2015"];
	var disableddates1 = ["11-20-2015", "11-24-2015"]
	var disableddates2 = ["11-18-2015", "11-27-2015"];
	var disableddates3 = ["11-10-2015", "11-25-2015"]
	function DisableSpecificDates(date){
		
		var m = date.getMonth();
		var d = date.getDate();
		var y = date.getFullYear();

		var currentdate = (m + 1) + '-' + d + '-' + y ;		
		for (var i = 0; i < disableddates.length; i++) {
			// Now check if the current date is in disabled dates array. 
				if ($.inArray(currentdate, disableddates) != -1 ) {					
				return [true,"present"];
				}
				if ($.inArray(currentdate, disableddates1) != -1 ) {					
				return [true,"leave"];
				}
				if ($.inArray(currentdate, disableddates2) != -1 ) {					
				return [true,"halfday"];
				}
				if ($.inArray(currentdate, disableddates3) != -1 ) {					
				return [true,"holiday"];
				}
		}
				var weekenddate = $.datepicker.noWeekends(date);
		return weekenddate;		
	}
 $('#datepicker').datepicker({
                firstDay: 1,				
				beforeShowDay: DisableSpecificDates							
            });
 $('#datepicker1').datepicker({
	 firstDay: 1,
	 beforeShowDay: $.datepicker.noWeekends,
	 onSelect: function(fromdate, inst){
		 var date=new Date();
		var m = date.getMonth();
		var d = date.getDate();
		var y = date.getFullYear();		
		var currentdate = (m + 1) + '/' + d + '/' + y ;		
		
		if(Date.parse(fromdate)<Date.parse(currentdate)){$('#datepicker1').val('');$("#dialog1").dialog({modal: true,    
    draggable: false,
    resizable: false,	
    show: 'blind',
    hide: 'blind',
    width: 250,
    dialogClass: 'ui-dialog',
    buttons: {
        "Ok": function() {
            $(this).dialog("close");
        }
    }});
	$(".ui-dialog-titlebar").hide();}
	 }
});
 $('#datepicker2').datepicker({
	 firstDay: 1,
	 beforeShowDay: $.datepicker.noWeekends,
	 onSelect: function(todate, inst){
		 var date=new Date();
		var m = date.getMonth();
		var d = date.getDate();
		var y = date.getFullYear();
		var currentdate = (m + 1) + '/' + d + '/' + y ;			
		
		var date1 = $('#datepicker1').datepicker("getDate");		
		if(date1!=null){
		var m1 = date1.getMonth();
		var d1 = date1.getDate();
		var y1 = date1.getFullYear();
		var fromdate = (m1 + 1) + '/' + d1 + '/' + y1 ;
		if(Date.parse(todate)<Date.parse(currentdate) || Date.parse(todate)<Date.parse(fromdate)){$('#datepicker2').val('');$("#dialog2").dialog({modal: true,    
    draggable: false,
    resizable: false,	
    show: 'blind',
    hide: 'blind',
    width: 250,
    dialogClass: 'ui-dialog-osx',
    buttons: {
        "Ok": function() {
            $(this).dialog("close");
        }
    }});$(".ui-dialog-titlebar").hide();}	
			}else{$('#datepicker2').val('');
				$("#dialog3").dialog({modal: true,    
    draggable: false,
    resizable: false,	
    show: 'blind',
    hide: 'blind',
    width: 250,
    dialogClass: 'ui-dialog-osx',
    buttons: {
        "Ok": function() {
            $(this).dialog("close");
        }
    }});$(".ui-dialog-titlebar").hide();
			}		
	 }
 });

});