document.getElementById("myButton").onclick = function(){
    let name = document.getElementById("myText").value;

    document.getElementById("welcome").innerHTML = "Welcome here dear " + name;

};


function maxNum(n1,n2){
    if (n1<n2) {
        return n2;
    }
    else{
        return n1;
    }
}
console.log(maxNum(2,12))