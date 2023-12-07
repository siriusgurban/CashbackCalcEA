let input = document.querySelector("#inputNumber2");
let showAction = document.querySelector("#showAction");
let xercle = document.querySelector("#xercle");
let goster = document.querySelector("#goster");
let tbody = document.querySelector("tbody");

console.log(xercle);

const myObj = {
    sumCashback: 0,
    currentCashback: 0,
    currentInput:0,
    history: [],
    totalCashback: function (amount) {
        
        let inpCashback = (+amount*0.05).toFixed(2);
        this.sumCashback = this.sumCashback + +inpCashback;
        this.currentInput += amount;

        let objHistory = {
            currentCashback: inpCashback,
            sumCashback: this.sumCashback,
            currentInput: this.currentInput
        };

        this.history.push(objHistory);
    },

}

xercle.addEventListener("click", () => {
    myObj.totalCashback(+input.value)
    showAction.innerHTML = (+input.value * 0.05).toFixed(2);
    input.value = "";
})

goster.addEventListener("click", () => {

    let data = myObj.history.map((elem, index) => {

        return `<tr>
        <th scope="row">${index + 1}</th>
        <td>${elem.currentInput}</td>
        <td>${elem.currentCashback}</td>
        <td>${myObj.sumCashback}</td>
    </tr>
    `}).join("");

    tbody.innerHTML = data;
})
