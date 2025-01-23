```javascript
// Correct usage of $inc operator with a numeric field
db.collection.updateOne({ _id: 1 }, { $inc: { "numericField": 1 } });

//Alternative solution: Convert string to number before incrementing
db.collection.findOneAndUpdate( { _id: 1 }, [ { $set: { "numericField": { $toInt: "$stringField" } } }, { $inc: { "numericField": 1 } }, { $unset: { "stringField": 1 } } ], {returnDocument: 'after'} );
```