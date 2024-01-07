### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

   callback, promise, async  and await

- What is a Promise?

  An object the represent  asyn call

- What are the differences between an async function and a regular function?

   async return a promise while a normal function doesn't

- What is the difference between Node.js and Express.js?

   node is a runtime, express is a framework 

- What is the error-first callback pattern?

  providing error and the data as the arguments to the callback function

- What is middleware?

  A function that basically being called between component interaction 

- What does the `next` function do?

  call the next mindware function

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

The parameters of the api endpoint is hardcoded. Should change this to take user name as parameter.