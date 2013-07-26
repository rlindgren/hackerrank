// Anagram

// Sid is obsessed about reading short stories. Being a CS student, he is doing 
// some interesting frequency analysis with the books. From two short story books, 
// he choses strings having length a from the first and strings having length b 
// from the second one. The strings are such that the difference of length is <= 1

// i.e.

// |a-b|<=1, where |x| represents a modulus function.
// He believes that both the strings should be anagrams based on his experiment. 
// Your challenge is to help him find the minimum number of characters of the first 
// string he needs to change to make it an anagram of the second string. Neither can 
// he add a character nor delete a character from the first string. Only replacement 
// of the characters with new ones is allowed.

// Input Format

// First line will contain an integer T representing the number of test cases Each 
// test case will contain a string having length (a+b) which will be concatenation 
// of both the strings described in problem. The string will only contain small letters 
// and without any spaces.

// Output Format

// An integer corresponding to each test case is printed in a different line i.e., 
// the number of changes required for each test case. Print ‘-1’ if it is not possible.

// Constraints

// 1<=T<=100
// length of input string i.e. 1<=a+b<=10000

// Sample Input

// 5
// aaabbb
// ab
// abc
// mnop
// xyyx
// Sample Output

// 3
// 1
// -1
// 2
// 0 

// Explanation

// In fifth test case, first string will be “xy” while second string will be “yx” . so 
// a = 2 and b = 2, where a and b are length of strings. As we can see that a and b are 
// following relation:

// |a-b|<=1

// and both strings are anagrams. So number of changes required = 0.

process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
    // build array from input data, split on newline chars
    var tArray = input.split(/\r\n|\r|\n/g).slice(1,-1),
        _, count, a, b, alpha, patt, A, B, t, i;
    for (t=0; t<tArray.length; t++) {
        _ = tArray[t];
        // write '-1' for odd number length array items
        if (_.length % 2 === 1) { console.log(-1); } 
        else {
            count = 0;
            // split individual array item into substrings (a,b)
            a = _.slice(0, _.length/2);
            b = _.slice(a.length);
            // the idea here is to count how many times each
            // letter appears in each string, then get the
            // difference between the two counts. This calculates
            // how many letters would need to be changed in both
            // strings to make anagrams, but since we only need to
            // conform one string to the other, we divide by 2
            // then write the total for each array item to stdout.
            alpha = 'abcdefghijklmnopqrstuvwxyz';
            for (i=0; i<alpha.length; i++) {
                patt = new RegExp(alpha[i], 'gi');
                try { A = a.match(patt).length; }
                catch (e) { A = 0; }
                try { B = b.match(patt).length; }
                catch (e) { B = 0; }
                count += (Math.abs(A - B)/2);
            }
            console.log(count);
        }
    }
});