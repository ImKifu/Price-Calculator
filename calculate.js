// set data to array Object
const SSD_CLOUD_00 = { type: "None", OS: "Linux", price: 0 };
const SSD_CLOUD_01 = { type: "VPS_A", OS: "Linux", price: 86000 };
const SSD_CLOUD_02 = { type: "VPS_B", OS: "Linux", price: 180000 };
const SSD_CLOUD_03 = { type: "VPS_C", OS: "Linux", price: 399000 };
const SSD_CLOUD_04 = { type: "VPS_D", OS: "Linux", price: 599000 };
const SSD_CLOUD_05 = { type: "VPS_E", OS: "Linux", price: 699000 };
const SSD_CLOUD_06 = { type: "VPS_F", OS: "Linux", price: 1199000 };

const SSD_CLOUD_07 = { type: "SERVER_A", OS: "Linux", price: 1299000 };
const SSD_CLOUD_08 = { type: "SERVER_B", OS: "Linux", price: 1699000 };
const SSD_CLOUD_09 = { type: "SERVER_C", OS: "Linux", price: 2199000 };
const SSD_CLOUD_10 = { type: "SERVER_D", OS: "Linux", price: 2699000 };
const SSD_CLOUD_11 = { type: "SERVER_E", OS: "Linux", price: 3199000 };
const SSD_CLOUD_12 = { type: "SERVER_F", OS: "Linux", price: 4299000 };

// set data to array Object
let SSD_CLOUDS = [
  SSD_CLOUD_00,
  SSD_CLOUD_01,
  SSD_CLOUD_02,
  SSD_CLOUD_03,
  SSD_CLOUD_04,
  SSD_CLOUD_05,
  SSD_CLOUD_06,
  SSD_CLOUD_07,
  SSD_CLOUD_08,
  SSD_CLOUD_09,
  SSD_CLOUD_10,
  SSD_CLOUD_11,
  SSD_CLOUD_12
];

// set data to array Object
const option01 = { title: "Đăng ký thêm 10 GB SSD", price: 200000 };
const option02 = { title: "Đăng ký thêm 1GB RAM", price: 200000 };
const option03 = { title: "Đăng ký thêm 1 IP", price: 100000 };
const option04 = { title: "Đăng ký thêm 1 core CPU ", price: 180000 };
const option05 = { title: "Dịch vụ quản lý cơ bản", price: 330000 };
const option06 = { title: "Dịch vụ quản lý cao cấp", price: 999000 };
const option07 = { title: "Bản quyền cPanel VPS", price: 350000 };
const option08 = { title: "Bản quyền Direct Admin", price: 150000 };
const option09 = {
  title: "Bản quyền Plesk Web Admin Edition (10 Domains)",
  price: 70000
};
const option10 = {
  title: "Bản quyền Plesk Web App Edition (5 Domains)",
  price: 105000
};
const option11 = {
  title: "Bản quyền Plesk Web Host Edition (Unlimited Domains)",
  price: 616000
};
const option12 = {
  title: "Bản quyền Plesk Web Pro Edition (30 Domains) ",
  price: 176000
};

// set data to array Object
let OPTIONS = [
  option01,
  option02,
  option03,
  option04,
  option05,
  option06,
  option07,
  option08,
  option09,
  option10,
  option11,
  option12
];

let CACHE_ARRAY = [];

// find out the chossen SSD_CLOUD which user input, then return the price, put in CACHE_ARRAY
function checkTypeSSD_CLOUD(CACHE_ARRAY, SSD_CLOUDS) {
  SSD_CLOUDS.forEach(myCheck);

  function myCheck(value) {
    if (CACHE_ARRAY[0] == value.type) {
      value.type.toString();
      CACHE_ARRAY[0] = value.price;
    }
  }
}

// because checkbox only return true/false, to we need to return it to number 0/1 for calculate the price
function returnCheckboxToNumber(CACHE_ARRAY) {
  for (let i = 6; i < 14; i++) {
    CACHE_ARRAY[i].toString();
    if (CACHE_ARRAY[i] == true) {
      CACHE_ARRAY[i] = 1;
    } else {
      CACHE_ARRAY[i] = 0;
    }
  }
}

// add comma currency for total price
function totalToString(total) {
  let convert = total.toString();
  let newStringTotal = convert.split("");
  let arrayTotal = [];
  let j = 0;

  for (let i = newStringTotal.length - 1; i >= 0; i--) {
    arrayTotal.unshift(newStringTotal[i]);
    j++;

    // after push 3 elements in arrayTotal, push 1 comma
    if (j % 3 == 0) {
      arrayTotal.unshift(",");
    }
  }

  // if the first element is comma, delete it
  if (arrayTotal[0] == ",") {
    arrayTotal.shift();
  }
  //combine all elements of arrayTotal into a final string, then return
  let finalStringTotal = arrayTotal.join("");

  console.log(finalStringTotal);
  return finalStringTotal;
}

function pushCACHE_ARRAY() {
  CACHE_ARRAY[0] = $("#options").val();
  CACHE_ARRAY[1] = parseInt($("#rentalPeriod").val());
  CACHE_ARRAY[2] = parseInt($("#additionSSD").val()) / 10;
  CACHE_ARRAY[3] = parseInt($("#additionRAM").val());
  CACHE_ARRAY[4] = parseInt($("#additionIP").val());
  CACHE_ARRAY[5] = parseInt($("#additionCORE").val());
  CACHE_ARRAY[6] = $("#customCheck1").prop("checked");
  CACHE_ARRAY[7] = $("#customCheck2").prop("checked");
  CACHE_ARRAY[8] = $("#customCheck3").prop("checked");
  CACHE_ARRAY[9] = $("#customCheck4").prop("checked");
  CACHE_ARRAY[10] = $("#customCheck5").prop("checked");
  CACHE_ARRAY[11] = $("#customCheck6").prop("checked");
  CACHE_ARRAY[12] = $("#customCheck7").prop("checked");
  CACHE_ARRAY[13] = $("#customCheck8").prop("checked");
}

function calculating(CACHE_ARRAY, SSD_CLOUDS, OPTIONS) {
  let sumOptions = 0;
  let total = 0;
  let vat = 0;
  let sum = 0;

  for (let i = 0; i < OPTIONS.length; i++) {
    sumOptions += OPTIONS[i].price * CACHE_ARRAY[i + 2];
  }

  sum = (CACHE_ARRAY[0] + sumOptions) * CACHE_ARRAY[1];

  vat = sum / 10;

  total = sum + vat;

  console.log(total);

  document.getElementById("calculateDemo").innerHTML = totalToString(total);
}

$(document).ready(function() {
  $("#buttonCalculate").click(function() {
    pushCACHE_ARRAY();
    checkTypeSSD_CLOUD(CACHE_ARRAY, SSD_CLOUDS);
    returnCheckboxToNumber(CACHE_ARRAY);
    calculating(CACHE_ARRAY, SSD_CLOUDS, OPTIONS);
    $("#calculateDemo")
      .html

      // se in ra ket qua o day, nhung ma da in ra modal nen khong can thiet nua -> delete
      ();
  });
});
