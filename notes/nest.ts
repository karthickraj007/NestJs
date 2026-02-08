/*

    1)What is nextjs
        NestJS is a framework for building efficient and scalable backend applications using Node.js and TypeScript.

    2)Key Features of NestJS
        1)Modular Architecture
        2)Dependency Injection
        3)TypeScript
        4)Extensible
        5)Built-in Support for HTTP Servers
        6)Microservices Support
        7)WebSockets and GraphQL

    3)Core Concepts
        1)Modules
            ->modules are used to organize the application and group related components, such as services, controllers, and providers.
            ->modules are mainly used for registering components (controllers, services, models).
        2)Controllers
        3)Providers
        4)Middleware
        5)Pipes
        6)Guards
        7)Interceptors
        8)service

    4)Root Module
        1)Main entry point of the application.
        2)Configures the application by importing other modules, controllers, and providers.
        3)Bootstraps the application and is the first point NestJS looks at when running the application.
        4)Can hold global providers shared across the application.


    5)Submodules
        1)it allow you to organize your application logically into smaller, maintainable, and reusable chunks.
        2)Can be imported into other modules to share functionality or services.

    4)What Exactly Does NestJS Do?
        
        1)Compiles TypeScript to JavaScript

            NestJS uses the TypeScript compiler (tsc) or ts-node (in development) to convert .ts files into .js.

        2)Provides a Framework for Building APIs

            1)It organizes your code with modules, controllers, and services.

            2)Uses Express.js (default) or Fastify as an underlying HTTP server.

        3)Manages Dependency Injection

            Helps structure and inject services efficiently.

        4)Does Not Run the Server

            The actual server is run by Node.js, which executes the compiled JavaScript (main.js).

    5)NestFactory.create(appmodule)
        1)nest js creates the instance of AppModule

        2)This happens as part of the bootstrapping process, where NestJS:

            1)Initializes the application.

            2)Sets up the DI container.

            3)Resolves dependencies.

            4)Configures the HTTP server.


    6)MVC -> model view controller

        1)view -> Responsible for rendering the user interface.
        
        2)Model(service)
            The service is responsible for business logic and interacting with the database.

        
        7)controller:
            1)The controller is responsible for handling incoming requests, validating data, and transforming it into a format that the service can use.
                                            
            2)Responsibilities:
                1)Receives requests from the client.
                2)Validates and processes the request data.
                3)Calls the appropriate Model (service) to perform business logic or data operations.
                4)Returns a response to the client (e.g., JSON, status codes).

            3)Decorators Used:
                @Controller: Defines the base route for the controller.
                @Get, @Post, @Put, @Delete: Handles specific HTTP methods.
                @Param, @Body, @Query: Extracts data from the request.

    8)How NestJS Uses Decorators and Metadata.
        1)When you define a module, controller, or provider in NestJS, you use decorators like @Module(), @Controller(), @Injectable(), etc. 
        2)These decorators are not just for show—they attach metadata to the class at runtime.

    9)Types of decorators
        1)Class Decorators 
            Used to define the role of a class in the application.
            Examples:
                @Controller(): Marks a class as a controller.
                @Injectable(): Marks a class as a provider (e.g., a service).
                @Module(): Defines a module.

        2)Method Decorators
            Used to define HTTP routes and their methods.
            Examples:
                @Get(): Defines a GET request handler.
                @Post(): Defines a POST request handler.
                @Put(), @Delete(), @Patch(), etc.

        3. Parameter Decorators
            Used to extract data from the request (e.g., query parameters, body, headers, etc.).
            Examples:
                1)@Param(): Extracts route parameters.
                  Ex ->  @Param('id') id: string -> it return value
                2)@Query(): Extracts query parameters.
                  Ex ->  @Query('name') name: string -> it return value
                3)@Body(): Extracts the request body.
                  Ex ->  @Body() order: any -> it return object
                4)@Headers(): Extracts request headers.

        4)Property Decorators
            Used to define metadata or inject dependencies into class properties.
            Examples:
                @Inject(): Injects a dependency into a property.

        5)Middleware Decorators
            Used to apply middleware to routes or controllers.
            Example:
                @UseMiddleware(): Applies middleware to a route or controller.

        6.Guard Decorators
            Used to protect routes with authentication or authorization logic.
            Example:
                @UseGuards(): Applies a guard to a route or controller.

        7.Interceptor Decorators
            Used to intercept and modify requests or responses.
            Example:
                @UseInterceptors(): Applies an interceptor to a route or controller.

        8.Pipe Decorators
            Used for data transformation and validation.
            Example:
                @UsePipes(): Applies a pipe to a route or controller.

    9)What Happens Internally?
        NestJS compiles main.ts to main.js.
        Node.js runs main.js, starting the server.


    10)package.json
        It contains information about your project, such as its name, version, dependencies, scripts, and more.

    11)Rest API
        1)REST (Representational State of Resource) API is an architectural style for designing network applications. 
        2)Six design principals
            1)client-server Architecture
                between client and server data exchange happens.
                             req
                client <---------------> server
                             res
            2)stateless
                1)Each request is treated independently.
                2)server does not store any information about the client.
            3)cacheable
                1)response from a rest api can be cached by clients.
                2)improve server performance
            4)layered system
                1)it can be organized into layers, allowing for modularity and flexibility.
                2)this makes it easier to add or remove functionality without affecting the entire system.
                3)layout:
                                         redis
                              req          | 
                    client ------------> middleware
                               res         |
                                         database

            5)uniform interface
                1)it use a standardized set of http method to perform different operations on resources.
                2)this provide a consistent and predictale way for clients to interact with the api
            6)code on demand(optional)


    14)Mongoose
        1)Mongoose is an ODM (Object-Document Mapping) library for MongoDB in Node.js.
        2)It provides a way to define schemas, validate data, and interact with MongoDB using JavaScript objects.
        3)Work-flow
            Client  --->  Controller  --->  Service  --->  Mongoose  --->  MongoDB    
            
    15)Why Use Mongoose?
        1)Schema-based structure – You define models with data validation.
        2)Built-in Querying – Use .find(), .save(), .updateOne() easily.
        3)Middleware & Hooks – Run functions before/after saving data.
        4)Relationships & Virtuals – Connect different collections.

    16)pipes
        1)pipes in nest js are functions that transform or validate data before it reaches a controller method.

        2)Pipes have two typical use cases:
            1)ransformation: transform input data to the desired form (e.g., from string to integer)
            2)validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception.

        3)flow:
            client ---------> middleware --------> pipes ----------> controller ---------->service -------------> database     

    17)DTO->(Data Transfer Object)
        1)DTO is a typescript class.
        2)DTO defines shape and structure + validation rules.
        2)It typically includes validation decorators (e.g., class-validator, class-transformer) to ensure the incoming data is valid.
        3)DTOs are used in the controller layer to validate incoming requests.
        
    
    18)interface/Entity
        1)This represents the actual data model or entity that is stored in the database.
        2)It defines the structure of the data as it exists in your application's domain (e.g., MongoDB, PostgreSQL).
        3)Interfaces/entities are used in the service layer and database layer.

    18)Architecture Diagram
            Client Request
                ↓
            [NestJS server Application]
                ↓
            Middleware (Global or Route-Specific)
                ↓
            Guards (Authentication/Authorization)
                ↓
            Pipes (Validation/Transformation)
                ↓
            Route Handler (Controller Method)
                ↓
            Interceptors (Response Transformation)
                ↓
            Exception Filters (Error Handling)
                ↓
            Client Response

    19) What is Hydration in Mongoose?
        1)This is a type provided by Mongoose. 
        2)It represents a MongoDB document that has been hydrated (i.e., populated with data and methods).
        3)Hydration means converting raw MongoDB data into a full Mongoose document.
        4)A hydrated document has extra Mongoose methods like .save(), .populate(), etc.

    20)What is a Model?
        A Model is a Mongoose class that interacts with a MongoDB collection.
        It defines the schema (structure) for documents in the collection.
        A Model allows you to perform database operations like .find(), .save(), .update(), etc.

    21)Registering a Model:
        1)Makes the model available in NestJS dependency injection.
        2)To inject the model into services or controllers using @InjectModel().


    22)@InjectModel('player') ->injecting model
        this decortor tells NestJS injects the instance of player model instance.


    23)dependency injection:
        1)it inject the service class instance and create private property inside class.
        2)it Stores the injected instance in that property


    24)node version
        vsrsion -> 2.5.8
            2 → MAJOR (Big breaking changes)
                Ex -> A function getUser() now requires a new argument, breaking old code.
            5 → MINOR (New features, but backward-compatible)
                Ex -> Added a new optional getUserDetails() function.
            8 → PATCH (Bug fixes, no new features)
                Ex -> Fixed a small bug in getUser() but didn’t change how it works.

    25)Differences
        Version Type	What It Means	                         Example Update	    Breaking Changes?
        MAJOR	        Big changes, may break old code	         2.5.8 → 3.0.0	        Yes
        MINOR	        New features, but backward-compatible	 2.5.8 → 2.6.0	        No
        PATCH	        Bug fixes, no new features	             2.5.8 → 2.5.9	        No


    26)How Does Node.js Work as an Engine?
        1)Node.js is not just an engine, but it uses an engine to run JavaScript.

        2)Node.js includes:
            1️)V8 Engine (Google Chrome’s JavaScript Engine)
                Translates JavaScript into fast machine code
            2️)libuv (Handles Asynchronous I/O Operations)
                Manages files, network requests, timers, and more
            3️)Event Loop (Manages Asynchronous Tasks)
                Executes non-blocking operations like reading files or handling HTTP requests

    27)Nodejs(overFlow)
      1)flow -> JavaScript → Node.js (C++ Bindings) → C++ (Actual File System Code) → OS

      2)JavaScript calls the function → Node.js receives it → Node.js executes it via C++

      3)features:
        1)V8 Engine (JavaScript Engine)
            It converts JavaScript into machine code for fast execution.

        2)C++ Features (Node.js Core)
          JavaScript alone cannot interact with the OS, Node.js adds C++ code to handle:
            1)File System (fs)
            2)Networking (http)
            3)Process Management (child_process)
            4)Crypto (crypto)
            5)Buffer (buffer)
            6)Events (events)

        3)Node.js APIs (Bindings to C++)
          JavaScript only calls http.createServer(), but Node.js runs C++ code internally to handle the network request!
            1)Read/write files (fs)
            2)Send HTTP requests (http)
            3)Create child processes (child_process)
            4)Manage streams (stream)
            5)Work with operating system features (os, path)

        4)libuv (Handles Async I/O & Event Loop)
            libuv is a C++ library that manages:
                1)Asynchronous I/O (reading files, network requests)
                2)The Event Loop (handles non-blocking operations)
                3)Thread Pool (for expensive tasks)


    28)What is a Wrapper?
        A wrapper is a function that does not do the actual work but instead calls another function (which does the real work).

    28)Simple Wrapper in JavaScript.

        1)normal function 
            function multiply(a, b) {
                return a * b;
            }

        2)create a wrapper function
            function multiplyByTwo(num) {
                return multiply(num, 2); // Calls the real function
            }

        3)multiplyByTwo() is a wrapper around multiply().

    29)Decorator
        1)Decorator ran first → when the class is loaded.(before any instance is created).
        2)it is special function that attach extra information to class
        3)Decorators = Instructions + Extra Information.
        4)They tell NestJS how to handle the class/parameter/property/method before an instance is created or used.

    30)meta data
        1)metadata is additional information that is stored in memory at runtime.
        2)it is used to stored data key-value pairs that are associated with a class, method, or property.

    26)private user: string
        1)Declares a property and its type
        2)Doesn’t initialize any value by itself.

    27)@InjectModel(User.name)
        It tells NestJS inject the Mongoose model instance registered with name User.name.

    28)core
        const app = await NestFactory.create(AppModule);
            This internally does:
                1. Module System Initialization
                2. Dependency Injection Container Setup
                3. Metadata Reflection (decorators processing)
                4. Controller Registration
                5. Provider Instantiation
                6. Middleware Configuration
                7. Exception Filter Setup
                8. Pipe/Guard/Interceptor Registration
                9.create http serve
    
    29)Import/Export Enables:
        1)Code organization
            1)TypeScript type checking
            2)Avoiding circular dependencies
            3)Module isolation

        2)Registration Enables:
            1)setUP Dependency injection
            2)Setup HTTP routing
            3)Lifecycle management
            4)Framework features (guards, interceptors, etc.)
            5)create instance

    30)DI Container -> A software Design Pattern that manages object creation and dependencies
        1)Instance Storage
            const diContainer = {
                instances: {
                    'UserService': userServiceInstance
                }
            };
        2)Dependency Management
            private userService: UserService
        3)Lifecycle Management
            1)Singleton - one instance
            2)New instance per HTTP request
            3)New instance per injection

    31)Dependency
        1)A dependency is an external object or service that a class needs to perform its task.
        2)Example dependencies:
            Services
            Repositories
            ConfigService
            Logger
            HttpService
            Database connection
            Another module’s provider

    32)NestJs Module
        A NestJS module is configuration file that tells NestJS how to organize and connect your application parts.

    33)35)COMPUTER RAM:
        ├── STACK:
        │   └── Execution Context created HERE
        └── HEAP:
            └── (Objects will be stored here later)

    34)Node.js does:
        1)Read the .js file from disk
        2)Convert it to a string (buffer)
        3)Store that string in RAM memory
        4)Pass the string to the V8 engine

    35)V8 Engine Does:
        1)Parse the string into AST (Abstract Syntax Tree)
        2)Compile to machine code
        3)Create scopes and variable bindings
        4)Create Execution Context
        5)Execute the code

    36)ASCII (American Standard Code for Information Interchange) 
        65-90: Uppercase letters (A-Z)
        97-122: Lowercase letters (a-z)
        48-57: Digits (0-9)
        0-31, 127: Control characters

    37)Number Systems
        1)Binary = 0 and 1 ->computer's native language
        2)Decimal = 0-9 ->human language
        3)Hexadecimal = 0-9 plus A-F ->shorthand for binary
        4)V8 Engine → Stores and works with binary
        5)Node.js → Converts to hexadecimal for display

    38)Visual Flow:
        Hard Disk: "Hello" as binary (01001000...)
         ↓
        OS loads into RAM: <01001000>  
                ↓
        Node.js accesses RAM and gets the data
                ↓
        Your code receives: Buffer or String

    39)storage
        RAM = Temporary workspace that stores only binary
        Disk = Permanent storage (only binary)

    40)Mongoose
        Mongoose is a library (tool) that helps Node.js connect and work with MongoDB.
        
    41)schema
        1)Schema is a blueprint / rule for data.
        2)This schema contains:
            1)fields
            2)validators
            3)methods
            4)hooks

    42)model -> it create construction function
        1)it is Interface to interact with the database
        2)it creates a constructor function and then attaches schema logic to its prototype.
                
    41)Provider ≠ token
        1)Provider = defines what Nest injects
        2)Token = defines how Nest identifies it
        3)Example:
            {
                provide: UserService,  -> token
                useClass: UserService, -> provider
            }

    42)DI container -> parent container
        1)NestJS has a single root DI container.
        2)it creates and stores all instances.

    43)module container -> child container
        1)Each module has a logical child container.
        2)it controls visibility and scoping of its providers.

    44)nestjs vs express
        1)nestjs is module based communication not file based.
        2)express is file based communication

    45)declare
        it is a keyword that tells the compiler “this exists somewhere else, just trust me about its type”.

    46)NestJS Architecture
        Client
          ↓
        Middleware
          ↓
        Guard
          ↓
        Interceptor (before)
          ↓
        Pipe (DTO validation)
          ↓
        Controller
          ↓
        Service
          ↓
        Mongoose Model
          ↓
        MongoDB 
          ↓
        mongoose
          ↓
        Service
          ↓
        Interceptor (after)
          ↓
        Response

    47)What is an Exception Filter?
        A function/class that catches errors and converts them into HTTP responses



       
        
*/