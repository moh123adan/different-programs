//CALCULATOR PROGRAM


function calculator() {
  // program for a simple calculator

  // take the operator input
  let myArray = ["+", "-", "*", "/"];

  var operator = prompt("Enter operator ( either +, -, * or / ): ");
  while (
    operator != myArray[0] &&
    operator &&
    myArray[1] &&
    operator != myArray[2] &&
    operator != myArray[3]
  ) {
    alert("the value that you entered is not operator");

    operator = prompt("Enter operator ( either +, -, * or / ): ");
  }

  // take the operand input
  var number1 = parseFloat(prompt("Enter first number: "));

  while (isNaN(number1) || number1 == "") {
    alert("the value that you entered is not number");
    number1 = parseFloat(prompt("Enter first number: "));
  }

  var number2 = parseFloat(prompt("Enter second number: "));

  while (isNaN(number2) || number2 == "") {
    alert("the value that you entered is not number");
    number2 = parseFloat(prompt("Enter second number: "));
  }

  let result;

  // using if...else if... else
  if (operator == "+") {
    result = number1 + number2;
  } else if (operator == "-") {
    result = number1 - number2;
  } else if (operator == "*") {
    result = number1 * number2;
  } else {
    result = number1 / number2;
  }

  // display the result
  alert(`${number1} ${operator} ${number2} = ${result}`);
} //END

//AGE CALCULATOR

function ageProgram() {
  let ask = parseInt(
    prompt("Enter your age and the age should be between 1 to 150")
  );

  while (isNaN(ask) || ask <= 0 || ask > 150) {
    alert("the age you entered is not excepted");
    ask = parseInt(
      prompt("Enter your age and the age should be between 1 to 150")
    );
  }
  alert(
    `your age is: ${ask * 12} months, ${ask * 52} weeks, ${ask * 365} days, ${
      ask * 8760
    } hours, ${ask * 3.154e7} seconds`
  );
} //END

function number() {
  let i = 1;
  while (i <= 100) {
    if (i % 1 == 0) {
      document.write(`<h1>${i}</h1>`);
    }
    i++;
  }
} //END

function outputnum() {
  let counter = 1;
  do {
    console.log(counter);
    counter++;
  } while (counter < 101);
}

