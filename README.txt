User Authentication and Authorization

A User Verification app developed using Node.js, Express.js, Mongoose(MongoDB)and Postman.

user authentication and authorization using Bearer tokens are implemented in local server.

A complete project created with MVC structure.
  1.db folder has connection.js for Mongodb connection with mongoose
  2.model folder with userModel.js for schema,validation and generatingToken(JWT) method
  3.controller folder has userController.js for request and response of the opperations with error handling
    User Registration Flow:
    creates a user document as validates based on User schema and Hash the password before saving it to the database
    User Login Flow:
    created user verified and JWT token generated
    User Info Flow:
    after token verified the gives the user information
  4.routes folder has userRouter.js for the API calls with sample request and response from postman.
  5.middleware folder with auth.js middleware function to verify the JWT from the request headers
     and returns user information in request object
  6.index.js the root file with express imported and Server configurations.