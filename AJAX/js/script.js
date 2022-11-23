// Event handling
/*Ajax
document.addEventListener("DOMContentLoaded",//will execute when page loaded
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.txt", 
            function (request) {
              var name = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });
  }
);*/

/*Json*/
document.addEventListener("DOMContentLoaded",//will execute when page loaded
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var mssg=res.firstName+" "+res.lastName
              if (res.likesChineseFood) {
                mssg+=" likes Chinese food";
              }
              else{
                mssg+=" doesn't like Chinese food";
              }
              mssg+=" and uses ";
              mssg+=res.numberOfDisplays+1;
              mssg+=" displays for coding.";

              document.querySelector("#content")
                .innerHTML = "<h2>" +mssg + "</h2>";
            });

        
      });
  }
);

