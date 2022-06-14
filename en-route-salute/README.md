# En Route Salute

## Prompt

Commander Lambda loves efficiency and hates anything that wastes time. The Commander is a busy lamb, after all! Henchmen who identify sources of inefficiency and come up with ways to remove them are generously rewarded. You`ve spotted one such source, and you think solving it will help you build the reputation you need to get promoted.

Every time the Commander`s employees pass each other in the hall, each of them must stop and salute each other -- one at a time -- before resuming their path. A salute is five seconds long, so each exchange of salutes takes a full ten seconds (Commander Lambda`s salute is a bit, er, involved). You think that by removing the salute requirement, you could save several collective hours of employee time per day. But first, you need to show the Commander how bad the problem really is.

Write a program that counts how many salutes are exchanged during a typical walk along a hallway. The hall is represented by a string. For example:
"--->-><-><-->-"

Each hallway string will contain three different types of characters: `>`, an employee walking to the right; `<`, an employee walking to the left; and `-`, an empty space. Every employee walks at the same speed either to right or to the left, according to their direction. Whenever two employees cross, each of them salutes the other. They then continue walking until they reach the end, finally leaving the hallway. In the above example, they salute 10 times.

>Write a function `solution(s)` which takes a string representing employees walking along a hallway and returns the number of times the employees will salute. s will contain at least 1 and at most 100 characters, each one of -, >, or <.

## Solution

This is similar to other whiteboarding problems tasking one to find all valid parentheses pairs, with the caveat of each "pair" counting as 2 "salutes" rather than 1 single "pair". Another caveat is that the carets represent the employee's direction, so we want to be matching `><` instead of `<>` as actual carets would do. Finally, each piece of a "pair" does not remove itself from consideration when a match is made, as one employee can salute an infinite number of encountered employees. With these caveats and considerations accounted for, we can begin.

If you have experience with these kinds of problems (or any string parsing problems), the first place to begin is with a `for` loop. We will also declare two variables, one for the total count of salutes, `answer`, and another for how much to iterate this answer, `count`. More on the latter shortly.

Iterating over each character of the string, we can effectively ignore any `-` signs--we are only concerned with the employees represented by `<` and `>`. We know that any matching pair will iterate the total count by 2, so we can say that any new right-facing employee (`>`) will increase `count` by 2--2 salutes for every match that this right-facing employee encounters. We then tabulate these salutes whenever we encounter a left-facing employee (`<`)--adding `count` to `answer` for every `<` we encounter.

If we've never encountered `>`, then `<` will have no matches made and therefore no salutes. With a single `>`, `count` will be 2, and we can see we have the correct number of salutes with one `<` (2) or two `<<` (4: count = 2, 2 times). By the end of a sequence like `>>--<` our value for `count` would be 4, representing the 4 salutes made when the single `<` encounters the two `>`

When the loop finishes, we return `answer` and we have our proper salute count!