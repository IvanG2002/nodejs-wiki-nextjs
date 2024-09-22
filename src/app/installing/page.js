// components/InstallingNodeJs.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const page = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Installing Node.js</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. Downloading Node.js</h2>
                <p>
                    To install Node.js, visit the official Node.js website at{' '}
                    <a
                        href="https://nodejs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        nodejs.org
                    </a>{' '}
                    and download the installer suitable for your operating system.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. Verifying Installation</h2>
                <p>
                    Once Node.js is installed, you can verify the installation by opening a terminal or
                    command prompt and running the following commands:
                </p>

                <SyntaxHighlighter language="bash" style={vscDarkPlus}>
                    {`# Check Node.js version
node -v

# Check npm version (Node Package Manager)
npm -v`}
                </SyntaxHighlighter>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. Running a Simple Node.js Script</h2>
                <p>
                    To ensure everything works correctly, you can create a simple JavaScript file called
                    <code className="bg-slate-950 text-white m-2 p-1 rounded">app.js</code> and run it with Node.js. Here’s a
                    basic example:
                </p>

                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                    {`// app.js
console.log('Hello, Node.js!');`}
                </SyntaxHighlighter>

                <p className="mt-4">
                    After saving the file, run the following command in your terminal to execute the script:
                </p>

                <SyntaxHighlighter language="bash" style={vscDarkPlus}>
                    {`# Run the script
node app.js`}
                </SyntaxHighlighter>

                <p className="mt-4">
                    If everything is set up correctly, you should see <strong>&quot;Hello, Node.js!&quot;</strong> printed in
                    the terminal.
                </p>
            </section>

            <footer className="text-sm text-gray-600">
                © 2024 Node.js Installation Guide
            </footer>
        </div>
    );
};

export default page;
