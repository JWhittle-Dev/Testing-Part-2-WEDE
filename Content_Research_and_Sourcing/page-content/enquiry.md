# Enquiry (enquiry.html) — Content

Purpose: single form serving both volunteer and sponsor enquiries, as
required for an NPO by brief section 5 ("If the chosen organisation is an
NPO, the form should allow the visitor to enquire about being a volunteer
or becoming a sponsor").

Fields: full name, email, phone (optional), interest (volunteer / sponsor —
radio, required), free-text message.

Client-side validation (please dont hate me but see js/script.js): required-field checks, email
format check, and a required choice between volunteer/sponsor.

Note: no backend exists yet — the form currently only validates and shows
a confirmation message. Before going live, connect it to a real mail
service or backend (e.g. Formspree, Netlify Forms, or a custom endpoint).
