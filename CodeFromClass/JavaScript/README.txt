JavaScript Note

To access the entire html from JavaScript we use the document object 

To access each elements on html we use properties of document such as getElementsByTagName

Java Script Object 
h = {
  FullName: 'Henock Alex',
  Email: 'henock@yahoo.com',
  Phone: '444-655-5678',
  Message: "He likes to say 'Hi'",
  Age: 21
}

Each property is a variable which can store values 

Each values has a data type 
null
undefined 
Number  (any number)
String (Text)
Boolean (true and false)
Array (Collection)
 var foo = [5, "five", "5"];


Conditional Statement 
 if -- else statement 

 Syntax:
 if ( condition ) {

 }else if (condition2){

 }....
 else{

 }

 condition: It is an expression that can be evaluated to true or false 

4 > 6  => false 
if(4>6){
  //do this ....
}
logical operators 
equality: ==
 example 5==6 is false 
   6==5+1 is true 
similarity: same as equality (value and type has to be the same ): ===
5 == "5" is true 
5 === "5" is false 

Greater than: >
Less than: <
Greater or Equal: >= 
Less or Equal: <= 
Not Equal:  !== 
Not Similar: !===

a = 5;
b = a*1;

if( a == b){
  console.log("The value of a and b are equal");
}else{
   console.log("The value of a and b are not equal");
}

Switch ... Case 

Loops 

for loop 

Syntax: 
for( var i = 0; i< 20; i++){
  //Loop content block 
}





