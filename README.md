# Node.js sample source

## Libraries
* express
* express-session
* body-parser
* fs
* ejs

## How to start
* node server.js
* Connect : localhost:8080/

## RESTful API
* Get
  * localhost:8080/list
  * localhoost:8080/getUser/:username
  
* Post (Postman)
  * localhost:8080/addUser/:username
  * Body : { “password”: “_____”, “name”: “_____” }
 
* Put (Postman)
  * localhost:8080/updateUser/:username
  * Body : { “password”: “_____”, “name”: “_____” }
 
* Delete
  * localhost:8080/deleteUser/:username
  
## Session
  1. Connect : localhost:8080/
  2. Login : localhost:8080/[username]/[pass]
  3. Reconnect : localhost:8080/
  4. Logout : localhost:8080/logout
