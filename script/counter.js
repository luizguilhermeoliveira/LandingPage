var Button1 = document.getElementById("Button1");
var Value1 = document.getElementById("Value1");
var Button2 = document.getElementById("Button2");
var Value2 = document.getElementById("Value2");
var Button3 = document.getElementById("Button3");
var Value3 = document.getElementById("Value3");
var Reset = document.getElementById("Reset");

cont1 = 0;
cont2 = 0;
cont3 = 0;

Button1 = document.addEventListener("click", (b1) => {
  var button = b1.target.id;

  if (button == "Button1") {
    cont1++;
    Value1.innerHTML = cont1;
  }
});

Button2 = document.addEventListener("click", (b2) => {
  var button = b2.target.id;

  if (button == "Button2") {
    cont2++;
    Value2.innerHTML = cont2;
  }
});

Button3 = document.addEventListener("click", (b3) => {
  var button = b3.target.id;

  if (button == "Button3") {
    cont3++;
    Value3.innerHTML = cont3;
  }
});

Reset = document.addEventListener("click", (r) => {
  var r = r.target.id;

  if (r == "Reset") {
    cont1 = 0;
    Value1.innerHTML = cont1;
    cont2 = 0;
    Value2.innerHTML = cont2;
    cont3 = 0;
    Value3.innerHTML = cont3;
  }
});
