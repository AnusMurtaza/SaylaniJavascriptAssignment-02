function assignment21_25task1() {
    var fName = prompt("Enter Your First Name");
    var lName = prompt("Enter Your Last Name");

    var fullName = fName + " " + lName;

    alert("How are you ? " + fullName)

};

function assignment21_25task2() {
    var mobileModel = prompt("What 's your favorite mobile phone model");


    document.write("My favourite phone is: " + mobileModel + "<br>" + "Length of string : " + mobileModel.length);
};

function assignment21_25task3() {
    var name = "pakistan";
    var letter = name.charAt(7);
    alert(letter)
};

function assignment21_25task4() {
    var name = "Hello World";
    var letter = name.charAt(9);
    alert(letter)
};

function assignment21_25task5() {

};

function assignment21_25task7() {
    var word = "Hyderabad";

    var wordReplace = word.replace("Hyder", "Islam")

    document.write("City : " + word + "<br>" + "After replacemnet : " + wordReplace);
};

function assignment21_25task8() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var change = message.replace(/and/g, "&")

    document.write(change)
};

function assignment21_25task9() {
    var number = "472";
    var abc = parseInt(number);

    document.write("Value : " + number + "<br>" + "Type : " + typeof (number) + "<br>");
    document.write("Value : " + abc + "<br>" + "Type : " + typeof (abc));

};

function assignment21_25task10() {
    var name = prompt("Enter name to convert into capital letters");

    var convert = name.toUpperCase();

    alert(convert)
};

function assignment21_25task11() {
    var name = prompt("Enter Name for title case");
    var first = name.slice(0, 1)
    var last = name.slice(1)

    first = first.toUpperCase()
    last = last.toLowerCase()

    var result = first + last;

    alert("User input : " + name + "\n" + "Title case : " + result)

};

function assignment21_25task12() {
    var num = 35.36;
    var remove = num + '';
    remove = remove.replace('.', '');
    type = toString(remove);
    alert(remove);
};

function assignment21_25task13() {

};

function assignment21_25task14() {
    var search = prompt("Welcome to ABC Bakery. What do u want to order?");

    var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            alert("available")
        }
        else {
            alert("we are sorry")
            break;
        }
    }
};

function assignment21_25task15() {

};

function assignment21_25task16() {
    var university = "University of Karachi";
    var ar = university.split("");


    for (i = 0; i < university.length - 1; i++) {
        document.write(ar + "<br>")
    }

};

function assignment21_25task17() {
    var name = prompt("FInd Last Character Of Your Country");
    var lastCharacter = name.charAt(name.length - 1);
    document.write("User input : " + name + "<br>" + "Last character of input : " + lastCharacter)
};

// ****************************************************ASSIGNMENT # 21-25 ENDS************************************************************









function assignment26_30task1() {
    var num = prompt("Enter a Positive integer.");
    var round = Math.round(num);
    var floor = Math.floor(num);
    var ceil = Math.ceil(num);

    document.write("number : " + num + "<br>" + "round off value : " + round + "<br>" + "floor value : " + floor + "<br>" + "ceil value : " + ceil)
};

function assignment26_30task2() {
    var num = prompt("Enter a Negative integer.");
    var round = Math.round(num);
    var floor = Math.floor(num);
    var ceil = Math.ceil(num);

    document.write("number : " + num + "<br>" + "round off value : " + round + "<br>" + "floor value : " + floor + "<br>" + "ceil value : " + ceil)

};

function assignment26_30task3() {

};

function assignment26_30task4() {
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    alert("Random dice value : " + diceRoll);
};

function assignment26_30task5() {
    var headTails = prompt("Enter 1 for Tails & 2 for Heads");
    var diceRoll = Math.floor(Math.random() * 2) + 1;

    if (diceRoll == headTails) {
        alert("You Win the Toss")
    }
    else {
        alert("Sorry ! You Lost the Toss")

    }
};

function assignment26_30task6() {
    var num = Math.floor(Math.random() * 100);
    alert("Random number between 1 to 100 : " + num)
};

function assignment26_30task7() {

};

