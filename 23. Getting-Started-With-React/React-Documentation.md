1. What is React?
=> React is an open-sourse javascript library for building user interfaces that make it easier to create interactive and efficient web and mobile applications by using component-based architecture and virtual DOM.
Or we can say that - React is a tool that helps developers make websites and apps that look good and work smoothly.



2. Who made React?
=> React was developed and is maintained by facebook. It was initially maid by Jorden Walke,a software engineer at  Facebook, and it has since been continuously improved and expanded upon by Facebook's engineering team, as well as a vibrant open-source comunity of developers from around the world. React was first released for the public in 2013 and has since become one of the most widly used javascript libraries for building user inertfaces.



3. What is Babel?
=> Bable is a javascript compiler that enables developers to write modern javascript codes and have it automatically transfomed into older versions for wider compatibilities with browsers and environments. This helps us to maintain code readibility and ease of development while ensuring that applications can run on a verity of platfotms.



4. How does Babel convert html code in React into valid code?
=> Bable doesnot directly HTML code into valid React code. Instead  Bable focuses on transpilling javascript codes. React code typically involve in javascript, including JSX(Javascript XML), which is an extention of javascript used to define the struture and components of a React application.



5. What is ReactDOM used for? Write an example?
=> ReactDom is a specific part of the React library that is used for rendering React components to the DOM. It provides the bridge between your React component and the actual web page, allowing you to display your React UI in a web browser.

                        <---------- Example ---------->
       <------------ First we have to add this to our script ------------->

<script src="https://www.unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
<script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>

    <----------- Then we have to define a simple react component ----------->

                    function MyComponent() {
                    return <h1>Hello, React with ReactDOM!</h1>;
                    }

      <--------- Use ReactDOM to render the component to the DOM ---------->

        ReactDOM.render(<MyComponent />, document.getElementById('root'));

So, ReactDOM is responsible for taking your React components and inserting them into the DOM, allowing you to see your React based UI into web browser.



6. What are the packages that you need to import for react to work with?
=> The packages we need to import for react to work are:-->
   1. React and ReactDOM 
   2. Bable (optional)
   3. Webpack (optional) (bable-loader)
   4. Development Server (optional) (webpack-dev-server)
   5. Other Dependencies (Optional): Depending on your project's needs, you might require additional packages for routing, state management, styling, or other functionality.



7. How do you add react to a web application?
=> steps to add React to a web application:---->

   1. Set Up Your Development Environment: Install Node.js and npm.
   2. Create a New React Application: Use Create React App (CRA) to start a new React project.
   3. Navigate to the Project Directory: Move into your project's directory using the cd command.
   4. Start the Development Server: Launch the development server with npm start.
   5. Edit and Add React Components: Modify or create React components in the src directory.
   6. Rendering React Components: Use ReactDOM.render() to render components, typically in src/index.js.
   7. Adding Additional Packages (Optional): Install and configure additional packages as needed.
   8. Build for Production: Create a production build with npm run build.
   9. Deploy Your React App: Deploy to a hosting service or platform.
  10. Testing and Maintenance: Write tests, update dependencies, and maintain the app over time.



8. What is React.createElement?
=> React.createElement is a function in React used to create virtual DOM elements, specifying the type, properties, and children for an element.



9. What are the three properties that createElement accept?
=> The three properties that createElement accept are:--->
   1. Type: This indecates the type of element we want to create (like 'div' or 'h1')
   2. props(optional): This includes an object were we can give the class or id to that element
   3. Children(optional): Here we can write the childrens of the created element (like if we want to add a h1 tag also inside the created div element then we can do in this section)



10. What is the meaning of render and root?
=> Render: In React, Render is the process of converting react component into a formet displayed on the web page  driven by the "render()" method in component class.
   React's efficient virtual DOM updates only the parts of the DOM that need to change during rendering.

   Root: The "root" in React is a specific HTML element where you mount your React application, serving as the entry point for the component tree.
   When you see 'ReactDOM.render()', you specify the root element as the location for your React application, ensuring React manages content within it.
   