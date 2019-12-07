

var password = [];
var firstNumberSegmentRoll=document.querySelectorAll(".roulette1");
var numbersAndLetters="";
var specialCharacters = "!!@#$%^&*()_+";
var upperCaseCharacters="ABCDEFGHIJKLMONPQRSTUVWXYZ";
var lowerCaseCharacters="sbcdefghijklmnopqrstuvwxyz";
var numbers="1234567890";
var SecondNumberSegmentRoll=document.querySelectorAll(".roulette2");
var ThirdNumberSegmentRoll=document.querySelectorAll(".roulette3");
var TurnOnButton = document.querySelector(".roundButton");
var header = document.querySelector(".slotMachine");
var columnOne= document.querySelector(".columnOne");
var columnTwo= document.querySelector(".columnTwo");
var columnThree= document.querySelector(".columnThree");
var columns = document.querySelectorAll(".column");
var passwordDisplay= document.querySelectorAll(".passwordInput");
var numberRoulette = document.querySelectorAll(".numberRoulette")
var actBtn = document.querySelectorAll(".getpasswordButtonContainer");
var header;
var intertion;
var animalInput =  document.querySelectorAll(".animalInput");
var AuthorInput = document.querySelectorAll(".AuthorInput");
var numbersChecked=document.querySelector("#numbersCheckBox");
var upperCaseChecked=document.querySelector("#upperCaseCheckBox");
var lowerCaseChecked=document.querySelector("#lowerCaseCheckBox")
var charactersChecked=document.querySelector("#charactersCheckBox");

if(numbersChecked.checked=true){
    numbersAndLetters=numbersAndLetters+numbers;
};
if(upperCaseChecked.checked=true){
    numbersAndLetters=numbersAndLetters+upperCaseCharacters;
};
if(lowerCaseCharacters.checked=true){
    numbersAndLetters=numbersAndLetters+lowerCaseCharacters;
};
if(specialCharacters.checked=true){
    numbersAndLetters=numbersAndLetters+specialCharacters;
};

var numbersAndLettersArray=[];
    numbersAndLettersArray = numbersAndLetters.trim().split("")
    

//show password puts the password string as the value of the "password box input box"
// Process password gathers the strings from 
//firstNumbersegment, sesongNumberSegment, ThirdNumberSegment, animal and 
//author, using stringConcat, split it , and then randomize the order 
//of numbers  
function showPassword(){
    var firstNumberSegment=firstNumberSegmentRoll[0].value;
    var SecondNumberSegment=SecondNumberSegmentRoll[0].value;
    var ThirdNumberSegment=ThirdNumberSegmentRoll[0].value;
    var animal = animalInput[0].value;
    var author = AuthorInput[0].value;
    var segmentsAdded =firstNumberSegment.concat(SecondNumberSegment,ThirdNumberSegment,
        animal,author);
        console.log(segmentsAdded);
       
        var segmentCharacters = segmentsAdded.trim(" ").split("");
        var passwordLength = segmentCharacters.length;
        for (var i=passwordLength-1; i>0; i--){
            var j =  Math.floor(Math.random()*(i+1));
            var temp = segmentCharacters[i];
            segmentCharacters[i]=segmentCharacters[j];
            segmentCharacters[j] = temp;
        }
    var password = segmentCharacters.join("");
    passwordDisplay[0].value=password;}
    

function rouletteButton(){
 var j = -1;
 strings=[];
     var rouletteRoll = setInterval(function(){
         j++;
        
       
        for (i=0; i<8;i++){
        strings[i]= numbersAndLettersArray[Math.floor(Math.random()*numbersAndLetters.length+1)];};
        if(strings){
            var stringsCombined= strings.join("");
        };
        numberRoulette[j].value = stringsCombined;
      
        columns[j].classList.add("rollAnimation");

        //I cant get the Interval to stop
        
        },1000);
        if(j===4){clearInterval(rouletteRoll);};
        if(numberRoulette[j]=="undefined"){clearInterval(rouletteRoll);};
        
        
    }

actBtn[0].addEventListener("click", rouletteButton);
actBtn[1].addEventListener("click",showPassword);
 
var copyButton = document.querySelectorAll(".CopyButton");
copyButton[0].addEventListener("click",function(){
    passwordDisplay[0].select();
    passwordDisplay[0].setSelectionRange(0,99999)
        document.execCommand("copy");})


// function check() {
//             document.getElementById("myCheck").checked = true;

// })
// function copy(){\

// }


// function myFunction() {
//     var copyText = document.getElementById("myInput");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999)
//     document.execCommand("copy");
//     alert("Copied the text: " + c

// setInterval(function(){ alert("Hello"); }, 3000);






// String.prototype.shuffle = function () {
//     var a = this.split(""),
//         n = a.length;

//     for(var i = n - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var tmp = a[i];
//         a[i] = a[j];
//         a[j] = tmp;
//     }
//     return a.join("");
// }

// }


// }





// var max = function(num1, num2){
//     is( num1.num2){
//         return num1;
//     }

// else {
//     retun num2;
// }

// }
// function displayWe(){
//     var inputx = document.getElementsByClassName("passwordInput");
//     inputx[0].value="ewewewewe";}
// function displaypas(){
// window.addEventListener ("load",displayWe
// );}

// displaypas();

// function Roulette(){
//     columnOne.setAttribute("style", "animation:roll")
// }
//on click turns on each of the roll columns     Nl


// var password=[];
// var getlowercase = document.querySelector(".animals")
// var lowercase = getlowercase.toLowerCase();
// password.push(lowercase);
// alert(password);
// var getNumbers = prompt("give me some numbers");




// while (isNaN(getNumbers)){
//     alert("these are not numbers!");
//     var getNumbers = prompt("give me some numbers");}

// password.push(getNumbers);
//     alert(password);

// var password = password.join("").trim();
// alert(password); 

// for ( var i = 0; i<password.length; i++){
    

