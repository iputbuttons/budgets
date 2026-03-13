# Frontend development spec: "Locos por el Fútbol"

Reference document for the frontend developer. It consolidates product information, user flows, screens, copy, and design criteria from the project proposals and notes.

---

## 1. Product overview

**Name:** Locos por el Fútbol  

**What it is:** Web platform for live football match streaming. Fans sign up, buy credits (plans of 1, 3, 5, or 10 matches) and watch matches live from the browser (mobile or desktop). The organization manages teams, matches, live broadcast, and sponsors from a backoffice.

**Client / contact:** Cristian Cortez  

**Business goal:** Stream matches, monetize through credit sales and sponsor slots (banners, full-screen plates, commentator mentions).

---

## 2. Tech stack (reference)

- **Frontend:** React (Next.js), Tailwind CSS, shadcn/ui.
- **Backend / data:** Firebase (Authentication, Firestore, Cloud Functions).
- **Live video:** YouTube (unlisted videos).
- **Payments:** Mercado Pago (Checkout Pro).
- **Analytics:** Amplitude.

*(The frontend must integrate with these services; the API/backend may already be defined or in development.)*

---

## 3. Users and roles

| Role | Description |
|------|-------------|
| **Fan (end user)** | Registers, buys credits, watches live and recorded matches, uses chat during the match. |
| **Administrator** | Manages teams, matches, sponsors, break graphics; operates the live Control Room (scoreboard, clock, banners, chat). |
| **Operator (Phase 2)** | Scoreboard and live chat control only; no access to finances or configuration. |

---

## 4. User app (fans) – Screens and flows

### 4.1 Authentication

- **Sign up:** Email + password **or** sign in with Google / Facebook.
- **Login:** Same options; “Forgot password” (email recovery).
- **Restriction:** One active session per user. If the user logs in on another device, the previous session is closed (one payment = one screen).

### 4.2 Main fan flow

1. **Create account** (email or social).
2. **Buy a plan** (1, 3, 5, or 10 matches) via Mercado Pago.
3. **Watch matches:** Enter the app, choose the match of the day, and play the live stream (or watch the recording if it has ended).

### 4.3 Home / list screen

- **Match catalog:** Upcoming matches to stream (date, time, teams, description).
- **Archive / results:** Past matches with visible score (and VOD access if they used a credit for that match).
- Clear navigation to “Live” and “Upcoming” / “Past”.

### 4.4 Live match screen

UI must include:

- **Video player:** Embedded (YouTube unlisted), main area.
- **Countdown:** Before the match starts (timer until kick-off).
- **Live scoreboard:** Fixed area at top or overlay: score (home – away) and match time (current minute or time remaining).
- **Clock / time:** Visible for the whole match.
- **Bottom banner:** Sponsor ad area (rotation per backoffice config: logo + text, duration in seconds).
- **Live chat:** Panel or drawer, real-time during the match only; user can send and read messages.
- **Break graphics:** During half-time or breaks, show plates/images uploaded by admin (e.g. sponsors, results).

When the match ends, the final score stays visible and the video is available as VOD for users who used a credit.

### 4.5 Credits and purchase

- **Credit system:** Buying a plan adds credits to the user’s “wallet”. Each match the user chooses to watch uses 1 credit.
- **Plans:** 1, 3, 5, and 10 matches (prices and discounts TBD; e.g. 3-match plan 20% off total). Reference: 1-match plan ~$6000 (adjust per client).
- **Postponement:** If a match is postponed, the credit used for that match is automatically refunded.
- **Checkout:** Redirect to Mercado Pago (Checkout Pro); on success, credit the account and redirect back to the app.

### 4.6 Share match

- **Open Graph / meta tags:** Each match page must have meta tags (og:title, og:description, og:image) so shared links (WhatsApp, social) show a card with match data (teams, date, etc.).

### 4.7 Other (user app)

- **Amplitude events:** Send relevant events (signup, purchase, stream start/end, chat usage, etc.) per product/analytics definition.
- **Responsive:** App must work well on mobile and desktop.

---

## 5. Backoffice (admin panel)

### 5.1 Base management (CRUD)

- **Teams:** Create and edit football teams (name, logo, etc.).
- **Matches:** Create, edit, and postpone matches. Fields:
  - Home and away teams.
  - Date and time.
  - Description.
  - Break graphics (images to show during half-time/breaks).
  - Match sponsors: banner image, text, on-screen duration (seconds).
- **Postponement:** Mark match as “postponed” to notify users and refund credits.

### 5.2 Control Room (live operation)

Panel used **during** the broadcast:

