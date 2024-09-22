// components/DatabaseQueries.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const DatabaseQueries = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Database Queries with Mongoose</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          Mongoose provides a powerful way to interact with MongoDB through queries. You can retrieve, update, and delete documents using simple methods.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Finding Documents</h2>
        <p>You can find documents in a collection using the <code>find()</code> method:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const User = require('./models/User'); // Assuming you have a User model

// Find all users
User.find()
  .then(users => {
    console.log('All Users:', users);
  })
  .catch(err => {
    console.error('Error fetching users:', err);
  });`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Finding One Document</h2>
        <p>To find a single document, you can use the <code>findOne()</code> method:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// Find a user by email
User.findOne({ email: 'john@example.com' })
  .then(user => {
    console.log('Found User:', user);
  })
  .catch(err => {
    console.error('Error fetching user:', err);
  });`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Updating Documents</h2>
        <p>You can update documents using the <code>updateOne()</code> or <code>updateMany()</code> methods:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// Update a user's age
User.updateOne({ email: 'john@example.com' }, { age: 31 })
  .then(result => {
    console.log('Update Result:', result);
  })
  .catch(err => {
    console.error('Error updating user:', err);
  });`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Deleting Documents</h2>
        <p>To delete a document, you can use the <code>deleteOne()</code> or <code>deleteMany()</code> methods:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// Delete a user by email
User.deleteOne({ email: 'john@example.com' })
  .then(result => {
    console.log('Delete Result:', result);
  })
  .catch(err => {
    console.error('Error deleting user:', err);
  });`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Querying with Conditions</h2>
        <p>You can also query documents with specific conditions:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// Find users older than 25
User.find({ age: { $gt: 25 } })
  .then(users => {
    console.log('Users older than 25:', users);
  })
  .catch(err => {
    console.error('Error fetching users:', err);
  });`}
          </SyntaxHighlighter>
        </div>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 Mongoose Query Guide
      </footer>
    </div>
  );
};

export default DatabaseQueries;
