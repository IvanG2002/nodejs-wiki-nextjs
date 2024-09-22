// components/NodeVersions.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const NodeVersions = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Managing Versions in Node.js</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          In Node.js, managing versions is crucial for maintaining compatibility with libraries,
          frameworks, and tools. Knowing how to check and update versions can help ensure your
          application runs smoothly and securely.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Checking Node.js and npm Versions</h2>
        <p>You can check the installed versions of Node.js and npm using the following commands:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`# Check Node.js version
node -v

# Check npm version
npm -v`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Updating Node.js</h2>
        <p>To update Node.js, you can use Node Version Manager (nvm). If you don’t have nvm installed, follow the instructions on the <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">nvm GitHub page</a>.</p>
        
        <p>Once you have nvm installed, you can update Node.js using:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`# Install the latest version of Node.js
nvm install node

# Use a specific version
nvm use <version>`}  
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Managing Dependency Versions</h2>
        <p>You can specify the version of a dependency in your <code className="bg-gray-200 p-1 rounded">package.json</code> file. For example:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="json" style={vscDarkPlus}>
            {`{
  "dependencies": {
    "express": "^4.17.1", // Latest compatible version
    "lodash": "~4.17.0"    // Latest patch version within 4.17
  }
}`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Updating Dependencies</h2>
        <p>To update your dependencies to their latest versions, you can run:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`# Update all dependencies
npm update`}
          </SyntaxHighlighter>
        </div>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 Node.js Version Management Guide
      </footer>
    </div>
  );
};

export default NodeVersions;