//ANFAC PROGRAM
 // this variable myDate allows me to get current date + 30 days
 var myDate = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);

 // anfac service function
 function anFacService() {
   let number = prompt("Fadlan gali anfac number");
   // check if the user entered the correct number of anfac
   while (number != "*127#") {
     alert("th value you entered it is not correct");

     number = prompt("Fadlan gali anfac number");
   }
   if (number === "*127#") {
     let dooroAnfac = parseInt(prompt("1) fadlan dooro\n adeega anfac"));

     // check if the user enter the correct choice
     if (dooroAnfac === 1) {
       let anfacType = parseInt(
         prompt(
           "1. ANFAC Gudaha\n 2. ANFAC Gudaha iyo Dibada \n 3. Anfac Dibada 32 dal\n 4. ANFAC SMS\n 0. Back"
         )
       );
       // check anfac types
       if (anfacType === 1) {
         // call this function
         anfacGudaha();
       } else if (anfacType === 2) {
         // call this function
         anfacGudahaIyoDibada();
       } else if (anfacType === 3) {
         // call this function
         anfacDibada32();
       } else if (anfacType === 4) {
         // call this function
         anfacSMS();
       } else if (anfacType === 0) {
         return;
       }
     } else {
       alert("ivalid choise..");
       return;
     }
   } else {
     alert("invalid number");
     return;
   }
 }

 // this function handles anfaca gudaha
 function anfacGudaha() {
   // list of xermo's
   let xermo = parseInt(
     prompt(
       "Fadlan dooro xermo\n 1. xirmo USD1 \n 2. xirmo USD5 \n 3. xirmo USD10\n 4.xirmo USD20\n 5. xirmo USD50\n 6. xirmo 90 sinti\n 7. xirmo 50 Si 0.back next:99"
     )
   );
   if (xermo === 1) {
     // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 100 daqiiqo wicitaanka gudaha. fadlan hubi isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );

     if (confirm === 1) {
       return;
     }
     // check if the user accepts the order
     else if (confirm === 2) {
       alert(
         "waxaad heshay 100 National_VoiceDuration 100 daqiiqo,waqtiga uu dhacaayo: " +
           myDate
       );
     }

     //   if he didn't choose 1 or 2
     else {
       alert("invalid choice");
     }
   } else if (xermo === 2) {
     // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 750 daqiiqo wicitaank gudaha. fadlan hubi isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );

     if (confirm === 1) {
       return;
     }
     // check if the user accepts the order
     else if (confirm === 2) {
       alert(
         "waxaad heshay 750 daqiiqo, wicitaan gudaha, waqtiga uu dhacaayo: " +
           myDate
       );
     }

     //   if he/she didn't choose 1 or 2
     else {
       alert("invalid choice");
     }
   } else if (xermo === 3) {
     // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 750 daqiiqo wicitaank gudaha. fadlan hubi isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );
     if (confirm === 1) {
       return;
     }
     // check if the user accepts the order
     else if (confirm === 2) {
       alert(
         "waxaad heshay 750 daqiiqo, wicitaan gudaha, waqtiga uu dhacaayo: " +
           myDate
       );
     }
     //   if he/she didn't choose 1 or 2
     else {
       alert("invalid choice");
     }
   } else if (xermo === 4) {
     // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 750 daqiiqo wicitaank gudaha. fadlan hubi isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );
     if (confirm === 1) {
       return;
     }

     // check if the user accepts the order
     else if (confirm === 2) {
       alert(
         "waxaad heshay 750 daqiiqo, wicitaan gudaha, waqtiga uu dhacaayo: " +
           myDate
       );
     }
     //   if he/she didn't choose 1 or 2
     else {
       alert("invalid choice");
     }
   } else if (xermo === 5) {
     // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 750 daqiiqo wicitaank gudaha. fadlan hubi isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );
     if (confirm === 1) {
       return;
     }
     // check if the user accepts the order
     else if (confirm === 2) {
       alert(
         "waxaad heshay 750 daqiiqo, wicitaan gudaha, waqtiga uu dhacaayo: " +
           myDate
       );
     }
     //   if he/she didn't choose 1 or 2
     else {
       alert("invalid choice");
     }
   } else if (xermo === 6) {
     // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 750 daqiiqo wicitaank gudaha. fadlan hubi isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );

     if (confirm === 1) {
       return;
     }
     // check if the user accepts the order
     else if (confirm === 2) {
       alert(
         "waxaad heshay 750 daqiiqo, wicitaan gudaha, waqtiga uu dhacaayo: " +
           myDate
       );
     }
     //   if he/she didn't choose 1 or 2
     else {
       alert("invalid choice");
     }
   } else if (xermo === 7) {
     // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 750 daqiiqo wicitaank gudaha. fadlan hubi isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );

     if (confirm === 1) {
       return;
     }

     // check if the user accepts the order
     else if (confirm === 2) {
       alert(
         "waxaad heshay 750 daqiiqo, wicitaan gudaha, waqtiga uu dhacaayo: " +
           myDate
       );
     }

     //   if he/she didn't choose 1 or 2
     else {
       alert("invalid choice");
     }
   } else if (xermo === 0) {
     let anfacType = parseInt(
       prompt(
         "1. ANFAC Gudaha\n 2. ANFAC Gudaha iyo Dibada \n 3. Anfac Dibada 32 dal\n 4. ANFAC SMS\n 0. Back"
       )
     );
   } else {
     alert("invalid choice");
   }
 }

 // this function handles anfaca gudaha iyo dibada
 function anfacGudahaIyoDibada() {
   let xermo = parseInt(
     prompt(
       "Fadlan dooro xermo:\n 1. Xirmo USD5\n 2. Xermo USD10\n 3. Xirmo USD20\n 4. Xirmo USD50\n 0. Back"
     )
   );
   if (xermo === 1) {
     // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 30 daqiiqo wicitaanka gudaha. fadlan hubi liiska wadamada iyo isdiiwangalintaada isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );
     if (confirm === 1) {
       return;
     } else if (confirm === 2) {
       alert(
         "waxaad heshay: 300 daqiiqo wicitaan gudaha, 200SMS gudaha, 6daqiiqo ee wicitaan dibada, 2SMS dibada "
       );
     }
     //   if he didn't choose 1 or 2
     else {
       alert("invalid choice");
     }
   } else if (xermo === 2) {
     // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 30 daqiiqo wicitaanka gudaha. fadlan hubi liiska wadamada iyo isdiiwangalintaada isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );
     if (confirm === 1) {
       return;
     } else if (confirm === 2) {
       alert(
         "waxaad heshay: 300 daqiiqo wicitaan gudaha, 200SMS gudaha, 6daqiiqo ee wicitaan dibada, 2SMS dibada "
       );
     }
     //   if he didn't choose 1 or 2
     else {
       alert("invalid choice");
     }
   } else if (xermo === 3) {
     // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 30 daqiiqo wicitaanka gudaha. fadlan hubi liiska wadamada iyo isdiiwangalintaada isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );
     if (confirm === 1) {
       return;
     } else if (confirm === 2) {
       alert(
         "waxaad heshay: 300 daqiiqo wicitaan gudaha, 200SMS gudaha, 6daqiiqo ee wicitaan dibada, 2SMS dibada "
       );
     } else {
       alert("invalid choice");
     }
   } else if (xermo === 4) {
     // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 30 daqiiqo wicitaanka gudaha. fadlan hubi liiska wadamada iyo isdiiwangalintaada isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );
     if (confirm === 1) {
       return;
     } else if (confirm === 2) {
       alert(
         "waxaad heshay: 300 daqiiqo wicitaan gudaha, 200SMS gudaha, 6daqiiqo ee wicitaan dibada, 2SMS dibada "
       );
     } else if (xermo === 0) {
       let anfacType = parseInt(
         prompt(
           "1. ANFAC Gudaha\n 2. ANFAC Gudaha iyo Dibada \n 3. Anfac Dibada 32 dal\n 4. ANFAC SMS\n 0. Back"
         )
       );
       if (confirm === 0) {
         return;
       }
     } else {
       alert("invalid choice");
     }
   } else {
     alert("ivalid choise.");
   }
 }

 // this function handles anfac dibada 32 dal
 function anfacDibada32() {
   // list of xermo's
   let xermo = parseInt(
     prompt(
       "Fadlan dooro xermo\n 1. xirmo USD1 \n 2. xirmo USD5 \n 3. xirmo USD10\n 4.xirmo USD20\n 5. xirmo USD50\n 0.Back"
     )
   );
   if (xermo === 1) {
     // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 30 daqiiqo wicitaanka gudaha. fadlan hubi liiska wadamada iyo isdiiwangalintaada isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );

     if (confirm === 1) {
       return;
     }
     // check if the user accepts the order
     else if (confirm === 2) {
       alert("waxaad heshay 30 daqiiqo,waqtiga uu dhacaayo: " + myDate);
     }
     //   if he didn't choose 1 or 2
     else {
       alert("invalid choice");
     }
   } else if (xermo === 2) {
     // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 30 daqiiqo wicitaanka gudaha. fadlan hubi liiska wadamada iyo isdiiwangalintaada isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );
     if (confirm === 1) {
       return;
     } else if (confirm === 2) {
       alert(
         "waxaad heshay: 300 daqiiqo wicitaan gudaha, 200SMS gudaha, 6daqiiqo ee wicitaan dibada, 2SMS dibada "
       );
     }  
     //   if he didn't choose 1 or 2
     else {
       alert("invalid choice");
     }
     }else if(xermo === 3) {
         // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 30 daqiiqo wicitaanka gudaha. fadlan hubi liiska wadamada iyo isdiiwangalintaada isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );

     if (confirm === 1) {
       return;
     } else if (confirm === 2) {
       alert(
         "waxaad heshay: 300 daqiiqo wicitaan gudaha, 200SMS gudaha, 6daqiiqo ee wicitaan dibada, 2SMS dibada "
       );
     }else {
       alert("invalid choice");
     }
     
     }else if (xermo === 4) {
           // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 30 daqiiqo wicitaanka gudaha. fadlan hubi liiska wadamada iyo isdiiwangalintaada isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );
     if (confirm === 1) {
       return;
     } else if (confirm === 2) {
       alert(
         "waxaad heshay: 300 daqiiqo wicitaan gudaha, 200SMS gudaha, 6daqiiqo ee wicitaan dibada, 2SMS dibada "
       );
     }else {
       alert("invalid choice");
     }
     }else if (xermo === 5) {
        // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 30 daqiiqo wicitaanka gudaha. fadlan hubi liiska wadamada iyo isdiiwangalintaada isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );
     if (confirm === 1) {
       return;
     } else if (confirm === 2) {
       alert(
         "waxaad heshay: 300 daqiiqo wicitaan gudaha, 200SMS gudaha, 6daqiiqo ee wicitaan dibada, 2SMS dibada "
       );
     } else {
       alert("invalid choice");
     }
   }else if(xermo === 0) {
     let anfacType = parseInt(
       prompt(
         "1. ANFAC Gudaha\n 2. ANFAC Gudaha iyo Dibada \n 3. Anfac Dibada 32 dal\n 4. ANFAC SMS\n 0. Back"
       )
     );
   }else {
     alert("invalid choice");
   }
 }
 // this function handles anfac SMS
 function anfacSMS() {
   // list of xermo's
   let xermo = parseInt(
     prompt(
       "Fadlan dooro xermo\n 1. xirmo 50 Cent Gudaha \n 2. xirmo USD1 Gudaha \n 3. xirmo USD1 Dibada\n  0.Back"
     )
   );
   if (xermo === 1) {
     // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 80 SMS Gudaha . fadlan hubi isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );

     if (confirm === 1) {
       return;
     }
     // check if the user accepts the order
     else if (confirm === 2) {
       alert(
         "waxaad heshay 80 SMS Gudaha, waqtiga uu dhacaayo: " + myDate
       );
     }
     //   if he didn't choose 1 or 2
     else {
       alert("invalid choice");
     }
   }else if (xermo === 2) {
      // check if the user accepts the order
      let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 30 daqiiqo wicitaanka gudaha. fadlan hubi liiska wadamada iyo isdiiwangalintaada isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );
     if (confirm === 1) {
       return;
     } else if (confirm === 2) {
       alert(
         "waxaad heshay: 300 daqiiqo wicitaan gudaha, 200SMS gudaha, 6daqiiqo ee wicitaan dibada, 2SMS dibada "
       );
     }  
     //   if he didn't choose 1 or 2
     else {
       alert("invalid choice");
     }
     }else if(xermo === 3) {
                 // check if the user accepts the order
     let confirm = parseInt(
       prompt(
         "Waxaad heleysaa 30 daqiiqo wicitaanka gudaha. fadlan hubi liiska wadamada iyo isdiiwangalintaada isdiiwangalintaada:\n 1. Maya \n 2. Haa"
       )
     );
     if (confirm === 1) {
       return;
     } else if (confirm === 2) {
       alert(
         "waxaad heshay: 300 daqiiqo wicitaan gudaha, 200SMS gudaha, 6daqiiqo ee wicitaan dibada, 2SMS dibada "
       );
     }  
     //   if he didn't choose 1 or 2
     else {
       alert("invalid choice");
     }
   } else if (xermo === 0) {
     let anfacType = parseInt(
       prompt(
         "1. ANFAC Gudaha\n 2. ANFAC Gudaha iyo Dibada \n 3. Anfac Dibada 32 dal\n 4. ANFAC SMS\n 0. Back"
       )
     );
   } else {
     alert("invalid choice");
   }

     }

