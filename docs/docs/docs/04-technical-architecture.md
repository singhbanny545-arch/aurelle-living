03 — Functional Requirements Specification (FRS)

Project: AURELLE LIVING

Document ID: AUR-FRS-001
Version: 1.0
Target Market: United Kingdom
Primary Currency: GBP (£)
Primary Language: English
Project Budget: £0 development budget target
Status: Proposed requirements — pending technical validation

---

1. Document Purpose

This document defines the functional behaviour, business rules, permissions, validation requirements, and acceptance criteria for AURELLE LIVING.

It serves as the implementation reference for frontend development, backend development, database design, testing, and project acceptance.

A feature will not be considered complete merely because its interface exists. Its expected behaviour must be implemented and tested.

2. User Roles

FR-001 — Guest Customer

A guest customer must be able to:

- Browse public pages.
- Browse product categories.
- View product details.
- Search and filter products.
- Add eligible products to a shopping cart.
- View the shopping cart.
- Register or sign in.
- Submit public contact enquiries.

Guest users must not access private customer records or administrative functionality.

FR-002 — Registered Customer

A registered customer must be able to:

- Sign in and sign out.
- Manage permitted profile information.
- Manage delivery addresses.
- Maintain a wishlist.
- View their own orders.
- View permitted order details.
- Submit support or return enquiries.

A customer must never access another customer's account or orders.

FR-003 — Administrator

An authorized administrator must be able to:

- Manage products.
- Manage categories and collections.
- Manage product variants.
- Manage inventory.
- Review and manage orders.
- Review customer enquiries.
- Manage website content.
- Review customer information according to permissions.
- View administrative activity logs.

Sensitive administrative actions must be restricted.

FR-004 — Role-Based Permissions

The system must enforce access permissions on the backend and database.

Hiding a button or navigation link in the frontend is not sufficient security.

3. Public Website Requirements

FR-005 — Homepage

The homepage must display:

- Main navigation.
- Hero content.
- Featured collections.
- Featured products.
- Product categories.
- Brand introduction.
- Editorial content.
- Footer navigation.

Requirements:

- Homepage content must be responsive.
- Featured product information must come from valid catalogue records.
- Unavailable content must not cause a broken page.
- All promotional claims must be verified.
- Hero and product images must have optimized loading behaviour.

Acceptance: Homepage loads correctly on mobile and desktop, and all displayed links work.

FR-006 — Navigation

The website must provide:

- Desktop navigation.
- Mobile navigation.
- Shop category access.
- Collection access.
- Search access.
- Customer account access.
- Wishlist access.
- Cart access.

Acceptance: Every primary navigation destination is reachable using both mouse and keyboard, and mobile navigation works on supported screen sizes.

FR-007 — Product Categories

The catalogue must support:

- Living Room.
- Dining Room.
- Bedroom.
- Home Office.
- Lighting.
- Storage.
- Rugs and Accessories.

Requirements:

- Products must be assigned to valid categories.
- Category pages must show only applicable products.
- Empty categories must have an appropriate empty state.
- Invalid category URLs must return an appropriate not-found experience.

FR-008 — Product Catalogue

Each product must support:

- Unique product identifier.
- Product name.
- Unique URL slug.
- Description.
- SKU.
- Price.
- Optional sale price.
- Category association.
- Product images.
- Material information.
- Colour information.
- Dimensions.
- Weight, when available.
- Publication status.

Validation:

- Product name cannot be empty.
- SKU must follow the uniqueness rule.
- Prices must be non-negative valid monetary values.
- Sale price must not exceed the regular price.
- Product slug must be unique.
- Required specifications must be validated before publication.

Acceptance: Published products display correctly and unpublished products are not available to public customers.

FR-009 — Product Variants

The system must support product variations where applicable.

Examples:

- Colour.
- Material.
- Finish.
- Size.

Each purchasable variant must have:

- Unique variant identifier.
- SKU.
- Price or valid pricing reference.
- Stock information.
- Availability status.

A selected variant must determine the correct product configuration and availability.

Acceptance: Selecting a variant updates the displayed information and cart line item correctly.

FR-010 — Product Image Gallery

Requirements:

- Multiple product images.
- Main image selection.
- Thumbnail navigation.
- Accessible image descriptions.
- Responsive image display.
- Appropriate loading placeholders.
- Image failure handling.

Only original, licensed, or otherwise legally permitted images may be used.

FR-011 — Product Search

Customers must be able to search by:

- Product name.
- SKU, where appropriate.
- Relevant product terms.
- Category.

Requirements:

- Search input must be validated.
- Search results must be relevant to the query.
- No-result searches must show a useful empty state.
- Search errors must not crash the page.

FR-012 — Filtering and Sorting

Proposed filters:

- Price range.
- Category.
- Material.
- Colour.
- Availability.

Proposed sorting:

- Featured.
- Price: low to high.
- Price: high to low.
- Newest.

Requirements:

- Multiple compatible filters must work together.
- Invalid filter values must be rejected or safely ignored.
- Sorting must not remove active filters unexpectedly.
- The interface must clearly show active filters.

