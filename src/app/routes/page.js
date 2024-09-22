// components/ExpressRoutes.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const ExpressRoutes = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Working with Routes in Express.js</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          Routing in Express.js allows you to define the endpoints of your web application. Each route can respond to different HTTP methods (GET, POST, PUT, DELETE) and can be configured to handle various URL paths.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Basic Routing</h2>
        <p>You can define routes using the <code>app.get()</code>, <code>app.post()</code>, and other similar methods:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const express = require('express');
const app = express();
const PORT = 3000;

// Basic GET route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Basic POST route
app.post('/submit', (req, res) => {
  res.send('Form submitted!');
});

app.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}/\`);
});`}
          </SyntaxHighlighter>
        </div>

        <p>
          In this example, we define a GET route for the home page and a POST route for form submissions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Route Parameters</h2>
        <p>Express allows you to define dynamic routes using route parameters:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(\`User ID is \${userId}\`);
});`}
          </SyntaxHighlighter>
        </div>

        <p>
          Here, <code>:id</code> is a route parameter that can be accessed via <code>req.params.id</code>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Query Parameters</h2>
        <p>Query parameters can also be handled in Express routes:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(\`Search query: \${query}\`);
});`}
          </SyntaxHighlighter>
        </div>

        <p>
          In this example, the query parameter <code>q</code> can be accessed using <code>req.query.q</code>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Middleware in Routes</h2>
        <p>You can use middleware functions to execute code before your route handlers:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const checkAuth = (req, res, next) => {
  // Authentication logic here
  console.log('User authenticated');
  next(); // Proceed to the next middleware or route handler
};

app.get('/protected', checkAuth, (req, res) => {
  res.send('This is a protected route.');
});`}
          </SyntaxHighlighter>
        </div>

        <p>
          The <code>checkAuth</code> middleware runs before the route handler for the protected route.
        </p>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 Express.js Routing Guide
      </footer>
    </div>
  );
};

export default ExpressRoutes;
