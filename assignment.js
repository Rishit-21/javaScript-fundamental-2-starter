//lecture: (values and vaiables) ,(data type),(let const and var)
var country="India";
const continent ="ASIA"
var population=134000000
console.log(country)
console.log(continent)
console.log(population)
isIsland = 0
var language="Chinese"
console.log(Boolean(isIsland))
console.log(language)
country="INDIA";
console.log(typeof(isIsland),typeof(population), typeof(country),typeof(language))

//lecture basic operators
console.log(population/2)
console.log(population+1)
var finlandPop=60000000

if(population>finlandPop){
    console.log("yes")
}
else
{
    console.log("no")
}
//taking decision if/else statements
var avgPop=3300000
var isAvg=population<avgPop
    console.log(isAvg)

if(population>avgPop){
    console.log("india's population is above average")
}
else{
    console.log("india'population is" , population-avgPop,  "belopw avg")
    
}
// type conversin and coercioin
var operation=5 + 6 + '4' + 9 - 4 - 2;
console.log(operation)

//equality operators
var numBorders=1;
if(Number(numBorders) ===1){
    console.log("only one neighbour");
}
else if(numBorders>1){
    console.log("more than one neighbours");
}
else{
    console.log("your country has 0 neighbour");
}
//logical operators
let name1 = "sarah"
if(population<5000000 && language=='English' && isIsland){
    console.log(`you should leave in ${country} :)`)
}
else{
    console.log(`${country} does not  meet your criteria :(`)
}
//string and template literals
var description=`${country} is in  ${continent} and its ${population} people speak ${language}`
console.log(description)

//the switch statement 
switch(language){
    case 'Chinese':
    case 'Mandarin':
        console.log("Most number of native speaker!");
        break;
    case 'Spanish':
        console.log("2nd place in number of native speakers");
        break;
    case 'English':
        console.log("3rd place");
        break;
    case 'Hindi':
        console.log("number  Four");
        break;
    case 'Arabic':
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great langauge to");
}
// condition ternary operators  on hand 
 const age =23;
 age >=18 ? console.log("I like to dirnk wine 🍷"):
 console.log("I like to dirnk water");
 const drink = age >=18 ? 'wine 🍷' : 'water 🌊';
 console.log(drink);
  
 console.log(`I like to drink ${age >=18 ? 'wine' : "water"}`)

 //lecture the conditional(ternary) operator
 console.log(`${country}'s ${ population>avgPop ?  'population is above avg':  'populaiton is below avg'}`)





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////fundamental 2


console.log("///////////////////////////////////////////////////////////////////////////");
console.log("///////////////////////////////////////////////////////////////////////////");
console.log("///////////////////////////////////////////////////////////////////////////");
console.log("///////////////////////////////////////////////////////////////////////////");
console.log("///////////////////////////////////////////////////////////////////////////");
console.log("///////////////////////////////////////////////////////////////////////////");
console.log("///////////////////////////////////////////////////////////////////////////");
console.log("///////////////////////////////////////////////////////////////////////////");
console.log("///////////////////////////////////////////////////////////////////////////");
console.log("///////////////////////////////////////////////////////////////////////////");
console.log("///////////////////////////////////////////////////////////////////////////");
console.log("///////////////////////////////////////////////////////////////////////////");
console.log("///////////////////////////////////////////////////////////////////////////");



 // function on hand
'use strict'
const calcAge = birthyear  => 2037 - birthyear;
const age3 = calcAge(1991);
console.log(age3);


const yearsUntilRetirement = (birthyear,firstName)=>{
    const age = 2037 - birthyear;
    const retitirement = 65 - age;

    return `${firstName} retires in ${retitirement} years`;

}

console.log(yearsUntilRetirement(1991,'Rishit'));
console.log(yearsUntilRetirement(1980,'jonas'));
//lecture function

function describeCountry(country,pop,capitalCity){
    return`${country} has ${pop} and its capital is ${capitalCity}`;

}

var description = describeCountry(country,population,'Delhi');
console.log(description);
console.log(describeCountry('uk',50000000,'london'));
console.log(describeCountry('canada',30000000,'Toronto'));
// function declaration vs expression

function percentageofworld(pop){
    return (pop*10)/7900000000;
    //return `${country}'s has ${pop} population so its about ${perofcountry}% of worlds `;
}
console.log(percentageofworld(14410000000,'China'));
console.log(percentageofworld(500000000,'canadA'));
console.log(percentageofworld(13400000000,country));

var perOfWorld= function(pop,country){
    return `${country} has ${pop} which is  ${(pop*10)/7900000000} % world's population`;
}
var popPer=perOfWorld(14410000000,'china');
console.log(popPer);

//arrow function

const perOfWorld3 = (pop,country)=>{
    return `${country} has ${pop} which is  ${(pop*10)/7900000000} % world's population`;
}
var popPerWorld = perOfWorld3(1441000000,'China');
console.log(popPerWorld)

////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

//////////Function Calling other function On hand

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples,oranges){
    const applesPieces = cutFruitPieces(apples);
    const orangespieces = cutFruitPieces(oranges);


    const juice = `jucie with ${applesPieces} pieces of  apples and ${orangespieces}  pieces of  oranges.`;
    return juice;
}
console.log(fruitProcessor(4,3));

// lecture function calling other function
function describePopulation(popCountry,country){
    const popu = percentageofworld(popCountry);

    const describepop = `${country} has ${popCountry} people, which is about ${popu} of the world`
    return describepop;
}

console.log(describePopulation(14410000000,'China'));
console.log(describePopulation(14000000,"Canada"));
console.log(describePopulation(1340000000,country));

var neighbourCountry = ['china','banglaesh','nepal','pakistan','afganistan'];
console.log(neighbourCountry);
neighbourCountry.push('Utopia');
console.log(neighbourCountry);
dissolved = neighbourCountry.pop('Utopia')
console.log(dissolved)
console.log(neighbourCountry);

if(neighbourCountry.includes('Germany')){
    console.log("the country is in center europe");
}
else{
    console.log("the country is no in center europe");
}
 console.log(neighbourCountry.indexOf('nepal'));

 neighbourCountry[2]='Bhutan';
 console.log(neighbourCountry)

