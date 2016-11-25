# sget
####  A small safe accessor that prevents 'Cannot read property of undefined' errors.
***
#### How-to-get:
* npm install safe-get -save

#### How-to-use 
 ```JavaScript 
const _ = require ('safe-get');
const myObject = {
foo: {
    bar: {
        baz: ['sget','protects','me']
        }
    }
}
let result = _(myObject,'foo.bar.baz[1]'); // result === 'protects'
result = _(myObject,'foo.missingProperty.this.could.go.on.forever'); // result = undefined - no Exception hooray!
```

#### More-info
See this [blog post](http://wakecoder.com) on [wakecoder.com](http://wakecoder.com) for more detail. 
Also, see tests.js for more examples.