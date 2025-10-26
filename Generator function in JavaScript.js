Generator Functions:
Concept:
        A generator function in JavaScript allows you to pause and resume function execution.
        It’s defined using the function* syntax and uses the yield keyword to pause execution.

Example:

        function* generator(){
            yield 'Hello';
            yield 'World';
            yield '!';
        }
        let gen=generator();
        console.log(gen.next());
        console.log(gen.next());
        console.log(gen.next());
        console.log(gen.next());

Output:
        { value: 'Hello', done: false }
        { value: 'World', done: false }
        { value: '!', done: false }
        { value: undefined, done: true }

How It Works Internally:
        
        1.When you call a generator, it doesn’t run immediately.
        2.It returns a generator object (iterator).
        3.You use .next() to resume execution until the next yield.

Use Case:

Example: Lazy Data Streaming

function* dataStream() {
  let i = 1;
  while (true) {
    yield `Data chunk ${i++}`;
  }
}

const stream = dataStream();
console.log(stream.next().value); // "Data chunk 1"
console.log(stream.next().value); // "Data chunk 2"
