// ------Chapter Date Methods------



// -----Ques # 1
var now = new Date();
document.write("<h2> Current Date:</h2>");
document.write(now+"<br><br><br>");


// -----Ques # 2
var month = ["January","February","March","Apil","May","June","July","August","September","Octuber","November","December"];
var theMonth = month[now.getMonth()];
alert("Current Month:"+" "+theMonth)


// -----Ques # 3
var theDay = now.toString();
var day = theDay.slice(0,3);
alert("Current day:"+" "+day)
console.log(day);


// -----Ques # 4
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var theDays = days[now.getDay()];
for (var i = 0; i < theDays.length; i++) {
    if (theDays == "Sun" || theDays == "Sat") {
        alert("It's Fun Day")
        break
    }
}


// -----Ques # 5
var date = now.getDate();
if (date < 16){
    alert("First Fifteen Days On Month")
}
else{
    alert("Last Days Of Month")
}


// -----Ques # 6
var mileSec = now.getTime();
var minutes = mileSec/6000;
document.write("<h2> Time:</h2>");
document.write("Current Date;"+" "+now+"<br>");
document.write("Elapsed milliseconds since january 1,1970;"+" "+mileSec+"<br>");
document.write("Elapsed minutes since january 1,1970;"+" "+minutes+"<br><br><br>");


// -----Ques # 7
var now2 = new Date();
var time = now2.toString().slice(16,25)
if(time < "12:00:00" ){
    alert("its AM")
}
else(
    alert("Its PM")
)


// -----Ques # 8
var laterDate = new Date("Dec 31, 2020");
document.write("<h2> Later Date:</h2>");
document.write("Later Date;"+" "+laterDate+"<br><br><br>");


// -----Ques # 10
var year2015 = new Date("2015");
var sec2015 = year2015.getTime();
var today = new Date();
var sec2021 = today.getTime();
var totalSec = sec2021-sec2015; 
document.write("<h2> Seconds Since 2015:</h2>");
document.write("On reference date;"+" "+year2015+"<br>");
document.write(totalSec+" "+"secons had passed since begining of 2015"+"<br><br><br>");


// -----Ques # 11
document.write("<h2> Reset date:</h2>");
var crtDate = new Date();
crtDate.setHours(09,48,03);
document.write("Current date;"+crtDate+"<br>");
var date100 = new Date(); 
date100.setHours(08,48,03);
document.write("1 Hour Ago"+date100 +"<br><br><br>");


// -----Ques # 12
var now3 = new Date();
now3.setFullYear(2021,10,15);
setDate = new Date();
setDate.setFullYear(1921,10,15);
document.write("<h2> Date Reset:</h2>");
document.write("Current Date: "+now3+"<br>");
document.write("100 years back it was "+setDate+"<br><br><br>");



// -----Ques # 13
var age = +prompt("Enter Your Age");
var crtYear = now.getFullYear();
var yob = crtYear-age;
document.write("<h2> Age:</h2>");
document.write("Your Age is:" +" " + age+"<br>");
document.write("Your birthyear is:" +" " + yob+"<br>");
console.log(yob);


// -----Ques # 14
var userName = prompt("Enter Your Name");
var monthName = prompt("Enter Month");
var  nof = +prompt("Enter Number Of Units");
var cou = 16;
document.write("<h2> K-Electric Bill:</h2>");
document.write("Customer Name:"+" "+userName+"<br>");
document.write("Month:"+" "+monthName+"<br>");
document.write("Number Of Units:"+" "+nof+"<br>");
document.write("Charges Per Unit:"+" "+cou+"<br>");
var netAmount = 16*nof;
document.write("<br>"+"Net Amount Payable(Within Due date):"+" "+netAmount+"<br>");
document.write("late Payemnt Surcharge:"+" "+350+"<br>");
var latePay =350+netAmount;
document.write("Gross Amount Payable(After Due Date):"+" "+latePay+"<br>");