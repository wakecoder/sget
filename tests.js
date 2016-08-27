var _ = require('./index');
const assert = require ('assert');

//Direct use example / test
const testObject = {
    foo: {
        bar: {
            test: {
                values: ['JavaScript','really','rocks']
            }
        }
    }
};

console.log ('sget should retrieve nested values correctly');
let result = _(testObject,'foo.bar.test.values.1'); // Get a nested value from an object
assert (result ==='really');

console.log ('sget should not throw an exception when accessing non-existent properties');
result = _(testObject,'foo.bar.missingProperty.put.as.many.as.you.want');
assert (result === undefined); // Hooray - no 'Cannot read property of undefined'' exception


//Monkey Patch - not necessary just here as an example if you want to do it.
Object.prototype._ = function (path) {
    return _(this,path);
}

console.log ('sget monkey patching should allow safe accessing directly from all objects.');
result = testObject._('foo.bar.test.values.2');
assert (result,'rocks');
console.log ('All tests passed successfully');