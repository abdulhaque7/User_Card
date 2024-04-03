Frontend:
Components:
UserCard Component: Display each user's information in a card format.
Pagination Component: Implement pagination to navigate through users.
SearchBar Component: Allow users to search for users by name.
Filter Component: Implement filters for Domain, Gender, and Availability.
TeamComponent: Display selected users for the team.

Backend:
Routes:
GET /api/users: Retrieve all users with pagination support.
GET /api/users/:id: Retrieve a specific user by ID.
POST /api/users: Create a new user.
PUT /api/users/:id: Update an existing user.
DELETE /api/users/:id: Delete a user.
POST /api/team: Create a new team by selecting users with unique domains and availability.
GET /api/team/:id: Retrieve the details of a specific team by ID.
Controllers:
Implement CRUD operations for users (GET, POST, PUT, DELETE).
Implement logic for filtering, searching, and pagination.
Implement logic for creating and retrieving teams.
Database Models:
User Model: Define schema for users.
Team Model: Define schema for teams.
Middleware:
Implement middleware for validation and error handling.

Tech Stack:
Node.js and Express.js for the server.
MongoDB for the database.
Mongoose for object modeling with MongoDB.

For frontend
React.js for the UI components.
Redux Toolkit for state management.
