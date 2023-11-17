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