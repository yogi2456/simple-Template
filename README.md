# simple-Template

backend functionalities
1. install command npm init -y
2. install packages like npm i  nodemon mongoose dotenv cors express
3. i am using es6 feature for this in package.json enter the type- module
4. in this we create a file index.js in this all import files and mongodb connection and listening port
5. create a file .env in this store a database connection for storing the values
6. in index.js file create a schema 
7. in index.js file create a four endpoints 
  1. GET /templates - List templates
  2. POST /templates - Create template
  3. PUT /templates/:id - Update template
  4. delete /templates/:id - delete template
8. for run command is npm start




Frontend Functionalities
1. install command npx create-react-app
2. install packages like npm i react-router-dom, npm i axios
3. create a component and careate a file template card and template list
4. in app.js using a useeffect for listing the templates
5. in app.js using a usestate and passing props in the components of template card and template list
6. in template card file we creating a form inputs and update function and create function
7. in template card file we using a useeffect for template list after editing is completed it is refresh
8. in template list file we map the function for listing the templates and create a delete function
9. for styling we using a taliwind css 
10. for run command is npm start