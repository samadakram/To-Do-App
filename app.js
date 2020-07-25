// Add button 
var list = document.getElementById('list');

function addBtn(){

    // create  add list
    var inputtxt = document.getElementById("inputtxt");
    var li = document.createElement('li');
    var liText = document.createTextNode(inputtxt.value);
    
    li.appendChild(liText);
   
    // create edit button
    var editBtn = document.createElement('button');
    var editBtnText = document.createTextNode('EDIT');

    editBtn.appendChild(editBtnText)
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("onclick","editBtn(this)")

    li.appendChild(editBtn)

    // create delete button

    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("DELETE");

    delBtn.appendChild(delBtnText)
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","delBtn(this)")


    li.appendChild(delBtn)
    list.appendChild(li);

    inputtxt.value = "";

}
function editBtn(e){
    e.parentNode.firstChild.nodeValue;
    var val = prompt("Edit your task",e.parentNode.firstChild.nodeValue);

    if ( val === ""){
        alert("Please write Task!");
    }
    else{
    e.parentNode.firstChild.nodeValue = val;
    }

}
function delBtn(e){
    e.parentNode.remove()
}
function deleteAll(){
    list.innerHTML = ""
}