E-Commerce Mart is a React-based web application that simulates a complete e-commerce shopping experience. Users can browse products, view detailed information,
add items to the cart, filter products by category, search for items, and manage their authentication (login/signup). The project leverages **React Context, Redux Toolkit, React Router, Bootstrap, and React-Toastify for state management, routing, UI, and notifications.

Project Components Overview :-

1. Authentication Modal (`AuthModal.jsx`):
   Purpose: Provides a login/signup modal popup without leaving the current page.
   Functionality:
   Toggles between Login and Signup forms.
   Controlled by props: `show`, `mode`, `onClose`, `onSwitchMode`.
   Uses Bootstrap modal styling with transparent overlay.
   Header shows modal title and close button.
   Footer provides a link to switch between login and signup.
   Key Technologies: React props, conditional rendering, Bootstrap modal.
   
2. Login Component (`Login.js`):
   Purpose: Handles user authentication.
   Features:
   Uses useState for input fields, password toggle, error, and loading.
   Redux Toolkit (`authSlice`) manages global authentication state.
   Validates credentials (hardcoded for demonstration).
   Displays success or error messages using alerts.
   Calls `onClose()` to hide modal after login.
   Key Technologies: React hooks, Redux Toolkit, Bootstrap, alert messages.

3. Signup Component (`Signup.js`):
   Purpose: Registers new users.
   Features:
   State management for form inputs (`fullName`, `email`, `password`, etc.).
   Form validation ensures password match and required fields.
   Submits data (currently logs to console) and shows success alert.
   Closes modal on successful signup.
   Key Technologies: React hooks, Bootstrap form controls, client-side validation.

4. Cart Page (`Cartpage.jsx`):
   Purpose: Displays products added to the cart and allows management.
   Features:
   Reads cart state from AppContext.
   Functions to increase, decrease, or remove** items.
   Real-time **total price calculation.
   Conditional rendering: shows “No items in cart” when empty.
   Layout split into Cart Items List and Cart Summary.
   Uses Bootstrap grid for responsive design.
   Key Technologies: React Context API, useState, useEffect, Bootstrap.

5. Product Detail Page (`ProductDetail.jsx`):
   Purpose: Shows detailed info for a selected product.
   Features:
   Fetches product data from `location.state` (React Router).
   Tabs for **Description and Reviews.
   Quantity input + Add to Cart button.
   Related products displayed dynamically (same category, excluding current product).
   Toast notifications for user actions.
   Key Technologies: React Context, React Router (`useLocation`), React-Toastify, conditional rendering.

6. Shop Page (`Shop.jsx`):
   Purpose: Displays all products and allows filtering/searching.
   Features:
   Dropdown category filter (sofa, chair, mobile, watch, wireless).
   Search input with **live filtering.
   Product grid showing image, truncated title, price, and static rating.
   Clicking product navigates to Product Detail via `Link` with state.
   Filters applied via `.filter()` function for category and search term.
   Key Technologies: React Context, useState, useEffect, React Router, Bootstrap grid, FontAwesome icons.

7. Navigation Bar (`Nav.jsx`):
   Purpose: Main header for navigating the app.
   Features:
   Fixed top navbar with brand logo.
   Menu items: Home, Shop, Cart.
   User icon shows login/account status.
   Cart icon displays dynamic item count from `cart` state.
   Responsive with hamburger menu on smaller screens.
   Key Technologies: React Router, React Context, FontAwesome icons, Bootstrap.

8. Footer Component (`Footer.jsx`):
   Purpose: Displays company info, policies, and contact details.
   Features:
   Four columns: Brand info, About Us links, Customer Care links, Contact info.
   Dark blue background with white text.
   Responsive layout using Bootstrap grid.
   Key Technologies: Bootstrap grid, responsive design.

9. Routing (`Routes.js`):
    Purpose: Handles navigation without page reloads.
   Routes:
   `/` → Product Page (Home)
   `/shop` → Shop Page
   `/cart` → Cart Page
   `/shop/detail` → Product Detail Page
   Key Technologies: React Router v6.

10. Global State & Authentication (Redux & Context):
    AppContext:
    Shares `products`, `cart`, `qty`, and cart handlers (`addtocart`, `inc`, `dec`) across components.
    Avoids prop drilling.

    Redux Toolkit (`authSlice.js`):
    Manages user authentication state globally.
    Actions: `login` and `logout`.
    State: `isLoggedIn` and `user`.
    Key Technologies: React Context API, Redux Toolkit.
