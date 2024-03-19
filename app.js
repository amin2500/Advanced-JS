// find the smallest number
// find the biggest number
// count evens
// count odds
// remove duplicates from an array
// how much is true
// how much is false
// check if all values are truthy
// turn All Elements in an Array into 0

// 1.Find the smallest number
function smallestNum(array) {
    let smallestNum;
    for (let i = 0; i < array.length; ++i) {
      if (smallestNum === undefined) {
        smallestNum = array[i];
      } else if (smallestNum > array[i]) {
        smallestNum = array[i];
      }
    }
    return smallestNum;
  }
  console.log(smallestNum([2, -3, 4, 6, -2, 34]));
  
  // 2.Find the biggest number
  function biggestNum(array) {
    let biggestNum;
    for (let i = 0; i < array.length; ++i) {
      if (biggestNum === undefined) {
        biggestNum = array[i];
      } else if (biggestNum < array[i]) {
        biggestNum = array[i];
      }
    }
    return biggestNum;
  }
  console.log(biggestNum([2, 4, 5, 344, 4234, 4]));
  
  // 3.Count evens
  
  function countEvens(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        count += 1;
      }
    }
    return count;
  }
  console.log(countEvens([2, 4, 5, 6, 20, 50]));
  
  // 4.Count odds
  
  function countOdds(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        count += 1;
      }
    }
    return count;
  }
  console.log(countOdds([3, 5, 6, 3, 5]));
  
  // 5.Remove duplicates from an array
  
  function removeDu(array) {
    let newarr = [];
    for (let i = 0; i < array.length; i++) {
      if (!newarr.includes(array[i])) {
        newarr.push(array[i])
      }
    }
    return newarr
  }
  console.log(removeDu([2,5,6,7,5,5,2]))
   
  // 6.how much is true
  
  function truecount(array){
    let count=0
    for (let i = 0; i < array.length; i++) {
     if(array[i]===true)
     count+=1
      
    }
    return count
  }
  console.log(truecount([true,false,true,false]))
  
  // 7.how much is false
  function falsecount(array){
    let count=0
    for (let i = 0; i < array.length; i++) {
     if(array[i]===false)
     count+=1
      
    }
    return count
  }
  console.log(falsecount([true,false,false,true,false,false,true]))