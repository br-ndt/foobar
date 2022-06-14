# Bunny Worker Locations

## Prompt

Keeping track of Commander Lambda's many bunny workers is starting to get tricky. You've been tasked with writing a program to match bunny worker IDs to cell locations.

The LAMBCHOP doomsday device takes up much of the interior of Commander Lambda's space station, and as a result the work areas have an unusual layout. They are stacked in a triangular shape, and the bunny workers are given numerical IDs starting from the corner, as follows:

| &nbsp;7<br/>
| &nbsp;4 &nbsp;8<br/>
| &nbsp;2 &nbsp;5 &nbsp;9<br/>
| &nbsp;1 &nbsp;3 &nbsp;6 &nbsp;10<br/>

Each cell can be represented as points `(x, y)`, with x being the distance from the vertical wall, and y being the height from the ground. 

For example, the bunny worker at `(1, 1)` has ID 1, the bunny worker at `(3, 2)` has ID 9, and the bunny worker at `(2, 3)` has ID 8. This pattern of numbering continues indefinitely (Commander Lambda has been adding a LOT of workers). 

> Write a function `solution(x, y)` which returns the worker ID of the bunny at location (x, y). Each value of x and y will be at least 1 and no greater than 100,000. Since the worker ID can be very large, return your solution as a string representation of the number.

## Solution

By looking at the first sequence (ie, `x = 1` & `y < 5`), we see `1, 2, 4, 7`. We can create a formula for this sequence:
>((y * (y - 1)) / 2) + 1

Looking at the second sequence (ie, `x = 2` & adding another element for `y < 5`) we have `3, 5, 8, 12`. We can create a similar formula for this sequence:
>(((y + 1) * y) / 2) + 2

There is similarity here in these patterns, most obviously that the finally-added integer is equal to x for each sequence. We can confirm this by looking at the third sequence (`x = 3` & adding further elements for `y < 5`) `6, 9, 13, 17`, which has a formula of:
>(((y + 2) * (y + 1)) / 2) + 3

Additionally, we see that the integers added to our two instances of y have been scaling according to x, just like the finally added integer.

Now what happens when we look at horizontal sequences, instead? Let's start with the first row (`x < 5` & `y = 1`): `1, 3, 6, 10`. We can create another formula for this:
>((x * (x - 1)) / 2) + x

Look familiar? With `y = 1` we can manipulate this formula to incorporate y (written as `1'` in the following):
>(((x + 1' - 1) * (x + 1' - 2)) / 2) + x

We can similarly manipulate our earlier formula to incorporate `x = 1` (`x` written as `1'`):
>(((y + 1' - 1) * (y + 1' - 2)) / 2) + 1'

Our formulae now have a full overlap.

Finally, the full synthesis of these formulae:
>((x + y - 1) * (x + y - 2) / 2) + x

We convert the result into a string and return it, and we have our Bunny Worker IDs!