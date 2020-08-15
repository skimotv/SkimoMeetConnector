$(document).ready(function(){
     
     var clientId = "194383452071-84dleaqjqpgip40oq5k8r7m70nhr18eq.apps.googleusercontent.com";
     var redirect_uri = "http://localhost:8080/connector/import.html";
     var scope = "https://www.googleapis.com/auth/drive";
     var url = "";
    
     $("#login").click(function(){
        redirect_to_google(clientId,redirect_uri,scope,url);
     });

     function redirect_to_google(clientId,redirect_uri,scope,url){
        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
        +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
        +"&access_type=offline";
        window.location = url;
     }
});
