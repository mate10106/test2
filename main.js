document.getElementById("myButton").onclick = function(){
    let name = document.getElementById("myText").value;

    document.getElementById("welcome").innerHTML = "Welcome here dear " + name;

};