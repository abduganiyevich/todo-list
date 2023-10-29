const input=document.getElementById("inp");
const text=document.querySelector(".text");

function add(){
    if (input.value=="") {
        alert("iltimos biror narsa yozing");
    }
    else{
        let newItem=document.createElement("ul");
        newItem.innerHTML=(input.value);
        text.appendChild(newItem);
    }
} 