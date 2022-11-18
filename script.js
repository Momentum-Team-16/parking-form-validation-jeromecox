console.log("Add validation!");

const parkForm = document.querySelector("#container");
let prices = [
  7, 5, 5, 5, 5, 5, 7, 7, 5, 5, 5, 5, 5, 7, 7, 5, 5, 5, 5, 5, 7, 7, 5, 5, 5, 5,
  5, 7, 7, 5, 5, 5, 5, 5, 7, 7, 5, 5, 5, 5, 5, 7, 7, 5, 5, 5, 5, 5, 7, 7,
];

// console.log(dayArray[3].day);

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
parkForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let dateDiv = document.querySelector("#start-date");
  let startDate = dateDiv.value;
  console.log(startDate);
  let dayOfWeek = moment(startDate).format("dddd");
  console.log(dayOfWeek);

  switch (dayOfWeek) {
    case "Sunday":
      priceIndex = 0;
      break;
    case "Monday":
      priceIndex = 1;
      break;
    case "Tuesday":
      priceIndex = 2;
      break;
    case "Wednesday":
      priceIndex = 3;
      break;
    case "Thursday":
      priceIndex = 4;
      break;
    case "Friday":
      priceIndex = 5;
      break;
    case "Saturday":
      priceIndex = 6;
  }

  console.log(`priceIndex: ${priceIndex}`);

  console.log(`price for that day: ${prices[priceIndex]}`);

  let numDays = document.querySelector("#days");
  console.log(`number of days: ${numDays.value}`);

  let totalText = 0;
  for (
    let i = priceIndex;
    i < Number(priceIndex) + Number(numDays.value);
    i++
  ) {
    totalText += prices[i];
  }
  console.log(`totalText: ${totalText}`);

  let total = document.createElement("div");
  total.classList.add("total");
  total.innerText = `Total Cost = $${totalText}`;

  parkForm.appendChild(total);
});
