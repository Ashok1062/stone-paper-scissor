
function id(id){
    return document.getElementById(id);
}
let startScreen = id("startScreen"),
    previewImage = id("previewImage"),
    yourImageText = id("yourImageText"),
    imageInput = id("imageInput"),
    playBtn = id("playBtn"),
    playerImage = id("playerImage"),
    playerName = id("playerName"),
    Pname = id("Pname"),
    compImage = id("compImage"),
    secondScreen = id("secondScreen"),
    CName = id("CName"),
    errorMsg = id("errorMsg");

   var screen = false;

   let namePlayer = "";
//    sound audio creating

    let gameSound = new Audio("sounds/game-audio.mpeg");
    let clickSound = new Audio("sounds/click-audio.aac");

   let computerImage = ["robot-1.webp","robot-2.jfif","robot-3.webp","robot-4.jpeg"];
 


imageInput.addEventListener("change",function(){
    let file = imageInput.files[0];

    if(file){
        let imageURL = URL.createObjectURL(file);
        previewImage.src = imageURL;
        playerImage.src = imageURL;
        yourImageText.innerText = "Image Upload Successfully";
       screen = true;
    }

})
playBtn.addEventListener("click", function(){

    namePlayer = playerName.value;

    if(namePlayer.trim() == ""){
        errorMsg.innerText = "Please Enter Your Name";
        errorMsg.style = "color:white;font-size:14px;text-shadow: 0 0 5px red;position:absolute;right:0;padding:3px"
    }
     if(screen && namePlayer.trim() != "" ){
        startScreen.style = "display:none";
        secondScreen.style = "display:flex";

    gameSound.play();
        
    Pname.innerText = namePlayer.toUpperCase();

    let rendomIndex = Math.floor(Math.random()*computerImage.length);
    let rendomImage = computerImage[rendomIndex];

    compImage.src = rendomImage;
    
    CName.style = "display:flex"
    }
    console.log(namePlayer);
    
})


// ------------------------------------------- 

const container = document.getElementsByClassName("container")[0];
let tools = ["stone","paper","scisser"];
console.log(tools.length);

let win = id("win"),
    loss = id("loss"),
    draw = id("draw");

let play = true;

let winCount = 0,
    lossCount = 0,
    drawCount = 0;
    

let toolButtons = document.querySelectorAll(".tool"),
    cTools = document.querySelectorAll(".c-tools");

toolButtons.forEach(function(button){

    button.addEventListener("click", function(){

        clickSound.play();
        
        let userIn = button.getAttribute("data-choice");

        let computerChooseNumber = Math.floor(Math.random() * tools.length);

        let computerChoose = tools[computerChooseNumber];

        cTools.forEach(function(tool){
            tool.style.backgroundColor = " rgb(94, 94, 95)";
        });


        console.log("User:", userIn);
        console.log("Computer:", computerChoose);


        if(userIn === computerChoose){

            drawCount++;

                    cTools[computerChooseNumber].style = "background-color : goldenrod;";

        }

        else if(
            (userIn === "scisser" && computerChoose === "paper") ||
            (userIn === "paper" && computerChoose === "stone") ||
            (userIn === "stone" && computerChoose === "scisser")
        ){

            winCount++;

                    cTools[computerChooseNumber].style = "background-color : red;";

        }
        else{

            lossCount++;
                    cTools[computerChooseNumber].style = "background-color : green;";

        }


        win.innerText = "WIN Count = " + winCount;

        loss.innerText = "COMP Count = " + lossCount;

        draw.innerText = "DRAW Count = " + drawCount;


        

    });

    
});

function reset(){
             winCount = 0;
             lossCount = 0;
             drawCount = 0;

             win.innerText = "WIN Count = " + winCount;

             loss.innerText = "COMP Count = " + lossCount;

             draw.innerText = "DRAW Count = " + drawCount;
    
             cTools.forEach((item , index)=>{
                cTools[index].style = "background-color: rgb(94, 94, 95)" ;
             })
        }
function home(){

    reset();
    
    screen = false;

    previewImage.src = "";

    playerName.value = "";
     secondScreen.style.display = "none";
    startScreen.style.display = "flex";
}