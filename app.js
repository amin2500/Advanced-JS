// find the smallest number
// find the biggest number
// count evens
// count odds
// remove duplicates from an array
// how much is true
// how much is false
// check if all values are truthy
// turn All Elements in an Array into 0

// 1.find the smallest number
 function smallestNumber(array){
  let smallestnum
  for (let i = 0; i < array.length; i++) {
    if(smallestnum===undefined){
      smallestnum=array[i]
    }
    else if(smallestnum>array[i]){
      smallestnum=array[i]
    }
  }
  return smallestnum
 }
 console.log(smallestNumber([2,4,5]))

//  2.find the biggest number
function biggestnum(array){
  let biggestnum
  for (let i = 0; i < array.length; i++) {
    if(biggestnum===undefined){
      biggestnum=array[i]
    }
    else if (biggestnum<array[i]){
      biggestnum=array[i]
    }
  }
  return biggestnum
}
console.log(biggestnum([2,4,3453,54353,54,453]))

// 3.count evens
function evencount(array){
  let count=0
  for (let i = 0; i < array.length; i++) {
   if(array[i]%2===0){
    count+=1
   }
  }
  return count
}
console.log(evencount([2,4,5,1,4,2]))

// 4.count odds
function oddcount(array){
  let count=0
  for (let i = 0; i < array.length; i++) {
    if(array[i]%2!==0){
      count+=1
    }
  }
  return count
}
console.log(oddcount([2,4,5,6,3]))

// 5. remove duplicates from an array
function removeDu(array){
  let newarr=[]
  for (let i = 0; i < array.length; i++) {
   if(!newarr.includes(array[i])){
       newarr.push(array[i])
   }
  }
  return newarr
}
console.log(removeDu([2,4,5,4,2,5]))

// 6. how much is true
function truecount(array){
  let count=0
  for (let i = 0; i < array.length; i++) {
    if(array[i]===true){
      count+=1
    }
  }
  return count
}
console.log(truecount([true,true,false]))

// 7.how much is false
function falsecount(array){
  let count=0
  for (let i = 0; i < array.length; i++) {
    if(array[i]===false){
      count+=1
    }
  }
  return count
}
console.log(falsecount([false,true,false]))

// 8.check if all values are truthy
function truthy(array){
  for (let i = 0; i < array.length; i++) {
    if(!array[i]===true){
      return false
    }
  }
  return true
}
console.log(truthy([2,2,5,-1,"Hi",""]))

// 9 turn All Elements in an Array into 0
function arrayintozero(array){
  let newarr=[]
  for (let i = 0; i < array.length; i++) {
    if(!newarr.includes (array[i])){
      newarr.push(0)
    }
  }
  return newarr
}
console.log(arrayintozero([3,4,-1,"Hi",false,""]))