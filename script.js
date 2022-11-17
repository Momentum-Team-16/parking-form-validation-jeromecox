console.log("Add validation!");

const parkForm = document.querySelector("#container");

parkForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let numDays = document.querySelector("#days");
  let total = document.createElement("div");
  total.classList.add("total");
  let totalText = numDays.value * 5;
  total.innerText = `Total Cost = $${totalText}`;

  parkForm.appendChild(total);
});
