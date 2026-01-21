//wap using prompt function to tak input of age as a value from th user and use alert to tell him if he can drive!

let age = prompt("enter your age");
age = Number.parseInt(age);

//in the prev qn , use console.error to log the error if the age entered is negative/in the prev qn
if (age < 0) {
  age = console.error("Please enter the correct age");
}

let runAgain = true;

while (runAgain) {
  const canDrive = (age) => {
    return age >= 18 ? true : false;
  };

  if (canDrive) {
    alert("Yes, you can DRIVE!");
  } else {
    alert("Yes,you cannot drive!");
  }
  confirm("Do you want to play again?");
}
//in question1 use confirm to ask the user if he wants to see the prompt function

let number = prompt("enter your number");
number = Number.parseInt(number);

//wap to change the url to google.com(redirection) of user enters a number gre4ater than 4
if (number > 4) {
  location.href = "https://google.com";
}

//change the background of the page to yrllow, red or any other color based on  useri put through prompt

let color = prompt("enter the page background");
document.body.style.background = color;
