# Meal Monarch - Smart Diet Planner

## Overview

Meal Monarch is a web application designed to help users plan their diets and potentially get meal suggestions. It includes user authentication (login/registration) and a dashboard for inputting personal details to tailor the diet planning.

## Files Description

* `Meal Monarch.html`: This is the main HTML file for the application's authentication pages (login and registration). It provides the user interface for signing in or creating an account.
* `meal monarch.css`: This CSS file provides the styling for the login and registration pages (`Meal Monarch.html`). It handles the visual layout and appearance of these pages.
* `meal monarch.js`: This JavaScript file contains the logic for user authentication. It handles form validation for login and registration, and it seems to redirect to the dashboard (`dashboard.html`) upon successful authentication.
* `dashboard.html`: This HTML file represents the main dashboard of the application. Users can enter their weight, height, gender, diet goal (bulk, cut, recomposition), and diet preference (vegetarian, non-vegetarian) on this page. It also includes a feature to "Fetch Recipes" (the functionality of which is not fully clear from the provided code).
* `dashbord.css`: This CSS file (note the typo, likely intended to be `dashboard.css`) is responsible for the styling of the dashboard page (`dashboard.html`).
* `dashboard.js`: This JavaScript file adds interactivity to the dashboard, specifically handling the selection of diet goals.

## Functionality

* **User Authentication:**
    * Users can register with their name, email, password, date of birth, and mobile number.
    * Users can log in with their email and password.
    * The login page has a "Remember me" checkbox and a "Forgot password" link (the "Forgot password" functionality is not implemented in the provided code).
* **Dashboard:**
    * Users can input their weight, height, gender, diet goal (bulk, cut, recomposition), and diet preference (vegetarian, non-vegetarian).
    * There is a button to "Fetch Recipes," suggesting the application may provide meal suggestions based on user input. (The recipe fetching logic is not present in the provided code).
* **Styling:** The application uses custom CSS to provide a visually appealing interface with a background image and a semi-transparent container.
* **Audio:** Both pages include an audio element that plays a music track.

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery (for DOM manipulation and event handling)

## Setup

1.  **Open `Meal Monarch.html`** in a web browser to access the login/registration page.
2.  Register a new account or log in with existing credentials.
3.  Upon successful login/registration, the application redirects to `dashboard.html`, where you can enter your details.

**Note:** The "Fetch Recipes" functionality requires further implementation (likely involving an API call or a local database). The provided code only sets up the user interface elements.

## Potential Improvements

* **Backend Integration:** The application currently lacks a backend. To store user data, handle authentication securely, and provide actual meal suggestions, a server-side component and database are necessary.
* **Recipe Logic:** Implement the "Fetch Recipes" functionality to provide meaningful meal plans. This could involve integrating with a nutrition/recipe API.
* **Error Handling:** Enhance error handling and provide more informative feedback to the user (e.g., using modal dialogs or specific error message elements instead of just `console.log`).
* **Password Security:** Implement proper password hashing and salting on the backend to ensure secure storage.
* **Accessibility:** Consider accessibility best practices to make the application usable for everyone.
* **Code Cleanup:** Address the typo in `dashbord.css` and ensure consistent naming conventions.

## Authors

* Jayasurya
* Aditya Joshi

## Team

Jay

## License



Copyright (c) 2025 Jayasurya and Aditya Joshi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
