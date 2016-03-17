/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    var i=0;
function calculate() {
    var num1=parseInt($('#input1').val());
    var num2=parseInt($('#input2').val());
   
    if (checkInput1 (num1,num2)) {
        var res = eval(num1 + $('#process').val() + num2);
        $('#output').val(res);
    }
    else {
        $('#error').html("You must check your numbers");
        i++;
    }
}
function checkInput1 (num1,num2) {
    if (!isNaN(num1)&& !isNaN(num2)) {
        return true;
    }
    return false;
}



