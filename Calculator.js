var input = document.querySelectorAll(".input-Box")
var btnClick = document.querySelector("#btn-TellMe")
var output = document.querySelector("#output")

btnClick.addEventListener("click", clickHandler)


function clickHandler(){
    console.log("clicked")
    var initialPrice = input[0].value;
    var noOfStocks = input[1].value;
    var currentPrice = input[2].value;
    var profitLoss = (currentPrice * noOfStocks) - (initialPrice * noOfStocks)
    if (profitLoss>0){
        var profitPercentage = (profitLoss/(initialPrice * noOfStocks)) * 100
        output.innerText = "Hurray 🥳 You Have a profit of Rs " +profitLoss+" And the profit percentage of "+ profitPercentage + "%"

    }else if(profitLoss<0){
        var lossPercentage = (profitLoss/(initialPrice * noOfStocks)) * 100
        output.innerText = "Unfortunately 😥 You Have a Loss of Rs " +profitLoss+" And the loss percentage of "+ lossPercentage + "%"
    }else{
        output.innerText = "You haven't made any profit or loss"
    }
}