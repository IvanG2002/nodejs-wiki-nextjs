// components/DependenciesInNode.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const DependenciesInNode = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Dependencies in Node.js</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          In Node.js, dependencies are libraries or modules that your application needs to function properly.
          These can include frameworks, utility libraries, and any other reusable code. Managing dependencies
          efficiently is crucial for maintaining a healthy project.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Types of Dependencies</h2>
        <p>There are two main types of dependencies in Node.js:</p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Regular Dependencies:</strong> These are libraries required for your application to run.
            They are specified in the <code className="bg-gray-200 p-1 rounded">dependencies</code> field
            of your <code className="bg-gray-200 p-1 rounded">package.json</code> file.
          </li>
          <li>
            <strong>Development Dependencies:</strong> These are libraries needed only during development,
            such as testing frameworks and build tools. They are specified in the 
            <code className="bg-gray-200 p-1 rounded">devDependencies</code> field.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Installing Dependencies</h2>
        <p>To install a dependency, you can use the following commands:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`# Install a regular dependency
npm install <package-name>

# Install a development dependency
npm install <package-name> --save-dev`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Viewing Installed Dependencies</h2>
        <p>You can view all installed dependencies by checking the <code className="bg-gray-200 p-1 rounded">package.json</code> file or running:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`# List installed packages
npm list --depth=0`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Updating Dependencies</h2>
        <p>To update your dependencies, you can use the following command:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`# Update all dependencies
npm update`}
          </SyntaxHighlighter>
        </div>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 Node.js Dependencies Guide
      </footer>
    </div>
  );
};

export default DependenciesInNode;
