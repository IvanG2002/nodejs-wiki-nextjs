// components/DataValidation.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const DataValidation = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Data Validation and Sanitization in Node.js</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          Data validation and sanitization are essential steps in ensuring that the data processed by your application is clean, secure, and adheres to expected formats. This guide covers best practices and tools for validating and sanitizing data in Node.js applications.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Why Validate and Sanitize Data?</h2>
        <p>
          Validating data helps prevent errors and ensure data integrity, while sanitizing data protects against security vulnerabilities, such as SQL injection and XSS (Cross-Site Scripting).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Using Joi for Data Validation</h2>
        <p>The <code>Joi</code> library is a popular choice for validating data in Node.js applications:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`npm install joi`}
          </SyntaxHighlighter>
        </div>

        <p>Example of using Joi to validate user input:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const Joi = require('joi');

// Define a schema
const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(8).required(),
});

// Validate input
const input = { username: 'user1', password: 'mypassword' };
const { error, value } = schema.validate(input);

if (error) {
  console.error('Validation Error:', error.details);
} else {
  console.log('Validated Input:', value);
}`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Sanitizing Data with express-validator</h2>
        <p>To sanitize data, you can use the <code>express-validator</code> library:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`npm install express-validator`}
          </SyntaxHighlighter>
        </div>

        <p>Example of sanitizing user input:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const { body, validationResult } = require('express-validator');

// Express route for handling user input
app.post('/submit', [
  body('username').trim().escape(),
  body('password').notEmpty().trim(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Proceed with sanitized data
  const sanitizedUsername = req.body.username;
  const sanitizedPassword = req.body.password;
  console.log('Sanitized Input:', sanitizedUsername, sanitizedPassword);
  res.send('Input received and sanitized!');
});`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Best Practices</h2>
        <p>Follow these best practices for effective data validation and sanitization:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Always validate user input on both client-side and server-side.</li>
          <li>Use libraries like Joi and express-validator for consistent validation and sanitization.</li>
          <li>Sanitize inputs to prevent XSS and SQL injection attacks.</li>
          <li>Provide clear feedback for validation errors to users.</li>
        </ul>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 Data Validation and Sanitization Guide
      </footer>
    </div>
  );
};

export default DataValidation;
