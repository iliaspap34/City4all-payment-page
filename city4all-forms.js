document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('businessInquiryForm');
    const statusBox = document.getElementById('formStatus');

    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent standard submission
            statusBox.style.display = 'block';
            statusBox.className = 'city4all-notice';
            
            // Basic HTML5 validation check
            if (!form.checkValidity()) {
                statusBox.classList.add('error');
                statusBox.textContent = 'Παρακαλούμε συμπληρώστε σωστά όλα τα υποχρεωτικά πεδία.';
                return;
            }

            // Development/Demo Mode Override
            statusBox.classList.add('info');
            statusBox.innerHTML = `<strong>Σημείωση Ανάπτυξης:</strong> Η πλατφόρμα βρίσκεται σε φάση σχεδιασμού. Σε περιβάλλον παραγωγής, τα δεδομένα θα αποστέλλονται με ασφάλεια στο backend του City4All. Καμία χρέωση ή αποθήκευση δεν πραγματοποιήθηκε.`;
            
            // To be implemented when backend is ready:
            // fetch('/api/inquiries', { method: 'POST', body: JSON.stringify(formData) })
        });
    }
});
