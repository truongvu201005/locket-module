let body = $response.body;
let obj = JSON.parse(body);

obj.subscriber = {
  entitlements: {
    locket_gold: {
      expires_date: "2026-04-05T23:59:59Z",
      product_identifier: "locket_gold",
      purchase_date: "2024-04-05T00:00:00Z"
    }
  },
  subscriptions: {
    locket_gold: {
      billing_issues_detected_at: null,
      expires_date: "2026-04-05T23:59:59Z",
      is_sandbox: false,
      original_purchase_date: "2024-04-05T00:00:00Z",
      period_type: "active",
      purchase_date: "2024-04-05T00:00:00Z",
      store: "app_store",
      unsubscribe_detected_at: null
    }
  }
};

$done({ body: JSON.stringify(obj) });
