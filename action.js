function myFunction() {
  var x = document.forms["form-1"];
  var text = "";
  var i;
  for (i = 0; i < x.length; i++) {
    if (x.elements[i].value != "on") {
      text += x.elements[i].value + "<br>";
    } else {
     text += $(".myCheck").is(":checked") + "<br>";
    }
  }

  document.getElementById("price").innerHTML = text;
}




// code html button calculate
/* <section>
<div class="container">
  <p>Click "Calculate" to display the price.</p>
  <button onclick="myFunction()">Calculate</button>

  <p id="price"></p>
  <p id="price2"></p>
</div>

</section> */