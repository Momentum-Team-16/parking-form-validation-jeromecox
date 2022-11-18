console.log("Add validation!");

const parkForm = document.querySelector("#container");

// Solves problem 4 with constant price per day
// parkForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let numDays = document.querySelector("#days");
//   let total = document.createElement("div");
//   total.classList.add("total");
//   let totalText = numDays.value * 5;
//   total.innerText = `Total Cost = $${totalText}`;

//   parkForm.appendChild(total);
// });

// Solves problem 5 with changing price for weekend
let dayPrice = [7, 5, 5, 5, 5, 5, 7];

parkForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let dateDiv = document.querySelector("#start-date");
  let startDate = dateDiv.value;
  console.log(startDate);
  let newDate = new Date(startDate);
  console.log(`new date: ${newDate}`);
  let dayOfWeek = newDate.getDay();
  console.log(`index of day: ${dayOfWeek}`);

  console.log(dayPrice[dayOfWeek]);

  let numDays = +document.querySelector("#days").value;
  console.log(`number of days: ${numDays}`);

  let lastDay = dayOfWeek + numDays;
  console.log(`index of last day + 1: ${lastDay}`);

  let totalText = 0;
  for (i = dayOfWeek; i < lastDay; i++) {
    totalText += dayPrice[dayOfWeek];
  }
  console.log(`totalText: ${totalText}`);

  let total = document.createElement("div");
  total.classList.add("total");
  total.innerText = `Total Cost = $${totalText}`;

  parkForm.appendChild(total);

  let cardNum = document.querySelector("#credit-card").value;
  console.log(cardNum);

  // function validateCardNumber(number) {
  //   var regex = new RegExp("^[0-9]{16}$");
  //   if (!regex.test(cardNum)) return false;

  //   return luhnCheck(cardNum);
  // }

  // function luhnCheck(val) {
  //   var sum = 0;
  //   for (var i = 0; i < val.length; i++) {
  //     var intVal = parseInt(val.substr(i, 1));
  //     if (i % 2 == 0) {
  //       intVal *= 2;
  //       if (intVal > 9) {
  //         intVal = 1 + (intVal % 10);
  //       }
  //     }
  //     sum += intVal;
  //   }
  //   return sum % 10 == 0;
  // }
});
