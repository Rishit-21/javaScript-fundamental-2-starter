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
 //coding challenge
  var marksInfo ={name :'Mark Miller',
                   mass: 78,
                    height:1.69,
                bmi: function(){
                    this.bbmi= this.mass/this.height**2;
                    return this.bbmi;                   
                } }
var johnsInfo={name: 'John Smith',
                mass: 92,
                height:1.95,
            bmi:function(){
               this.bbmi= this.mass/this.height**2;
                return this.bbmi;
            } }
            console.log(marksInfo.bmi(),johnsInfo.bmi());

            if(marksInfo.bmi()>johnsInfo.bmi()){
                console.log(`${marksInfo.name},s BMI ${marksInfo.bmi()} is higher than ${johnsInfo.name}'s ${johnsInfo.bmi()}`);
            }
            else{
                console.log(`${johnsInfo.name},s BMI ${johnsInfo.bmi()} is higher than ${marksInfo.name}'s ${marksInfo.bmi()}`); 
            }
// coding challange 4
 var bills =[22,295,176,440,37,105,10,1100,86,52];
 var tips=[];
 var totals =[];

 for(i=0; i<bills.length;i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i]+tips[i]);


 }
 console.log(`tips is ${tips}`);
 console.log(` total amount is${totals}`);

//arr=[1,2,3,4,5,7];



    function calcAverage(arr){
        var sum=0;
        for(i in arr)
            sum=sum+arr[i];
            return sum/arr.length;
        }
       // var avg= sum/totals.length;
    
      
   
    
 

 console.log(calcAverage(totals))

