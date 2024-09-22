import React from 'react'

function page() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Node.js for Beginners</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">What is Node.js?</h2>
                <p>
                    Node.js is a JavaScript runtime built on Google Chrome&amp;s V8 engine. It allows
                    you to run JavaScript on the server, making it a powerful tool for building
                    server-side web applications.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">What Makes Node.js Special?</h2>
                <p>
                    Node.js is known for its asynchronous, event-driven model, allowing it to handle
                    multiple requests efficiently without blocking the server. This makes it ideal for
                    building scalable and real-time applications.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                <ul className="list-disc list-inside">
                    <li>JavaScript-based</li>
                    <li>Asynchronous, non-blocking execution model</li>
                    <li>Large package ecosystem (npm)</li>
                    <li>High scalability</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Useful Links</h2>
                <ul className="list-disc list-inside">
                    <li>
                        <a
                            href="https://nodejs.org/en/docs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Official Node.js Documentation
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.freecodecamp.org/news/what-is-node-js/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Beginner&amp;s Guide to Node.js
                        </a>
                    </li>
                </ul>
            </section>

            <footer className="text-sm text-gray-600">
                © 2024 Node.js Learning Resources
            </footer>
        </div>
    )
}

export default page