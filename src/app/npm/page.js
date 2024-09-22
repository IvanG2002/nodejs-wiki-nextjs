import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

function page() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">What is npm?</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p>
                    npm (Node Package Manager) is the default package manager for Node.js. It allows
                    developers to install, share, and manage dependencies for their projects easily.
                    With npm, you can install libraries, frameworks, and tools that help streamline your
                    development process.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Installing npm</h2>
                <p>
                    npm comes bundled with Node.js, so if you have Node.js installed, you already have npm
                    available. You can verify your npm installation by running the following command in your
                    terminal:
                </p>

                <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
                    <SyntaxHighlighter language="bash" style={vscDarkPlus}>
                        {`# Check npm version
    npm -v`}
                    </SyntaxHighlighter>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Common npm Commands</h2>
                <p>Here are some commonly used npm commands:</p>

                <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
                    <SyntaxHighlighter language="bash" style={vscDarkPlus}>
                        {`# Initialize a new package.json file
    npm init
    
    # Install a package
    npm install <package-name>
    
    # Uninstall a package
    npm uninstall <package-name>
    
    # Update a package
    npm update <package-name>
    
    # Install all dependencies listed in package.json
    npm install`}
                    </SyntaxHighlighter>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Creating a package.json File</h2>
                <p>
                    The <code className="bg-slate-900 text-white p-1 rounded">package.json</code> file is essential for
                    any Node.js project. It contains metadata about your project and a list of dependencies.
                    You can create one using:
                </p>

                <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
                    <SyntaxHighlighter language="bash" style={vscDarkPlus}>
                        {`# Create a package.json file with default values
    npm init -y`}
                    </SyntaxHighlighter>
                </div>
            </section>

            <footer className="text-sm text-gray-600">
                © 2024 npm Guide
            </footer>
        </div>
    );
}

export default page