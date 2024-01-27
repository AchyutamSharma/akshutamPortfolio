let Base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";///usd/inr.json
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json

const dropdowns = document.querySelectorAll(".mid-container select");
const btn = document.getElementById("submit-btn");
const fromCurr = document.querySelector(".from-dropdown");
const toCurr = document.querySelector(".to-dropdown");
const msg = document.querySelector(".msg");


for (let select of dropdowns) {
    for ( currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
      
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if(select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }


        select.append(newOption);
    }

    select.addEventListener("change",(event)=>{
        updateFlag(event.target);
    });
}

const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

    console.log(currCode);
    console.log(countryCode);

};

let updateExchangeRate = async () =>{
    let amount = document.querySelector("input");
    let amtVal = amount.value;

    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = 1;
    }
    
    const URL = `${Base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    let ConvertAmt = (amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal} ${fromCurr.value} - ${ConvertAmt} ${toCurr.value}`;

}
window.addEventListener("load",()=>{
    updateExchangeRate();
});

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchangeRate();
});