//END

//FORM VALIDATION

function myFucntion() {
  let user1 = document.querySelector("#user1");
  let user2 = document.querySelector("#user2");
  let user3 = document.querySelector("#user3");

  let message = document.querySelector("#message");
  let output = document.querySelector("#output");
  let display = document.querySelector("#display");

  message.innerHTML = user1.value;
  output.innerHTML = user2.value;
  display.innerHTML = user3.value;
} //END

function monthsProgram() {
  let num = Number(prompt("Enter number btw 1-12"));

  while (isNaN(num) || num < 1 || num > 12) {
    alert("please enter only number btw 1-12");
    num = Number(prompt("please enter number btw 1-12"));
  }
  //use if,else if and else to display month that number stand for
  if (num == 1) {
    alert("January");
  } else if (num == 2) {
    alert("February");
  } else if (num == 3) {
    alert("March");
  } else if (num == 4) {
    alert("April");
  } else if (num == 5) {
    alert("May");
  } else if (num == 6) {
    alert("June");
  } else if (num == 7) {
    alert("July");
  } else if (num == 8) {
    alert("August");
  } else if (num == 9) {
    alert("September");
  } else if (num == 10) {
    alert("October");
  } else if (num == 11) {
    alert("November");
  } else if (num == 12) {
    alert("December");
  }
} //end

