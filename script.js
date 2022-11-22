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
// dayPrice array = price for each day of the week, starting with Sunday
let dayPrice = [7, 5, 5, 5, 5, 5, 7];

parkForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let startDateField = document.querySelector("#start-date-field");
  let startDateError = document.querySelector("#start-date");
  let startDate = document.querySelector("#start-date").value;
  console.log(`Start date: ${startDate}`);

  let newDate = new Date(startDate);
  console.log(`new date: ${newDate}`);

  let today = new Date();
  console.log(`today's date: ${today}`);

  if (newDate < today) {
    startDateField.classList.add("input-invalid");
    startDateError.setCustomValidity("Date cannot be in the past");
    startDateError.reportValidity();
  }

  let dayOfWeek = newDate.getDay();
  console.log(`index of day: ${dayOfWeek}`);

  console.log(`Start date cost: $${dayPrice[dayOfWeek]}`);

  let numDays = +document.querySelector("#days").value;
  console.log(`number of days: ${numDays}`);

  let expDateField = document.querySelector("#expiration-field");
  let expDateError = document.querySelector("#expiration");
  let expDate = document.querySelector("#expiration").value;
  console.log(`Exp Date: ${expDate}`);
  let expYearMonth = +(expDate.slice(3) + expDate.slice(0, 2));
  console.log(`Exp YearMonth: ${expYearMonth}`);

  let year = String(today.getFullYear());
  testYear = typeof year;
  console.log(`year is type: ${testYear}`);
  let todayYear = year.slice(2);
  let todayMonth = today.getMonth() + 1;
  let todayYearMonth = +(todayYear + todayMonth);
  console.log(`Today YearMonth: ${todayYearMonth}`);

  if (expYearMonth < todayYearMonth) {
    expDateField.classList.add("input-invalid");
    expDateError.setCustomValidity("Expiration date cannot be in the past");
    expDateError.reportValidity();
  }

  let lastDay = dayOfWeek + numDays;
  console.log(`index of last day + 1: ${lastDay}`);

  let totalText = 0;
  while (dayOfWeek < lastDay) {
    let i = dayOfWeek % 7;
    totalText += dayPrice[i];
    dayOfWeek++;
  }
  console.log(`totalText: ${totalText}`);

  let total = document.createElement("div");
  total.classList.add("total");
  total.innerText = `Total Cost = $${totalText}`;

  parkForm.appendChild(total);

  let creditCard = document.querySelector("#credit-card-field");
  let cardTest = document.querySelector("#credit-card");
  let cardNum = document.querySelector("#credit-card").value;
  console.log(`credit card number: ${cardNum}`);

  function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number)) return false;

    return luhnCheck(number);
  }

  function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
      var intVal = parseInt(val.substr(i, 1));
      if (i % 2 == 0) {
        intVal *= 2;
        if (intVal > 9) {
          intVal = 1 + (intVal % 10);
        }
      }
      sum += intVal;
    }
    return sum % 10 == 0;
  }

  if (validateCardNumber(cardNum) === false) {
    creditCard.classList.add("input-invalid");
    cardTest.setCustomValidity("Please enter a valid credit card number");
    cardTest.reportValidity();
  } else {
    creditCard.classList.remove("input-invalid");
  }
});
