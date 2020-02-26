// set data to array Object
const SSD_CLOUD_00 = { type: "None", OS: "Linux", price: 0 };
const SSD_CLOUD_01 = { type: "VPS_A", OS: "Linux", price: 86 };
const SSD_CLOUD_02 = { type: "VPS_B", OS: "Linux", price: 180 };
const SSD_CLOUD_03 = { type: "VPS_C", OS: "Linux", price: 399 };
const SSD_CLOUD_04 = { type: "VPS_D", OS: "Linux", price: 599 };
const SSD_CLOUD_05 = { type: "VPS_E", OS: "Linux", price: 699 };
const SSD_CLOUD_06 = { type: "VPS_F", OS: "Linux", price: 1199 };

const SSD_CLOUD_07 = { type: "SERVER_A", OS: "Linux", price: 1299 };
const SSD_CLOUD_08 = { type: "SERVER_B", OS: "Linux", price: 1699 };
const SSD_CLOUD_09 = { type: "SERVER_C", OS: "Linux", price: 2199 };
const SSD_CLOUD_10 = { type: "SERVER_D", OS: "Linux", price: 2699 };
const SSD_CLOUD_11 = { type: "SERVER_E", OS: "Linux", price: 3199 };
const SSD_CLOUD_12 = { type: "SERVER_F", OS: "Linux", price: 4299 };


let SSD_CLOUDS = [ SSD_CLOUD_00, SSD_CLOUD_01, SSD_CLOUD_02, SSD_CLOUD_03, SSD_CLOUD_04, SSD_CLOUD_05, SSD_CLOUD_06, SSD_CLOUD_07, SSD_CLOUD_08, SSD_CLOUD_09,
  SSD_CLOUD_10, SSD_CLOUD_11, SSD_CLOUD_12 ];

const option01 = { title: "Đăng ký thêm 10 GB SSD", price: 200 };
const option02 = { title: "Đăng ký thêm 1GB RAM", price: 200 };
const option03 = { title: "Đăng ký thêm 1 IP", price: 100 };
const option04 = { title: "Đăng ký thêm 1 core CPU ", price: 180 };
const option05 = { title: "Dịch vụ quản lý cơ bản", price: 330 };
const option06 = { title: "Dịch vụ quản lý cao cấp", price: 999 };
const option07 = { title: "Bản quyền cPanel VPS", price: 350 };
const option08 = { title: "Bản quyền Direct Admin", price: 150 };
const option09 = { title: "Bản quyền Plesk Web Admin Edition (10 Domains)", price: 70 };
const option10 = { title: "Bản quyền Plesk Web App Edition (5 Domains)", price: 105 };
const option11 = { title: "Bản quyền Plesk Web Host Edition (Unlimited Domains)", price: 616 };
const option12 = { title: "Bản quyền Plesk Web Pro Edition (30 Domains) ", price: 176 };

let OPTIONS = [ option01, option02, option03, option04, option05, option06, option07, option08, option09, option10, option11, option12 ];

let CACHE_ARRAY = [] ;

// find out the chossen SSD_CLOUD which user input, then return the price, put in CACHE_ARRAY
function checkTypeSSD_CLOUD( CACHE_ARRAY, SSD_CLOUDS ){
  SSD_CLOUDS.forEach(myCheck);

  function myCheck( value ){
    if( CACHE_ARRAY[0]==value.type){
      value.type.toString();
      CACHE_ARRAY[0]=value.price;
    }
  }
}


function returnCheckboxToNumber(CACHE_ARRAY){

  for( let i=6; i<14; i++){

    //console.log(CACHE_ARRAY[i]);
    CACHE_ARRAY[i].toString();
    if( CACHE_ARRAY[i] == true ){
      CACHE_ARRAY[i] = 1;
    }else {
      CACHE_ARRAY[i] = 0;
    }
  }
}

