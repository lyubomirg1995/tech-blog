## Tech Blog

# Description

A tech blog created using MVC paradigm with Javascript, Express, Node.js, mysql2, sequelize, handlebars, and Heroku. You can sign up, login, create posts, delete and save posts, edit comments, etc to interact with others. 

# Installation

1. Run `npm i bcrypt connect-session-sequelize dotenv express express-handlebars express-session mysql2 node sequelize` in Terminal 
2. Run `mysql -u root -p`
3. Type your MySQL password used for installation
4. Run `source db/schema.sql`
5. Run `npm start`

# Usage

1. Click Login on the navbar
2. Click "Sign up instead"
3. Compose a username and password
4. Click "+New Post"
5. Write any title and content in the boxes shown
6. Click "Create"
7. To comment on the post, click Home in the navbar, then click on the title of the post; write a comment in the empty field
8. To delete a comment, click Dashboard in the navbar, then click the title of the post, and click delete. 
9. Logout and observe current posts.
10. To edit a comment, simply log back in, click a post, and you will see a field to edit a post, make your changes, then click save. 

Heroku app: https://floating-badlands-17774-8acf263499d7.herokuapp.com/