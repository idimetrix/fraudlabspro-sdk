# **fraudlabspro-sdk**

[![npm version](https://badge.fury.io/js/fraudlabspro-sdk.svg)](https://badge.fury.io/js/fraudlabspro-sdk)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A professional TypeScript SDK for seamless integration with the FraudLabs Pro API. This SDK provides comprehensive fraud detection capabilities for e-commerce platforms, online services, and any application requiring robust fraud prevention mechanisms.

## Features

- 🛡️ **Complete Fraud Detection**: Payment fraud, identity verification, IP geolocation analysis
- 🔒 **100% Type Safe**: Full TypeScript support with comprehensive type definitions
- 🚀 **Easy Integration**: Simple, intuitive API design
- 📊 **Comprehensive Scoring**: Advanced risk scoring algorithms
- 🌍 **Global Coverage**: Worldwide IP geolocation and risk assessment
- ⚡ **High Performance**: Optimized for production environments

## Installation

```bash
# npm
npm install fraudlabspro-sdk

# yarn
yarn add fraudlabspro-sdk

# pnpm
pnpm add fraudlabspro-sdk
```

## Quick Start

```typescript
import {
  FraudLabsPro,
  FraudApiRequest,
  FraudApiResponse,
} from "fraudlabspro-sdk";

// Initialize the SDK with your API key
const fraudLabsPro = new FraudLabsPro("YOUR_API_KEY");

// Create a fraud screening request
const request: FraudApiRequest = {
  ip: "146.112.62.105",
  order_id: "ORDER_12345",
  order_amount: 199.99,
  order_currency: "USD",
  bill_fname: "John",
  bill_lname: "Doe",
  bill_email: "john.doe@example.com",
  bill_phone: "+1234567890",
  bill_addr: "123 Main Street",
  bill_city: "New York",
  bill_state: "NY",
  bill_country: "US",
  bill_zip: "10001",
  card_bin: "424242",
};

// Screen the order for fraud
const response: FraudApiResponse = await fraudLabsPro.screenOrder(request);

console.log("Fraud Score:", response.fraudlabspro_score);
console.log("Status:", response.fraudlabspro_status);
console.log("Risk Factors:", {
  isProxyIP: response.is_proxy_ip,
  isHighRiskCountry: response.is_high_risk_country,
  isEmailValid: response.is_email_valid,
});
```

## API Reference

### Constructor

```typescript
new FraudLabsPro(apiKey: string, apiUrl?: string)
```

- `apiKey`: Your FraudLabs Pro API key
- `apiUrl`: Optional custom API endpoint (defaults to FraudLabs Pro production API)

### Methods

#### `screenOrder(request: FraudApiRequest): Promise<FraudApiResponse>`

Screen an order for fraud detection.

#### `fraud(request: FraudApiRequest): Promise<FraudApiResponse>`

Alias for `screenOrder()` method for backward compatibility.

## Request Parameters

The SDK supports all FraudLabs Pro API parameters:

### Required Parameters

- `ip`: Customer's IP address

### Order Information

- `order_id`: Merchant transaction ID
- `order_amount`: Order amount
- `order_currency`: ISO 4217 currency code

### Billing Information

- `bill_fname`, `bill_lname`: Customer name
- `bill_email`: Email address
- `bill_phone`: Phone number
- `bill_addr`, `bill_city`, `bill_state`, `bill_country`, `bill_zip`: Address details

### Shipping Information

- `ship_fname`, `ship_lname`: Recipient name
- `ship_addr`, `ship_city`, `ship_state`, `ship_country`, `ship_zip`: Shipping address

### Payment Information

- `card_bin`: First 6 digits of credit card
- `card_hash`: Hashed credit card number

## Response Fields

The API returns comprehensive fraud analysis including:

- `fraudlabspro_score`: Risk score (0-100)
- `fraudlabspro_status`: APPROVE, REVIEW, or REJECT
- `fraudlabspro_rules`: Triggered fraud rules
- IP geolocation data
- Email and phone validation results
- Credit card BIN information
- Risk indicators (proxy detection, blacklist checks, etc.)

## Error Handling

```typescript
try {
  const response = await fraudLabsPro.screenOrder(request);

  if (response.success) {
    // Handle successful response
    console.log("Fraud score:", response.fraudlabspro_score);
  } else {
    // Handle API errors
    console.error("API Error:", response.error);
  }
} catch (error) {
  // Handle network or other errors
  console.error("Request failed:", error);
}
```

## TypeScript Support

This SDK is built with TypeScript and provides complete type definitions for all API parameters and responses. Your IDE will provide full autocomplete and type checking.

## Links

- [FraudLabs Pro API Documentation](https://www.fraudlabspro.com/developer/api/screen-order)
- [npm Package](https://www.npmjs.com/package/fraudlabspro-sdk)
- [GitHub Repository](https://github.com/idimetrix/fraudlabspro-sdk)

## License

MIT © [Dmitrii Selikhov](https://github.com/idimetrix)
