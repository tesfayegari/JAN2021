// alert('I am a JS Alert from the demo HTML'); //Commented out 
//JSON
var a = 10;

var henock = {
  FullName: 'Henock Alex',
  Email: 'henock@yahoo.com',
  Phone: '444-655-5678',
  Message: "He likes to say 'Hi'",
  Age: 21
};

var tesfaye = {
  FullName: 'Tesfaye Gari',
  Email: 'tesfaye@yahoo.com',
  Phone: '765-444-5678',
  Message: "He likes to say Whats up",
  Age: 25
};

var students = [tesfaye, henock,
  {
    FullName: 'Bayisa Geme',
    Email: 'bayisa@yahoo.com',
    Phone: '345-454-5678',
    Message: "He likes to say Whats up",
    Age: 25
  },
  {
    FullName: 'Blen Degef',
    Email: 'blen@yahoo.com',
    Phone: '345-44-5678',
    Message: "She likes to say Whats up",
    Age: 25
  }
];

//Example of if else conditional statement 
a = 5;
b = a*1 + 10;

if( a == b){
  console.log("The value of a and b are equal");
}else{
   console.log("The value of a and b are not equal");
}

var m = 10;

if( m == 1){
  console.log("Month is January");
} else if( m == 2){
  console.log("Month is February");
}else if( m == 3){
  console.log("Month is March ");
}else if( m == 4){
  console.log("Month is April ");
}else if( m == 5){
  console.log("Month is May ");
}else{
  console.log("Month is Unknown ");
}

switch (m){
  case 1: console.log("Month is January"); break;
  case 2: console.log("Month is February"); break;
  case 3: console.log("Month is March"); break;
  case 4: console.log("Month is April"); break;
  case 5: console.log("Month is May"); break;
  case 6: console.log("Month is June"); break;
  case 7: console.log("Month is July"); break;
  case 8: console.log("Month is August"); break;
  case 9: console.log("Month is September"); break;
  case 10: console.log("Month is October"); break;
  case 11: console.log("Month is November"); break;
  default : console.log("Month is Unknown"); break;
}

//Loops 
//Insert content to an html element with ID of content 
document.getElementById('content').innerHTML = document.getElementById('content').innerHTML + '<br>' + "Contnt Manual " + 1;
document.getElementById('content').innerHTML = document.getElementById('content').innerHTML + '<br>' + "Contnt Manual " + 2;
document.getElementById('content').innerHTML = document.getElementById('content').innerHTML + '<br>' + "Contnt Manual " + 3;
document.getElementById('content').innerHTML = document.getElementById('content').innerHTML + '<br>' + "Contnt Manual " + 4;

/** The following is similar to the above one  a+=b; a = a+ b
 * 
document.getElementById('content').innerHTML += '<br>' + "Contnt " + 1;
document.getElementById('content').innerHTML += '<br>' + "Contnt " + 2;
document.getElementById('content').innerHTML += '<br>' + "Contnt " + 3;
document.getElementById('content').innerHTML += '<br>' + "Contnt " + 4;
 */

 for(var i = 1; i < 5; i++ ){
  document.getElementById('content').innerHTML += '<br>' + "Contnt Loop " + i;
 }

 //Displaying list of students in the students element ID
//  for(var i = 0; i < students.length; i++ ){
//   document.getElementById('students').innerHTML += '<br>' + students[i].FullName;
//  }
var myHtml = "";
 for(var i = 0; i < students.length; i++ ){
  myHtml += '<li><b>Name:</b> ' + students[i].FullName + " <b>Email:</b> " + students[i].Email + '</li>';
 }

 document.getElementById('students').innerHTML = "<ul>" + myHtml + "</ul>";

 




