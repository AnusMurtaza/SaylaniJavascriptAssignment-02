

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

// ****************************************************1st ASSIGNMENT ENDS************************************************************









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

};

function assignment26_30task5() {

};

function assignment26_30task6() 
{
    var num =Math.floor(Math.random() * 100);
    alert("Random number between 1 to 100 : " + num)
};

function assignment26_30task7() {

};

function assignment26_30task8() 
{

    var guessNum = prompt("Guess the number between 1 and 10 ");
    var randomNum = Math.floor(Math.random() * 10);
 
    if (guessNum == randomNum)
        alert("WOW ! You are so lucky your number is MATCHED");
    else
        alert("Sorry! Not matched, the secret number was " + randomNum);

};

// ****************************************************1st ASSIGNMENT ENDS************************************************************



















function assignmenttask1() {

};

function assignmenttask2() {

};

function assignmenttask3() {

};

function assignmenttask4() {

};

function assignmenttask4() {

};

// ****************************************************1st ASSIGNMENT ENDS************************************************************




















function assignmenttask1() {

};

function assignmenttask2() {

};

function assignmenttask3() {

};

function assignmenttask4() {

};

function assignmenttask4() {

};

// ****************************************************1st ASSIGNMENT ENDS************************************************************

























function assignmenttask1() {

};

function assignmenttask2() {

};

function assignmenttask3() {

};

function assignmenttask4() {

};

function assignmenttask4() {

};

// ****************************************************1st ASSIGNMENT ENDS************************************************************


