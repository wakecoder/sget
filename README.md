# sget
####  A tiny (1-line) safe accessor that prevents 'Cannot read property of undefined' errors.
***
#### How-to-get:
* npm install sget -save
* copy the following into your code somewhere
  *  **let _ = function (instance, path) { return path.split('.').reduce((p, c) => p ? p[c] : undefined, instance); }**

#### How-to-use 
 ```JavaScript 
//If you're not using node.js, ignore the following and take the copy-paste approach above
const _ = require ('sget');
const myObject = {
foo: {
    bar: {
        baz: ['sget','protects','me']
        }
    }
}
let result = _(myObject,'foo.bar.baz.1'); // result === 'protects'
result = _(myObject,'foo.missingProperty.this.could.go.on.forever'); // result = undefined - no Exception hooray!
```

#### More-info
See this [blog post](http://wakecoder.com) on [wakecoder.com](http://wakecoder.com) for more detail. 