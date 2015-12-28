$(document).ready(function(){	
	$('#login').click(function(){
		var userid=$("#userid").val();
		var pass=$("#pass").val();		
		if(userid == "ajay123" && pass == "123ajay"){
			location.href="home.html";	
		}else{
			$( "#dialog" ).dialog({modal: true,    
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
    }});$(".ui-dialog-titlebar").hide();
		}		
	});	
});