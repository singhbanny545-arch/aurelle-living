02 — Website Sitemap & Information Architecture

Project: AURELLE LIVING

Document type: Website Sitemap and Information Architecture
Target market: United Kingdom
Primary language: English
Primary currency: GBP (£)
Status: Proposed architecture — pending implementation and validation

---

1. Purpose

This document defines the proposed website structure, page hierarchy, navigation system, and user journeys for AURELLE LIVING.

The objective is to create an original luxury furniture shopping experience with clear navigation, discoverable products, accessible information, and a structured customer journey.

This document defines the intended structure. It does not claim that any page or feature has already been implemented.

2. Main Website Structure

The website is divided into seven primary areas:

1. Home
2. Shop
3. Collections
4. Customer Shopping
5. Brand and Editorial
6. Customer Support
7. Customer Account

A separate protected administration area will manage website operations.

3. Public Website Sitemap

3.1 Home

Route: "/"

Sections:

- Announcement bar
- Main navigation
- Hero section
- Featured collections
- New arrivals
- Best-selling products
- Featured furniture categories
- Editorial brand story
- Design and craftsmanship section
- Customer reviews, only when genuine reviews exist
- Newsletter subscription, subject to email integration
- Footer navigation

3.2 Shop

Route: "/shop"

Subpages:

- All Furniture: "/shop"
- Living Room: "/shop/living-room"
- Dining Room: "/shop/dining-room"
- Bedroom: "/shop/bedroom"
- Home Office: "/shop/home-office"
- Lighting: "/shop/lighting"
- Storage: "/shop/storage"
- Rugs and Accessories: "/shop/accessories"

Each category page should support:

- Product grid
- Product images
- Product name and price
- Available product variants
- Sorting
- Filtering
- Pagination or progressive loading
- Empty and error states

Categories are proposed and can be adjusted after the initial catalogue is defined.

3.3 Collections

Route: "/collections"

Subpages:

- All Collections: "/collections"
- Signature Collection: "/collections/signature"
- Contemporary Collection: "/collections/contemporary"
- Minimal Collection: "/collections/minimal"
- Timeless Collection: "/collections/timeless"

Collection names are provisional. A collection must only be displayed when it contains valid catalogue content.

3.4 Product Discovery

- Search: "/search"
- Search results: "/search?q=..."
- Category filtering
- Price sorting
- Material filtering
- Colour filtering
- Availability filtering

Search and filters must work against the actual catalogue data.

3.5 Product Details

Route pattern: "/products/:slug"

Product detail sections:

- Product image gallery
- Product title
- Product price
- Product description
- Product variants
- Dimensions and specifications
- Material and finish information
- Availability information
- Delivery information
- Assembly information, where applicable
- Care instructions
- Add to cart
- Add to wishlist
- Related products

The product page must not display invented specifications, fake availability, or fabricated reviews.

3.6 Shopping

- Wishlist: "/wishlist"
- Shopping bag: "/cart"
- Checkout: "/checkout"
- Order confirmation: "/order-confirmation/:orderNumber"

Checkout substeps:

1. Customer information
2. Delivery address
3. Delivery method, when available
4. Order summary
5. Payment
6. Order confirmation

The confirmation page must only represent a successfully verified order. A payment success message must not be generated from a frontend-only action.

3.7 Brand and Editorial

- Our Story: "/about"
- Design Philosophy: "/design-philosophy"
- Materials and Craftsmanship: "/craftsmanship"
- Sustainability: "/sustainability"
- Journal: "/journal"
- Journal Article: "/journal/:slug"

All brand claims, sustainability claims, manufacturing claims, and material claims must be supported by actual evidence before publication.

3.8 Customer Support

- Contact: "/contact"
- FAQs: "/faqs"
- Delivery Information: "/delivery"
- Returns and Refunds: "/returns"
- Furniture Care: "/care-guide"
- Trade Enquiries: "/trade"

Trade enquiries will initially be handled through a contact form and an administrative enquiry workflow.

3.9 Customer Account

- Login: "/account/login"
- Registration: "/account/register"
- Password Recovery: "/account/forgot-password"
- Account Overview: "/account"
- Personal Details: "/account/profile"
- Saved Addresses: "/account/addresses"
- My Orders: "/account/orders"
- Order Details: "/account/orders/:orderId"
- Account Wishlist: "/account/wishlist"

Account pages require authentication.

Customers must only be able to access their own personal information and orders.

4. Protected Administration Sitemap

The administration dashboard will be separate from the public customer interface.

Base route: "/admin"

4.1 Dashboard

Route: "/admin"

- Overview
- Order summary
- Product summary
- Inventory alerts
- Customer activity
- Recent administrative activity

Analytics must be based on actual recorded data. Sample analytics must be clearly labelled as demonstration data.

4.2 Product Management

Route: "/admin/products"

- Product listing
- Create product
- Edit product
- Product variants
- Product images
- Product descriptions
- Product specifications
- Product publication status

4.3 Category and Collection Management

- "/admin/categories"
- "/admin/collections"

Administrative actions:

- Create
- Edit
- Reorder
- Publish
- Unpublish
- Delete, subject to dependency checks

4.4 Inventory Management

Route: "/admin/inventory"

- Stock overview
- Variant-level inventory
- Stock adjustments
- Low-stock alerts
- Inventory history

4.5 Order Management

Route: "/admin/orders"

- Order list
- Order details
- Payment status
- Fulfilment status
- Shipping information
- Order status updates
- Cancellation workflow

Sensitive actions require authorization and validation.

