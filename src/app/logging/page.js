// components/LoggingMonitoring.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const LoggingMonitoring = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Logging and Monitoring in Node.js</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>
          Logging and monitoring are crucial for understanding application performance, diagnosing issues, and ensuring reliability. This guide covers best practices for implementing logging and monitoring in Node.js applications.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Why Logging and Monitoring?</h2>
        <p>
          Effective logging helps track the application&apos;s behavior and troubleshoot problems, while monitoring tools provide insights into performance and usage metrics.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Using Winston for Logging</h2>
        <p>The <code>winston</code> library is a versatile logging library for Node.js:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`npm install winston`}
          </SyntaxHighlighter>
        </div>

        <p>Example of setting up a basic logger with Winston:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const winston = require('winston');

// Create a logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// Logging messages
logger.info('Information message');
logger.error('Error message');`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Structured Logging</h2>
        <p>
          Using structured logging helps improve searchability and analysis of log entries. Here’s an example of logging with additional context:
        </p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`logger.info('User login attempt', {
  username: 'user123',
  timestamp: new Date().toISOString(),
});`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Monitoring with Prometheus and Grafana</h2>
        <p>
          For monitoring your Node.js applications, you can use <code>Prometheus</code> for metrics collection and <code>Grafana</code> for visualization:
        </p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="bash" style={vscDarkPlus}>
            {`npm install prom-client`}
          </SyntaxHighlighter>
        </div>

        <p>Example of integrating Prometheus metrics in a Node.js app:</p>

        <div className="bg-gray-800 text-white rounded-md p-4 mt-4">
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {`const client = require('prom-client');
const express = require('express');

const app = express();
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

// Create a custom metric
const requestsCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
});

// Increment the counter for each request
app.use((req, res, next) => {
  requestsCounter.inc();
  next();
});

// Endpoint to expose metrics
app.get('/metrics', (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(client.register.metrics());
});`}
          </SyntaxHighlighter>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Best Practices</h2>
        <p>Follow these best practices for effective logging and monitoring:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Log at various levels (info, warn, error) to categorize log messages.</li>
          <li>Use structured logging for better analysis and correlation.</li>
          <li>Implement monitoring to track performance metrics and alert on issues.</li>
          <li>Regularly review logs and metrics for insights and optimizations.</li>
        </ul>
      </section>

      <footer className="text-sm text-gray-600">
        © 2024 Logging and Monitoring Guide
      </footer>
    </div>
  );
};

export default LoggingMonitoring;
