# 3. Proposed Website Features and Functionality

## Pages
| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Mission, three programme teasers, facts, calls to action |
| About Us | `about.html` | History (1966), mission and vision, leadership and volunteer roles |
| Programmes | `services.html` | School Support, Charity Partnerships, Youth Leadership, sponsorship call-out |
| Enquiry | `enquiry.html` | Volunteer / sponsor form |
| Contact | `contact.html` | Two locations with embedded maps, contact message form |

## Features
| # | Feature | Detail | Benefit |
|---|---------|--------|---------|
| F1 | Sticky header with navigation | Logo and five links; current page marked with `aria-current` | Always one tap from any page |
| F2 | Mobile menu toggle | JavaScript toggles the menu below 720px | Usable on phones |
| F3 | Enquiry form with validation | Checks name, valid email and volunteer/sponsor choice; shows accessible messages | Fewer incomplete enquiries |
| F4 | Contact form with validation | Checks name, email and message | Same benefits as F3 |
| F5 | Embedded Google Maps | One map per location, lazy-loaded | Volunteers can find venues |
| F6 | Calls to action | Buttons to the enquiry page on Home and Programmes | Supports objective O2 |
| F7 | Accessibility features | Skip link, focus outlines, alt text, `aria-live` feedback | Inclusive for all users |
| F8 | Original illustrations | SVG images in `images/` | Visual interest with fast loading and no licence issues |
| F9 | Responsive layout | Grid/flexbox with media queries (Part 2) | Works on all devices |

## Content specification
Page copy is written in `Content_Research_and_Sourcing/page-content/` and is original (not copied from sources).

## Out of scope (for now)
Online payments, member login, a blog and a database. The forms are demonstrations and do not send data;
a back end (or a form service) would be needed for live use.
