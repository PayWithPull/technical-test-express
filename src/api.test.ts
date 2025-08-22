import request from 'supertest';
import { app } from './index';
import { customers, subscriptions } from './data/mockData';

/**
 * API Endpoint Tests
 * 
 * INSTRUCTIONS FOR CANDIDATE:
 * 1. Update the METHOD and BASE_URL variables in each describe block
 * 2. Set METHOD to one of: 'get', 'post', 'put', 'delete', 'patch'
 * 3. Set BASE_URL to your RESTful endpoint base path (e.g., '/customers')
 * 4. Implement your endpoints in src/index.ts
 * 5. Run tests with: npm test
 * 
 * All tests should pass once you've correctly implemented the endpoints
 */

describe('Customer API Endpoints', () => {
  
  // This test is already complete as an example
  describe('GET /customers - List all customers', () => {
    it('should return all customers', async () => {
      const response = await request(app)
        .get('/customers')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(customers.length);
      expect(response.body.count).toBe(customers.length);
    });
  });

  describe('Retrieve single customer', () => {
    // TODO: Update these variables with your implementation
    const METHOD = 'get'; // <-- CANDIDATE: Replace with correct HTTP method
    const BASE_URL = '/customers'; // <-- CANDIDATE: Replace with your endpoint base

    it('should return a specific customer when valid ID provided', async () => {
      const customerId = 'cust_1';
      const url = `${BASE_URL}/${customerId}`;
      
      const response = await request(app)[METHOD](url).expect(200);

      expect(response.body).toBeDefined();
      expect(response.body.data.id).toBe(customerId);
      expect(response.body.data.name).toBe('John Smith');
      expect(response.body.data.email).toBe('john.smith@techcorp.com');
    });

    it('should return 404 when customer ID does not exist', async () => {
      const invalidId = 'cust_999';
      const url = `${BASE_URL}/${invalidId}`;
      
      const response = await request(app)[METHOD](url).expect(404);

      expect(response.body).toBeDefined();
      expect(response.body.success).toBe(false);
      expect(response.body.message).toBeDefined();
    });
  });

  describe('List customer subscriptions', () => {
    // TODO: Update these variables with your implementation
    const METHOD = 'get'; // <-- CANDIDATE: Replace with correct HTTP method
    const BASE_URL = '/customers'; // <-- CANDIDATE: Replace with your endpoint base

    it('should return all subscriptions for a specific customer', async () => {
      const customerId = 'cust_1';
      const expectedSubscriptions = subscriptions.filter(s => s.customerId === customerId);
      const url = `${BASE_URL}/${customerId}/subscriptions`;
      
      const response = await request(app)[METHOD](url).expect(200);

      expect(response.body).toBeDefined();
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.data).toHaveLength(expectedSubscriptions.length);
      expect(response.body.data[0].customerId).toBe(customerId);
    });

    it('should return 404 when customer does not exist', async () => {
      const invalidId = 'cust_999';
      const url = `${BASE_URL}/${invalidId}/subscriptions`;
      
      const response = await request(app)[METHOD](url).expect(404);

      expect(response.body).toBeDefined();
      expect(response.body.success).toBe(false);
    });

    it('should return subscriptions array even for customers with few subscriptions', async () => {
      // Customer 4 has only 1 subscription - testing that single items still return as array
      const customerId = 'cust_4';
      const url = `${BASE_URL}/${customerId}/subscriptions`;
      
      const response = await request(app)[METHOD](url).expect(200);

      expect(response.body).toBeDefined();
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.data).toHaveLength(1); // Customer 4 has exactly 1 subscription
    });
  });

  describe('Update subscription', () => {
    // TODO: Update these variables with your implementation
    const METHOD = 'put'; // <-- CANDIDATE: Replace with correct HTTP method
    const BASE_URL = '/customers'; // <-- CANDIDATE: Replace with your endpoint base

    it('should update a subscription successfully', async () => {
      const customerId = 'cust_1';
      const subscriptionId = 'sub_101';
      const updateData = {
        status: 'cancelled',
        price: 89.99
      };
      const url = `${BASE_URL}/${customerId}/subscriptions/${subscriptionId}`;
      
      const response = await request(app)[METHOD](url)
        .send(updateData)
        .expect(200);

      expect(response.body).toBeDefined();
      expect(response.body.data.id).toBe(subscriptionId);
      expect(response.body.data.status).toBe('cancelled');
      expect(response.body.data.price).toBe(89.99);
    });

    it('should return 404 when customer does not exist', async () => {
      const invalidCustomerId = 'cust_999';
      const subscriptionId = 'sub_101';
      const updateData = {
        status: 'cancelled'
      };
      const url = `${BASE_URL}/${invalidCustomerId}/subscriptions/${subscriptionId}`;
      
      const response = await request(app)[METHOD](url)
        .send(updateData)
        .expect(404);

      expect(response.body).toBeDefined();
      expect(response.body.success).toBe(false);
    });

    it('should return 404 when subscription does not exist', async () => {
      const customerId = 'cust_1';
      const invalidSubscriptionId = 'sub_999';
      const updateData = {
        status: 'cancelled'
      };
      const url = `${BASE_URL}/${customerId}/subscriptions/${invalidSubscriptionId}`;
      
      const response = await request(app)[METHOD](url)
        .send(updateData)
        .expect(404);

      expect(response.body).toBeDefined();
      expect(response.body.success).toBe(false);
    });

    it('should return 404 when subscription does not belong to customer', async () => {
      const customerId = 'cust_1';
      const otherCustomerSubscriptionId = 'sub_201'; // This belongs to cust_2
      const updateData = {
        status: 'cancelled'
      };
      const url = `${BASE_URL}/${customerId}/subscriptions/${otherCustomerSubscriptionId}`;
      
      const response = await request(app)[METHOD](url)
        .send(updateData)
        .expect(404);

      expect(response.body).toBeDefined();
      expect(response.body.success).toBe(false);
    });

    it('should return 400 for invalid update data', async () => {
      const customerId = 'cust_1';
      const subscriptionId = 'sub_101';
      const invalidData = {
        status: 'invalid_status', // Invalid status value
        price: -100 // Invalid price
      };
      const url = `${BASE_URL}/${customerId}/subscriptions/${subscriptionId}`;
      
      const response = await request(app)[METHOD](url)
        .send(invalidData)
        .expect(400);

      expect(response.body).toBeDefined();
      expect(response.body.success).toBe(false);
    });
  });

});