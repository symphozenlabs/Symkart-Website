export interface StorageObject {
  key: string;
  contentType: string;
  size: number;
}
export interface StorageProvider {
  createUploadUrl(input: {
    key: string;
    contentType: string;
    maxBytes: number;
  }): Promise<string>;
  deleteObject(key: string): Promise<void>;
}

export type PaymentDomain = 'customer_payment' | 'subscription_billing';
export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: 'created' | 'authorized' | 'captured' | 'failed';
}
export interface PaymentProvider {
  readonly name: string;
  createIntent(input: {
    domain: PaymentDomain;
    amount: number;
    currency: string;
    reference: string;
  }): Promise<PaymentIntent>;
  verifyWebhook(input: {
    rawBody: string;
    signature: string;
  }): Promise<boolean>;
}

export interface SubscriptionProvider {
  createSubscription(input: {
    customerId: string;
    plan: string;
  }): Promise<{ id: string; status: 'pending' | 'active' }>;
  cancelSubscription(id: string): Promise<void>;
}
export interface WhatsAppProvider {
  sendTemplate(input: {
    recipient: string;
    template: string;
    variables: string[];
  }): Promise<{ messageId: string }>;
}
export interface AIProvider {
  generateProductDescription(input: {
    productName: string;
    notes?: string;
  }): Promise<{ description: string }>;
}

export type ProviderRegistry = {
  storage: StorageProvider;
  payment: PaymentProvider;
  subscription: SubscriptionProvider;
  whatsapp: WhatsAppProvider;
  ai: AIProvider;
};
