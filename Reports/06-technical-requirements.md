# 6. Technical Requirements

Each technology is listed with **why** it was chosen.

| Technology | Role | Justification |
|-----------|------|---------------|
| HTML5 | Page structure | Semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`) give meaning to content and help screen readers and search engines (MDN Web Docs, n.d.a). |
| CSS3 (external stylesheet) | Styling and layout | One shared file keeps all pages consistent. Flexbox and Grid handle layout without extra libraries (MDN Web Docs, n.d.b). Media queries enable responsive design (MDN Web Docs, n.d.c). |
| JavaScript (vanilla) | Menu toggle and form validation | No framework needed for two small features, which keeps pages fast and easy for volunteers to maintain. |
| Google Fonts (Poppins, Inter) | Typography | Free, open-licensed fonts delivered by CDN (Google Fonts, n.d.a; n.d.b). |
| Google Maps embed | Location maps | Free iframe embed; no API key needed for a simple location. |
| Git and GitHub | Version control | Tracks every change, enables the changelog and supports collaboration (Git, n.d.). |
| GitHub Pages (optional) | Hosting | Free static hosting with HTTPS, suitable for a non-profit on a tight budget (GitHub Docs, n.d.). |
| Visual Studio Code | Editor | Free editor with HTML/CSS/JS support (Microsoft, n.d.). |
| Browser developer tools | Testing | Used to inspect elements and test breakpoints and devices. |

## Standards and quality
- Valid, semantic HTML5.
- Accessibility aligned to WCAG 2.2 (W3C, 2023).
- Browser support: current Chrome, Edge, Firefox and Safari.
- Performance: SVG images, lazy-loaded images/maps, no heavy libraries.

## Hardware and connectivity
Any device with a modern browser. Because many users in South Africa are on mobile data, pages are kept light.

## Limitations
No back end, so forms do not send data. A form service or server would be a future requirement.
