/* Make sure you do these last */

/*

 Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

 plusOneSum([1, 2, 3, 4]); // 14

 */
function plusOneSum(arr)
{
    var result = 0;
    arr.forEach(function (e)
    {
        result += (e + 1);
    });
    return result;
}

console.log("plusOneSum():", plusOneSum([1, 2, 3, 4]));

/*

 Write a function that accepts a multi dimensional array and returns a flattened version.

 flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

 */
function flatten(arr)
{
    var steamRoller = function (e)
    {
        if (e instanceof Array)
        {
            flatten(e).forEach(steamRoller);
        }
        else
        {
            result.push(e);
        }
    };

    var result = [];
    arr.forEach(steamRoller);
    return result;
}
console.log("flatten():", flatten([1, 2, [3, [4], 5, 6], 7, [[8]]]));

/*

 Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

 */
function sortArray(arr)
{
    var abc = 'abcdefghijklmnopqrstuvwxyz';
    var dummy = [];

    var assignPriority = function (e)
    {
        if (e === "...")
            return ((27 + 1) * 26);

        var content = e.split('');
        if (isNaN(content[1]))
            return (((abc.indexOf(content[0]) + 1) * 26) * 100);

        return (content[1] * 10) + abc.indexOf(content[0]);
    }

    arr.forEach(function (e)
    {
        dummy.push(e);
        dummy.sort(function (a, b)
        {
            return assignPriority(a) - assignPriority(b);
        })
    });

    arr.length = 0;
    dummy.forEach(function (e)
    {
        if (arr.indexOf(e) === -1)
        {
            arr.push(e);
        }
    });
}

var myArray = ['a1', 'a2', '...', 'aN', 'b1', 'b2', '...', 'bN', 'c1', 'c2', '...', 'cN'];
console.log("myArray:", myArray);
sortArray(myArray);
console.log("sortArray():", myArray);

/*

 There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

 */
function findMissing(arr1, arr2)
{
    for (var i = 0; i < arr1.length; i++)
    {
        if (arr2.indexOf(arr1[i]) === -1)
            return arr1[i];
    }
}

console.log('findMissing():', findMissing([1, 2, 3, 4, 5], [3, 1, 2, 5]));


/*

 Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

 Example

 longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
 longestWords("I gave a present to my parents") // ["present", "parents"]
 longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

 */
function longestWords(str)
{
    var result = [];
    var arr = str.split(' ');
    var length = 0;

    var resultContains = function (str)
    {
        str = str.toLowerCase();
        for (var i = 0; i < result.length; i++)
        {
            if (result[i].toLowerCase() === str)
                return true;
        }
        return false;
    };

    arr.forEach(function (e)
    {
        if (e.length > length)
        {
            result.length = 0;
            length = e.length;
        }

        if (e.length >= length)
        {
            if (!resultContains(e))
            {
                result.push(e);
            }
        }
    });

    return result;
}

console.log("longestWords():", longestWords("You are just an old antidisestablishmentarian"));
console.log("longestWords():", longestWords("I gave a present to my parents"));
console.log("longestWords():", longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo"));

/*

 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

 Find the sum of all the multiples of 3 or 5 below 1000.

 */
function sumOfMultiples(max, multiples)
{
    var numArr = [];
    var isMultiple = function (num)
    {
        for (var i = 0; i < multiples.length; i++)
        {
            if (num % multiples[i] === 0)
                return true;
        }
        return false;
    };
    for (var i = 1; i <= max; i++)
    {
        if (isMultiple(i))
        {
            numArr.push(i);
        }
    }

    var result = 0;
    numArr.forEach(function (e)
    {
        result += e;
    });
    return result;
}
console.log("sumOfMultiples():", sumOfMultiples(999, [3, 5]));


/*

 Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

 */
function removeDuplicateChars(str)
{
    var charArr = str.split('');
    var obj = {};
    charArr.forEach(function (e)
    {
        obj[e] = null;
    });

    var newStr = "";
    for (var e in obj)
    {
        newStr += e;
    }
    return newStr;
}
console.log("removeDuplicateChars():", removeDuplicateChars('tree traversal'));

/*
 Write a sum method which will work properly when invoked using either syntax below.

 console.log(sum(2,3));   // Outputs 5
 console.log(sum(2)(3));  // Outputs 5

 */
function sum()
{
    if (arguments.length > 1)
    {
        var total = 0;
        for (var i = 0; i < arguments.length; i++)
        {
            if (arguments[i] instanceof Function)
            {
                total += arguments[i]();
            }
            else
            {
                total += arguments[i];
            }
        }
        return total;
    }
    else
    {
        var arg = arguments[0];
        return function (num)
        {
            return sum(arg, num);
        };
    }
}
console.log("sum():", sum(2, 3));   // Outputs 5
console.log("sum():", sum(2)(3));  // Outputs 5