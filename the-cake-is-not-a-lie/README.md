# The Cake is Not a Lie!

## Prompt

Commander Lambda has had an incredibly successful week: she completed the first test run of her LAMBCHOP doomsday device, she captured six key members of the Bunny Rebellion, and she beat her personal high score in Tetris. To celebrate, she's ordered cake for everyone - even the lowliest of minions! But competition among minions is fierce, and if you don't cut exactly equal slices of cake for everyone, you'll get in big trouble.

The cake is round, and decorated with M&Ms in a circle around the edge. But while the rest of the cake is uniform, the M&Ms are not: there are multiple colors, and every minion must get exactly the same sequence of M&Ms. Commander Lambda hates waste and will not tolerate any leftovers, so you also want to make sure you can serve the entire cake.

To help you best cut the cake, you have turned the sequence of colors of the M&Ms on the cake into a string: each possible letter (between a and z) corresponds to a unique color, and the sequence of M&Ms is given clockwise (the decorations form a circle around the outer edge of the cake).

>Write a function called answer(s) that, given a non-empty string less than 200 characters in length describing the sequence of M&Ms, returns the maximum number of equal parts that can be cut from the cake without leaving any leftovers

## Solution

While there are some caveats and edge cases to consider here (not including "non-empty strings"), our two steps to solving this problem are 1) divide the string into an increasingly greater number of parts, and 2) check that those parts are all congruent to one another.

Step 1 can be achieved via a `for` loop (or other iteration methods) that iterates within the length of the input string `s`. We do this because it is possible that the greatest number of parts is equal to the number of characters in the string, but also because we can keep testing each greater number of parts to see if it passes Step 2 mentioned above. But before the loop, we also declare a variable `max` to keep track of our current greatest number of parts (with a minimum of 1 for the whole string).

For each iteration of the loop, we see if the string is evenly divisible by the iterator (if not, it would be impossible for all parts to be congruent to one another per Step 2). If it is, we create a `subString` representing one of our (hopefully congruent) parts. We assemble that string by taking a number of characters equal to `s` divided by our iterator, so the first `subString` is equal to `s`, the second one is half as long, and so forth.

Finally, we check if combining `subString` an amount of times equal to our iterator recreates `s`. This achieves both our goal of Step 2 (as each `subString` will of course be congruent to itself) as well as ensuring that we have not created a totally novel string instead. We assemble a new string, `checkString` that is both (hopefully) congruent to `s` and made up of multiple instances of the `subString`.

If `checkString` is indeed congruent to `s`, we have found our new highest number of equal parts! We can now repeat the loop with a greater number of parts, checking the same way. If we ever find any new result, we simply set `max` to our iterator's current value. When the loop ends, `max` will be our result.