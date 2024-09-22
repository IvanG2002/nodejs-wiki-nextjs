import React from 'react'

function page() {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Advantages of Node.js</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. High Performance</h2>
                <p>
                    Node.js is built on Chrome&amp;s V8 JavaScript engine, making it fast and efficient. Its
                    non-blocking, event-driven architecture allows it to handle multiple requests
                    simultaneously, making it ideal for applications that require high performance,
                    like real-time apps.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. Scalability</h2>
                <p>
                    One of the biggest strengths of Node.js is its ability to scale. Node.js apps can handle
                    a large number of connections with high throughput, making it ideal for distributed
                    applications and microservices architectures.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. Fullstack JavaScript</h2>
                <p>
                    With Node.js, developers can use JavaScript for both the frontend and backend, allowing
                    for easier development and a unified language across the entire stack. This enables
                    better collaboration and more efficient code sharing.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">4. Large Ecosystem</h2>
                <p>
                    Node.js comes with a huge package ecosystem through npm (Node Package Manager), which
                    provides access to thousands of libraries and tools. This saves developers time by
                    allowing them to integrate ready-made modules and solutions.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">5. Community Support</h2>
                <p>
                    Node.js has a vast, active community of developers and companies supporting it. This
                    means plenty of resources, tutorials, and tools available for developers to learn and
                    solve problems quickly.
                </p>
            </section>

            <footer className="text-sm text-gray-600">
                © 2024 Node.js Advantages Guide
            </footer>
        </div>
    );
}

export default page