console.log("hello");

var parent = document.getElementById("parent");
var input = document.getElementById("input");

function createNotes(){
    var liElement = document.createElement("div");
    if(!input.value){
        alert("Enter note name: ");
        return;
    }

    liElement.innerHTML = input.value;
    parent.appendChild(liElement);
    input.value = "";

    liElement.style.height = "70px";
    liElement.style.width = "300px";
    liElement.style.backgroundColor = "green";
    liElement.style.display = "flex";
    liElement.style.justifyContent = "space-around";
    liElement.style.alignItems = "center";
    liElement.style.margin = "20px 0px";
    liElement.style.color = "white";
    liElement.style.fontSize = "25px";
    liElement.style.borderRadius = "25px";
    liElement.style.fontWeight = "700";




    var cardUI = `<i class="fas fa-edit text-primary" style="cursor: pointer"  onclick="reName(this)" ></i>
    <i class="fas fa-trash-alt text-danger" style="cursor: pointer" onclick="deleteNote(this)"></i>`

   liElement.innerHTML += cardUI;

}

function deleteAll(){
    parent.innerHTML = "";
}


function reName(editBtnn){
    var editVale = prompt("Enter value for rename: ");
    editBtnn.previousSibling.textContent = editVale;
}

function deleteNote(deleteBtn){
    deleteBtn.parentNode.remove();
}




// var h1 = document.createElement("h1");
// h1.innerHTML = "hello";
// parent.append(h1);
// h1.style.color = "red";