4. Wishlist Requirements

FR-013 — Wishlist

Customers must be able to add and remove products from a wishlist.

Requirements:

- Duplicate wishlist entries must be prevented.
- Product availability changes must be reflected.
- A deleted or unpublished product must not appear as purchasable.
- Wishlist persistence must follow the selected guest/authenticated implementation.

Acceptance: Adding and removing products updates the wishlist correctly and survives the intended persistence lifecycle.

5. Shopping Cart Requirements

FR-014 — Add to Cart

A customer must be able to add an available product variant to the cart.

The system must validate:

- Product existence.
- Variant existence.
- Publication status.
- Availability.
- Current price.
- Requested quantity.

FR-015 — Cart Management

The cart must support:

- Quantity updates.
- Product removal.
- Variant display.
- Line-item totals.
- Subtotal calculation.
- Empty cart state.

Business rules:

- Quantity must be a positive integer.
- Quantity cannot exceed available stock.
- Invalid products cannot be purchased.
- Prices must be recalculated using trusted server-side data.
- Cart totals must never be trusted solely from browser-submitted values.

FR-016 — Cart Persistence

Cart persistence must be defined for:

- Guest customers.
- Authenticated customers.
- Session expiration.
- Customer sign-in.
- Cart merging, if implemented.

Cart merging must not silently duplicate items or exceed stock limits.

6. Checkout Requirements

FR-017 — Checkout Validation

Checkout must validate:

- Customer identity or guest eligibility.
- Customer contact information.
- Delivery address.
- Product availability.
- Variant availability.
- Quantity.
- Product prices.
- Shipping charge.
- Applicable taxes.
- Order total.

All financial calculations must use trusted backend logic.

FR-018 — Order Creation

An order must contain:

- Unique order identifier.
- Customer reference, where applicable.
- Item details.
- Product and variant identifiers.
- Quantity.
- Price snapshot.
- Shipping address snapshot.
- Subtotal.
- Shipping charges.
- Applicable taxes.
- Total amount.
- Payment status.
- Order status.
- Creation timestamp.

Order item prices must remain historically accurate even if the catalogue price changes later.

FR-019 — Payment Verification

Payment must only be marked successful after verified confirmation from an integrated payment provider.

Requirements:

- Provider-side verification.
- Server-side transaction validation.
- Duplicate callback protection.
- Payment reference storage.
- Failed payment handling.
- Pending payment handling.
- Refund status tracking.

A frontend success message is not proof of successful payment.

No real payment processing will be advertised until an appropriate payment provider is connected and tested.

FR-020 — Order Confirmation

A customer must only receive a confirmed order status after the configured order creation and payment rules have been satisfied.

The confirmation page must show:

- Order reference.
- Purchased items.
- Order total.
- Relevant order status.
- Customer support information.

7. Customer Account Requirements

FR-021 — Registration

Registration must validate:

- Email format.
- Required fields.
- Password requirements.
- Duplicate account conditions.
- Authentication provider response.

Passwords must never be stored in plaintext.

FR-022 — Login and Logout

Requirements:

- Secure authentication.
- Session management.
- Logout.
- Expired-session handling.
- Appropriate login errors.
- Password recovery workflow.

FR-023 — Customer Profile

Customers must be able to manage permitted personal information.

Changes must be validated and securely saved.

FR-024 — Address Management

Customers must be able to:

- Add an address.
- Edit an address.
- Delete an address.
- Select an appropriate delivery address.

Required address fields must be validated before checkout.

FR-025 — Order History

Customers must be able to view their own orders.

The system must enforce customer ownership checks for every order-detail request.

8. Inventory Requirements

FR-026 — Inventory Tracking

Inventory must be tracked at the purchasable variant level where applicable.

The system must support:

- Current stock quantity.
- Stock adjustments.
- Low-stock indicators.
- Inventory history.
- Out-of-stock status.

FR-027 — Stock Validation

Stock must be validated:

- When adding to cart.
- When updating cart quantity.
- Before creating an order.
- Before finalizing an order.

Concurrent purchase attempts must not result in overselling when inventory reservation and order finalization are implemented.

9. Administrative Requirements

FR-028 — Product Administration

Authorized administrators must be able to create, edit, publish, unpublish, and archive products.

All operations must validate input and permission.

FR-029 — Category Administration

Administrators must be able to manage category names, descriptions, slugs, and visibility.

Category deletion must check for dependent products.

FR-030 — Collection Administration

Administrators must be able to create and manage collections and assign eligible products.

FR-031 — Order Administration

Administrators must be able to:

- View permitted orders.
- View order details.
- Update permitted fulfilment statuses.
- Review payment status.
- Record appropriate administrative notes.

Payment status must not be manually changed to successful without verified payment evidence.

FR-032 — Customer Administration

Access to customer information must be restricted to authorized roles.

Sensitive data must not be unnecessarily exposed.

FR-033 — Discount Administration

The system must validate:

