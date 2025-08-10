# Express REST API Technical Test

## Overview
This is a technical test to assess your understanding of RESTful API principles and Express.js development. You will be working with a mock customer and subscription management system.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

The server will start on http://localhost:3000

## Current Implementation

The application has mock data for customers and their subscriptions. Currently, only one endpoint is implemented:

- `GET /customers` - Returns all customers (COMPLETED EXAMPLE)

## Your Task

Design and implement RESTful endpoints for the following operations. You should determine the appropriate HTTP methods and URL patterns based on RESTful principles:

### 1. Retrieve a Single Customer
- **Functionality:** Get a specific customer by their ID
- **Requirements:**
  - Return the customer object if found
  - Return appropriate status code and error message if not found
  - Follow RESTful response format consistent with the example endpoint

### 2. List Customer Subscriptions
- **Functionality:** Get all subscriptions belonging to a specific customer
- **Requirements:**
  - Return array of subscriptions for the customer
  - Handle the case where customer doesn't exist
  - Consider what to return if customer has no subscriptions

### 3. Modify a Subscription
- **Functionality:** Update subscription details for a specific customer
- **Requirements:**
  - Accept subscription updates in the request
  - Ensure the subscription belongs to the specified customer
  - Return appropriate error codes for various failure scenarios
  - Return the updated subscription on success

### 4. Remove a Subscription
- **Functionality:** Cancel or delete a subscription for a specific customer
- **Requirements:**
  - Ensure the subscription belongs to the specified customer
  - Return appropriate status codes
  - Consider: Should this physically delete or just mark as cancelled?

## Data Structure

### Customer
```typescript
{
  id: string;
  name: string;
  email: string;
  company: string;
  createdAt: Date;
}
```

### Subscription
```typescript
{
  id: string;
  customerId: string;
  productName: string;
  status: 'active' | 'cancelled' | 'pending';
  price: number;
  billingCycle: 'monthly' | 'yearly';
  startDate: Date;
  endDate?: Date;
}
```

## Evaluation Criteria

Your implementation will be evaluated on:

1. **RESTful Design:** Proper use of HTTP methods, status codes, and URL structure
2. **Error Handling:** Appropriate error responses and validation
3. **Code Quality:** Clean, readable, and maintainable code
4. **Data Validation:** Proper validation of inputs and relationships
5. **Response Format:** Consistent and appropriate response structures

## Tips

- The mock data is available in `src/data/mockData.ts`
- Types are defined in `src/types/index.ts`
- Follow the pattern established in the completed `/customers` endpoint
- Consider edge cases and error scenarios
- Think about RESTful principles when designing your responses

## Testing Your Implementation

### Automated Tests

We've provided a test suite to verify your implementation. To use it:

1. Open `src/api.test.ts`
2. For each test, update the `METHOD` and `URL` variables:
   - Set `METHOD` to the appropriate HTTP method: 'get', 'post', 'put', 'delete', or 'patch'
   - Set `URL` to your RESTful endpoint path (e.g., `/customers/${customerId}`)
3. Uncomment the test code block after updating the variables
4. Run the tests:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch
```

The tests will verify:
- Correct HTTP methods and URL patterns
- Proper status codes
- Response format consistency
- Error handling
- Business logic (e.g., subscription ownership validation)

### Manual Testing

You can also test your endpoints using:
- curl
- Postman
- Thunder Client (VS Code extension)
- Or any HTTP client of your choice

Example:
```bash
# Get all customers (completed example)
curl http://localhost:3000/customers

# Test your implementations with the endpoints you create
```

Good luck!