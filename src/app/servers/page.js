// components/HttpServer.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const HttpServer = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Creating an HTTP Server in Node.js</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          Node.js provides a built-in module called <code>http</code> that allows you to create an HTTP server. 
          This server can handle requests and send responses to clients.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Creating a Basic HTTP Server</h2>
        <p>Here&apos;s how to create a simple HTTP server:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code
  res.setHeader('Content-Type', 'text/plain'); // Set response content type
  res.end('Hello, World!'); // Send response
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}/\`);
});`}
          </SyntaxHighlighter>
        </div>

        <p>
          In this example, the server responds with &quot;Hello, World!&quot; to any request it receives.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Handling Different Routes</h2>
        <p>Here&apos;s how to handle different routes in your server:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('About Page');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}/\`);
});`}
          </SyntaxHighlighter>
        </div>

        <p>
          This server checks the URL of incoming requests and responds accordingly.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Sending JSON Responses</h2>
        <p>You can also send JSON responses by setting the appropriate content type:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const responseData = { message: 'Hello, World!', success: true };
  res.end(JSON.stringify(responseData)); // Send JSON response
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}/\`);
});`}
          </SyntaxHighlighter>
        </div>

        <p>
          This example demonstrates how to send a JSON response instead of plain text.
        </p>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 Node.js HTTP Server Guide
      </footer>
    </div>
  );
};

export default HttpServer;
