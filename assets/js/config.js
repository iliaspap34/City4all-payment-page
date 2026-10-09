
/*
 * City4All Business
 * Κεντρικές ρυθμίσεις της εφαρμογής.
 */

window.CITY4ALL_CONFIG = Object.freeze({
  brandName: "City4All",
  businessPlatformName: "City4All Business",

  // Το βασικό URL του GitHub Pages.
  // Θα συμπληρωθεί μόλις επιβεβαιώσουμε τη διεύθυνση
  // του repository και το δημοσιευμένο site.
  siteUrl: "",

  // Δεν υπάρχει ακόμη συνδεδεμένο backend.
  apiBaseUrl: "",

  features: Object.freeze({
    businessProfiles: true,
    accessibilityAssessments: true,
    qrCodes: true,
    userReviews: true,

    // Παραμένουν ανενεργές μέχρι να συνδεθούν
    // πραγματικές υπηρεσίες.
    onlinePayments: false,
    persistentSubmissions: false
  }),

  subscriptionPlans: Object.freeze([
    {
      id: "starter",
      name: "Starter",
      monthlyPrice: 10,
      currency: "EUR"
    },
    {
      id: "verified",
      name: "Verified",
      monthlyPrice: 29,
      currency: "EUR"
    },
    {
      id: "business-plus",
      name: "Business+",
      monthlyPrice: null,
      currency: "EUR"
    }
  ])
});

(() => {
  "use strict";

  const config = window.CITY4ALL_CONFIG;

  if (!config) {
    console.error(
      "City4All: Δεν φορτώθηκε το config.js."
    );
    return;
  }

  // Ενημέρωση στοιχείων με data-attributes.
  document.querySelectorAll("[data-city4all-brand]")
    .forEach((element) => {
      element.textContent = config.brandName;
    });

  // Εμφάνιση τιμών συνδρομών από ένα κεντρικό σημείο.
  document.querySelectorAll("[data-plan-price]")
    .forEach((element) => {
      const plan = config.subscriptionPlans.find(
        (item) => item.id === element.dataset.planPrice
      );

      if (!plan) return;

      element.textContent =
        plan.monthlyPrice === null
          ? "Κατόπιν προσφοράς"
          : `${plan.monthlyPrice} € / μήνα`;
    });

  // Ενημερωτικό μήνυμα για λειτουργίες που
  // δεν έχουν ακόμη συνδεθεί με πραγματική υπηρεσία.
  document.querySelectorAll("[data-requires-backend]")
    .forEach((element) => {
      element.addEventListener("click", (event) => {
        event.preventDefault();

        const feature = element.dataset.requiresBackend;

        const messages = {
          payments:
            "Οι online πληρωμές δεν έχουν ενεργοποιηθεί ακόμη.",
          submissions:
            "Η ηλεκτρονική υποβολή δεν έχει συνδεθεί ακόμη.",
          reviews:
            "Η αποθήκευση κριτικών δεν είναι ακόμη διαθέσιμη."
        };

        window.alert(
          messages[feature] ||
          "Αυτή η λειτουργία θα ενεργοποιηθεί σε επόμενο στάδιο."
        );
      });
    });

  console.info("City4All Business: αρχικοποιήθηκε.");
})();
