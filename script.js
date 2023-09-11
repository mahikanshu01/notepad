// alert("hello ji i m on");
// selecting elements
var input = document.getElementById("textarea");
var saveBtn = document.querySelector(".save-btn");
var clearBtn = document.querySelector(".clear-btn");

// to display value
input.value=JSON.parse(localStorage.getItem("note"));

// working of save button 
saveBtn.addEventListener("click",()=>{

    console.log(input.value);
    localStorage.setItem("note",JSON.stringify(input.value));
    
})
// working of clear button

clearBtn.addEventListener("click",()=>{
    input.value="";
    localStorage.clear();
})
