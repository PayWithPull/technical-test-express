import { Customer, Subscription } from '../types';

export const customers: Customer[] = [
  {
    id: 'cust_1',
    name: 'John Smith',
    email: 'john.smith@techcorp.com',
    company: 'TechCorp Solutions',
    createdAt: new Date('2023-01-15')
  },
  {
    id: 'cust_2',
    name: 'Sarah Johnson',
    email: 'sarah.j@innovate.io',
    company: 'Innovate IO',
    createdAt: new Date('2023-02-20')
  },
  {
    id: 'cust_3',
    name: 'Michael Chen',
    email: 'mchen@dataflow.net',
    company: 'DataFlow Systems',
    createdAt: new Date('2023-03-10')
  },
  {
    id: 'cust_4',
    name: 'Emily Williams',
    email: 'emily.w@cloudbase.com',
    company: 'CloudBase Inc',
    createdAt: new Date('2023-04-05')
  },
  {
    id: 'cust_5',
    name: 'Robert Davis',
    email: 'rdavis@webscale.org',
    company: 'WebScale Solutions',
    createdAt: new Date('2023-05-12')
  }
];

export const subscriptions: Subscription[] = [
  // Customer 1 subscriptions
  {
    id: 'sub_101',
    customerId: 'cust_1',
    productName: 'Pro Plan',
    status: 'active',
    price: 99.99,
    billingCycle: 'monthly',
    startDate: new Date('2023-01-20')
  },
  {
    id: 'sub_102',
    customerId: 'cust_1',
    productName: 'Analytics Add-on',
    status: 'active',
    price: 29.99,
    billingCycle: 'monthly',
    startDate: new Date('2023-02-01')
  },
  
  // Customer 2 subscriptions
  {
    id: 'sub_201',
    customerId: 'cust_2',
    productName: 'Enterprise Plan',
    status: 'active',
    price: 499.99,
    billingCycle: 'monthly',
    startDate: new Date('2023-02-25')
  },
  {
    id: 'sub_202',
    customerId: 'cust_2',
    productName: 'Security Suite',
    status: 'cancelled',
    price: 79.99,
    billingCycle: 'monthly',
    startDate: new Date('2023-03-01'),
    endDate: new Date('2023-12-31')
  },
  
  // Customer 3 subscriptions
  {
    id: 'sub_301',
    customerId: 'cust_3',
    productName: 'Basic Plan',
    status: 'active',
    price: 29.99,
    billingCycle: 'monthly',
    startDate: new Date('2023-03-15')
  },
  {
    id: 'sub_302',
    customerId: 'cust_3',
    productName: 'Storage Upgrade',
    status: 'pending',
    price: 19.99,
    billingCycle: 'monthly',
    startDate: new Date('2024-01-01')
  },
  
  // Customer 4 subscriptions
  {
    id: 'sub_401',
    customerId: 'cust_4',
    productName: 'Pro Plan',
    status: 'active',
    price: 999.99,
    billingCycle: 'yearly',
    startDate: new Date('2023-04-10')
  },
  
  // Customer 5 subscriptions
  {
    id: 'sub_501',
    customerId: 'cust_5',
    productName: 'Starter Plan',
    status: 'active',
    price: 19.99,
    billingCycle: 'monthly',
    startDate: new Date('2023-05-20')
  },
  {
    id: 'sub_502',
    customerId: 'cust_5',
    productName: 'API Access',
    status: 'active',
    price: 49.99,
    billingCycle: 'monthly',
    startDate: new Date('2023-06-01')
  },
  {
    id: 'sub_503',
    customerId: 'cust_5',
    productName: 'Premium Support',
    status: 'cancelled',
    price: 99.99,
    billingCycle: 'monthly',
    startDate: new Date('2023-07-01'),
    endDate: new Date('2023-10-31')
  }
];