4.6 Customer Management

Route: "/admin/customers"

- Customer directory
- Customer profile
- Order history
- Customer support information

Access to personal information must be restricted according to administrative permissions.

4.7 Discounts and Coupons

Route: "/admin/discounts"

- Create coupon
- Edit coupon
- Discount type
- Validity period
- Usage limits
- Eligibility rules
- Active and expired status

4.8 Returns and Refunds

Route: "/admin/returns"

- Return requests
- Return reason
- Request review
- Return status
- Refund authorization
- Refund status

Refund processing must be connected to a real payment provider before being represented as a completed financial transaction.

4.9 Content Management

Route: "/admin/content"

- Homepage content
- Editorial pages
- Journal articles
- FAQ entries
- Delivery information
- Returns information
- Footer content

4.10 Trade Enquiries

Route: "/admin/trade-enquiries"

- Enquiry listing
- Business information
- Project information
- Enquiry status
- Internal notes
- Follow-up status

4.11 Administration and Security

- "/admin/users"
- "/admin/roles"
- "/admin/audit-logs"
- "/admin/settings"

Administrative permissions must be enforced by the backend and database policies, not only by hiding frontend navigation links.

5. Global Navigation

Desktop Navigation

Proposed primary navigation:

- Home
- Shop
- Collections
- Our Story
- Journal
- Contact

Additional elements:

- Search
- Account
- Wishlist
- Shopping bag

The Shop menu may use a mega-menu for furniture categories.

Mobile Navigation

The mobile interface should provide:

- Menu toggle
- Search access
- Account access
- Shopping bag
- Expandable category navigation
- Clear navigation hierarchy

Mobile and desktop navigation must provide access to the same essential destinations.

6. Footer Architecture

The footer will contain four groups.

Explore

- Shop All
- Living Room
- Dining Room
- Bedroom
- Collections

About

- Our Story
- Design Philosophy
- Craftsmanship
- Journal

Customer Care

- Contact
- FAQs
- Delivery
- Returns
- Care Guide

Legal

- Privacy Policy
- Cookie Policy
- Terms and Conditions
- Shipping Policy
- Returns Policy

Social links must only be added when the corresponding official brand accounts exist.

7. Core Customer Journeys

Journey A — Product Discovery

Home → Shop → Category → Product Details

Journey B — Purchase

Product Details → Add to Cart → Cart → Checkout → Verified Payment → Order Confirmation

Journey C — Returning Customer

Home → Login → Account → Orders → Order Details

Journey D — Wishlist

Product Details → Add to Wishlist → Login or Registration if required → Wishlist

Journey E — Customer Support

Footer → FAQs or Contact → Enquiry Submission → Support Follow-up

Journey F — Trade Customer

Trade Page → Enquiry Form → Submission → Administrative Review → Follow-up

8. Route and Access Rules

Area| Access
Public pages| Everyone
Product browsing| Everyone
Wishlist| Guest or authenticated, depending on implementation
Cart| Guest or authenticated
Checkout| Validated customer session and required information
Customer account| Authenticated customer
Customer orders| Owner of the order only
Admin dashboard| Authorized administrator only
Product management| Authorized administrator only
Refund operations| Specifically authorized administrator

9. Page States and Error Handling

Every important interactive page must account for:

- Initial loading
- Successful content display
- Empty content
- No search results
- Validation errors
- Network errors
- Unauthorized access
- Expired authentication
- Unavailable products
- Out-of-stock variants
- Failed payment
- Successful verified payment

No page should leave the user with a broken or unexplained interface.

10. SEO and Accessibility Structure

Every public page should have:

- Unique page title
- Relevant meta description
- Canonical URL where applicable
- Logical heading hierarchy
- Descriptive image alternative text
- Meaningful internal links
- Mobile-friendly layout

Accessibility requirements:

- Keyboard-accessible navigation
- Visible focus indicators
- Sufficient colour contrast
- Proper form labels
- Screen-reader-friendly structure
- Reduced-motion support
- Accessible validation and error messages

The implementation will be audited against WCAG 2.2 AA.

11. Implementation Priority

Priority 1 — Foundation

- Homepage
- Global navigation
- Footer
- Category pages
- Product detail pages
- Search and filtering

Priority 2 — Shopping

- Wishlist
- Cart
- Checkout architecture
- Customer authentication
- Order history

Priority 3 — Administration

- Product management
- Categories and collections
- Inventory
- Orders
- Customer management

Priority 4 — Supporting Experience

- Journal
- FAQs
- Delivery and returns pages
- Trade enquiries
- SEO and legal pages

Priority 5 — Production Readiness

- Payment provider integration
- Order processing validation
- Security testing
- Performance testing
- Deployment
- Documentation and handover

12. Scope and Limitations

The sitemap describes intended functionality, not completed functionality.

Real payments, delivery tracking, transactional emails, refunds, newsletter subscriptions, and trade account benefits require appropriate service providers and operational arrangements.

Some functions may be deferred if they cannot be implemented securely and reliably within the zero-rupee budget.

13. Acceptance Criteria

The sitemap will be considered approved when:

1. All required public pages are identified.
2. Customer account routes are defined.
3. Administration routes are defined.
4. Access permissions are documented.
5. Customer journeys are mapped.
6. Mobile and desktop navigation requirements are defined.
7. Loading, empty, success, and error states are included.
8. Implementation priorities are agreed.

---

Document status: Proposed — awaiting technical and requirements validation.

Next document: Functional Requirements Specification (FRS).
