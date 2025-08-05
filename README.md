# Working with Data Collections

## Expanding Functionallity

### Tasked with:
- Declare a variable that stores the number of columns in each row of data within the CSV.
- Instead of hard-coding four columns per row, expand your code to accept any number of columns.


### After that:
- Store your results in a two dimensional array.
    - Each row should be its own array, with individual entries for each column.
    - Each row should be stored in a parent array, with the heading row located at index 0..
- Cache this two dimensional array in a variable for later use.

## Transformaing Data

### Tasked with:
- For each row of data in the result array produced, create an object where the key of each value is the heading for that values column.
    - Convert these keys to all lowercase letters for consistency
- Store these objects in array, in the order that they were originally listed.

## Sorting and Manipulating Data
- Utilized Array Methods
  - .pop();
  - .splice();
  - .push();
- Calculate average age in group using loops
 
## Full Circle
- Transform the final set of data back into CSV Format.
  I used concatation paired with looping and slice to remove last commas
