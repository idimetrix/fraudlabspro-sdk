// FraudLabs Pro API Request Types
// Based on https://www.fraudlabspro.com/developer/api/screen-order

export interface FraudApiRequest {
  // Required parameters
  ip?: string; // IP address of customer

  // Order information
  order_id?: string; // Merchant transaction ID
  order_amount?: number; // Order amount
  order_currency?: string; // ISO 4217 currency code

  // Billing information
  bill_fname?: string; // Billing first name
  bill_lname?: string; // Billing last name
  bill_fullname?: string; // Billing full name
  bill_email?: string; // Billing email address
  bill_phone?: string; // Billing phone number
  bill_addr?: string; // Billing address
  bill_city?: string; // Billing city
  bill_state?: string; // Billing state
  bill_country?: string; // Billing country (ISO 3166-1 alpha-2)
  bill_zip?: string; // Billing postal code

  // Shipping information
  ship_fname?: string; // Shipping first name
  ship_lname?: string; // Shipping last name
  ship_fullname?: string; // Shipping full name
  ship_email?: string; // Shipping email address
  ship_phone?: string; // Shipping phone number
  ship_addr?: string; // Shipping address
  ship_city?: string; // Shipping city
  ship_state?: string; // Shipping state
  ship_country?: string; // Shipping country (ISO 3166-1 alpha-2)
  ship_zip?: string; // Shipping postal code

  // Payment information
  card_bin?: string; // First 6 digits of credit card
  card_hash?: string; // Hash of credit card number

  // User information
  user_id?: string; // User ID
  user_email?: string; // User email
  user_phone?: string; // User phone

  // Additional parameters
  flp_checksum?: string; // Checksum for validation
  source?: string; // Source of the order
  source_id?: string; // Source ID

  // Custom parameters (up to 20 custom fields)
  [key: `custom_${string}`]: string | number | undefined;
}
