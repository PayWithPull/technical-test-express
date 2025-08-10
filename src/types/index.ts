export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  createdAt: Date;
}

export interface Subscription {
  id: string;
  customerId: string;
  productName: string;
  status: 'active' | 'cancelled' | 'pending';
  price: number;
  billingCycle: 'monthly' | 'yearly';
  startDate: Date;
  endDate?: Date;
}