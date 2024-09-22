// components/ConnectMongoDB.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const ConnectMongoDB = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Connecting to MongoDB with Mongoose</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a schema-based solution to model application data and simplifies interaction with MongoDB.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Installing Mongoose</h2>
        <p>You can install the mongoose package using npm. Run the following command:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`npm install mongoose`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Creating a Connection</h2>
        <p>Here&apos;s how to create a connection to your MongoDB database:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});`}
          </SyntaxHighlighter>
        </div>

        <p>
          Replace <code>yourDatabase</code> with the name of your actual database.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Defining a Schema</h2>
        <p>You can define a schema for your data using Mongoose:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create a model
const User = mongoose.model('User', userSchema);`}
          </SyntaxHighlighter>
        </div>

        <p>
          This schema defines a User model with three fields: <code>name</code>, <code>email</code>, and <code>age</code>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Inserting Data</h2>
        <p>You can easily insert data into your MongoDB database:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const newUser = new User({
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
});

// Save the user to the database
newUser.save()
  .then(() => console.log('User saved'))
  .catch(err => console.error('Error saving user:', err));`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Closing the Connection</h2>
        <p>It&apos;s good practice to close the connection when you&apos;re done:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`mongoose.connection.close(() => {
  console.log('Connection to MongoDB closed');
});`}
          </SyntaxHighlighter>
        </div>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 MongoDB Connection Guide
      </footer>
    </div>
  );
};

export default ConnectMongoDB;
