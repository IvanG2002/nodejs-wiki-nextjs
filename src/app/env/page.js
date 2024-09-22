// components/EnvironmentVariables.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const EnvironmentVariables = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Environment Variables in Node.js</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          Environment variables are a way to store configuration settings and sensitive information separately from your code. This helps keep your application secure and flexible across different environments (development, testing, production).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Setting Up Environment Variables</h2>
        <p>In a Node.js application, you can create a file named <code>.env</code> in the root directory to define your environment variables:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="plaintext" style={vscDarkPlus}>
            {`# .env
DATABASE_URL=mongodb://localhost:27017/mydatabase
SECRET_KEY=mysecretkey`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Using dotenv Package</h2>
        <p>To load environment variables from the <code>.env</code> file, you need to install the <code>dotenv</code> package:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`npm install dotenv`}
          </SyntaxHighlighter>
        </div>

        <p>Then, require and configure it at the beginning of your application:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// server.js or app.js
require('dotenv').config(); // Load environment variables

const dbUrl = process.env.DATABASE_URL;
console.log('Database URL:', dbUrl);`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Accessing Environment Variables</h2>
        <p>You can access environment variables in your application using <code>process.env.VARIABLE_NAME</code>. Here&apos;s an example:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// Using environment variables
const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Secret Key: ' + process.env.SECRET_KEY);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Best Practices</h2>
        <p>Here are some best practices for using environment variables:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Never commit your <code>.env</code> file to version control (add it to <code>.gitignore</code>).</li>
          <li>Use descriptive variable names to make it clear what each variable does.</li>
          <li>Consider using a service like <code>dotenv-safe</code> for additional security.</li>
        </ul>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 Environment Variables Guide
      </footer>
    </div>
  );
};

export default EnvironmentVariables;
