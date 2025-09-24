import { FraudLabsPro, FraudApiRequest, FraudApiResponse } from "../index";

// Mock fetch for testing
global.fetch = jest.fn();

describe("FraudLabsPro SDK", () => {
  let fraudLabsPro: FraudLabsPro;
  const mockApiKey = "test-api-key";

  beforeEach(() => {
    fraudLabsPro = new FraudLabsPro(mockApiKey);
    jest.clearAllMocks();
  });

  describe("Constructor", () => {
    it("should create instance with API key", () => {
      expect(fraudLabsPro).toBeInstanceOf(FraudLabsPro);
    });

    it("should use custom URL when provided", () => {
      const customUrl = "https://custom-api.example.com";
      const customFraudLabsPro = new FraudLabsPro(mockApiKey, customUrl);
      expect(customFraudLabsPro).toBeInstanceOf(FraudLabsPro);
    });
  });

  describe("screenOrder", () => {
    const mockRequest: FraudApiRequest = {
      ip: "192.168.1.1",
      order_id: "TEST_ORDER_123",
      order_amount: 99.99,
      order_currency: "USD",
      bill_fname: "John",
      bill_lname: "Doe",
      bill_email: "john.doe@example.com",
    };

    it("should make successful API call", async () => {
      const mockResponse: FraudApiResponse = {
        success: true,
        fraudlabspro_status: "APPROVE",
        fraudlabspro_score: 15,
        fraudlabspro_id: "test-id-123",
      };

      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const result = await fraudLabsPro.screenOrder(mockRequest);

      expect(fetch).toHaveBeenCalledWith(
        "https://api.fraudlabspro.com/v1/order/screen",
        expect.objectContaining({
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
          },
        }),
      );

      expect(result).toEqual(mockResponse);
    });

    it("should handle API errors", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 400,
        statusText: "Bad Request",
        text: jest.fn().mockResolvedValueOnce("Invalid API key"),
      });

      const result = await fraudLabsPro.screenOrder(mockRequest);

      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
    });

    it("should flatten nested request objects", async () => {
      const requestWithNested: FraudApiRequest = {
        ...mockRequest,
        custom_field1: "value1",
        custom_field2: "value2",
      };

      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce({ success: true }),
      });

      await fraudLabsPro.screenOrder(requestWithNested);

      const fetchCall = (fetch as jest.Mock).mock.calls[0];
      const requestBody = fetchCall[1].body;

      expect(requestBody).toBeInstanceOf(URLSearchParams);
      expect(requestBody.get("key")).toBe(mockApiKey);
      expect(requestBody.get("ip")).toBe("192.168.1.1");
      expect(requestBody.get("custom_field1")).toBe("value1");
    });
  });

  describe("fraud (backward compatibility)", () => {
    it("should call screenOrder method", async () => {
      const mockRequest: FraudApiRequest = {
        ip: "192.168.1.1",
        order_id: "TEST_ORDER_123",
      };

      const mockResponse: FraudApiResponse = {
        success: true,
        fraudlabspro_status: "APPROVE",
      };

      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const result = await fraudLabsPro.fraud(mockRequest);

      expect(result).toEqual(mockResponse);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe("Type Safety", () => {
    it("should enforce correct request types", () => {
      const validRequest: FraudApiRequest = {
        ip: "192.168.1.1",
        order_amount: 100,
        bill_country: "US",
      };

      // This should compile without errors
      expect(typeof validRequest.ip).toBe("string");
      expect(typeof validRequest.order_amount).toBe("number");
      expect(typeof validRequest.bill_country).toBe("string");
    });

    it("should enforce correct response types", () => {
      const validResponse: FraudApiResponse = {
        success: true,
        fraudlabspro_status: "APPROVE",
        fraudlabspro_score: 25,
        is_proxy_ip: "N",
      };

      // This should compile without errors
      expect(validResponse.success).toBe(true);
      expect(validResponse.fraudlabspro_status).toBe("APPROVE");
      expect(validResponse.is_proxy_ip).toBe("N");
    });
  });
});
