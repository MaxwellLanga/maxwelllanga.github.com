(function(){
    "use strict"
    alert("Hover over the stars to see my journey.")
    const pittsover = document.getElementById('pittsstar');

    pittsover.addEventListener("mouseover",mouseOver)
    pittsover.addEventListener("mouseout", mouseOut)

    function mouseOver (){
        document.getElementById('location').innerHTML = "Pittsburgh, PA";
        document.getElementById('location').style.color = "#FF3300"
        document.getElementById('title').style.color = "#FF3300"
    }
    function mouseOut (){
        document.getElementById('location').innerHTML = "Stars";
        document.getElementById('title').style.color = "#EA4873"
    }
    //Turn on and off the overlay
    function on(){
        document.getElementById("overlay").style.display = "block"
    }
    function off(){
        document.getElementById("overlay").style.display = "none"
    }

   
    console.log(pittsover)

})();