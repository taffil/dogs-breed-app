# Dog Breeds App

This is a React project built with TypeScript, Vite, Tailwind CSS, and RTK Query for state management.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

### Installation

1. Clone the repository:

   git clone https://github.com/taffil/dogs-breed-app.git dogbreedsapp
   cd dogbreedsapp
   npm install
   npm run dev
   build for production: npm run build

### API Endpoints

Instead of using the provided API endpoint (`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10`), which had limitations in implementing search and order due to pagination constraints, this project utilizes the following endpoints from the same server:

- `/breeds`: Returns a list of dog breeds.
- `/breeds/:breed_id`: Returns details of a specific dog breed identified by `breed_id`.
- `/breeds/search?q=`: Allows searching for dog breeds based on a query string (`q`).

By leveraging these endpoints, we gain more flexibility in handling and displaying dog breed data within the application.