function my_Day() {
  //use promt to display the menu and to ask to choose
  let choose = Number(
    prompt(
      "please choose the menu                                                                       1)4:50am     2)6:40am     3)1:00pm      4)4:00pm     5)8:30pm       6)9:00pm      0)break"
    )
  );

  while (isNaN(choose) || choose < 0 || choose > 6) {
    choose = Number(
      prompt(
        "please chose the menu                                                                    1)4:50am     2)6:40am     3)1:00pm      4)4:00pm     5)8:30pm       6)9:00pm      0)break"
      )
    );
  }

  if (choose == 1) {
    alert(
      "i usually get up that time when i wake i go to mosque and i do pray after that i prepare to my self going to  universty"
    );
  }
  if (choose == 2) {
    alert(`when it's 6 and half i go to universty.`);
  }
  if (choose == 3) {
    alert(
      `1:30 i come back the universty and i get lunch then i take quick shower then i take nap.`
    );
  }
  if (choose == 4) {
    alert(
      `when its four i do read my lessons from uni and then i don't have any lesson i do code.`
    );
  }
  if (choose == 5) {
    alert(`when its 8 and half i finish my lessons `);
  }
  if (choose == 6) {
    alert(
      `when its 9 i have conversation with my family or i do watch netfix.`
    );
  }
  if (choose == 0 || choose == "") {
    alert("Good bye");
  }
} //END

