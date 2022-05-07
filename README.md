# Access control system
This application was developed in Node.js to exemplify a simple access control with:
- Login authentication;
- Input validation against malicious code injection;
- Unit tests with security abuse scenarios;
- Vulnerability analysis and penetration testing (Pentest). 

## Resources
1. Web Framework: Express
2. Template engine: EJS (Embedded JavaScript Templating)
3. Access to database: Mongoose
4. Authentication: Passport
5. Encryption used in the password: Bcrypt

## Usage
```bash
At a terminal, run: 
npm i express express-session express-ejs-layouts connect-flash passport passport-local mongoose bcrypt ejs 
npm install -g nodemon
nodemon app.js 
```
Run the following url at your webpage:
```text
Welcome page: http://localhost:3000/usuarios/registro  
```
```text
Login page: http://localhost:3000/usuarios/login
```

```text
Logout page: http://localhost:3000/usuarios/logout  
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.







