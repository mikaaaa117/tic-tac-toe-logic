# Tic-Tac-Toe logic
The `index.js` file contains the logic for a simple game of tic-tac-toe.
To connect, you need to create a button to clear the game, a block where the result of the game and 9 cells will be displayed.

Then you need to give them a class through an attribute `class=""` and write this class name to the method `document.querySelector('.<Here Your class name>')` starting with a dot if you created a class attribute.

For example, `document.querySelector('.remove-button')`

```
const cubes = document.querySelectorAll('.cube')
const title = document.querySelector('.title')
const reset = document.querySelector('.reset')
```