function Grade() {
  let Num = Number(prompt("Enter your points and it must be between 0-100"));
  //condition
  while (isNaN(Num) || Num < 0 || Num > 100 || Num == "") {
    alert("The points you entered are wrong, try again");
    Num = Number(prompt("Please enter points and it must be between 0-100"));
  }

  if (Num <= 100 && Num >= 90) {
    alert("Your grade is A");
  } else if (Num <= 89 && Num >= 80) {
    alert("Your grade is B");
  } else if (Num <= 79 && Num >= 70) {
    alert("Your grade is C");
  } else if (Num <= 69 && Num >= 60) {
    alert("Your grade is D");
  } else if (Num <= 59 && Num >= 50) {
    alert("Your grade is E");
  } else if (Num <= 49 && Num >= 0) {
    alert("Your grade is F");
  }
} //end

//MarksCalculator
function MarksCalculator() {
  let total = 0;
  //enter 5 subjects using loop
  for (let i = 1; i <= 5; i++) {
    let subject = Number(prompt(`enter sub${i} marks`));
    while (isNaN(subject) || subject < 0 || subject > 100 || subject == "") {
      alert("please enter only number btw 0-100");
      subject = Number(prompt(`please enter sub${i} marks`));
    }
    total += subject;
  }

  let pre = parseInt(total / 5);
  //use swich

  switch (true) {
    case pre <= 100 && pre >= 90:
      alert(
        `the total of 5 subjects are ${total}, the pracentage is ${pre}% and your grade is A`
      );
      break;
    case pre <= 89 && pre >= 80:
      alert(
        `the total of 5 subjects are ${total}, the pracentage is ${pre}% and your grade is B`
      );
      break;
    case pre <= 79 && pre >= 70:
      alert(
        `the total of 5 subjects are ${total}, the pracentage is ${pre}% and your grade is C`
      );
      break;
    case pre <= 69 && pre >= 60:
      alert(
        `the total of 5 subjects are ${total}, the pracentage is ${pre}% and your grade is D`
      );
      break;
    case pre <= 59 && pre >= 0:
      alert(
        `the total of 5 subjects are ${total}, the pracentage is ${pre}% and your grade is F`
      );
      break;
  }
} //END

//BREAK
function Break() {
  console.clear();
  for (let count = 1; count <= 5; count++) {
    let ask = prompt(
      "Enter mohamed to break the program or something else to print it in console"
    );
    if (ask == "mohamed") {
      break;
    }
    console.log(`${count}. ${ask}`);
  }
} //END

//CONT
function Continue() {
  console.clear();
  for (let i = 1; i <= 5; i++) {
    let name = prompt(
      "enter mohamed to continue or some thing else to print it"
    );
    if (name == "mohamed") {
      continue;
    }
    console.log(`${i}. ${name}`);
  }
} //END
function min_max() {
  console.clear();
  console.log(166, 90, 876, 78);
  //max
  let max = Math.max(166, 90, 876, 78);
  let min = Math.min(166, 90, 876, 78);
  console.log("The max number is " + max + " and the min is " + min);
} //END

//multiplication
function multiplication () {
  // let number = 10;
let rows = prompt("Enter rows: ")
let cols = prompt("Enter columns: ")

if(rows == "" ||  rows == null) {
rows = 10;
}
if(cols == "" || rows ==  null) {
cols = 10;
}
createTable(rows, cols);

function createTable(rows, cols) {
let output = "<table border='1' width = '500' cellpadding='3' cellspacing='6'>";
   for (let i = 1; i<= rows; i++) {
       output = output + "<tr>";
           for (let j = 1; j <= cols; j++) {
              output = output + "<td>" + `${j} x ${i} =` +i * j + "</td>";
           }
           output = output + "</tr>";
           j= 1;

   }
   output = output + "</table>";
   document.getElementById("table").innerHTML = output;
}
}
//END
//Average
function Average() {
  console.clear();
  num = [67, 89, 45];
  console.log((num[0] + num[1] + num[2]) / num.length);
}
