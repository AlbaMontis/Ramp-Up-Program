// Tasks from table
const arr1 = ['dog', 'cat', 'mouse', 'rabbit', 'crocodile', 'cat'];
const arr2 = ['parrot', 'penguin', 'pigeon', 'sparrow', 'parrot', 'seagull'];

// Task 1: Array Manipulation
//add / remove
const mergedArrs = [...arr1, ...arr2];
//sort
const sortedArr = mergedArrs.sort();
//remove duplicates
const uniqueArr = [...new Set(mergedArrs)];
//filter only elements that contain 5+ chars
const filteredArr = mergedArrs.filter(item => item.length >= 5);
//map
const codedArr =  mergedArrs.map(item => item + 'CODE');

// Task 2: Set
//Create set from few arrays
const setFromArrs = new Set([...arr1, ...arr2]);
//Array from Set
const arrFromSet = [...setFromArrs];

// Task3: RegExp
const prices = ['$1.99', '$ 222000.00', '$ 1,000.99', '555.44 USD'];
const pattern = /(?<=\$?)\s?\d+(\.|,)\d+\.?\d+/g;
const parsedPrices = prices.map(item => item.match(pattern)[0]);

// Task4 in fetch.js file

// Task5: DOM elements & CSS selectors
// get element text
const text = document.getElementById('totalPrice').innerText;
// count number of elements
const listLenght = document.querySelectorAll('li').length;
