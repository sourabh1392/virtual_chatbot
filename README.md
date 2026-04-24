# 🚀 Virtual Therapist

A **production-ready ChatGPT-style web application** built using the MERN stack (MongoDB, Express, React, Node.js) with real-time streaming responses, JWT authentication, and a modern UI.

---

## 🧠 Features

* 🔐 **JWT Authentication** (Login/Register)
* 💬 **ChatGPT-like Interface**
* ⚡ **Streaming Responses (Real-time typing effect)**
* 📜 **Chat History with Sidebar**
* 🧾 **Markdown Rendering (code blocks, formatting)**
* 🧠 **OpenAI API Integration**
* 🗂️ **Persistent Conversations (MongoDB)**
* 🔒 **Protected Routes**
* 🚀 **Production-ready Backend (Helmet, Rate Limiting, Validation)**

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* React Markdown
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* OpenAI API

---

## 📁 Project Structure

```
mern-chatgpt/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── src/
│   └── package.json
│
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/mern-chatgpt.git
cd mern-chatgpt
```

---

### 2️⃣ Install Dependencies

#### Root

```
npm install
```

#### Backend

```
cd backend
npm install
```

#### Frontend

```
cd ../frontend
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file inside `backend/`:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

---

### 4️⃣ Run the Application

From root folder:

```
npm run dev
```

---

### 🌐 App will run on:

* Frontend → http://localhost:3000
* Backend → http://localhost:5000

---

## 🔁 Application Flow

```
User → React Frontend
     → Express Backend
     → OpenAI API
     → MongoDB (store chats)
     → Stream response back to UI
```

---

## 🔐 Security Features

* Helmet (HTTP security headers)
* Rate Limiting (prevent abuse)
* Input Validation (Joi)
* JWT-based authentication

---

## 🚀 Deployment

### Option 1 (Recommended)

* Deploy backend on Render
* Backend serves frontend build

### Option 2

* Frontend → Vercel
* Backend → Render / AWS

---

## 📌 Future Enhancements

* 🔄 Streaming cancel button
* 🌙 Dark/Light theme toggle
* 🧠 Multi-model support
* 📊 Usage analytics dashboard
* 📱 Mobile responsiveness improvements

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📜 License

This project is for educational purposes.

---

## 👨‍💻 Author

**Sourabh Patil**

---

## ⭐ Show Your Support

If you like this project, please ⭐ the repo!

---
