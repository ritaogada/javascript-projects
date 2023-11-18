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
