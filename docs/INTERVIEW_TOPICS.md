# TypeScript Interview Lab — Topic Roadmap

This document tracks the examples that will eventually be available inside the application.

## React Fundamentals

- [ ] Function components
- [ ] JSX
- [ ] Component imports and exports
- [ ] Props
- [ ] Optional props
- [ ] Default prop values
- [ ] Passing functions as props
- [ ] Passing components as props
- [ ] `children`
- [ ] Component composition
- [ ] Conditional rendering
- [ ] Rendering arrays
- [ ] `.map()`
- [ ] React keys
- [ ] Event handling
- [ ] Forms
- [ ] Controlled inputs
- [ ] Uncontrolled inputs
- [ ] Lifting state
- [ ] Prop drilling
- [ ] Alternatives to prop drilling

## React State and Hooks

- [ ] `useState`
- [ ] Functional state updates
- [ ] Derived state
- [ ] State immutability
- [ ] Updating objects in state
- [ ] Updating arrays in state
- [ ] `useEffect`
- [ ] Effect dependencies
- [ ] Effect cleanup
- [ ] Fetching data in an effect
- [ ] Avoiding effect loops
- [ ] `useRef`
- [ ] `useMemo`
- [ ] `useCallback`
- [ ] `useReducer`
- [ ] Custom hooks
- [ ] Context API
- [ ] Context with TypeScript
- [ ] `React.memo`
- [ ] Lazy loading
- [ ] Suspense
- [ ] Error boundaries

## React Routing and Application Structure

- [x] Browser router setup
- [x] Nested layout route
- [x] `Outlet`
- [x] `NavLink`
- [x] Active-link styling
- [ ] `useNavigate`
- [ ] Route parameters
- [ ] Dynamic routes
- [ ] Not-found route
- [ ] Protected-route pattern
- [ ] Search parameters

## TypeScript Fundamentals

- [ ] Primitive types
- [ ] Arrays
- [ ] Tuples
- [ ] Object types
- [ ] Interfaces
- [ ] Type aliases
- [ ] Interface versus type
- [ ] Optional properties
- [ ] Read-only properties
- [ ] Function parameter types
- [ ] Function return types
- [ ] Function types
- [ ] Union types
- [ ] Intersection types
- [ ] Literal types
- [ ] Type assertions
- [ ] Type inference
- [ ] `any`
- [ ] `unknown`
- [ ] `never`
- [ ] `void`
- [ ] `null` and `undefined`

## Advanced TypeScript

- [ ] Generics
- [ ] Generic interfaces
- [ ] Generic constraints
- [ ] Generic React components
- [ ] `keyof`
- [ ] `typeof`
- [ ] Indexed access types
- [ ] Type guards
- [ ] Custom type predicates
- [ ] Narrowing
- [ ] Discriminated unions
- [ ] Exhaustive switch statements
- [ ] Mapped types
- [ ] Conditional types
- [ ] `infer`
- [ ] Template literal types
- [ ] Function overloads

## TypeScript Utility Types

- [ ] `Partial`
- [ ] `Required`
- [ ] `Readonly`
- [ ] `Pick`
- [ ] `Omit`
- [ ] `Record`
- [ ] `Exclude`
- [ ] `Extract`
- [ ] `NonNullable`
- [ ] `ReturnType`
- [ ] `Parameters`
- [ ] `Awaited`

## JavaScript Fundamentals

- [ ] `const`, `let`, and `var`
- [ ] Scope
- [ ] Lexical scope
- [ ] Closures
- [ ] Hoisting
- [ ] Temporal dead zone
- [ ] Objects
- [ ] Object destructuring
- [ ] Array destructuring
- [ ] Spread syntax
- [ ] Rest parameters
- [ ] Shallow copies
- [ ] Deep copies
- [ ] Optional chaining
- [ ] Nullish coalescing
- [ ] Truthy and falsy values
- [ ] Equality operators
- [ ] `this`
- [ ] Prototypes
- [ ] Classes
- [ ] Modules

## JavaScript Array Methods

- [ ] `.map()`
- [ ] `.filter()`
- [ ] `.reduce()`
- [ ] `.find()`
- [ ] `.findIndex()`
- [ ] `.some()`
- [ ] `.every()`
- [ ] `.forEach()`
- [ ] `.includes()`
- [ ] `.sort()`
- [ ] `.slice()`
- [ ] `.splice()`
- [ ] Method chaining
- [ ] Immutable array transformations

