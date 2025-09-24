import { FraudApiRequest, FraudApiResponse } from "./types";

export class FraudLabsPro {
  constructor(
    private readonly key: string,
    private readonly url: string = "https://api.fraudlabspro.com/v1/order/screen",
  ) {}

  async screenOrder(request: FraudApiRequest): Promise<FraudApiResponse> {
    const response = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "no-cache",
      },
      body: new URLSearchParams({
        key: this.key,
        ...this.flattenRequest(request),
      }),
    });

    if (response.ok) {
      const json: FraudApiResponse =
        (await response.json()) as FraudApiResponse;

      return json;
    } else {
      const text = await response.text();

      console.error(
        `FraudLabs Pro API Error: ${response.status} - ${response.statusText}`,
        text,
      );

      return {
        success: false,
        error: {
          [`${response.status} - ${response.statusText}`]: text,
        },
        data: undefined,
      };
    }
  }

  // Backward compatibility alias
  async fraud(request: FraudApiRequest): Promise<FraudApiResponse> {
    return this.screenOrder(request);
  }

  private flattenRequest(request: FraudApiRequest): Record<string, string> {
    const flattened: Record<string, string> = {};

    for (const [key, value] of Object.entries(request)) {
      if (value !== undefined && value !== null) {
        if (typeof value === "object" && !Array.isArray(value)) {
          // Handle nested objects by flattening them with dot notation
          for (const [nestedKey, nestedValue] of Object.entries(value)) {
            if (nestedValue !== undefined && nestedValue !== null) {
              flattened[`${key}.${nestedKey}`] = String(nestedValue);
            }
          }
        } else if (Array.isArray(value)) {
          // Handle arrays by converting to JSON string
          flattened[key] = JSON.stringify(value);
        } else {
          flattened[key] = String(value);
        }
      }
    }

    return flattened;
  }
}

export * from "./types";
export * from "./utils";