function assignment26_30task8() {

    var guessNum = prompt("Guess the number between 1 and 10 ");
    var randomNum = Math.floor(Math.random() * 10);

    if (guessNum == randomNum)
        alert("WOW ! You are so lucky your number is MATCHED");
    else
        alert("Sorry! Not matched, the secret number was " + randomNum);

};

// ****************************************************ASSIGNMENT # 26-30 ENDS************************************************************




function assignment31_34task1() {
    var a = new Date();
    document.write(a);
};

function assignment31_34task2() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var a = new Date();
    var monthName = months[a.getMonth()];

    alert("Current Month : " + monthName)

};

function assignment31_34task3() {
    var date = new Date();
    var a = date.toString();
    var answer = a.slice(0, 3)
    document.write("Today is " + answer);
};

function assignment31_34task4() {
    var today = new Date();
    if (today.getDay() == 6 || today.getDay() == 0) {
        alert("It's Fun Day");
    } else {
        alert("It's a working day")
    }
};

function assignment31_34task5() {
    var today = new Date();
    if (today.getDate() < 16) {
        alert("First fifteen days of the month");
    } else {
        alert("Last days of the month")
    }
};


function assignment31_34task6() {

};

function assignment31_34task7() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    var newformat = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;

    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    alert("It's " + newformat)

};

function assignment31_34task8() {
    var laterDate = new Date();
    laterDate.setFullYear(2020, 11, 31);
    document.write("Later Date: " + laterDate)
};

function assignment31_34task9() {



};

function assignment31_34task10() {

}


function assignment31_34task11() {

};

function assignment31_34task12() {

};

function assignment31_34task13() {

};

function assignment31_34task14() {
    var customerName = prompt("Eenter Your Name");
    var currentMonth = prompt("Eenter Your Current Month");
    var numUnits = prompt("Eenter Your  Number of units ");
    var chargesUnit = prompt(" Charges per unit ");
    var latePayment = 350;
    var netAmount = numUnits * chargesUnit;

    var grossAmount = netAmount + latePayment;


    document.write("Customer Name : " + customerName + "<br>" + "Month : " + currentMonth + "<br>" + "Number of units : " + numUnits + "<br>" + "Charges per unit : " + chargesUnit + "<br>")
    document.write(" Net Amount Payable (within Due Date) : " + netAmount + "<br>" + " Late Payment Surcharge : " + latePayment + "<br>" + " Gross Amount Payable (after Due Date) : " + grossAmount)
};


// ****************************************************ASSIGNMENT # 31-34 ENDS************************************************************




function assignment35_38task1() {
    var a = new Date();
    document.write(a);
};
function assignment35_38task2() {
    function greeting() {
        var fName = prompt("Enter Your First Name");
        var lName = prompt("Enter Your Last Name");

        var fullName = fName + " " + lName;

        alert("How are you ? " + fullName)
    }
    greeting();
};

function assignment35_38task3() {


    function add() {
        var a = prompt("Enter First Number");
        var b = prompt("Enter Second Number");
        var result = Number(a) + Number(b);

        alert(result);
    }
    add()


};

function assignment35_38task4() {

};

function assignment35_38task5() {
    var number = prompt("Enter a number for square")
    function square(number) {
        alert(number)
    }

    square(number * number)
};


function assignment35_38task6() {

    function factorial(x) {

        if (x === 0) {
            return 1;
        }
        return x * factorial(x - 1);

    }
    var num = prompt("ENter number for factorials")
    alert(factorial(num));

};

function assignment35_38task7() {
    var a = prompt ("Enter the number where do you want to start the counting");
    var b = prompt ("Enter the number where do you want to stop the counting")
    var text = "";
    
    for (var i = a; i <= b; i++) {
      text +=  i + "<br>";
    }
    document.write(text)
  
};

function assignment35_38task8() {

};

function assignment35_38task9() {

};

function assignment35_38task10() {

};


function assignment35_38task11() {

};

function assignment35_38task12() {

};

function assignment35_38task13() {

};

function assignment35_38task14() {
};















    // ****************************************************ASSIGNMENT # 35-38 ENDS************************************************************