## Asynchronous JavaScript

- [ ] Callbacks
- [ ] Promises
- [ ] Promise chaining
- [ ] `async` and `await`
- [ ] Error handling
- [ ] `Promise.all`
- [ ] `Promise.allSettled`
- [ ] `Promise.race`
- [ ] `Promise.any`
- [ ] Sequential versus concurrent execution
- [ ] Event loop
- [ ] Call stack
- [ ] Microtasks
- [ ] Macrotasks
- [ ] Fetch API
- [ ] AbortController
- [ ] Async iteration
- [ ] Observables overview

## Node.js and APIs

- [ ] Node.js runtime
- [ ] CommonJS versus ES modules
- [ ] Environment variables
- [ ] Express setup
- [ ] REST API structure
- [ ] Route handlers
- [ ] Middleware
- [ ] Error middleware
- [ ] Request validation
- [ ] Authentication
- [ ] Authorization
- [ ] JSON Web Tokens
- [ ] Password hashing
- [ ] CORS
- [ ] Rate limiting
- [ ] Logging
- [ ] Streams
- [ ] EventEmitter
- [ ] File system
- [ ] Graceful shutdown
- [ ] API pagination
- [ ] API filtering
- [ ] API versioning

## SQL and PostgreSQL

- [ ] Tables
- [ ] Primary keys
- [ ] Foreign keys
- [ ] Constraints
- [ ] `SELECT`
- [ ] `INSERT`
- [ ] `UPDATE`
- [ ] `DELETE`
- [ ] `WHERE`
- [ ] `ORDER BY`
- [ ] `GROUP BY`
- [ ] `HAVING`
- [ ] Inner joins
- [ ] Left joins
- [ ] Subqueries
- [ ] Common table expressions
- [ ] Indexes
- [ ] Composite indexes
- [ ] Transactions
- [ ] Isolation levels
- [ ] Normalization
- [ ] Query plans
- [ ] Offset pagination
- [ ] Cursor pagination
- [ ] Migrations

## Palantir Foundry

- [ ] Foundry platform overview
- [ ] Ontology concepts
- [ ] Object types
- [ ] Properties
- [ ] Link types
- [ ] Actions
- [ ] Action validation
- [ ] Workshop
- [ ] Slate
- [ ] Foundry Functions
- [ ] TypeScript Functions
- [ ] Ontology SDK
- [ ] OSDK React integration
- [ ] Queries against ontology objects
- [ ] Updating objects through actions
- [ ] Data pipelines
- [ ] Data lineage
- [ ] Permissions
- [ ] Row-level security concepts
- [ ] Maven Smart System integration concepts

## Testing

- [ ] Unit testing
- [ ] Integration testing
- [ ] React Testing Library
- [ ] Testing props
- [ ] Testing user events
- [ ] Testing asynchronous UI
- [ ] Mocking API requests
- [ ] Node API testing
- [ ] Test doubles
- [ ] Spies
- [ ] Stubs
- [ ] Code coverage
- [ ] Testing error states

## Coding Exercises

- [ ] Reverse a string
- [ ] Count character frequency
- [ ] Remove duplicates
- [ ] Group objects by property
- [ ] Flatten an array
- [ ] Implement debounce
- [ ] Implement throttle
- [ ] Implement memoization
- [ ] Implement `Promise.all`
- [ ] Retry an asynchronous operation
- [ ] Limit asynchronous concurrency
- [ ] Build a typed event emitter
- [ ] Build a generic data table
- [ ] Build a reusable fetch hook
- [ ] Build an LRU cache
- [ ] Transform nested API data
- [ ] Validate an unknown API response

## System Design

- [ ] REST API design
- [ ] API gateway
- [ ] Caching
- [ ] Database selection
- [ ] Horizontal scaling
- [ ] Load balancing
- [ ] Message queues
- [ ] Background jobs
- [ ] Observability
- [ ] Logging
- [ ] Metrics
- [ ] Tracing
- [ ] Fault tolerance
- [ ] Idempotency
- [ ] Data consistency
- [ ] Secure application architecture
- [ ] Decision-support application design
