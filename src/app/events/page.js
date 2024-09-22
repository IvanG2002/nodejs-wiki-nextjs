// components/EventLoop.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const EventLoop = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Understanding the Event Loop in Node.js</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          The event loop is a core concept in Node.js that allows it to perform non-blocking I/O operations.
          It enables Node.js to handle multiple requests simultaneously without creating a new thread for each request.
          This makes it highly efficient and suitable for building scalable applications.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How the Event Loop Works</h2>
        <p>
          The event loop operates in a single thread and uses an event-driven architecture. Here&apos;s a simplified breakdown of how it works:
        </p>
        <ol className="list-decimal ml-6 mb-4">
          <li>
            The main thread executes the JavaScript code.
          </li>
          <li>
            If there are any asynchronous operations (like file I/O, network requests), they are handed off to the system.
          </li>
          <li>
            When these operations complete, their callbacks are placed in a queue (callback queue).
          </li>
          <li>
            The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it processes the next callback from the queue.
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Example of Event Loop Behavior</h2>
        <p>Here&apos;s an example to illustrate how the event loop handles asynchronous code:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

setImmediate(() => {
  console.log('Immediate 1');
});

Promise.resolve().then(() => {
  console.log('Promise 1');
});

console.log('End');`}
          </SyntaxHighlighter>
        </div>

        <p>When you run this code, the output will be:</p>
        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="plaintext" style={vscDarkPlus}>
            {`Start
End
Promise 1
Timeout 1
Immediate 1`}
          </SyntaxHighlighter>
        </div>
        <p>
          This demonstrates how the event loop prioritizes synchronous code, followed by promises, then timeouts and immediates.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Key Points</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Node.js is single-threaded, making it efficient for I/O operations.</li>
          <li>The event loop handles asynchronous callbacks in a non-blocking manner.</li>
          <li>Understanding the event loop is crucial for writing efficient Node.js applications.</li>
        </ul>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 Node.js Event Loop Guide
      </footer>
    </div>
  );
};

export default EventLoop;
