import React from 'react';
import logo from './logo.svg';
import './App.css';
import { array } from 'prop-types';


function App() {

  // function charCount(str) { 
  //    let result = {};
  //    for(let char of str) {
  //      debugger;
  //       char = char.toLowerCase();
  //       if(/[a-z0-9]/.test(char)) {
  //         result[char] = ++result[char] || 1;    
  //       }
  //    } 
  //    return result;
     
  // }

  // console.log('charCOunt',charCount('hi Vinay Hello Anu !!@'));

  // function same(arr1, arr2) {
  //   if(arr1.length !==arr2.length) {
  //      return false
  //   }
  //   const resultOne = {};
  //   const resultTwo = {};

  //   for( const key of arr1) {
  //       resultOne[key] = (resultOne[key] || 0) + 1;
  //   }
  //   console.log("resultOne",resultOne);
  //   for( const key of arr2) {
  //     resultTwo[key] = ( resultTwo[key] || 0) + 1;
  // }
  // console.log("resultTwo",resultTwo);
  //     for(let key in resultOne) {
  //       debugger;
  //       if(!(key**2 in resultTwo)) {
  //         return false
  //       }
  //       console.log("keys values", resultTwo[key**2]);
       /* checking values of each key */
  //       if(resultTwo[key**2] !== resultOne[key]) {
     
  //         return false
  //       }
  //     }
  //  }

  //  same([2,2,2], [4,4,4])

  /* first approch */

  // function anagram(str1, str2) {
  //   let res1 = {}
  //   let res2 = {}

  //   for(let key of str1) {
  //     res1[key] = (res1[key] || 0) + 1
  //   }
  //   console.log('res1', res1);
  //   for(let key of str2) {
  //     res2[key] = (res2[key] || 0) + 1
  //   }
  //   console.log('res2', res2);

  //   for(let key in res1) {
  //     if(res2[key] !== res1[key]) {
  //       return false
  //     }
  //   }
  //   return true
  // }
  // console.log('anagram',anagram('dog', 'god') );

   /* second approch */

  // function anagram(str1, str2) {
  //   let lookup = {};
  //   for(let key of str1) {
  //     lookup[key] ? lookup[key] +=1 : lookup[key] = 1;
  //   }
  //   console.log("key in lookup", lookup);

  //   for(let key of str2) {
  //     if(!(lookup[key])) {
  //       return false
  //     } else {
  //       lookup[key] -=1
  //     }
  //   }
  //   return true;
  // }
  // console.log('anagram',anagram('anusha', 'anusha') );

  /* sum of two vlaues in array is zero */
  // function sumZero (arr) {
  //     let left = 0
  //     let right = arr.length-1;
  //     debugger;
  //     while(left < right) {
  //       let sum = arr[left] + arr[right] 
  //       if(sum === 0) {
  //         return [arr[left], arr[right]]
  //       } else if( sum > 0) {
  //         right--
  //       } else {
  //        left++
  //       }
  //     }
    
  // }
  // console.log("sum zero",sumZero([1,-2,0,1,2]))

  // function countUniqueValues(arr) {
  //   let i = 0;
  //   debugger;
  //   for( let j= 1; j < arr.length; j++) {
  //     if(arr[i] !== arr[j]) {
  //       i++;
  //       arr[i] = arr[j]
  //     }
      
  //   }
  //   return i + 1;
  // }
  // countUniqueValues([1,1,2,3,1,4])

//   function countUniqueValues(arr){
//     debugger;
//     if(arr.length === 0) return 0;
//     var i = 0;
//     for(var j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1;
// }
// countUniqueValues([1,2,2,5,7,7,99])

/* O(N**2) code ofr maxSumArray */
// function maxSumArray(arr, num) {
//   let max = -Infinity;
//   debugger;
//   for(let i=0; i < arr.length - num + 1; i++) {
//     let temp = 0
//     for(let j=0; j<num; j++) {
//       temp += arr[i+j];
//     }
//     if(temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

// maxSumArray([1,2,5,2,8,1,5], 2);

// function maxSubarraySum(arr, num){
//  let maxSum = 0;
//  let tempSum = 0;
//  debugger;
//  for(let i = 0; i<num; i++) {
//    maxSum += arr[i];
//  }
//  tempSum = maxSum;
//  for(let i=num; i < arr.length; i++) {
//    tempSum = tempSum - arr[i-num] + arr[i];
//    maxSum = Math.max(tempSum, maxSum)
//  }
//  return maxSum
// }

// console.log("max sum",maxSubarraySum([2,6,9,2,1,8,5,6,3],3));

// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;
//   debugger;
 
//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then 
// 		// move the window to right
//     if(total < sum && end < nums.length){
//       total += nums[end];
//       console.log("total", total);
//       end++;
//       console.log("end", end);
//     }
//     // if current window adds up to at least the sum given then
// 		// we can shrink the window 
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
//       console.log("minLen", minLen);
//       total -= nums[start];
//       console.log("total", total);
// 			start++;
//     } 
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
//     else {
//       break;
//     }
//   }
 
//   return minLen === Infinity ? 0 : minLen;
 
  
// }
// console.log(minSubArrayLen([2,3,1,2,4,3], 7));


// function findLongestSubstring(str) {
//   debugger;
//   let longest = 0;
//   let see = {}
//   let start = 0;
//   for( let i=0; i<str.length; i++) {
//    let char = str[i];
//    if(see[char]) {
//      start = Math.max(start, see[char])
//    }
//    longest = Math.max(longest, i - start + 1);
//    see[char] = i + 1;
//   }
//   return longest;
// }
// console.log(findLongestSubstring('bbb'));

// function areThereDuplicates() {
//   let collection = {}
//   debugger;
//   for(let val in arguments){
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for(let key in collection){
//     if(collection[key] > 1) return true
//   }
//   return false;
// }

// areThereDuplicates(1,2,3,4,5);


// function distinctValue() {
//   let count = {};
//   let distinctVal = 0;
//  debugger;
//   for(let val in arguments) {
//     console.log("argumnets of value", arguments);
//     count[arguments[val]] = (count[arguments[val]] || 0) + 1;
//     console.log("count", count);
//   }
//   for( let key in count) {
//     if(count[key] === 1) {
//       distinctVal = distinctVal + 1 
//     }
//   }
//   return distinctVal;
// }

// console.log(distinctValue(1,2,3,4,));



// function maxSubarraySum(arr, num){
//   debugger;
//   if (arr.length < num) return null;

//   let total = 0;
//   for (let i=0; i<num; i++){
//      total += arr[i];
//   }
//   let currentTotal = total;
//   for (let i = num; i < arr.length; i++) {
//      currentTotal += arr[i] - arr[i-num];
//      total = Math.max(total, currentTotal);
//   }
//   return total;
// }

// maxSubarraySum([100,200,300,400,200,400],2);


// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;
 
//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then 
//     // move the window to right
//     debugger;
//     if(total < sum && end < nums.length){
//       total += nums[end];
// 			end++;
//     }
//     // if current window adds up to at least the sum given then
// 		// we can shrink the window 
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
// 			total -= nums[start];
// 			start++;
//     } 
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
//     else {
//       break;
//     }
//   }
 
//   return minLen === Infinity ? 0 : minLen;
// }

// minSubArrayLen([2,3,1,2,4,3], 7)



// function maxSublength(arr1, k) {
//    let start = 0;
//    let end = k;
//    let count = {};
//    let distinctVal = 0
//   for( let i = start; i < end; i++) {
//     debugger;
//       let arrCount = arr1[i];
//       count[arrCount] = (count[arrCount] || 0) + 1;
//   }

//   for(let key in count) {
//     if(count[key] ==1) {
//       distinctVal = distinctVal + 1;
//     }
//   }
//   start++
//   end ++
    
// }

// maxSublength([1,2,2,1,3,4,5,5], 3);

// function maxSublength1(arr1,k) {
//      let longest = 0;
//      debugger;
//      let seen = {};
//      let start = 0;
//     for(let i=0; i < k; i++) {
//       let arrElement = arr1[i];
//       if(seen[arrElement]) {
//         start= Math.max(start, seen[arrElement]);
//       }
//       longest = Math.max(longest, i - start + 1);
//       seen[arrElement] = i + 1;
//     }
//     return longest;
// }
// console.log(maxSublength1([1,2,2,1,3,4,5,5], 3));


// function longest_substring_with_k_distinct(str, k) {
//   let windowStart = 0,
//     maxLength = 0,
//     charFrequency = {};
//     debugger;

//   // in the following loop we'll try to extend the range [window_start, window_end]
//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const rightChar = str[windowEnd];
//     if (!(rightChar in charFrequency)) {
//       charFrequency[rightChar] = 0;
//     }
//     charFrequency[rightChar] += 1;
//     // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
//     while (Object.keys(charFrequency).length > k) {
//       const leftChar = str[windowStart];
//       charFrequency[leftChar] -= 1;
//       if (charFrequency[leftChar] === 0) {
//         delete charFrequency[leftChar];
//       }
//       windowStart += 1; // shrink the window
//     }
//     // remember the maximum length so far
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//   }

//   return maxLength;
// }


// console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);


//Recursive function 

// function Recursive(base, exponent) {

//     if(exponent === 0) return 1;
//     return base * Recursive(base,exponent-1);
// }
// console.log(Recursive(2,4));


// function factorial(num) {
//   if(num === 1) return 1;
//   return num * factorial(num - 1);
// }
// console.log(factorial(4));


// function productOfArray(array) {
//   debugger;
//   if(array.length===1) return 1;
//   return array[0] * productOfArray(array.slice(1));
// }
// console.log(productOfArray[1,2,3,4,5])

// function reverse(str){
//   debugger;
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }
// console.log(reverse('vinay'));

// function isPalindrome(str){
//   debugger;
//   if(str.length === 1) return true;
//   if(str.length === 2) return str[0] === str[1];
//   if(str[0] === str.slice(-1)) {
//     console.log('is slice', str.slice(-1));
//     return isPalindrome(str.slice(1,-1))
//   }
//   return false;
// }
// console.log(isPalindrome('tacocat'));

// function recursive(arr) {
//   let val = arr[0];
//   const isOdd = val => val%2 !== 0;
//   if(isOdd) {
//     return recursive(arr.slice(1), isOdd)
//   }
//   return false;
// }
// console.log(recursive[1,2,3,4]);
const callback = val => val % 2 !== 0;
function someRecursive(array, callback) {

  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}


console.log(someRecursive([2,4,6,8], callback));





// function capitalizeWords (array) {
//   debugger;
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   let res = capitalizeWords(array.slice(0, -1));
//   console.log("slice", array.slice(array.length-1)[0].toUpperCase());
//   res.push(array.slice(array.length-1)[0].toUpperCase());
//   return res;
 
// }
// console.log(capitalizeWords(['cat', 'vin', 'anu']));

// function capitalizeFirst (array) {
//   debugger;
//   if (array.length === 1) {
//     return [array[0][0].toUpperCase() + array[0].substr(1)];
//   }
//   const res = capitalizeFirst(array.slice(0, -1));
//   const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//   res.push(string);
//   return res;
// }

// console.log(capitalizeFirst(['vinay', 'anusha', 'right']))
 
// function capitalizeWords(array) {
//   debugger;
//   if(array.length === 1) {
//     return [array[0].toUpperCase()]
//   }
//   const res = capitalizeWords(array.slice(0,-1));
//   const string = array.slice(array.length -1)[0].toUpperCase();
//   res.push(string);
//   return res;
// }
// console.log(capitalizeWords(['vina', 'anusha', 'react']));


// let obj = {
//   num: 1,
//   test: [],
//   data: {
//       val: 4,
//       info: {
//           isRight: true,
//           random: 66
//       }
//   }
// }
// function stringifyNumbers(obj) {
//   debugger;
//   var newObj = {};
//   for (var key in obj) {
//     console.log('keys in string', key)
//     if (typeof obj[key] === 'number') {
//       newObj[key] = obj[key].toString();
//     } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

// console.log(stringifyNumbers(obj));

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

// var newObj = []

// function collectStrings(obj) {
  
//   debugger;
//    for(let key in obj) {
//      if(typeof obj[key] === 'string') {
//        newObj.push(obj[key]);
//      } else if(typeof obj[key] === 'object') {
//       return collectStrings(obj[key]);
//      }
//    }
//    console.log("new obj", newObj);
//    return newObj;
  
// }
// console.log(collectStrings(obj));

// function collectStrings(obj) {
//   var stringsArr = [];
   

//   function gatherStrings(o) {
//     debugger;
//       for(var key in o) {
//           if(typeof o[key] === 'string') {
//               stringsArr.push(o[key]);
//           }
//           else if(typeof o[key] === 'object') {
//               return gatherStrings(o[key]);
//           }
//       }
//   }

//   gatherStrings(obj);

//   return stringsArr;
// }
// console.log(collectStrings(obj));

// function linearSearch(array,value) {
//   for(let i=0; i<array.length; i++) {
//     if(array[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linearSearch([35,5,7,9,12,0], 9));

// function binarySearch(arr, val) {
//   let end = arr.length - 1;
//   let start = 0;
//   let middle = Math.floor(start + end / 2);
//   while(arr[middle] !== val && start <= end) {
//      if(val < arr[middle]) {
//        end =  middle -1
//      } else {
//         start = middle + 1;
//      }
//      middle = Math.floor(start+end/2);
//   }
//   return arr[middle] === val ? middle : 1;
// }
// console.log(binarySearch([2,4,5,12,13,24,34], 12))

// function naiveSearch(long, short){
//   var count = 0;
//   for(var i = 0; i < long.length; i++){
//       for(var j = 0; j < short.length; j++){
//          if(short[j] !== long[i+j]) break;
//          debugger;
//          if(j === short.length - 1) count++;
//       }
//   }
//   return count;
// }

// console.log(naiveSearch("vinay vin", "vin"));

// function bubbleSort(arr){
//   for(var i = arr.length; i > 0; i--){
//     for(var j = 0; j < i - 1; j++){
//       debugger;
//       console.log(arr, arr[j], arr[j+1]);
//       if(arr[j] > arr[j+1]){
//         var temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;         
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort([35,4,2,1]));