- Coupon existence.
- Validity period.
- Usage restrictions.
- Eligibility.
- Minimum purchase conditions, where applicable.
- Discount calculation.

Expired or invalid coupons must be rejected.

FR-034 — Return and Refund Administration

Requirements:

- Return request creation.
- Return reason.
- Request review.
- Return status.
- Authorized refund approval.
- Refund provider confirmation, when integrated.

A recorded refund request is not the same as a completed refund.

FR-035 — Content Administration

Authorized administrators must be able to manage approved content sections.

Content must be validated before publication.

FR-036 — Enquiry Management

The system must support:

- Contact enquiries.
- Trade enquiries.
- Enquiry details.
- Submission timestamps.
- Status tracking.
- Administrative notes.

Spam protection and input validation must be implemented.

10. Business Rules

BR-001 — Product Availability

Unpublished or unavailable products cannot be purchased.

BR-002 — Quantity

Cart quantities must be valid positive integers and cannot exceed validated stock.

BR-003 — Price Integrity

The backend is the authoritative source for prices, discounts, shipping calculations, and order totals.

BR-004 — Order Ownership

Customers can only access their own orders.

BR-005 — Coupon Integrity

Coupons must satisfy validity, usage, and eligibility rules.

BR-006 — Payment Integrity

Payment success must be verified independently through the configured provider.

BR-007 — Refund Integrity

Refunds require authorization and verified provider results.

BR-008 — Administrative Access

Administrative operations must be protected by backend authorization.

BR-009 — Data Integrity

Important order records must preserve the relevant purchase-time details.

BR-010 — Demo Data

Any sample, simulated, or demonstration data must be clearly identified and must never be presented as real customer transactions.

11. Error Handling Requirements

The system must handle:

- Invalid form input.
- Missing products.
- Invalid variants.
- Out-of-stock products.
- Expired authentication.
- Unauthorized requests.
- Network failure.
- Database failure.
- Payment failure.
- Duplicate submissions.
- Invalid coupon codes.
- Missing images.
- Empty search results.

Errors must be understandable to customers without exposing internal secrets or sensitive technical details.

12. Non-Functional Requirements

These requirements will be evaluated separately from individual features.

Performance

- Optimize images.
- Avoid unnecessary JavaScript.
- Use appropriate caching.
- Avoid unnecessary database requests.
- Measure Core Web Vitals.

Security

- Enforce authorization.
- Apply database row-level security where appropriate.
- Validate untrusted input.
- Protect secrets.
- Restrict file uploads.
- Prevent unauthorized customer-data access.
- Log important administrative actions.

Accessibility

Target: WCAG 2.2 AA.

Responsive Design

Support mobile, tablet, and desktop layouts.

Maintainability

Use modular components, clear naming, documented business logic, and consistent error handling.

13. Acceptance Testing

A feature will be accepted only when its applicable tests pass.

ID| Acceptance condition
AT-001| Homepage loads correctly
AT-002| Navigation destinations work
AT-003| Category pages show valid products
AT-004| Product details display correct catalogue data
AT-005| Product variants update correctly
AT-006| Search returns valid results
AT-007| Filters and sorting work together
AT-008| Wishlist add/remove works
AT-009| Cart quantities and totals are validated
AT-010| Checkout rejects invalid data
AT-011| Order records preserve price snapshots
AT-012| Payment status requires verified confirmation
AT-013| Authentication works securely
AT-014| Customers cannot access other customers' orders
AT-015| Inventory restrictions work
AT-016| Unauthorized users cannot perform admin operations
AT-017| Administrative product management works
AT-018| Coupon validation works
AT-019| Return and refund permissions work
AT-020| Responsive and accessibility checks pass

14. Implementation Priorities

P0 — Essential Foundation

- Routing
- Navigation
- Product data structure
- Category browsing
- Product detail pages
- Responsive design
- Secure architecture

P1 — Core Shopping

- Search
- Filters
- Wishlist
- Cart
- Customer authentication

P2 — Commerce Operations

- Checkout
- Order creation
- Payment-provider integration
- Inventory validation

P3 — Administration

- Product management
- Inventory management
- Order management
- Customer management
- Content management

P4 — Advanced Features

- Trade enquiries
- Returns workflow
- Discounts
- Analytics
- Email notifications

15. Budget and Delivery Constraints

The project has a zero-rupee budget target.

All proposed services must be checked for:

- Free-tier availability.
- Usage quotas.
- Storage limits.
- Inactivity restrictions.
- Security limitations.
- Deployment constraints.
- Commercial usage terms.

Features that cannot be securely and reliably delivered within the available free services must be deferred or explicitly marked as unavailable.

16. Final Acceptance Rule

A feature must not be marked complete until:

1. Its requirements are implemented.
2. Its normal workflow passes.
3. Its invalid-input workflow passes.
4. Its authorization requirements pass.
5. Its error states are tested.
6. Its mobile and desktop behaviour is checked.
7. Relevant regression tests pass.
8. Implementation evidence is documented.

---

Document status: Requirements specification drafted.
Implementation status: Not yet started.
Next document: Technical Architecture and System Design.
