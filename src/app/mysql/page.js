// components/ConnectMySQL.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const ConnectMySQL = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Connecting to MySQL with mysql2</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          The <code>mysql2</code> package is a popular MySQL client for Node.js that supports Promises and provides a simple API to interact with MySQL databases.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Installing mysql2</h2>
        <p>You can install the mysql2 package using npm. Run the following command:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`npm install mysql2`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Creating a Connection</h2>
        <p>Here&lsquo;s how to create a connection to your MySQL database:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourUsername',
  password: 'yourPassword',
  database: 'yourDatabase'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the MySQL database as ID', connection.threadId);
});`}
          </SyntaxHighlighter>
        </div>

        <p>
          In this example, replace <code>yourUsername</code>, <code>yourPassword</code>, and <code>yourDatabase</code> with your actual database credentials.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Querying the Database</h2>
        <p>You can easily execute SQL queries using the connection:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// Example of a SQL query
const sql = 'SELECT * FROM users';
connection.query(sql, (err, results) => {
  if (err) throw err;
  console.log('Results:', results);
});`}
          </SyntaxHighlighter>
        </div>

        <p>
          This code executes a SQL query to select all users from the <code>users</code> table and logs the results.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Closing the Connection</h2>
        <p>It&apos;s important to close the connection when you&apos;re done:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`// Close the connection
connection.end((err) => {
  if (err) {
    return console.log('Error ending the connection:', err.message);
  }
  console.log('Connection to the database closed.');
});`}
          </SyntaxHighlighter>
        </div>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 MySQL Connection Guide
      </footer>
    </div>
  );
};

export default ConnectMySQL;
