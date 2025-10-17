# 🏨 HOTEL BOOKING WEBSITE
## 🖥️ Dashboard
<p align="center">
  <img src="https://github.com/anamika89720/MAJORPROJECT/blob/main/Ouput/DashBoard.jpg" alt="Dashboard Screenshot" width="80%">
</p>

The **Hotel Booking Website** provides a seamless platform for users to explore hotels, make bookings, and manage reservations.  
The **Dashboard** gives a clear overview of available rooms, booking statuses, and customer activity in real-time.  
Admins can efficiently manage hotel listings and users can track their reservations effortlessly.

## 🔐 Login Page
<p align="center">
  <img src="https://github.com/anamika89720/MAJORPROJECT/blob/main/Ouput/Login.jpg" alt="Login Screenshot" width="80%">
  <img src="https://github.com/anamika89720/MAJORPROJECT/blob/main/Ouput/NewListing.jpg" alt="NewListing Screenshot" width="80%">
</p>
Users can securely log in with their registered credentials to access specific features. Only authorized users—such as hotel
owners adding listings or guests updating experiences—can perform actions. Invalid usernames or passwords prevent access, 
ensuring secure and controlled functionality.

## 📝 Review & Location Feature
<p align="center">
  <img src="https://github.com/anamika89720/MAJORPROJECT/blob/main/Ouput/Review.jpg" alt="Review Screenshot" width="80%">
  <img src="https://github.com/anamika89720/MAJORPROJECT/blob/main/Ouput/Location.jpg" alt="Location Screenshot" width="80%">
</p>
Users can submit reviews for hotels based on their personal experience.  
Each user can **only edit their own reviews**, ensuring integrity and authenticity of feedback.  
Integrated with **Mapbox API**, the system also displays the user’s current location, helping them visualize where they are writing the review.

## 🚀 Features

- Structured MVC architecture for clear separation between routes, controllers, models, and views  
- Event-driven programming design to manage asynchronous workflows  
- Secure user authentication and authorization  
- RESTful APIs to handle data operations  
- Cloud configuration / environment support (Storage & Deployement)  
- Utility modules for reusable logic  
- Dynamic views using EJS templating  
- Clean error handling and middleware pipeline  

---

## 📦 Tech Stack

| Layer        | Technologies / Libraries           |
|---------------|--------------------------------------|
| Backend        | Node.js, Express                   |
| Views / Templating | EJS                         |
| Routing & Controllers | Express routing             |
| Models / Database | (Your DB—e.g. MongoDB / MySQL / etc.)  |
| Middleware / Utilities | Custom middleware, helpers |
| Cloud / Config | dotenv / cloudconfig.js           |

---

## 🏗 Project Structure

- `controllers/` – Contains controller logic for handling HTTP requests  
- `models/` – Schema definitions and data interaction logic  
- `routes/` – Express route definitions  
- `views/` – EJS template files  
- `public/` – Static assets (CSS, JS, images)  
- `utils/` – Helper functions and utilities  
- `middleware.js` – Custom middleware for auth, error handling, etc.  
- `cloudconfig.js` – Configuration management (e.g. environment variables)  

---

## 🛠 Setup & Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/anamika89720/MAJORPROJECT.git
   cd MAJORPROJECT
2. Install Dependencies
   npm install
3. Setup environment variables
  PORT=3000
  DB_URI=<your_database_uri>
  SESSION_SECRET=<your_secret>
4. Run the application
   npm start
   
# 🌐 Live Deployment

The project is hosted and fully functional online.  
Access the live site here: [Hotel Booking Website Live](https://majorproject-1-92nf.onrender.com/listings)




