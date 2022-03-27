# Tic-Tac-Toe logic
The `index.js` file contains the logic for a simple game of tic-tac-toe.
To connect, you need to create a button to clear the game, a block where the result of the game and 9 cells will be displayed.

Then you need to give them a class through an attribute `class=""` and write this class name to the method `document.querySelector('.<Here Your class name>')` starting with a dot if you created a class attribute.

For example, `document.querySelector('.remove-button')`

> Note. Each element of 9 cells should have the same class name.

This is how your code should look like:
```
const cubes = document.querySelectorAll('.cube')
const title = document.querySelector('.title')
const reset = document.querySelector('.reset')
```

In this row `const cubes = document.querySelectorAll('.<YOUR CLASSNAME OF CELLS>')` You need to add Class name of cells.

In this row `const title = document.querySelectorAll('.<YOUR CLASSNAME OF HEADER>')` You need to add Class name of block where the result of the game.

In this row `const reset = document.querySelectorAll('.<YOUR CLASSNAME OF RESET BUTTON>')` You need to add Class name of button to clear the game.
