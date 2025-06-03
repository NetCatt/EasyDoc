
# 🩺 EasyDoc: A Comprehensive Doctor Appointment Booking System

EasyDoc is a full-stack application providing a platform for users to book appointments with doctors.  
The system includes features for both users and administrators, allowing for efficient appointment scheduling and management.

---

## ✨ Key Features

- 🔐 **User Registration and Login** – Secure authentication using email and password.
- 👨‍⚕️ **Doctor Profile Viewing** – View profiles including specialization, contact info, and availability.
- 📅 **Appointment Booking** – Book appointments with real-time availability checks.
- 📋 **Appointment Management** – Track booking status: pending, approved, rejected.
- 🛠️ **Admin Panel** – Approve/block doctors and manage users.
- 📝 **Doctor Account Application** – Apply to join as a doctor with professional details.
- 🔔 **Notification System** – Updates on appointment status and doctor applications.

---

## 🚀 Technologies Used

### 🔧 Backend
- 🟢 **Node.js**
- ⚡ **Express.js**
- 🍃 **MongoDB**
- 🧬 **Mongoose**
- 🧂 **bcrypt** (Password hashing)
- 🛡️ **jsonwebtoken** (JWT Auth)
- 🕒 **moment** (Date/time)
- 🔁 **Nodemon** (Dev auto-reload)
- 🧪 **Supertest** & **Jest** (Testing)

### 🎨 Frontend (Client)
- ⚛️ **React 18**
- 🧠 **Redux Toolkit**
- 🌐 **React Router DOM**
- 🖌️ **Ant Design**
- 🔥 **React Hot Toast**
- 📡 **Axios** (API calls)
- ⚡ **Vite**

### 🧑‍💼 Admin Panel
- ⚛️ **React**
- ⚡ **Vite**
- 🌐 **React Router DOM**
- 📡 **Axios**

---

## 🧰 Prerequisites

- 🟢 Node.js (v15.7.0 or higher)
- 📦 npm (or yarn)
- 🍃 MongoDB (local or cloud)

---

## 📦 Installation Guide

### 1️⃣ Backend Setup

```bash
git clone <repository_url>
cd easydoc
npm install
```

🔐 Create a `.env` file:

```env
MONGO_URL=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
PORT=5000
NODE_ENV=development
```

▶️ Start the backend server:

```bash
npm run dev
```

---

### 2️⃣ Frontend (Client) Setup

```bash
cd client
npm install
npm start
```

---

### 3️⃣ Admin Panel Setup

```bash
cd adminPh
npm install
npm run dev
```

---

## 💻 Usage Examples

### 🛠️ Backend
- RESTful API routes like `/api/user/register`, `/api/doctor/get-appointments-by-doctor-id`

### 🎯 Frontend
- Uses React Router + Axios to interact with backend and display user data

### 🧑‍💼 Admin Panel
- Routes like `/add`, `/list`, `/orders` to manage doctor and user activities

---

## 📜 CLI Commands

```bash
npm run dev       # Start backend (dev)
npm run server    # Start backend (prod)
npm run client    # Start frontend
npm run build     # Build frontend
npm run test      # Run backend tests
npm run dev       # Start Admin panel (dev)
npm run build     # Build Admin panel (prod)
```

---

## 🗂 Project Structure

```
easydoc/
├── config/
├── middlewares/
├── models/
├── routes/
├── server.js
├── package.json

client/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
└── package.json

adminPh/
├── src/
│   ├── components/
│   ├── pages/
└── package.json
```

---

## ⚙️ Configuration

- `config/dbConfig.js` – MongoDB connection
- `.env` – Secrets and environment configs
- `package.json` – Scripts and dependencies (all folders)

---

## 🤝 Contributing

Fork, branch, and pull request with a clear description. Follow standard open-source contribution practices.

---

## 📄 License

Licensed under the **ISC** License. See `LICENSE` for details.

---

## ❗ Common Errors

- ⚠️ **401 Unauthorized:** Check JWT token validity and `JWT_SECRET`
- 🛑 **MongoDB Errors:** Verify connection string and DB status
- ❌ **Validation Errors:** Ensure required fields are submitted
- 🔥 **500 Server Errors:** Review backend logs

---

🧠 This README serves as a developer's guide to setting up and working with the EasyDoc platform. Refer to inline code comments for further technical insight.
