
window.CITY4ALL_CONFIG = Object.freeze({
  brandName: "City4All",
  siteUrl: "",

  // Δεν έχει συνδεθεί ακόμη backend.
  apiBaseUrl: "",

  features: Object.freeze({
    businessProfiles: false,
    assessments: false,
    qrCodes: false,
    reviews: false,
    onlinePayments: false,
    persistentSubmissions: false
  }),

  subscriptionPlans: Object.freeze([
    { id: "starter", name: "Starter", monthlyPrice: 10 },
    { id: "verified", name: "Verified", monthlyPrice: 29 },
    { id: "business-plus", name: "Business+", monthlyPrice: null }
  ])
});
