Cluechart AI Agents - Static Website
This repository contains the source code for the Cluechart AI Agents static marketing and informational website. The site is built with Angular and is designed to be fast, responsive, and SEO-friendly through the use of Server-Side Rendering (SSR).

Project Overview
The purpose of this website is to clearly articulate the vision, mission, and core value proposition of the Cluechart AI Agent Framework. It outlines the common problems users face when working with AI agents and presents Cluechart as the definitive solution for orchestrating complex, agent-based workflows.

Tech Stack
Framework: Angular

Styling: SCSS

Rendering: Server-Side Rendering (SSR) with Angular Universal

Documentation: Compodoc (setup, pending code comments)

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js (LTS version recommended)

npm (comes with Node.js)

Angular CLI (npm install -g @angular/cli)

Installation
Clone the repository:

git clone [https://github.com/infernoalert/cluechartwebstatic.git](https://github.com/infernoalert/cluechartwebstatic.git)

Navigate into the project directory:

cd cluechartwebstatic

Install project dependencies:

npm install

Development & Workflow
Development Server
Run the following command to start the local development server with SSR enabled. The application will automatically reload if you change any of the source files.

npm run dev:ssr

Navigate to http://localhost:4200/ in your browser.

Building for Production
To create an optimized, production-ready build of the application, run:

npm run build

The build artifacts will be stored in the dist/ directory.

Previewing the Production Build
After building the project, you can preview the production version locally with the following command:

npm run serve:ssr

Documentation
This project is set up to use Compodoc for automatic documentation generation from source code comments.

Note: The initial components have been generated, but JSDoc-style comments have not yet been added. This is a planned task for as development progresses.

How to Generate Documentation
Build the documentation site:

npm run docs:build

Serve the documentation locally (with live-reload):

npm run docs:serve

This will create and serve the documentation from a documentation folder in the project root.

Project Structure
The project follows a standard Angular CLI structure with components organized into logical feature folders:

src/app/
├── components/         # Reusable UI components (e.g., cards, buttons)
├── layout/             # Structural components (header, footer)
└── pages/              # Page-level components (e.g., home)

Deployment
Deployment is set up to be automated via a CI/CD pipeline connected to the main branch of this repository. Pushing to main will trigger a production build and deploy the application.