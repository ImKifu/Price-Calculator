$(document).ready(function() {
  $("#buttonSet").click(function() {


    // demo code
    // $("#txtBox").val("Amit");
    // $("input:radio").val(["male"]);

    // Set defalue value SSD Cloud Type
    $("#options").val("None");

    // Set defalue value Rental Period
    $("#rentalPeriod").val("0");
    let slider0 = document.getElementById("rentalPeriod");
    let output0 = document.getElementById("demo0");
    output0.innerHTML = slider0.value;
    slider0.oninput = function() {
      output0.innerHTML = this.value;
    };

    // Set defalue value addition SSD
    $("#additionSSD").val("0");
    let slider = document.getElementById("additionSSD");
    let output = document.getElementById("demo");
    output.innerHTML = slider.value;
    slider.oninput = function() {
      output.innerHTML = this.value;
    };

    // Set defalue value addition RAM
    $("#additionRAM").val("0");
    let slider2 = document.getElementById("additionRAM");
    let output2 = document.getElementById("demo2");
    output2.innerHTML = slider2.value;
    slider2.oninput = function() {
      output2.innerHTML = this.value;
    };

    // Set defalue value addition IP
    $("#additionIP").val("0");
    let slider3 = document.getElementById("additionIP");
    let output3 = document.getElementById("demo3");
    output3.innerHTML = slider3.value;
    slider3.oninput = function() {
      output3.innerHTML = this.value;
    };

    // Set defalue value addition CORE
    $("#additionCORE").val("0");
    let slider4 = document.getElementById("additionCORE");
    let output4 = document.getElementById("demo4");
    output4.innerHTML = slider4.value;

    slider4.oninput = function() {
      output4.innerHTML = this.value;
    };


     // Set defalue value checkbox
    $("#customCheck1").val([':unchecked']);
    $("#customCheck2").val([':unchecked']);
    $("#customCheck3").val([':unchecked']);
    $("#customCheck4").val([':unchecked']);
    $("#customCheck5").val([':unchecked']);
    $("#customCheck6").val([':unchecked']);
    $("#customCheck7").val([':unchecked']);
    $("#customCheck8").val([':unchecked']);


    $("#result").html('');
    $("#calculateDemo").html('');


  });











  


  $("#buttonGet").click(function() {
    $("#result").html(

      // demo code
      // $("#txtBox").val() + "<br/>" 
      // + $("input:radio[name=rd]:checked").val() + "<br/>"
        
      // my code

      $("#options").val() + "<br/>"
      + $("#rentalPeriod").val() + "<br/>"
      + $("#additionSSD").val() + "<br/>"
      + $("#additionRAM").val() + "<br/>"
      + $("#additionIP").val() + "<br/>"
      + $("#additionCORE").val() + "<br/>"

      + $("#customCheck1").prop('checked') + "<br/>"
      + $("#customCheck2").prop('checked') + "<br/>"
      + $("#customCheck3").prop('checked') + "<br/>"
      + $("#customCheck4").prop('checked') + "<br/>"
      + $("#customCheck5").prop('checked') + "<br/>"
      + $("#customCheck6").prop('checked') + "<br/>"
      + $("#customCheck7").prop('checked') + "<br/>"
      + $("#customCheck8").prop('checked') + "<br/>"


    );
  });














});
