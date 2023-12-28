# Review Management Web Application

Welcome to the Review Management Web Application! This web application allows users to create accounts, post performance reviews, and view and manage their reviews. Users can also save drafts of their reviews for later completion.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Documentation](#documentation)
- [Tools Used](#tools-used)
- [License](#license)


## Features

- **User Signup and Login**: Users can create accounts and log in securely.
- **Review Posting**: Users can post performance reviews with text content.
- **Draft Saving**: Users can save drafts of their reviews for later completion.
- **Review Deletion**: Users can delete reviews they have posted.
- **Dashboard**: The dashboard provides an interactive interface for users to manage their reviews.
- **Local Storage**: Draft reviews are stored in the browser's local storage.

## Prerequisites

Before setting up the application, you'll need to have the following tools and dependencies installed:

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- npm: npm is typically installed with Node.js, but you can check your npm version by running `npm -v`.

## Getting Started

1. **Clone the Repository**: Begin by cloning this repository to your local machine using Git:

   ```bash
   git clone https://github.com/your-username/review-management-app.git
   ```

2. **Navigate to the Project Directory**: Move into the project's root directory:

   ```bash
   cd performance-review
   ```

3. **Install Dependencies**: Install both server and client-side dependencies:

   ```bash
   cd react-auth-backend
   npm install
   cd ..
   npm install
   ```

4. **Start the Server**: Start the Express server:

   ```bash
   cd react-auth-backend
   node server.js
   ```

   The server should now be running on [http://localhost:5000](http://localhost:5000).

5. **Start the React Application**: In a new terminal window, start the React application after installing router dome and font awesome:

   ```bash
   cd performance-review
   npm install @fortawesome/react-fontawesome
   npm install --save react-router-dom
   npm start
   ```

   The React application should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

1. **Access the Application**: Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to access the web application.

2. **Signup and Login**: To use the application, start by creating an account (signup) or logging in with your credentials.

3. **Dashboard**: Once logged in, you'll see the main dashboard. Here, you can:

   - Write performance reviews.
   - Post reviews to share them with other users.
   - Save drafts for incomplete reviews.
   - Load drafts into the review editor.
   - Delete previously posted reviews.

4. **Logout**: You can log out at any time by clicking the "Logout" button.

## API Endpoints

The application has the following API endpoints:

- **POST /signup**: Used for user registration. Requires a JSON body with `username` and `password`. Returns a success message if registration is successful.

- **POST /login**: Used for user login. Requires a JSON body with `username` and `password`. Returns a success message if login is successful.

- **GET /api/reviews**: Retrieves all the reviews posted by users. Returns a JSON array of reviews.

- **POST /api/reviews**: Allows users to post reviews. Requires a JSON body with `username` and `review`. Returns a success message if the review is posted successfully.

## Documentation

The primary documentation, including architectural details, hypothetical scenarios, unit testing specifics, code review summaries, and meeting notes, can be found in the `docs` folder. Here is a breakdown of the documents available:

- `Architecture_design.md` and `Architecture_design.png`: Detail the architectural design and visual aid representing the project's architecture.
- `Codes_Added.md`: Summarizes recent code additions made to the project.
- `Component Architecture Visual Aid.png`: Offers a visual representation of the project's component architecture.
- `Marking_Scheme.md`: Outlines the project's marking scheme for evaluation purposes.
- `Process Model Document.pdf` and `Process Model.pdf`: Analyze the project's process model and potential improvements.
- `Unit_test.md`: Includes information regarding conducted unit tests.
- `Hypotheticals/Team's_Hypotheticals.md`: Outlines Sprint 3 hypothetical strategies, incorporating feedback and planned improvements.
- `attribution_template.md`: Template for attributions.
- `code-reviews.md`: Summary of code reviews.
- `meetingNotes.md`: Records from team meetings.
- `microservices_architecture.md`, `microservices_visual.png`: Documents on microservices architecture.
- `team performance-review.md`: Reviews of team performance.
- `userStories.md`: User stories related to the project.

The README.md in the root directory guides access to these documents for evaluation purposes.

## Tools Used

The repository primarily utilizes GitHub for version control and documentation. There are no additional GitHub tools used (such as discussions or wikis) that require review.

## License

This project is not licensed yet.

---

Thank you for using the Review Management Web Application! If you have any questions or encounter issues, please feel free to contact us or submit a GitHub issue. Enjoy using the application!
