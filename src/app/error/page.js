// components/ErrorHandling.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const ErrorHandling = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Error Handling in Node.js</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          Proper error handling is crucial for maintaining a robust and user-friendly application. In Node.js, errors can occur during asynchronous operations, API calls, or when interacting with databases. This guide covers best practices for error handling in Node.js applications.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Using Try-Catch Blocks</h2>
        <p>For synchronous code, you can use try-catch blocks to handle errors:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`try {
  // Code that may throw an error
  const result = riskyFunction();
} catch (error) {
  console.error('Error occurred:', error);
  // Handle the error (e.g., send a response to the client)
}`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Handling Errors in Async Functions</h2>
        <p>For asynchronous functions, you can use try-catch along with async/await:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Centralized Error Handling Middleware</h2>
        <p>In Express, you can create centralized error handling middleware to handle errors consistently:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Throwing Custom Errors</h2>
        <p>You can create custom error classes to handle specific error scenarios:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

// Usage
throw new CustomError('Invalid input', 400);`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Logging Errors</h2>
        <p>It’s essential to log errors for debugging and monitoring purposes. You can use libraries like <code>winston</code> or <code>morgan</code>:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`npm install winston`}
          </SyntaxHighlighter>
        </div>

        <p>A simple logging setup might look like this:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log' }),
  ],
});

// Logging an error
logger.error('Error message');`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Best Practices</h2>
        <p>Follow these best practices for effective error handling:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Always handle errors gracefully and provide informative responses to users.</li>
          <li>Use centralized error handling to keep your code clean.</li>
          <li>Log errors for later analysis and debugging.</li>
          <li>Test your error handling to ensure it works as expected.</li>
        </ul>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 Error Handling Guide
      </footer>
    </div>
  );
};

export default ErrorHandling;
