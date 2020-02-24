let fname = document.getElementById(fname).value;

alert(fname);

function myFunction() {

    var x = document.forms["form-1"];
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo2").innerHTML = text;
  
}
