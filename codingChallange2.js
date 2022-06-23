'use strict'
const calcAvg = (s1,s2,s3)  =>{
    return  Number((s1+s2+s3)/3);
} 

    
    var dolphins =Number(calcAvg(85,54,41));



    var koalas = Number(calcAvg(23,34,27));


function checkWinner(avgd,avgk){
  
    if(avgk>=2*avgd){
        console.log(`koalas wins ${avgk} vs ${avgd}`);
        return avgk;
    }
    else if(avgd>=2*avgk){
        console.log(`dolphins win ${avgd} vs ${avgk}`);
        return avgd;
    }

    else{
        return`No one is winner`;
    }

}


console.log(checkWinner(dolphins,koalas));

 //coding challange 2

 function calcTip(bill){
    if(bill>=50 && bill<=300){
        var tip =  (bill*15)/100;
        return tip;
    }
    else{
        var tip = (bill*20)/100
        return tip;
    }
 }

 var billvalues = new Array(125,555,44);

 var tips = [calcTip(billvalues[0]),calcTip(billvalues[1]),calcTip(billvalues[2])];
 var finalBill  = [calcTip(billvalues[0])+billvalues[0],calcTip(billvalues[1])+billvalues[1],calcTip(billvalues[2])+billvalues[2]];
 console.log(billvalues);
 console.log(tips);
 console.log(finalBill);

