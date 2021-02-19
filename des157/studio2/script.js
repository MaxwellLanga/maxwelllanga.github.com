(function(){
    'use strict'
            // var snowbtn = document.getElementById('snow')

        // snowbtn.addEventListener('click', function(){
        //     document.getElementById('snowoverlay').style.display = 'block';
        //     console.log("yes")
        // });

        // var snow = document.getElementById('snow');
        // snow.addEventListener('mouseover', function(){
        //     snow.className = "animate";
        // });

        //the boundary color

        // const colors = ['#D62828', 'FCBF49','#ff9e00','#9d4edd','#e9ff70']
        // document.querySelectorAll('.cutouts').addEventListener('mouseover', mouseOver)

        // function mouseOver(){
        //     let random_color = colors[Math.floor(Math.random()*colors.length)];
        //     document.querySelectorAll('.cutouts').style.border = `5px solid ${}`
        // }

        


        // document.getElementById('snow').addEventListener("mouseover", mouseOver)
        // document.getElementById('snow').addEventListener('mouseout', mouseOut)

        // function mouseOver(){
        //     document.getElementById('snow').style.border = '5px solid #D62828';
        // }
        // function mouseOut(){
        //     document.getElementById('snow').style.border = '0';

        // }





        // let imgOver = document.querySelectorAll('.cutouts');
        // imgOver.forEach(function(eachImg){

        //     eachImg.addEventListener('mouseover', function(event){
        //     const thisImg = event.target.parentNode.id
        //     console.log(thisImg)
        //     const colors = ['#D62828', '#FCBF49','#ff9e00','#9d4edd','#e9ff70']
        //     let random_color = colors[Math.floor(Math.random()*colors.length)];
        //     document.getElementById(thisImg).style.border = `5px solid ${random_color}`
        
        //     });
        // });



        let imgOver = document.querySelectorAll('.cutouts');
        imgOver.forEach(function(eachImg){

            eachImg.addEventListener('mouseover', function(event){
            const thisImg = event.target.parentNode.id
            console.log(thisImg)
            const colors = ['#D62828', '#FCBF49','#ff9e00','#9d4edd','#e9ff70']
            let random_color = colors[Math.floor(Math.random()*colors.length)];
            document.getElementById(thisImg).style.border = `5px solid ${random_color}`
        
            });
        });

        let imgOut = document.querySelectorAll('.cutouts');
        imgOut.forEach(function(eachImg){

            eachImg.addEventListener('mouseout', function(event){
            const thisImg = event.target.parentNode.id
            console.log(thisImg)
            const colors = ['#D62828', '#FCBF49','#ff9e00','#9d4edd','#e9ff70']
            let random_color = colors[Math.floor(Math.random()*colors.length)];
            document.getElementById(thisImg).style.border = `0`
        
            });
        });
})();