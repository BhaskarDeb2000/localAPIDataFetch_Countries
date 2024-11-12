# Country Page Application

This React application fetches and displays country data, allowing users to search through states and their respective cities. The data is fetched from an API and displayed in an organized, user-friendly manner, featuring error handling and loading states.

## Demo
<img src="./demoImage/Screen Recording 2024-11-12 at 7.20.49.gif">

## Features

- Fetches data from a backend API.
- Displays a list of states and their cities.
- Provides a search bar for users to filter states
- Includes error handling and loading screens for a smooth user experience.
- Styled with Material-UI for modern aesthetics and responsive design.

## Components

- **App**: The main component that fetches data from the API and manages state and search functionality.
- **Countries**: A component that displays each state and its cities.
- **Error**: A component that shows an error message if data fails to load.
- **Loading**: A component that shows loading  while data is being fetched.

## API

The app fetches country data from this endpoint:

[BackEnd_server/cities](https://local-api-data-fetch-countries-backend.vercel.app/cities)

The API returns a list of states, each containing a list of cities.

## Deployed Link

The application is deployed on Vercel and can be accessed here: [Country Page Application](https://fullstack-local-data-fetch-cities.vercel.app/).


