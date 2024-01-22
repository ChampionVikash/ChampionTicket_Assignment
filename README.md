# ChampionTicket

ChampionTicket is a MERN stack-based project designed for managing support agents and support tickets. This project features two screens: one for creating support agents and another for creating support tickets.

## Live Video Link for Project
https://drive.google.com/file/d/1pp13Xm8TSp08DC5nbfKhtcGKqzn7Ih9i/view


## Features

### 1. Support Agent Creation Screen:

- **Attributes:**
  - Name
  - Email
  - Phone
  - Description

- **Functionality:**
  - Create a new support agent with specified attributes.
  - Validate input data (e.g., proper email format).
  - Store agent information in the MongoDB database.

### 2. Support Ticket Entry Screen:

- **Attributes:**
  - Topic
  - Description
  - Date created
  - Severity
  - Type
  - Assigned To
  - Status (New, Assigned, Resolved)
  - Resolved On

- **Functionality:**
  - Create a new support ticket with specified attributes.
  - Automatically set status to "New" when the ticket is created.
  - Validate input data (e.g., severity level, date format).
  - Store ticket information in the MongoDB database.

## Technology Stack

### Frontend:

- React.js for the user interface.
- State management using React Context or Redux (if needed).

### Backend:

- Node.js and Express.js for the server.
- MongoDB for the database.

## Hosting

## API Endpoints

### 1. Support Agent:

- **Create Support Agent:**
  - Endpoint: `POST /api/support-agents`
  - Request Body: JSON object with agent attributes.
  - Response: JSON object with created agent information.

### 2. Support Ticket:

- **Create Support Ticket:**
  - Endpoint: `POST /api/support-tickets`
  - Request Body: JSON object with ticket attributes.
  - Response: JSON object with created ticket information.

- **Get All Tickets:**
  - Endpoint: `GET /api/support-tickets`
  - Response: JSON array containing all support tickets.
  - Additional functionalities: Add filter, sort, and pagination functionality as per OpenAPI specs.
    - Filter fields: Status, AssignedTo, Severity, Type
    - Sort fields: resolvedOn, dateCreated


