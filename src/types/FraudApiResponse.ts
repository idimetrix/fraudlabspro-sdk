// FraudLabs Pro API Response Types
// Based on https://www.fraudlabspro.com/developer/api/screen-order

export interface FraudApiResponse {
  success: boolean;
  error?: Record<string, any>;

  // FraudLabs Pro API Response Fields
  fraudlabspro_version?: string;
  fraudlabspro_credits?: number;
  fraudlabspro_error_code?: string;
  fraudlabspro_message?: string;
  fraudlabspro_status?: "APPROVE" | "REVIEW" | "REJECT";
  fraudlabspro_id?: string;
  fraudlabspro_score?: number;
  fraudlabspro_distribution?: string;
  fraudlabspro_rules?: string;

  // IP Geolocation
  ip_country?: string;
  ip_region?: string;
  ip_city?: string;
  ip_continent?: string;
  ip_latitude?: number;
  ip_longitude?: number;
  ip_timezone?: string;
  ip_elevation?: number;
  ip_domain?: string;
  ip_mobile_mnc?: string;
  ip_mobile_mcc?: string;
  ip_mobile_brand?: string;
  ip_netspeed?: string;
  ip_isp_name?: string;
  ip_usage_type?: string;

  // Risk Scoring
  is_proxy_ip?: "Y" | "N";
  is_bin_found?: "Y" | "N";
  is_bin_country_match?: "Y" | "N";
  is_bin_name_match?: "Y" | "N";
  is_bin_phone_match?: "Y" | "N";
  is_bin_prepaid?: "Y" | "N";
  is_address_ship_forward?: "Y" | "N";
  is_bill_ship_city_match?: "Y" | "N";
  is_bill_ship_state_match?: "Y" | "N";
  is_bill_ship_country_match?: "Y" | "N";
  is_bill_ship_postal_match?: "Y" | "N";
  is_ip_blacklist?: "Y" | "N";
  is_email_blacklist?: "Y" | "N";
  is_credit_card_blacklist?: "Y" | "N";
  is_device_blacklist?: "Y" | "N";
  is_user_blacklist?: "Y" | "N";
  is_ship_address_blacklist?: "Y" | "N";
  is_phone_blacklist?: "Y" | "N";
  is_high_risk_country?: "Y" | "N";
  is_anonymous_proxy?: "Y" | "N";
  is_malware_exploit?: "Y" | "N";
  is_export_controlled_country?: "Y" | "N";

  // Email Validation
  is_email_valid?: "Y" | "N" | "U";
  is_domain_exists?: "Y" | "N";
  is_free_email?: "Y" | "N";
  is_new_domain_name?: "Y" | "N";
  is_disposable_email?: "Y" | "N";

  // Phone Validation
  is_phone_valid?: "Y" | "N" | "U";
  phone_country?: string;
  phone_region?: string;
  phone_city?: string;
  phone_carrier?: string;
  phone_type?: string;

  // Credit Card BIN
  bin_bank_name?: string;
  bin_bank_country?: string;
  bin_bank_url?: string;
  bin_bank_phone?: string;
  bin_brand?: string;
  bin_type?: string;
  bin_level?: string;
  bin_issuer_country?: string;

  // Custom data for error handling
  data?: any;
}
