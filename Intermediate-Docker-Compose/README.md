
# 🐳 Dockerized Message Board App  

This project demonstrates how to containerize a **full-stack Message Board app** using **HTML, JavaScript, Node.js, Express, and MongoDB**, and serve it with **Nginx** in Docker.  

## 🚀 Project Overview  

- **Frontend**: A simple Message Board UI built with HTML and JavaScript.  
- **Backend**: Node.js + Express API for storing and fetching messages.  
- **Database**: MongoDB stores all messages persistently.  
- **Dockerized**: All services run inside Docker containers and are orchestrated with Docker Compose.  

---

## 🛠️ How to Run  

1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/shriVATSA54/DockerProjects.git
cd DockerProjects
cd Project-3-MessageBoard
````

2️⃣ **Run Docker Compose**

```sh
docker-compose up --build -d
```

3️⃣ **Port Access**

* **Frontend**: `http://localhost:8081`
* **Backend API**: `http://localhost:3000/messages`


** PS: READM.md is AI-Generated

