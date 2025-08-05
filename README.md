# 📝 Blog App - Node.js Project

This is a simple RESTful Blog API built with **Node.js**, **Express**, and **MySQL** using **Sequelize ORM**.  
It includes user authentication and full CRUD operations for blog posts and users.

---

## 🚀 Features

- User Authentication (Register, Login)
- CRUD operations for Users
- CRUD operations for Blog Posts
- Sequelize ORM integration
- MySQL Database
- Clean modular folder structure
- Proper success and error handling

---

## 🛠 Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- Postman (for testing)

---

## 📁 Project Structure

blog-app/
│
├── index.js
├── bootstrap.js
├── src/
│ ├── DB/
│ │ └── connection.js
│ ├── models/
│ │ ├── userModels.js
│ │ └── blogModels.js
│ ├── modules/
│ │ ├── authModules/
│ │ │ ├── authController.js
│ │ │ └── authService.js
│ │ ├── userModules/
│ │ │ ├── userController.js
│ │ │ └── userService.js
│ │ └── blogModules/
│ │ ├── blogController.js
│ │ └── blogService.js
│ └── utils/
│ ├── exptesions.js
│ └── handlingSuccess.js

## ▶️ How to Run Locally

1. **Clone the repo**
```bash
git clone https://github.com/ammarcrespo335-png/blog-app.git
cd blog-app
npm install
npm run start:dev
```



👨‍💻 Author  
Made by Ammar Rosdy  
GitHub: [@ammarcrespo335-png](https://github.com/ammarcrespo335-png)  
LinkedIn: [ammar-crespo](https://www.linkedin.com/in/ammar-crespo-8ab631314)


