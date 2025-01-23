# MongoDB $inc Operator Error with String Field

This repository demonstrates a common error when using the `$inc` operator in MongoDB with a string field.  The `$inc` operator is designed to increment numeric values and will throw an error if used with a string.

The `bug.js` file shows the incorrect usage of `$inc` with a string field, resulting in an error.  The `bugSolution.js` file demonstrates the correct approach to handle such situations.
