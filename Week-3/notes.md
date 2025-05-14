## express & http

- how do i create http server?- express(tho it can be created in many other languages)
- express is like a library which we can use
- ctrl + c to stop the server
- npm install express to install express into our local machine
- express is framework for node.js

<aside>
💡

- **Node.js Basics**:
    - Node.js lets you run JavaScript on a server.
    - It’s great for handling requests and creating servers but doesn’t have built-in features like routing, templates, or middleware.
- **Why Express?**
    
    Think of Express as an "upgrade" for Node.js. It gives you extra tools to:
    
    - Organize your app’s code better.
    - Handle routes (URLs) easily.
    - Process requests and responses efficiently.
    - Use middleware to extend functionality (e.g., logging, security).
</aside>

- **Handling Requests**:
- **GET**: Fetch data (e.g., loading a webpage).
- **POST**: Send data (e.g., submitting a form).
- **PUT**: Update data (e.g., editing a profile).
- **DELETE**: Remove data (e.g., deleting a post).

<aside>
💡

### **Basic Structure of an Express Application**

1. **Import Express**:
    
    ```jsx
    const express = require('express'); // Import Express
    const app = express();             // Create an Express application
    ```
    
2. **Start the Server**:
    
    ```jsx
    app.listen(port, callback);
    ```
    
    - `port`: The port number your server will listen on (e.g., 3000).
    - `callback`: Optional function that runs when the server starts.
    
    Example:
    
    ```jsx
    
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
    ```
    
3. **Define Routes**:
Use HTTP methods like `GET`, `POST`, `PUT`, and `DELETE` to define routes.
    
    ```jsx
    
    app.get(path, callback);
    app.post(path, callback);
    app.put(path, callback);
    app.delete(path, callback);
    
    ```
    
    - `path`: The URL path (e.g., `/` or `/users`).
    - `callback`: A function that takes `req` (request) and `res` (response) as arguments.
    
    Example:
    
    ```jsx
    
    app.get('/', (req, res) => {
        res.send('Welcome to the homepage!');
    });
    
    app.post('/submit', (req, res) => {
        res.send('Form submitted successfully!');
    });
    
    ```
    
4. **Middleware**:
Middleware functions process requests before they reach the route handlers.
    
    ```jsx
    
    app.use(middlewareFunction);
    
    ```
    
    Example:
    
    ```jsx
    
    app.use((req, res, next) => {
        console.log(`Request method: ${req.method}, Request URL: ${req.url}`);
        next(); // Pass control to the next middleware or route
    });
    
    ```
    
</aside>

---

### **Summary of Syntax**

| Feature | Syntax Example |
| --- | --- |
| Import Express | `const express = require('express');` |
| Create App | `const app = express();` |
| Start Server | `app.listen(3000, () => { console.log('Server running'); });` |
| Define GET Route | `app.get('/', (req, res) => { res.send('Hello World!'); });` |
| Define POST Route | `app.post('/submit', (req, res) => { res.send('Data Received'); });` |
| Use Middleware | `app.use((req, res, next) => { next(); });` |
| Serve Static Files | `app.use(express.static('public'));` |
| Error Handling | `app.use((err, req, res, next) => { res.status(500).send('Error'); });` |