- **Scoreboard:** Add goals (home/away), real-time update in the user app.
- **Clock / periods:** Start first half, second half; pause (between halves or for graphics); resume; end match.
- **Banners:** Change which sponsor is shown in the bottom banner (or rotation per config).
- **Graphics plates:** Trigger full-screen break images (uploaded for the match).
- **Chat:** Pause/resume global chat; mute specific users.

### 5.3 Metrics and statistics

- **Dashboard:** Number of users connected live per match.
- **Sales:** Summary of sales (plans sold, credits consumed).
- **Behaviour:** Data from Amplitude or backoffice (e.g. most-watched matches, peak connections).

---

## 6. Sponsors (on-screen advertising)

To sell to sponsors and display them in the app:

- **On-screen banners:** Logo + short tagline in the lower area of the player; rotation per configured duration (seconds) per sponsor.
- **Break plates:** Full-screen sponsor ad during half-time (image/text with address, phone, offer).
- **Commentator mentions:** Text or script for the commentator to say “This match is brought to you by [business name]” (not a screen; the system can have a “message for commentator” field or similar).

In the backoffice: per match (or globally) configure sponsors with image, text, and on-screen duration.

---

## 7. Content and copy (UI reference)

### 7.1 Proposal for the client (fan / organization)

- **Title / tagline:** “Locos por el Fútbol”.
- **Short description:** “A service to watch football matches online, so fans can watch live matches comfortably, clearly, and securely.”
- **Values to convey:** Functional, modern, secure, scalable.
- **Steps for the fan:** (1) Create a simple account (email or Google/Facebook), (2) Buy a plan (1, 3, 5, 10 matches) with Mercado Pago, (3) Enter the match and watch the live stream.

### 7.2 Proposal for sponsors

- **Title:** “Locos por el Fútbol – Local sponsorship opportunity”.
- **Target audience (text):** Local fans who follow matches in the area; families watching together; young people who share on social media.
- **Formats:** On-screen banners, break plates, commentator mentions.
- **Benefits to highlight:** Constant presence, measurable results (connections per match), affordable investment for local businesses.
- **Example package:** “Local season” – presence on all matches in the season, fixed and rotating banners, plate at half-time and end of match, mention at start and end of broadcast, option for promotions (discounts, giveaways).

*(These texts are for landing pages, emails, or sales materials; in-app screens can use shorter versions.)*

---

## 8. Design and brand

- **Name:** Locos por el Fútbol.
- **Style in proposals:** Professional but approachable; clear language for non-technical readers.
- **Reference colours (web proposals):** Emerald green as primary (emerald: `#10b981`, Tailwind `emerald-500/600`). Light/dark backgrounds per theme; emerald borders and accents.
- **Components:** Proposal repo uses Card, Badge, Button, Separator from shadcn/ui; keep consistency if the client wants a similar look.
- **Accessibility:** Good readability, sufficient contrast, buttons and text that are understandable without jargon.

---

## 9. Phase 2 (future, not required for MVP)

- **Anti-piracy:** Move from YouTube unlisted to a private player (e.g. Vimeo Premium, Mux, AWS) with domain protection/DRM.
- **Backoffice roles:** “Operator” role for scoreboard and chat only, no access to finances or config.
- **Scalable chat:** Support thousands of concurrent users (Firebase partitioning or WebSockets).
- **Native app (optional):** App Store / Google Play with push notifications.

---

## 10. Phase 1 deliverables (development checklist)

- [ ] Responsive web app (React/Next.js) for fans: signup, login, credit purchase, match list, live player with scoreboard, clock, sponsor banner, chat.
- [ ] VOD: recording available after the match for users who used a credit.
- [ ] Open Graph on each match page for social sharing.
- [ ] Backoffice: team, match, sponsor and break-graphics management; live Control Room (scoreboard, clock, banners, plates, chat moderation); basic dashboard (connections, sales).
- [ ] Mercado Pago integration (Checkout Pro) and credit refund for postponed matches.
- [ ] Single active session per user (log out on other device).
- [ ] Amplitude integration (agreed events).
- [ ] Firebase auth (email and Google/Facebook).

---

## 11. References in this repo

- **Technical proposal and phases:** `notes/PROPUESTA_DESARROLLO.md`
- **Product and backoffice notes:** `notes/NOTES.md`
- **Proposal pages (content and copy):**
  - `app/locos-por-el-futbol/page.tsx` – Main proposal.
  - `app/locos-por-el-futbol-print/page.tsx` – Print version (client/organization).
  - `app/locos-por-el-futbol-sponsors-print/page.tsx` – Print version (sponsors).

If something is not defined (final prices, banner duration, exact permissions), coordinate with the client (Cristian Cortez) or the product/backend owner.
