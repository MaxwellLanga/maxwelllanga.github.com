(function(){
    "use strict"
    const pittsover = document.getElementById('pittstar');
    const capover = document.getElementById('capstar');
    const hornover = document.getElementById('hornstar');
    const tahoeover = document.getElementById('tahoestar');
    const joshover = document.getElementById('joshstar');
    const stars = [
        ['Pittsburgh, PA', '#FF3300'],
        ['Tahoe, CA', '#FB9DB3'],
        ['Washington DC','#00f5af'],
        ['Capehorn, CA','#01FF00'],
        ['Joshua Tree, CA','#dc0469']
    ];
    const stories = [
        'Randyland is a landmark building owned by Randy Gilson. It is filled with vividly colored mural and objects. All the colors pop and come to life when you see them in person.<br>I recommend visiting it if you are in the area.',
        'I went on a snowboarding trip during the 2020 winter, and it was amazing. Snow may not be for all of us, but I would recommend snowboarding, skiing or sledding once in a lifetime. So just do it.',
        'Visiting the capital was one of my most memorable experiences. I loved seeing all the statues and monuments. I learn a lot about the history of the US, but I would say I was mostly there for the pictures.',
        'One random Saturday morning last year I drove to Cape Horn, CA and enjoyed a very nice hike. There were water rapids, fresh air and some rock climbing involved. Hikes early in the morning can be a really good thing to clean you mind. The fresh air and natural sounds all make it better.',
        'Joshua tree is an amazing place to visit, but it can also be a brutal place. Its’ beautiful landscape is mesmerizing, but the weather can be pretty torturing. I recommend going camping if you’re an outdoor person, but a day trip would suffice for the rest of us.'
    ]


    pittsover.addEventListener("mouseover",mouseOver)
    pittsover.addEventListener("mouseout", mouseOut)
    capover.addEventListener("mouseover",mouseOver)
    capover.addEventListener("mouseout", mouseOut)
    hornover.addEventListener("mouseover",mouseOver)
    hornover.addEventListener("mouseout", mouseOut)
    tahoeover.addEventListener("mouseover",mouseOver)
    tahoeover.addEventListener("mouseout", mouseOut)
    joshover.addEventListener("mouseover",mouseOver)
    joshover.addEventListener("mouseout", mouseOut)

    const locname = document.getElementById('location');
    const title = document.getElementById('title');
    const story = document.getElementById('description');
    const pic = document.getElementById('imagelocation');


    function mouseOver (event){

        const thisstar = event.target.id;


        switch(thisstar){
            case 'pittstar': locname.innerHTML = stars[0][0]; story.innerHTML = stories[0]; locname.style.color = stars[0][1]; title.style.color = stars[0][1]; pic.src = 'images/pittsburgh.jpg'; pic.style.border = '5px solid #FF3300'; break;
            case 'tahoestar': locname.innerHTML = stars[1][0]; story.innerHTML = stories[1]; locname.style.color = stars[1][1]; title.style.color = stars[1][1]; pic.src = 'images/snowboard.jpg'; pic.style.border = '5px solid #FB9DB3'; break;
            case 'capstar': locname.innerHTML = stars[2][0]; story.innerHTML = stories[2];locname.style.color = stars[2][1]; title.style.color = stars[2][1]; pic.src = 'images/capital.jpg'; pic.style.border = '5px solid #00f5af'; break;
            case 'hornstar': locname.innerHTML = stars[3][0]; story.innerHTML = stories[3];locname.style.color = stars[3][1]; title.style.color = stars[3][1]; pic.src = 'images/capehorn.jpg'; pic.style.border = '5px solid #01FF00'; break;
            case 'joshstar': locname.innerHTML = stars[4][0]; story.innerHTML = stories[4];locname.style.color = stars[4][1]; title.style.color = stars[4][1]; pic.src = 'images/joshuatree.jpg'; pic.style.border = '5px solid #dc0469'; break;

        }

    }
    function mouseOut (){
        document.getElementById('location').innerHTML = "The stars are you guide.";
        document.getElementById('description').innerHTML = "Join me on my<br>journey around<br>the United States ";
        document.getElementById('location').style.color = "#ffffff";
        document.getElementById('title').style.color = "#ffffff";
        pic.src = '';
        pic.style.border = ''
        
    }

})();