// function selectionSort(arr) {
//   for(var i=0; i < arr.length; i++) {
//     var lowest = i;
//     debugger;
//     for(var j= i+1; j < arr.length; j++) {
//       if(arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }
//     if( i !== lowest) {
//       var temp = arr[i];
//       arr[i] = arr[lowest];
//       arr[lowest] = temp;
//     }
//   }
// }
// selectionSort([35,22,10,19,17]);

// function insertionSort(arr){
//   debugger;
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// insertionSort([9,2,1,9,76,4])

// Merges two already sorted arrays
// function merge(arr1, arr2){
// debugger;
//   let results = [];
//   let i = 0;
//   let j = 0;
//   while(i < arr1.length && j < arr2.length){
//       if(arr2[j] > arr1[i]){
//           results.push(arr1[i]);
//           i++;
//       } else {
//           results.push(arr2[j])
//           j++;
//       }
//   }
//   while(i < arr1.length) {
//       results.push(arr1[i])
//       i++;
//   }
//   while(j < arr2.length) {
//       results.push(arr2[j])
//       j++;
//   }
//   console.log("results", results);
//   return results;
// }

// function mergeSort(arr){
//   debugger;
//   if(arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length/2);
//   let left = mergeSort(arr.slice(0,mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }

// console.log(mergeSort([10,24,76,1]))


function pivot(arr, start=0, end= arr.length - 1) {
   var pivot = arr[start];
   var swapIdx = start;
  
   for(var i= start+1; i < arr.length; i++) {
   
     if(pivot > arr[i]) {
       swapIdx++;
       var temp = arr[i];
       arr[i] = arr[swapIdx];
       arr[swapIdx] = temp;
     }
   }
 
    var temp = arr[start];
     console.log("temp", temp);
     arr[start] = arr[swapIdx];
     arr[swapIdx] = temp;
    console.log("swapIdx",  swapIdx);
   
   return arr;
}
console.log(pivot([4,8,2,1,5,7,6,3]));
  return (
    <div className="App">
 
    </div>
  );
}

export default App;
