/*

// lesson 11a: Modifying the last value in the array to 99

const nums = [10, 20, 30];

nums[2] = 99;

console.log(nums);

// Lesson 11b: Create function that takes an array and returns last value in the array

function getLastValue(array) {
  const lastValue = array.length - 1;
  return array[lastValue];
}

console.log(getLastValue([1, 2, 3, 4, 5]));
console.log(getLastValue(['what', 'is', 'your', 'name?']))

//Lesson 11c: Create functions that takes an array and returns an array where the first and last values are swapped(or switched) 

function arraySwap(array) {
  const lastIndex = array.length - 1;

  const lastIndexValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastIndexValue;
  array[lastIndex] = firstValue;

  return array;
}

console.log(arraySwap([1, 2, 3, 4, 5]));
console.log(arraySwap(['hello', 'world', 'how', 'are', 'you']))

// lesson 11d: creating a loop that counts from 0 to 10 but by 2, as in 0, 2, 4, ..., 8, 10.
  
  for (let i = 0; i <=10; i += 2) {
    console.log(i);
  }

  //Lesson 11e: creating a loop that counts from 5 to 0

  for (let i = 5; i >= 0; i--) {
    console.log(i);
  }

  //lesson 11f: Use while loops in lld and 11e

  let num3 = 0;

  while (num3 <=10) {
    console.log(num3);
    num3++;
  }


  let num4 = 5;

  while (num4 >= 0) {
    console.log(num4);
    num4--;
  }

  // lesson 11g: creating a loop that takes an array of numbers and creates a new array where each number is increased by 1

  const originalArray = [1, 2, 3];

  const newArray = [];

  for (let x = 0; x < originalArray.length; x++) {
    newArray.push(originalArray[x] + 1);
  }

  console.log(newArray);

  // lesson 11g using the 'map' function

 const Array1 = [1, 2, 3];

  const Array2 = Array1.map(number => number + 1);

  console.log(Array2); 
  
  */

  // lesson 11h: create a function  addOne(array) that takes an array of numbers and returns an array where each number is increased by 1

  

  function addOne(array) {
    
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i] + 1);
    }  

    return newArray;

  }


    console.log(addOne[1, 2, 3]);
    console.log(addOne[-2, -1, 0, 99]);

 /*

 function increaseNumbersByOne(originalArray) {
  // New array to store the incremented values
  const newArray = [];

  // Loop through each element in the original array
  for (let i = 0; i < originalArray.length; i++) {
    // Increment each element by 1 and push it to the new array
    newArray.push(originalArray[i] + 1);
  }

  // Return the new array
  return newArray;
}

// Example usage:
const originalArray = [1, 2, 3];
const newArray = increaseNumbersByOne(originalArray);
console.log(newArray); // Output: [2, 3, 4]
*/