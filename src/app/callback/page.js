// components/Callbacks.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Callbacks = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Understanding Callbacks in Node.js</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          A callback is a function passed as an argument to another function,
          which is then invoked inside that function. In Node.js, callbacks are commonly used for handling asynchronous operations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Example of Callbacks</h2>
        <p>Here’s a simple example that demonstrates how callbacks work:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = { name: 'Node.js', type: 'JavaScript Runtime' };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log('Received data:', data);
});`}
          </SyntaxHighlighter>
        </div>

        <p>
          In this example, the <code>fetchData</code> function simulates an asynchronous operation using <code>setTimeout</code>.
          Once the data is fetched, the callback function is invoked with the retrieved data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Error Handling with Callbacks</h2>
        <p>
          Callbacks are often used to handle errors in asynchronous operations. A common convention is to use the first argument of the callback for the error:
        </p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`function fetchDataWithError(callback) {
  // Simulating an asynchronous operation with an error
  setTimeout(() => {
    const error = new Error('Data not found');
    callback(error, null);
  }, 1000);
}

fetchDataWithError((error, data) => {
  if (error) {
    console.error('Error:', error.message);
    return;
  }
  console.log('Received data:', data);
});`}
          </SyntaxHighlighter>
        </div>

        <p>
          In this example, if an error occurs, the callback receives the error as the first argument, allowing for proper error handling.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Considerations</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Callbacks can lead to &quot;callback hell,&quot; making code difficult to read and maintain.</li>
          <li>Consider using Promises or async/await for better readability when dealing with multiple asynchronous operations.</li>
          <li>Always handle errors in callbacks to avoid crashes in your application.</li>
        </ul>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 Node.js Callbacks Guide
      </footer>
    </div>
  );
};

export default Callbacks;
