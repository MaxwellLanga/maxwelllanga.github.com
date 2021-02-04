(function(){
    "use strict"
    console.log("reading js");
    const myform= document.querySelector('#myform');
    const poemlines = document.querySelector('#poemlines')

    myform.addEventListener('submit', function(event){

        document.getElementById('overlay').style.display = 'block'
        event.preventDefault();
        const loveName = document.querySelector('#loveName').value;
        const bodyPart = document.querySelector('#bodyPart').value;
        const verb = document.querySelector('#verb').value;
        const family = document.querySelector('#family').value;
        const userName = document.querySelector('#userName').value;

        poemlines.innerHTML = `
            <p>Roses are Red<p/>
            <p>Violets are Blue<p/>
            <p>Thinking of ${loveName}<p/>
            <p>Made my ${bodyPart} BOOOO!<p/>
            <p>But I ${verb} my ${family}'s Butt<p/>
            <p>And They Yelled MOOOO!<p/>
            <p id = "signature">Love ${userName}<p/>`

    });

    document.getElementById('newpoem').addEventListener("click", function(event){

        document.getElementById('overlay').style.display = 'none'           
        const userData = document.getElementsByClassName("info");
        for( let data of userData){
            data.value = "";
        }
        poemlines.innerHTML = "";

    })
})();