// no need this function anymore
function returnStringToNumber(CACHE_ARRAY){
  for( let i=1; i<6; i++ ){
    parseInt(CACHE_ARRAY[i], 10);
    console.log(typeof(CACHE_ARRAY[i]));
  }

}



function pushCACHE_ARRAY(){
    CACHE_ARRAY[0] = $("#options").val();
    CACHE_ARRAY[1] = parseInt($("#rentalPeriod").val());
    CACHE_ARRAY[2] = ((parseInt($("#additionSSD").val()))/10);
    CACHE_ARRAY[3] = parseInt($("#additionRAM").val());
    CACHE_ARRAY[4] = parseInt($("#additionIP").val());
    CACHE_ARRAY[5] = parseInt($("#additionCORE").val());
    CACHE_ARRAY[6] = $("#customCheck1").prop('checked');
    CACHE_ARRAY[7] = $("#customCheck2").prop('checked');
    CACHE_ARRAY[8] = $("#customCheck3").prop('checked');
    CACHE_ARRAY[9] = $("#customCheck4").prop('checked');
    CACHE_ARRAY[10] = $("#customCheck5").prop('checked');
    CACHE_ARRAY[11] = $("#customCheck6").prop('checked');
    CACHE_ARRAY[12] = $("#customCheck7").prop('checked');
    CACHE_ARRAY[13] = $("#customCheck8").prop('checked');
}

function calculating( CACHE_ARRAY, SSD_CLOUDS, OPTIONS ){
  let sumOptions = 0;
  let total = 0;
  let vat = 0; 
  let sum = 0;
  for( let i=0; i<OPTIONS.length; i++ ){

    sumOptions += (OPTIONS[i].price * CACHE_ARRAY[i+2]);

    //console.log(typeof(OPTIONS[i].price));
    //console.log(typeof(CACHE_ARRAY[i+2]));
    console.log(OPTIONS[i].price);
    console.log(CACHE_ARRAY[i+2]);
    //console.log(sumOptions);
    //console.log(total);
  }

  sum = (CACHE_ARRAY[0] + sumOptions) * CACHE_ARRAY[1];

  vat = sum/10;

  total = sum + vat;
  //console.log(typeof(total));
  console.log(sumOptions);
  //console.log(CACHE_ARRAY[0]);
  //console.log(CACHE_ARRAY[1]);
  console.log(total);
  document.getElementById("calculateDemo").innerHTML = total;

}



// document.getElementById("calculateDemo").innerHTML = CACHE_ARRAY.toString();

$(document).ready(function() {
 
    $("#buttonCalculate").click(function() {

      pushCACHE_ARRAY();
      checkTypeSSD_CLOUD(CACHE_ARRAY, SSD_CLOUDS);
      returnCheckboxToNumber(CACHE_ARRAY);
      //returnStringToNumber(CACHE_ARRAY);
      calculating( CACHE_ARRAY, SSD_CLOUDS, OPTIONS )
      $("#calculateDemo").html(
  
    //     $("#options").val() + "<br/>"
    //     + $("#rentalPeriod").val() + "<br/>"
    //     + $("#additionSSD").val() + "<br/>"
    //     + $("#additionRAM").val() + "<br/>"
    //     + $("#additionIP").val() + "<br/>"
    //     + $("#additionCORE").val() + "<br/>"
  
    //     + $("#customCheck1").prop('checked') + "<br/>"
    //     + $("#customCheck2").prop('checked') + "<br/>"
    //     + $("#customCheck3").prop('checked') + "<br/>"
    //     + $("#customCheck4").prop('checked') + "<br/>"
    //     + $("#customCheck5").prop('checked') + "<br/>"
    //     + $("#customCheck6").prop('checked') + "<br/>"
    //     + $("#customCheck7").prop('checked') + "<br/>"
    //     + $("#customCheck8").prop('checked') + "<br/>"
    //    + CACHE_ARRAY.toString()

          
    

  
      );
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  });
  