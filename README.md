# cs465-fullstack
CS-465 Full Stack Development with MEAN

Travlr Getaways Full Stack Application Reflection 

Architecture

The full stack application was built using a MEAN-style architecture, combining Express HTML rendering, server-side JavaScript logic, and a Single Page Application (SPA) built with Angular. The Express portion of the application uses Handlebars templates to render dynamic server-side pages for the customer-facing website. This approach provides traditional multi-page navigation and simple server-rendered content delivery.

In contrast, the Angular SPA used for administrative functionality provides a more modern frontend experience. It allows data to be loaded and updated dynamically without full page reloads. Angular components, services, and routing were used to manage trip data and authentication workflows efficiently.

The backend uses Node.js with Express to expose RESTful API endpoints that serve both the customer-facing site and the Angular admin SPA.

MongoDB was used as the database because it is a NoSQL document-based database, which allows flexible schema design. This is particularly useful for storing trip packages, user accounts, and travel-related data that may vary in structure over time. Its JSON-like document format also integrates naturally with JavaScript-based applications.

Functionality

JSON (JavaScript Object Notation) is a lightweight data-interchange format used to transmit data between the frontend and backend. While JavaScript is a programming language, JSON is a structured format for storing and transferring data. In this application, JSON is used extensively to send data from Express API endpoints to the Angular frontend and vice versa. This allows seamless communication between client and server.

Throughout the development process, code was refactored to improve maintainability and efficiency. For example, authentication logic was centralized using JWT-based middleware rather than duplicating security checks in each route. Angular services were also used to reuse HTTP logic across multiple components instead of repeating API calls in each component.

Reusable UI components such as trip cards and edit forms improved development efficiency and consistency across the application. These components reduced duplication and made updates easier to manage since changes only needed to be applied in one place.

Testing

Testing in a full stack application requires validating both API functionality and frontend integration. API endpoints were tested using Postman to ensure correct behavior for GET, POST, and PUT operations. Each endpoint was validated to confirm proper communication with the MongoDB database.

Security added complexity to testing because protected routes required valid JSON Web Tokens (JWTs). Requests without proper authentication returned 401 Unauthorized errors, confirming that the security layer was functioning correctly. Testing required generating valid login tokens and attaching them in request headers using the Bearer token format.

On the frontend, Angular was tested by logging into the application, verifying token storage, and confirming that protected actions such as adding or editing trips were only available to authenticated users. This ensured that both frontend and backend security mechanisms worked together correctly.

Reflection

This course helped develop a deeper understanding of full stack web development using modern tools and frameworks. Skills were gained in backend API development with Node.js and Express, database management with MongoDB and Mongoose, and frontend development using Angular.

Working with authentication systems such as JWT improved understanding of secure application design and user session handling. Additionally, building both a server-rendered application and a SPA improved understanding of different frontend architectural approaches.

These skills are directly applicable to professional roles in software development and IT, particularly in positions involving web application development, API integration, and full stack system design. The experience gained has improved both technical ability and confidence in building scalable web applications.
