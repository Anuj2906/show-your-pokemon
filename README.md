# Show Your Pokémon

Show Your Pokémon is a web application built with React and Redux that allows users to log in, view a collection of Pokémon, and see detailed information about each Pokémon. Users can sign up, log in, view a paginated list of Pokémon, and see detailed views of individual Pokémon. 

## Features

- **User Authentication**: Sign up and log in using a username and password.
- **Pokémon Collection**: View a paginated collection of Pokémon.
- **Detailed Pokémon View**: Click on a Pokémon to see more details.
- **Responsive Design**: The application is designed to be responsive and user-friendly.
- **Redux State Management**: Utilizes Redux for state management.

## Technologies Used

- **Frontend**: React, React Router, Redux, React Bootstrap
- **Backend**: PokeAPI (external API)
- **Styling**: Bootstrap, Custom CSS

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Anuj2906/show-your-pokemon.git
    cd show-your-pokemon
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

### Components

- **LoginAuth**: Component for user login.
- **SignUpAuth**: Component for user sign-up.
- **PokemonCollection**: Component to display a collection of Pokémon.
- **PokemonBreifCard**: Component to display a brief card of a Pokémon.
- **PokemonDetailedCard**: Component to display detailed information of a selected Pokémon.

### Redux Slices

- **authSlice.js**: Manages authentication state.
- **pokemonSlice.js**: Manages Pokémon state including selected Pokémon.

## API

The application fetches data from the [PokeAPI](https://pokeapi.co/api/v2/pokemon?limit=20&offset=10).
Change limit and offset in the api url to get data according to your need.
## Usage

1. **Sign Up**: Create a new account using the Sign Up page.
2. **Log In**: Log in with your username and password.
3. **View Pokémon Collection**: After logging in, you will be redirected to the Pokémon collection page.
4. **Pagination**: We can change page by next and previous buttons.
5. **View Detailed Pokémon Information**: Click on a Pokémon card to view detailed information. The URL will update to reflect the selected Pokémon.
6. **Log Out**: Use the log out button to log out of your account and return to the login page.



