$(document).ready(function(){
	$('#login').click(function(){		
		var userid=$("#userid").val();
		var pass=$("#pass").val();	
		var error=true;		
		$.ajax({
                url: 'http://localhost/login.php',
				type: 'GET',
				data: "userid="+userid+"&pass="+pass,
                success: function(data) {
					var obj = $.parseJSON(data);						
					if(obj['flag'] == "true"){
					localStorage.admission_no=obj['admission_no'];					
					localStorage.admission_date=obj['admission_date'];
					localStorage.name=obj['name'];
					localStorage.gender=obj['gender'];
					localStorage.dob=obj['dob'];
					localStorage.setItem('class',obj['class']);
					localStorage.section=obj['section'];
					localStorage.present_add=obj['present_add'];
					localStorage.permanent_add=obj['permanent_add'];
					localStorage.image=obj['image'];
					localStorage.userid=obj['userid'];
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
                }				
            });				
	});	
});