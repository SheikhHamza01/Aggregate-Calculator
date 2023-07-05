// console.log("Hello");

// var aggregate;
// var matric=document.getElementById("matric");
// var matval=matric.value;
// var inter=document.getElementById("inter");
// var intval=inter.value;
// var test=document.getElementById("test");
// var testval=test.value;
// aggregate=(0.2*(matval/1100)+0.3*(intval/1100)+0.5*(testval/400));
// console.log(aggregate);
// var btn=document.getElementById("button");
// var result=document.getElementById("result");

// btn.addEventListener("click", function(){
    
//     console.log("btn clicked");
//     result=innerHTML=`Yor aggregate is ${aggregate}%`;
//     console.log(result);
// });

console.log("Hello");

// var aggregate;
// var matric = document.getElementById("matric");
// var matval = matric.value;
// var inter = document.getElementById("inter");
// var intval = inter.value;
// var test = document.getElementById("test");
// var testval = test.value;
// aggregate = (0.2 * (matval / 1100) + 0.3 * (intval / 1100) + 0.5 * (testval / 400));
// console.log(aggregate);

// var btn = document.getElementById("button");
// var result = document.getElementById("result");

// btn.addEventListener("click", function() {
//   console.log("btn clicked");
//   result.innerHTML = `Your aggregate is ${aggregate}%`;
//   console.log(result.innerHTML);
// });

console.log("Hello");

var aggregate;
var matric = document.getElementById("matric");
var inter = document.getElementById("inter");
var test = document.getElementById("test");
var btn = document.getElementById("button");
var result = document.getElementById("result");

btn.addEventListener("click", function() {
  var matval = matric.value;
  var intval = inter.value;
  var testval = test.value;

  aggregate = (0.2 * (matval / 1100) + 0.3 * (intval / 1100) + 0.5 * (testval / 400));
  console.log(aggregate);
    if(aggregate>=60)
    {
        alert(`You are eligible with an aggregate ${aggregate} %`);
    }
    else{
        alert(`You are not eligible with an aggregate ${aggregate} %`);

    }
  console.log("btn clicked");
  result.innerHTML = `Your aggregate is ${aggregate}%`;
  console.log(result.innerHTML);
});


