// components/Promises.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Promises = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Understanding Promises in Node.js</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          A Promise is an object representing the eventual completion (or failure) of an asynchronous operation
          and its resulting value. Promises provide a cleaner alternative to callbacks for handling asynchronous code.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Creating a Promise</h2>
        <p>Here&lsquo;s how to create a basic Promise:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure

  if (success) {
    resolve('Operation was successful!');
  } else {
    reject('Operation failed.');
  }
});`}
          </SyntaxHighlighter>
        </div>

        <p>
          In this example, the Promise will either resolve or reject based on the simulated success condition.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Using Promises</h2>
        <p>To handle the result of a Promise, you can use the <code>.then()</code> and <code>.catch()</code> methods:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`myPromise
  .then(result => {
    console.log(result); // Output: Operation was successful!
  })
  .catch(error => {
    console.error(error); // Handle error
  });`}
          </SyntaxHighlighter>
        </div>

        <p>This approach allows you to handle successful outcomes and errors separately.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Chaining Promises</h2>
        <p>Promises can be chained to perform multiple asynchronous operations in sequence:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
}

fetchData()
  .then(data => {
    console.log(data); // Output: Data fetched
    return 'Processed data';
  })
  .then(processedData => {
    console.log(processedData); // Output: Processed data
  })
  .catch(error => {
    console.error(error); // Handle any error
  });`}
          </SyntaxHighlighter>
        </div>

        <p>In this example, each <code>.then()</code> receives the result of the previous Promise, allowing for smooth chaining.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Error Handling with Promises</h2>
        <p>
          It&lsquo;s important to handle errors in a chain of Promises. Any error that occurs in a Promise will skip to the nearest <code>.catch()</code>:
        </p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error fetching data');
    }, 1000);
  });
}

fetchDataWithError()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error); // Output: Error fetching data
  });`}
          </SyntaxHighlighter>
        </div>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 Node.js Promises Guide
      </footer>
    </div>
  );
};

export default Promises;
