

$(document).ready(function() {
    $("#convert").click(function() {
        function convert_HTML_to_PDF() {
            var doc = new jsPDF();
            var elementHTML = $('#content').html();
            var specialElementHandlers = {
              '#elementH': function (element, renderer) {
                return true;
              }
            };
      
            doc.fromHTML(elementHTML, 15, 15, {
              'width': 170,
              'elementHandlers': specialElementHandlers
            });
      
            // save the pdf
            doc.save('sameple-document.pdf');
      
          }
        

    });
  
  
  
  
  
  
  
  
  
  
  
    
  
  
    $("#buttonGet").click(function() {
      $("#result").html(
  
  
      );
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  });
  