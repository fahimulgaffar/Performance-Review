# Unit Tests Documentation for App and Dashboard Components

This document outlines the unit tests created for the `App` and `Dashboard` components in our application. The `App` component handles user signup, login, and dashboard rendering, while the `Dashboard` component manages performance reviews, including posting, viewing, and draft handling. Unit test can be found in App.test.js.

## Testing Environment

- Testing Library: Jest
- React Testing Library

## Test Cases for App Component

### Signing Up
- **Description:** Tests the signup functionality of the App component.
- **Test Code:** `submits signup information correctly`
- **Test Scenario:** Enters a username and password, simulates a resolved fetch call, and verifies that the signup message is displayed correctly.

### Logging In
- **Description:** Tests the login functionality of the App component.
- **Test Code:** `handles login correctly`
- **Test Scenario:** Enters a username and password, simulates a resolved fetch call, and checks if the login message is displayed as expected.

### Password Validation
- **Description:** Validates the password input and requirements.
- **Test Code:** `validates password requirements`
- **Test Scenario:** Enters passwords of different lengths and checks if the correct password requirement message is displayed.

## Test Cases for Dashboard Component

### Displaying Welcome Message
- **Description:** Ensures the Dashboard component displays the welcome message with the correct username when rendered.
- **Test Code:** `displays welcome message with username`
- **Test Scenario:** Renders the Dashboard component with a specific username and verifies the presence of the corresponding welcome message.

### Posting a Review
- **Description:** Tests the functionality of posting a performance review.
- **Test Code:** `posts a review correctly`
- **Test Scenario:** Enters a review text, simulates a resolved fetch call, and verifies if the review is successfully posted.

### Loading and Saving Drafts
- **Description:** Verifies the ability to save and load draft reviews.
- **Test Code:** `loads and saves drafts`
- **Test Scenario:** Saves a draft review, checks if it's correctly stored in localStorage, and then loads the saved draft into the review input box.

## Usage

To run these tests, execute the test suite associated with both the `App` and `Dashboard` components using the testing command configured in your project. For example, if using Jest, run the command:
```bash
npm test App.test.js Dashboard.test.js
