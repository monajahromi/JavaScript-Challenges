write your own version of groupBy called myGroupBy using vanilla JavaScript that can do the same thing as the lodash version.

The lodash helper function, groupBy, recieves an array and groups the items of the array into an object according to a given criteria. A real life example would be if you had a parking lot of cars you could group them by color. Then you would put the reds ones in one place and the blue ones in another. The array represents the parking lot and the object represents the postitions you've placed the cars in.

Arguments
collection (Array or Object): The collection to iterate over.
[iteratee=_.identity] (Function or String or Object): The iteratee to transform keys.
Returns
(Object): Returns the composed aggregate object.
Examples
groupBy(["one", "two", "three"], "length"); returns { "3": ["one", "two"], "5": ["three"] }
Notes
Where lodash shines is its versitility. This function can receive a string, an object or a function and return an answer. This makes it difficult for us to write our version in vanilla JS as we have to account for so many different types of inputs.
