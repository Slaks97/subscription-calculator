const subTypeElement = document.querySelector("#subscription");
const subDurationElement = document.querySelector("#months");
let result = document.querySelector(".result");
let subType = "basic";
let subDuration = Number("1");

subTypeElement.addEventListener("change", function(e) {
  subType = e.target.value;  
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function(e) {
  subDuration = Number(e.target.value);
  updateSubscriptionDiv();
});

const updateSubscriptionDiv = function() {
  let monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
      monthlyCost = 10;
  }
  const total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} ${subType} plan for $${total}.`;
};