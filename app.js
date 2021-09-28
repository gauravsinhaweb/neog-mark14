const initialAmount = document.querySelector("#initialamount");
const quantity = document.querySelector("#quantity");
const currentAmount = document.querySelector("#currentamount");
const checkBtn = document.querySelector("#button");
const outPut = document.querySelector("#output");

function profitLossCalculation(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var losspercentage = (loss / initial) * 100;
    outputFunction(
      `Hey it is loss of ${loss.toFixed(2)} and of ${losspercentage.toFixed(
        2
      )}% loss ☹️`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    outputFunction(
      `Hey it is profit of ${profit.toFixed(
        2
      )} and of ${profitPercentage.toFixed(2)}% profit 🎉`
    );
  } else {
    outputFunction("No Loss and No Gain!! ");
  }
}
function outputFunction(msg) {
  outPut.innerText = msg;
}
function clickHandler() {
  if (
    initialAmount.value === "" &&
    quantity.value === "" &&
    currentAmount.value === ""
  ) {
    alert("Enter all the values");
  } else {
    console.log(initialAmount.valu);
    var iA = Number(initialAmount.value);
    var qty = Number(quantity.value);
    var cA = Number(currentAmount.value);
    profitLossCalculation(iA, qty, cA);
  }
}

checkBtn.addEventListener("click", clickHandler);
