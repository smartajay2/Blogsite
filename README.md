Blog Web App
Project Overview
This Blog Web App is a platform for managing and viewing blog projects. Users can log in to the application, while admins have the ability to add new projects. Viewers can browse and like the projects. The application is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

Features
User Authentication: Secure login system for users.
Admin Functionality: Admins can add new projects to the platform.
Project Management: Viewers can view projects and like them.
MERN Stack: Utilizes MongoDB for the database, Express.js for the backend, React.js for the frontend, and Node.js for the server-side environment.
Technologies Used
Frontend:

React.js: Building the user interface and managing state.
Tailwind CSS: Utility-first CSS framework for modern, responsive design.
Backend:

Express.js: Building the RESTful API for data operations.
Node.js: JavaScript runtime for the server-side environment.
MongoDB: NoSQL database for storing user and project data.
Mongoose: MongoDB object modeling for managing data.
Installation
Frontend
Clone the Repository

bash
Copy code
git clone https://github.com/smartajay2/Blogsite.git
cd Blogsite
Install Frontend Dependencies

Make sure you have Node.js installed. Then run:

bash
Copy code
npm install
Run the Frontend Project

bash
Copy code
npm start
The frontend will be running at http://localhost:3000.

Backend
Navigate to the Backend Directory

bash
Copy code
cd backend
Install Backend Dependencies

bash
Copy code
npm install
Set Up MongoDB

Make sure you have MongoDB installed and running on your machine, or set up a MongoDB cluster on MongoDB Atlas.

Create a .env file in the backend directory and add your MongoDB connection string:

env
Copy code
MONGODB_URI=your-mongodb-connection-string
PORT=5000
Run the Backend Project

bash
Copy code
npm start
The backend will be running at http://localhost:5000.

API Endpoints
POST /api/auth/login: Log in a user.
POST /api/projects: Admin adds a new project.
GET /api/projects: Retrieve all projects.
GET /api/projects/
: Retrieve a project by ID.
POST /api/projects/
/like: Like a project.
Usage
User Login: Users can log in to access the platform.
Admin Functionality: Admins can add new projects through the interface.
View Projects: Viewers can browse the list of projects.
Like Projects: Viewers can like projects they are interested in.
Code Explanation
Frontend:

React.js: Handles user interface and client-side logic.
Tailwind CSS: Provides responsive styling for the application.
Backend:

Express.js: Manages API routes and handles requests.
Node.js: Provides the server-side environment.
MongoDB: Stores user and project data.
Mongoose: Manages MongoDB data models and interactions.
Contribution
If you would like to contribute to this project, please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License.

Contact
For any questions or issues, please contact ajayjest2@gmail.com.

