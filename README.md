# unsplash-images

## Overview

unsplash-images is a React application that allows users to search for their favorite pets or any animals by entering a name in the search box. The app fetches stunning images from the Unsplash API and displays them in a gallery format. It also includes a light/dark theme toggle for a better user experience.

---

## Features

- **Search for Images:** Enter a search term (e.g., "cat," "dog") to find related images.
- **Dynamic Theme Toggle:** Switch between light and dark themes.
- **Responsive Design:** Ensures a great experience across devices.
- **Error Handling:** Displays appropriate messages when no images are found or when an error occurs.
- **Loading State:** Shows a loading indicator while fetching images.

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/unsplash-images.git
   ```

2. Navigate to the project directory:
   ```bash
   cd unsplash-images
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your Unsplash API key:
   ```env
   VITE_ACCESS_KEY=your-unsplash-access-key
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open the application in your browser at:
   ```
   http://localhost:5173
   ```

---

## Usage

1. Use the search bar to enter the name of your desired animal (e.g., "cat," "dog," "elephant").
2. View the gallery of images displayed below the search form.
3. Use the theme toggle button to switch between light and dark modes.

---

## Components

- **`Gallery`:** Fetches and displays images based on the search term.
- **`SearchForm`:** Captures user input for the search term.
- **`ThemeToggle`:** Toggles between light and dark themes.
- **`AppContext`:** Provides state management for theme and search term.

---

## Dependencies

- [React](https://reactjs.org/)
- [React Query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Unsplash API](https://unsplash.com/developers)

---

## Contributing

Feel free to fork this repository and submit pull requests for enhancements or bug fixes. All contributions are welcome!

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy finding beautiful images with **unsplash-images**! 🌟
