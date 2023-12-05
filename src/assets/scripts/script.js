



function my () {
let inPut1 = +document.querySelector(".input-1").value;
let inPut2 = +document.querySelector(".input-2").value;
let result = inPut1 + inPut2;
document.querySelector(".output").innerHTML = result;
}

function clearDiv()
{
    document.querySelector(".output").innerHTML = "";
}

function createD() {
    let newD = document.createElement("div");
    newD.classList.add("item");
    newD.innerHTML = "новый div"
    document.querySelector(".main_c").appendChild(newD)
    
}

function remove(el) {
    var element = el;
    element.remove();
  }
document.querySelector(".item").onclick(remove(this));
