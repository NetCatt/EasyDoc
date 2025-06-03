# EasyDoc: A Comprehensive Doctor Appointment Booking System

EasyDoc is a full-stack application providing a platform for users to book appointments with doctors.  The system includes features for both users and administrators, allowing for efficient appointment scheduling and management.  This README provides comprehensive documentation for developers working with the EasyDoc codebase.


## Key Features

* **User Registration and Login:** Secure user authentication using email and password.
* **Doctor Profile Viewing:** Users can view doctor profiles, including contact information, specialization, and availability.
* **Appointment Booking:**  Users can book appointments with doctors, specifying date and time.  The system checks for availability and prevents double-booking.
* **Appointment Management:** Users can view their booked appointments and their status (pending, approved, rejected).
* **Admin Panel:**  Administrators can manage doctor accounts (approve/block applications) and view user data.
* **Doctor Account Application:** Users can apply to become doctors, providing their professional information.
* **Notification System:** The system provides notifications to users and administrators about appointment status changes and new doctor applications.


## Technologies Used

* **Backend:**
    * Node.js
    * Express.js
    * MongoDB
    * Mongoose
    * bcrypt (for password hashing)
    * jsonwebtoken (for JWT authentication)
    * moment (for date/time manipulation)
    * Nodemon (for development server restarts)
    * Supertest (for backend testing)
    * Jest (for backend testing)
* **Frontend (Client):**
    * React
    * Redux Toolkit
    * React Router DOM
    * Ant Design
    * React Hot Toast
    * Axios (for API calls)
    * Vite (for Admin Panel)
    * React 18

* **Admin Panel:**
  * React
  * Vite
  * React Router DOM
  * Axios



## Prerequisites

* Node.js (version 15.7.0 or higher)
* npm (or yarn)
* MongoDB (running locally or a connection string)


## Installation

This project uses a separate server and client.  You will need to install dependencies for each independently.

**1. Backend Installation:**

* Clone the repository:
  ```bash
  git clone <repository_url>
  ```
* Navigate to the backend directory:
  ```bash
  cd easydoc
  ```
* Install dependencies:
  ```bash
  npm install
  ```
* Set environment variables:  Create a `.env` file in the root directory and add the following:
  ```
  MONGO_URL=<your_mongodb_connection_string>
  JWT_SECRET=<your_jwt_secret>
  PORT=<your_port_number>  //Defaults to 5000 if not set
  NODE_ENV=development //Change to production for deployment
  ```
* Start the server:
  ```bash
  npm run dev  //Uses nodemon for automatic restarts during development. npm run start for production
  ```

**2. Frontend Installation (Client):**

* Navigate to the client directory:
  ```bash
  cd client
  ```
* Install dependencies:
  ```bash
  npm install
  ```
* Start the development server:
  ```bash
  npm start
  ```


**3. Admin Panel Installation:**

* Navigate to the adminPh directory:
  ```bash
  cd adminPh
  ```
* Install dependencies:
  ```bash
  npm install
  ```
* Start the development server:
  ```bash
  npm run dev
  ```

## Usage Examples

**Backend:** The backend uses RESTful API routes for all functionalities. See the codebase for specific endpoint details and documentation (e.g. `/api/user/register`, `/api/doctor/get-appointments-by-doctor-id`).  The `server.js` file shows how these routes are utilized.

**Frontend:** The frontend utilizes React Router for navigation and handles user interactions. Explore the various pages (`pages` directory) and components for specific usage examples.  The client side will make requests to the backend via Axios.


**Admin Panel:** The admin panel is a separate React application.  Navigate to `/add`, `/list`, `/orders` to add, manage, and view orders.  The panel's functionality is similar to the client's but is geared specifically for administrative actions.

**CLI Commands:**
* `npm run dev` (backend): Starts the backend development server with nodemon for automatic restarts.
* `npm run server` (backend): Starts the backend server (no automatic restarts).
* `npm run client` (client): Starts the client-side development server.
* `npm run build` (client): Builds the client application for production.
* `npm run test` (backend): Runs backend tests.
* `npm run dev` (adminPh): Starts the Admin panel development server.
* `npm run build` (adminPh): Builds the Admin panel for production.

## Project Structure

```
easydoc/              // Backend
├── config/           // Database configuration
├── middlewares/      // Authentication middleware
├── models/           // Mongoose models
├── routes/           // API routes
├── server.js         // Main server file
└── package.json      // Project dependencies

client/               // Frontend
├── public/           // Static assets
├── src/              // React components and pages
│   ├── components/   // Reusable UI components
│   ├── pages/        // Application pages
│   ├── redux/        // Redux store and reducers
│   └── ...
└── package.json      // Project dependencies

adminPh/             //Admin Panel
├── src/
│   ├── components/
│   ├── pages/
│   └── ...
└── package.json
```


## Configuration

* **`config/dbConfig.js` (Backend):**  Connects to the MongoDB database using the `MONGO_URL` environment variable.
* **`package.json` (Backend & Client & AdminPh):** Contains scripts for development and build processes.  The backend `package.json` also specifies dependencies. The client `package.json` contains a proxy setting pointing to the backend, which is important for development.
* **`.env` (Backend):** Stores environment-specific variables (e.g., database URL, JWT secret).


## Contributing Guidelines

There are no explicit contributing guidelines in the provided codebase.  If you intend to contribute, please consider standard open-source practices (fork the repo, create a branch, submit pull requests with clear descriptions).

## License Information

The project is licensed under the ISC license (as indicated in the backend's `package.json`).  See the `LICENSE` file for details.


## Error Messages

* **Authentication Errors (401):**  Check your JWT token and ensure it's valid and correctly included in the headers of your API requests.  Verify that the `JWT_SECRET` environment variable is correctly set on the backend.
* **Database Errors:** Check your MongoDB connection string and ensure that the database is running.
* **Validation Errors:** Check API response messages for details on failed input validation (e.g., missing fields, incorrect data types).
* **500 Server Errors:** Consult server logs for detailed error information.


This README aims to provide a thorough overview and guide to working with the EasyDoc project. Remember to refer to the individual file comments and code for more detailed explanations.
