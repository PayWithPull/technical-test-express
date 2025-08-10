import express, { Request, Response } from 'express';
import cors from 'cors';
import { customers, subscriptions } from './data/mockData';
import { Customer, Subscription } from './types';

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// COMPLETED EXAMPLE: Get all customers
app.get('/customers', (req: Request, res: Response) => {
  res.json({
    success: true,
    data: customers,
    count: customers.length
  });
});

// TODO: Implement the following endpoints
// 
// 1. Retrieve a single customer by their ID
//    - Return the customer if found
//    - Return appropriate error if not found
//
// 2. Retrieve all subscriptions for a specific customer
//    - Return the customer's subscriptions
//    - Handle the case where customer doesn't exist
//
// 3. Update a subscription for a specific customer
//    - Accept subscription updates in the request
//    - Validate the subscription belongs to the customer
//    - Return appropriate errors for invalid scenarios
//
// 4. Remove/cancel a subscription for a specific customer
//    - Validate the subscription belongs to the customer
//    - Handle not found scenarios appropriately
//
// Your endpoints here:

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Try GET http://localhost:${PORT}/customers to see the completed example`);
  });
}