import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function page() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Creating a Module in Node.js</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p>
                    In Node.js, a module is a reusable block of code that encapsulates related functionality.
                    You can create your own modules to organize your code better and promote code reusability.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Creating a Simple Module</h2>
                <p>To create a module, follow these steps:</p>

                <ol className="list-decimal ml-6 mb-4">
                    <li>Create a new JavaScript file for your module.</li>
                    <li>Export the functions or variables you want to expose.</li>
                    <li>Import the module in your main application file.</li>
                </ol>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Example Module</h2>
                <p>Here&apos;s an example of creating a simple module called <code className="bg-slate-900 p-1 rounded">math.js</code> that exports addition and subtraction functions:</p>

                <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
                    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                        {`// math.js
    function add(a, b) {
      return a + b;
    }
    
    function subtract(a, b) {
      return a - b;
    }
    
    // Export functions
    module.exports = { add, subtract };`}
                    </SyntaxHighlighter>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Using the Module</h2>
                <p>Now, you can import and use the <code className="bg-slate-900 p-1 rounded">math.js</code> module in another file:</p>

                <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
                    <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                        {`// app.js
    const math = require('./math');
    
    console.log(math.add(5, 3));      // Output: 8
    console.log(math.subtract(5, 3)); // Output: 2`}
                    </SyntaxHighlighter>
                </div>
            </section>

            <footer className="text-sm text-gray-600">
                © 2024 Creating Modules in Node.js Guide
            </footer>
        </div>
    );
}

export default page