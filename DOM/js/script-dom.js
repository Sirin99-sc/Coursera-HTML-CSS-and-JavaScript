/*DOM manipulation*/
//console.log(document.getElementById("title"));//we can use document as we r in window
//console.log(document instanceof HTMLDocument);

/*function sayHello(event) {
	//console.log(this);
	var name= document.getElementById("name").value;
	var mssg= "<h2>Hello "+name+"!</h2>";

	// document.getElementById("content").textContent=mssg;//to view in the div el
    document.getElementById("content").innerHTML=mssg;//the h2 gets identified as an html el
    
    if (name==="student") {
    	//var title= document.getElementById("title");
    	var title= document.querySelector("#title").textContent;
    	title+= " & Lovin' it!";
    	document.querySelector("h1").textContent=title;
    }
}*/

/*Event handling*/
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      console.log(event);

      this.textContent = "Said it!";
      var name =
       document.getElementById("name").value;
       var mssg = "<h2>Hello " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = mssg;

      if (name === "student") {
        var title = 
          document
            .querySelector("#title")
            .textContent;
        title += " & Lovin' it!";
        document
            .querySelector("h1")
            .textContent = title;
      }
    }
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);//instead of using onclick() in html
    
    document.querySelector("body").
    addEventListener("mousemove",
    	function(event){
    		if (event.shiftKey===true) {
    			console.log("x is: "+event.clientX);
    		    console.log("y is: "+event.clientY);
    		}
    	}
    );

  }
);

//document.querySelector("button").onclick=sayHello;