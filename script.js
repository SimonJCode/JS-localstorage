//Spara input i localstorage, och radera ur localstorage med radera knappen.

//Variables
const okBtn = document.getElementById("ok-button");
const inputField = document.getElementById("input-field");
var saveDiv = document.getElementById("save-div");
const delBtn = document.createElement("button");

//Call showBtn function to see if we should show deletebutton or not on reload.
showBtn();

function showBtn(){
    document.body.appendChild(delBtn);
    delBtn.innerHTML = "Radera";
      if(localStorage.length === 0){
          delBtn.style.display = "none"
          console.log("no input.")
      }
      else{
          delBtn.style.display = "inline";
      }
};

//Function to all delete items from localstorage and reload page.
function deleteitems(){
    localStorage.clear();
    location.reload();
};

//Call deleteitems function when deletebutton is clicked.
delBtn.onclick = function(){
    deleteitems();
};

//Save input to localstorage when OK button is clicked.
okBtn.onclick = function(){
    const inputValue = inputField.value;   
    if(inputValue){
        localStorage.setItem("name", inputValue);
        location.reload(); 
    }
};

//Loop to write out items in localstorage to the page.
for(i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    saveDiv.innerHTML += `${value}`;
};


