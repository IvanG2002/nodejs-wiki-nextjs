// components/WhatIsExpress.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const WhatIsExpress = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">What is Express.js?</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features
          for building web and mobile applications. It simplifies the process of handling HTTP requests and responses,
          allowing developers to create APIs and web applications quickly and efficiently.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Middleware support for handling requests and responses.</li>
          <li>Routing capabilities for defining endpoints.</li>
          <li>Support for template engines to render dynamic content.</li>
          <li>Easy integration with various databases.</li>
          <li>Robust error handling and logging features.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Installing Express</h2>
        <p>You can easily install Express using npm. Run the following command:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`npm install express`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Creating a Simple Express Server</h2>
        <p>Here&apos;s how to set up a basic Express server:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}/\`);
});`}
          </SyntaxHighlighter>
        </div>

        <p>
          This code creates a simple Express server that responds with &quot;Hello, Express!&quot; when you access the root URL.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Defining Routes</h2>
        <p>Express makes it easy to define routes for your application:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact Page');
});`}
          </SyntaxHighlighter>
        </div>

        <p>
          The above code defines additional routes for &quot;/about&quot; and &quot;/contact&quot;, each returning a simple response.
        </p>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 Express.js Guide
      </footer>
    </div>
  );
};

export default WhatIsExpress;
