# 🌍 WanderLust – Travel & Stay Listing Platform

WanderLust is a full-stack web application inspired by platforms like Airbnb.  
Users can explore, create, edit, and manage travel stay listings with category-based filtering, authentication, and map integration.

🔗 **Live Demo:** [https://wanderlust-bzc0.onrender.com](https://wanderlust-bzc0.onrender.com)

---

## ✨ Features

- 🏡 **Create, Edit & Delete Listings**
- 🗂 **Category-based Filtering**
- 👤 **User Authentication & Authorization**
  - Login / Signup
  - Only owners can edit or delete their listings
- 🖼 **Image Upload**
  - Cloudinary integration for storing images
- 🗺 **Map Integration**
  - Location-based map using Mapbox
- ⭐ **Reviews & Ratings**
- 💬 **Flash Messages** for success & error feedback
- 📱 **Responsive UI**

---

## 🛠 Tech Stack

### Frontend
- EJS (Embedded JavaScript Templates)
- Bootstrap
- Font Awesome

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js (Authentication)
- Joi (Validation)

### Services
- Cloudinary (Image Storage)
- Mapbox (Geocoding & Maps)

---

## 🚀 How It Works

- Listings are stored in MongoDB with predefined categories.
- The **index page uses query parameters** to filter listings:

- The same index route handles:
- All listings
- Filtered listings by category
- Categories are highlighted dynamically based on the selected filter.

---

## 🔐 Authentication Flow

- Users must be logged in to:
- Create listings
- Edit or delete their own listings
- Post reviews
- Session-based authentication using Passport.js.

---

## 📂 Project Structure

├── controllers/
├── models/
├── routes/
├── views/
│ ├── listings/
│ ├── layouts/
├── public/
│ ├── css/
├── middleware.js
├── schema.js
├── app.js


---



---

## 🧠 Learning Outcomes

- RESTful routing
- MVC architecture
- Middleware handling
- Form validation with Joi
- Category-based filtering using query parameters
- Authentication & authorization
- Cloudinary + Mapbox integration

---

## 📌 Future Improvements

- 🔍 Search functionality
- 📄 Pagination
- ❤️ Wishlist / Favorites


---

## 👨‍💻 Author

**Parshwa Magdum**

Feel free to ⭐ this repository if you like the project!
