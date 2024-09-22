// components/SecureAuth.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const SecureAuth = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Secure Authentication in Node.js</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          Secure authentication is crucial for protecting user data and ensuring that only authorized users can access certain resources. This guide covers best practices and tools to implement secure authentication in Node.js applications.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Using bcrypt for Password Hashing</h2>
        <p>Passwords should never be stored in plain text. Use the <code>bcrypt</code> library to hash passwords:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const bcrypt = require('bcrypt');

// Hash a password
const saltRounds = 10;
const plainPassword = 'mySecretPassword';

bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log('Hashed Password:', hash);
});`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Verifying Passwords</h2>
        <p>When a user logs in, verify their password against the hashed password:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// Verify a password
bcrypt.compare(plainPassword, hashFromDatabase, (err, result) => {
  if (err) throw err;
  if (result) {
    console.log('Password is valid!');
  } else {
    console.log('Invalid password.');
  }
});`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Using JSON Web Tokens (JWT)</h2>
        <p>JSON Web Tokens provide a way to securely transmit information between parties as a JSON object. Install the <code>jsonwebtoken</code> package:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`npm install jsonwebtoken`}
          </SyntaxHighlighter>
        </div>

        <p>Generate a token after successful authentication:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const jwt = require('jsonwebtoken');

// Generate a token
const user = { id: userId }; // User information
const token = jwt.sign(user, 'your_jwt_secret', { expiresIn: '1h' });
console.log('Generated Token:', token);`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Middleware for Protected Routes</h2>
        <p>Use middleware to protect routes by verifying the token:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// Middleware to check token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'your_jwt_secret', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Best Practices</h2>
        <p>Follow these best practices to enhance security:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Always hash passwords using a strong hashing algorithm like bcrypt.</li>
          <li>Use HTTPS to encrypt data in transit.</li>
          <li>Implement rate limiting to prevent brute-force attacks.</li>
          <li>Store JWTs securely and use short expiration times.</li>
        </ul>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 Secure Authentication Guide
      </footer>
    </div>
  );
};

export default SecureAuth;
