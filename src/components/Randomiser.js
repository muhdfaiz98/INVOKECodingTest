import React from "react";
import { useState } from "react";

export default function Randomiser(){
    const [min, setMinVal] = useState(1);
    const [max, setMaxVal] = useState(10);
    const [RandInt, setRandInt]= useState(0);
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var s = "Next "  + RandInt +  " numbers generated";
    const result = s.replace(/\b\d\b/g, m => numbers[m])

    const handleClick = () => {
        setRandInt(Math.floor(Math.random() * (max - min) ) + min);
    }

    function genNum(){
      var RandInteger = Math.floor(Math.random() * (9 - 1) ) + 1;
      return RandInteger;
    }

    function genRandInt(){
        let num = '';
        for(let i=1; i<=RandInt; i++){
          if(i<RandInt){
            num += genNum() + ', ';
          } 
          else{
            num += genNum();
          }
        }
        return num;
      }

    function randomNumberStringGen(num){
      var numString = '';
      for (var i = 0; i < num; i++){
          numString += num + '';
      }
      return numString
  }

  function sum(numString){
      var numStringSplit = numString.split(', ')
      var generatedNum = ''
      for (var i=0; i< numStringSplit.length; i++){
        if (i+1 != numStringSplit.length){
          generatedNum += randomNumberStringGen(numStringSplit[i]) + ' + ';
        }
        else {
          generatedNum += randomNumberStringGen(numStringSplit[i])
        }
      }
      //generatedNum = full string of numbers with ' + ' symbol;
      var sumArray = generatedNum.split(' + ');
      var sum = 0;
      for (var i = 0; i < sumArray.length; i++){
        sum += parseInt(sumArray[i]);
      }
      var finalString = generatedNum + ' = ' + sum;
      return finalString
  }
  var genRandInt = genRandInt()



    return(
        <div>
        <p>1st number is : {RandInt}</p>
        <p>{result} : {genRandInt}</p>
        <p>{sum(genRandInt)}</p>
        <button className="Button" onClick={handleClick}>START</button>
        </div>
    )
}