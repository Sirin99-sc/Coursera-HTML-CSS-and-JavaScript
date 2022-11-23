/*Ajax intro
(function (global) {
	
	var ajaxUtils={};

	function getRequestObject(){
		if (global.XMLHttpRequest) {
			//for current versions
			return (new XMLHttpRequest());
		}
		else if(global.ActiveXObject){
			//for old browers
			return(new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else{
			global.alert("Ajax is notsupported!");
			return(null);
		}
	} 

	ajaxUtils.sendGetRequest=function(requestUrl,responseHandler){
		var request=getRequestObject();
		request.onreadystatechange=function(){
			handleResponse(request,responseHandler);
		};
		request.open("GET",requestUrl,true);//true for async req
		request.send(null);//for POST only
	};

	function handleResponse(request,
                        responseHandler) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {
    responseHandler(request);
  }
}
// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;

})(window);*/

/*Json*/
(function (global) {
	
	var ajaxUtils={};

	function getRequestObject(){
		if (global.XMLHttpRequest) {
			//for current versions
			return (new XMLHttpRequest());
		}
		else if(global.ActiveXObject){
			//for old browers
			return(new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else{
			global.alert("Ajax is notsupported!");
			return(null);
		}
	} 

	ajaxUtils.sendGetRequest=
	function(requestUrl,responseHandler,isJsonResponse){
		var request=getRequestObject();
		request.onreadystatechange=function(){
			handleResponse(request,responseHandler,isJsonResponse);
		};
		request.open("GET",requestUrl,true);//true for async req
		request.send(null);//for POST only
	};

	function handleResponse(request,
                        responseHandler,isJsonResponse) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {

  	   if (isJsonResponse==undefined) {
  	   	isJsonResponse=true;
  	   }

  	   if (isJsonResponse) {
  	   	responseHandler(JSON.parse(request.responseText));
  	   }
       else{
    responseHandler(request.responseText);
  }
}
}
// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;

})(window);