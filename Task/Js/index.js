
function calculateAmount(){
    sellingPrice = document.getElementById('sp').value 
    quantity = document.getElementById('qtyBought').value
    let amount = sellingPrice * quantity
    document.getElementById('amt').value = (amount )  
                   
    sellingPrice1 = document.getElementById('sp1').value 
    quantity1 = document.getElementById('qtyBought1').value
    let amount1 = sellingPrice1 * quantity1
    document.getElementById('amt1').value = (amount1 )  

    sellingPrice2 = document.getElementById('sp2').value 
    quantity2 = document.getElementById('qtyBought2').value
    let amount2 = sellingPrice2 * quantity2
    document.getElementById('amt2').value = (amount2 )  

    sellingPrice3 = document.getElementById('sp3').value 
    quantity3 = document.getElementById('qtyBought3').value
    let amount3 = sellingPrice3 * quantity3
    document.getElementById('amt3').value = (amount3 )  

    sellingPrice4 = document.getElementById('sp4').value 
    quantity4 = document.getElementById('qtyBought4').value
    let amount4 = sellingPrice4 * quantity4
    document.getElementById('amt4').value = (amount4 )  

    sellingPrice5 = document.getElementById('sp5').value 
    quantity5 = document.getElementById('qtyBought5').value
    let amount5 = sellingPrice5 * quantity5
    document.getElementById('amt5').value = (amount5 )  

    sellingPrice6 = document.getElementById('sp6').value 
    quantity6 = document.getElementById('qtyBought6').value
    let amount6 = sellingPrice6 * quantity6
    document.getElementById('amt6').value = (amount6 )  

    sellingPrice7 = document.getElementById('sp7').value 
    quantity7 = document.getElementById('qtyBought7').value
    let amount7 = sellingPrice7 * quantity7
    document.getElementById('amt7').value = (amount7 )  
    
    sellingPrice8 = document.getElementById('sp8').value 
    quantity8 = document.getElementById('qtyBought8').value
    let amount8 = sellingPrice8 * quantity8
    document.getElementById('amt8').value = (amount8 )  

    sellingPrice9 = document.getElementById('sp9').value 
    quantity9 = document.getElementById('qtyBought9').value
    let amount9 = sellingPrice9 * quantity9
    document.getElementById('amt9').value = (amount9 )  
  
}
// total amount function 
let totalAmount  ;
function calculateTotalAmout() {
    totalAmount  = Number( document.getElementById('amt').value) + 
             Number( document.getElementById('amt1').value )+
             Number( document.getElementById('amt2').value )+
             Number( document.getElementById('amt3').value )+
             Number( document.getElementById('amt4').value )+
             Number( document.getElementById('amt5').value )+
             Number( document.getElementById('amt6').value )+
             Number( document.getElementById('amt7').value )+
             Number( document.getElementById('amt8').value )+
             Number( document.getElementById('amt9').value );
    document.getElementById('totalAmount').value = (totalAmount )
}


function calculateProfit() {
    amount = document.getElementById('amt').value
    coursePrice = document.getElementById('cp').value
    quantity = document.getElementById('qtyBought').value

    amount1 = document.getElementById('amt1').value
    coursePrice1 = document.getElementById('cp1').value
    quantity1 = document.getElementById('qtyBought1').value

    amount2 = document.getElementById('amt2').value
    coursePrice2 = document.getElementById('cp2').value
    quantity2 = document.getElementById('qtyBought2').value

    amount3 = document.getElementById('amt3').value
    coursePrice3 = document.getElementById('cp3').value
    quantity3 = document.getElementById('qtyBought3').value

    amount4 = document.getElementById('amt4').value
    coursePrice4 = document.getElementById('cp4').value
    quantity4 = document.getElementById('qtyBought4').value


    amount5 = document.getElementById('amt5').value
    coursePrice5 = document.getElementById('cp5').value
    quantity5 = document.getElementById('qtyBought5').value

    amount6 = document.getElementById('amt6').value
    coursePrice6 = document.getElementById('cp6').value
    quantity6 = document.getElementById('qtyBought6').value

    amount7 = document.getElementById('amt7').value
    coursePrice7 = document.getElementById('cp7').value
    quantity7 = document.getElementById('qtyBought7').value

    amount8 = document.getElementById('amt8').value
    coursePrice8 = document.getElementById('cp8').value
    quantity8 = document.getElementById('qtyBought8').value

    amount9 = document.getElementById('amt9').value
    coursePrice9 = document.getElementById('cp9').value
    quantity9 = document.getElementById('qtyBought9').value


  

    let profit = 
               Number( amount - (coursePrice * quantity))+
               Number( amount1 - (coursePrice1* quantity1))+
               Number( amount2 - (coursePrice2 * quantity2))+
               Number( amount3 - (coursePrice3 * quantity3))+
               Number( amount4 - (coursePrice4 * quantity4))+
               Number( amount5 - (coursePrice5 * quantity5))+
               Number( amount6 - (coursePrice6 * quantity6))+
               Number( amount7 - (coursePrice7 * quantity7))+
               Number( amount8 - (coursePrice8 * quantity8))+
                Number(amount9 - (coursePrice9 * quantity9));

    document.getElementById('prof').value =  profit 
}

   
