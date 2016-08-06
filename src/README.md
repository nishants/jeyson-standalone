## Jeyson Templates
  - Every json is a valid template in itself.
  - The templates can have expressions, which can execute javascript.
  - These templates are compiled in context of a scope.
  - Directives can pass instructions to compiler.
  - Inbuilt directives for repeating, including other json etc.
  - Custom directives can replace/modify template body, execute expressions, read other templates.

### Compiling Templates
```javascript
var jeyson        = require('jeyson').create(),
    scope         = {message: 'Hello!'},
    templateJson  = '{"message": "{{message}}"}',
    compiled      = jeyson.parse(scope, templateJson);
```

### Expressions
An expression is defined as '__{{expr}}__'

Following __template.json__  :
```javascript
{
  "age": "{{21 + 33}}"
}
 ```
 is compiled to
 ```javascript
 {
  "age": 54
 }
 ```

### Javascript in Expressions.
Any valid javascript snippet is a valid expression, e.g following __template.json__  :
```javascript
{
  "list"      : "{{'one,two,three,four,five'.split(',')}}",
}
 ```
is compiled to
 ```javascript
{
  "list"    : ["one", "two", "three", "four", "five"],
}
 ```
### Scopes
Any field on scope object, is available as local variable in expressions.

e.g.  Given scope defined as :
 ```javascript
var scope    = {message: "Hello !"},
```
then following __template.json__  :
```javascript
{
  "message": "{{message}}"
}
```
is compiled to
```javascript
{
 "message": "Hello !"
}
```

#### Scope can have methods

e.g.  Given scope defined as :
 ```javascript
var scope = {
    message: function(){
      return "Hello !";
    }
};
```
then following __template.json__  :
```javascript
{
  "message": "{{message()}}"
}
```
is compiled to
```javascript
{
 "message": "Hello !"
}
```

### Directives
 - Directive is a field with name starting with __"@"__
 - Directive __body__ is the parent subtree of directive field
 - Directive argument is the value of directive field.

 E.g.
 ```javascript
 {
    "list"  : {
      "@repeat" : "name in ['one','two','three','four','five']",
      "id"      : "{{$index + 1}}",
      "name"    : "{{name}}",
    }
 }
```
 - __"list"__  value is directive body (has a directive child)
 - __@repeat__    is  directive name
 - __count in [1,2,3,4,5]__ is directive argument

 It will compile to following json :

```javascript
{
  "list": [ {"id": "1","name" : "one"},
            {"id": "2","name" : "two"},
            {"id": "3","name" : "three"},
            {"id": "4","name" : "four"},
            {"id": "5","name" : "five"}];
}
 ```


### Inbuilt Directives
Inbuilt directives for repeating, including other json etc.

### @repeat
 - $index
 - array
 - result

### Custom Directives
  - Reading scope
  - Executing expressions
  - Modifying body
  - Replacing body
  - Reading other templates by relative path

### Source code of inbuilt directives





