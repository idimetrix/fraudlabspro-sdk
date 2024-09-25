export interface FraudApiResponse {
  success: boolean;
  error: Record<string, any>;
  data?: {
    id: string;
    state: string;
    fraud_score: number;
    bin_details: {
      card_bin: string;
      bin_bank: string;
      bin_card: string;
      bin_type: string;
      bin_level: string;
      bin_country: string;
      bin_country_code: string;
      bin_website: string;
      bin_phone: string;
      bin_valid: boolean;
      card_issuer: string;
    };
    version: string;
    applied_rules: Array<{
      id: string;
      name: string;
      operation: string | null;
      score: number;
    }>;
    device_details: {
      os: string;
      type: string;
      dns_ip: string | null;
      source: string;
      adblock: boolean;
      browser: string;
      private: boolean;
      platform: string;
      font_hash: string;
      font_list: Array<string>;
      audio_hash: string;
      dns_ip_isp: string | null;
      font_count: number;
      session_id: string;
      user_agent: string;
      webgl_hash: string | null;
      webrtc_ips: Array<string>;
      canvas_hash: string;
      cookie_hash: string;
      device_hash: string;
      device_type: string;
      plugin_hash: string;
      plugin_list: Array<string>;
      window_size: string;
      browser_hash: string;
      do_not_track: string | null;
      java_enabled: boolean;
      plugin_count: number;
      webgl_vendor: string | null;
      webrtc_count: number;
      battery_level: number;
      device_ip_isp: string | null;
      device_memory: number | null;
      flash_enabled: boolean;
      social_logins: Array<string>;
      touch_support: boolean;
      cookie_enabled: boolean;
      dns_ip_country: string;
      accept_language: Array<string>;
      browser_version: string;
      device_location: {
        zip: string;
        city: string;
        region: string;
        status: string;
        accuracy: number;
        latitude: number;
        longitude: number;
        country_code: string;
      };
      region_language: string;
      region_timezone: string;
      battery_charging: boolean | null;
      webrtc_activated: boolean;
      device_ip_address: string;
      device_ip_country: string;
      screen_resolution: string;
      screen_color_depth: number;
      screen_pixel_ratio: number;
      hardware_concurrency: number;
      screen_available_resolution: string;
    };
    calculation_time: number;
    seon_id: number;
    ip_details: {
      ip: string;
      score: number;
      country: string;
      state_prov: string;
      city: string;
      timezone_offset: string;
      isp_name: string;
      latitude: number;
      longitude: number;
      type: string;
      open_ports: Array<any>;
      tor: boolean;
      vpn: boolean;
      web_proxy: boolean;
      public_proxy: boolean;
      spam_number: number;
      spam_urls: Array<string>;
    };
    email_details: {
      email: string;
      score: number;
      deliverable: boolean;
      domain_details: {
        domain: string;
        tld: string;
        registered: boolean;
        created: string;
        updated: string;
        expires: string;
        registrar_name: string;
        registered_to: string;
        disposable: boolean;
        free: boolean;
        custom: boolean;
        dmarc_enforced: boolean;
        spf_strict: boolean;
        valid_mx: boolean;
        accept_all: boolean;
        suspicious_tld: boolean;
        website_exists: boolean;
      };
      account_details: {
        [key: string]: {
          registered: boolean | null;
          url?: string | null;
          name?: string | null;
          photo?: string | null;
          username?: string | null;
          followers?: number | null;
          location?: string | null;
          occupation?: string | null;
          description?: string | null;
          account_id?: string | null;
          full_name?: string | null;
          company?: string | null;
          website?: string | null;
          bio?: string | null;
          following?: number | null;
          twitter?: string | null;
          last_updated?: number | null;
          reviews?: any | null;
          ratings?: any | null;
          photos?: any | null;
          videos?: any | null;
          answers?: any | null;
          edits?: any | null;
          places_added?: any | null;
          roads_added?: any | null;
          facts_checked?: any | null;
          published_lists?: any | null;
          q_and_a?: any | null;
        };
      };
      breach_details: {
        haveibeenpwned_listed: boolean;
        number_of_breaches: number;
        first_breach: string | null;
        breaches: Array<any>;
      };
    };
    phone_details: {
      number: number;
      valid: boolean;
      type: string;
      country: string;
      carrier: string;
      score: number;
      account_details: {
        [key: string]: {
          registered: boolean | null;
          account_id?: string | null;
          full_name?: string | null;
          photo?: string | null;
          last_seen?: number | null;
          about?: string | null;
          last_active?: number | null;
          age?: number | null;
          city?: string | null;
          bio?: string | null;
          country?: string | null;
          gender?: string | null;
          language?: string | null;
          name?: string | null;
          handle?: string | null;
          id?: string | null;
          state?: string | null;
        };
      };
    };
    geolocation_details: {
      user_billing_distance: number;
      user_shipping_distance: number;
      billing_shipping_distance: number;
      ip_user_distance: number;
      ip_billing_distance: number;
      ip_shipping_distance: number;
    };
    aml_details: any | null;
  };
}
