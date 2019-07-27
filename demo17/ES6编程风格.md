1. const>let>var
```
//best
const [a,b,c]=[1,2,3];
```

2. ''|``>"";
```
//best
const a = 'foobar';
const b = `foo${a}bar`;
```

3. 多使用解构赋值
```
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
}

// good
function getFullName(obj) {
  const { firstName, lastName } = obj;
}

// best
function getFullName({ firstName, lastName }) {
}
```