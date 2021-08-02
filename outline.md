# Outline

## Overview

- Single Page multi section landing page
- Authentication
- Square integration for purchase of sessions or gift cards
- Email service
- Create/Read/Update/Delete profile content
- Create/Read/Update/Delete session subscription
- CSS in JS via mateiralUI useStyles

## Pages

### App
- \<Seo />
- \<Nav />
- \<Drawer />
- [ Content ]
- \<Footer />

### Main
- \<HeroImage />
- \<EmailListSignup />
- \<ViewSessionsPublic />
    - \<SessionSignup />
- \<Services /> -- Changes based on Auth (custom rate or company rate)
- \<InfoVideoLinkBlurb />
- \<InfoImageBlurb />
- \<Pricing /> **Pricing/Services might merge
- \<UserReviewsSection />
- \<ContactFormLandingPage /> -- prepopulates user info if Auth
- \<InquireChairMassageForm />

### Dashboard
- \<ViewSessions /> -- Pulls from profile affiliations

### Dashboard/companySlug
- \<ViewSessionsCompanyPublic />
    - \<SessionSignup />

### Dashboard/companySlug/createEvent
- \<SessionCreate />

### /users/[userId]
- \<ViewProfile />
    - \<SessionHistory />
    - \<PaymentHistory /> -- if profile owner
    - \<EditProfile /> -- if profile owner

### /contact
- \<ContactFormGeneral /> -- prepopulates user info if Auth

---

## Requirementes

- Working full CRUD
- Foreign Key Join (sql) --might be able to use MongoDB
- MVP plan (this)
- (10pts) Responsive Deisgn (will be handled by materialUI)
- (15pts) Redux from 2+ reducers
- (10pts) 5+ componenets use React Hooks (eg useState)
    - useEffect \<Nav /> displays logged in state
    - useState \<Profile /> uses form state
    - useState \<EmailListSignup /> uses form state
    - useState \<Drawer /> uses opened/closed state
    - useState \<SessionSignup /> uses form state
    - useEffect \<SessionSignup /> loads form data to edit
- (10pts) Working Authentication
- (10pts) Nodemailer or equivelent emailer
- (10pts) Square integration
- (10pts) CSS in JS
- (15pts) Domain hosted on unique domain name (www.trilliummassage.la)
- (10pts) Presentation (Might have missed this score)

### 10 * 7 + 15 * 2 = 100 points
