AURELLE LIVING — Database Schema & Security Design

Document: 05 — Database Schema & Security Design
Project: AURELLE LIVING
Status: Proposed — Not Implemented
Database: Supabase PostgreSQL (planned)
Budget Target: ₹0
Last Updated: 22 November 2026

---

1. Purpose

This document defines the proposed database structure, table relationships, data ownership, access permissions, Row Level Security (RLS), storage boundaries, validation rules, and security requirements for AURELLE LIVING.

This is a technical design document. It does not mean that the database, authentication, security policies, or application features have already been implemented or tested.

2. Database Design Principles

The database must follow these principles:

1. Use relational PostgreSQL tables with clear relationships.
2. Use UUID primary keys for major entities.
3. Use foreign keys to maintain referential integrity.
4. Store timestamps in UTC using "timestamptz".
5. Use "numeric" for monetary values, never floating-point types.
6. Store currency explicitly with monetary records.
7. Avoid unnecessary duplication of customer and product data.
8. Preserve historical order information even when products change.
9. Apply RLS to every table accessible through the public application API.
10. Keep privileged operations on trusted server-side functions.
11. Never expose Supabase service-role credentials in frontend code.
12. Use database migrations for all schema changes.

3. Proposed Database Tables

3.1 User and Access Management

profiles

- id — UUID, primary key, references auth.users(id)
- full_name — text
- phone — text, nullable
- avatar_path — text, nullable
- created_at — timestamptz
- updated_at — timestamptz

Purpose: Stores customer profile information linked to Supabase Auth.

user_roles

- id — UUID, primary key
- user_id — UUID, references auth.users(id)
- role — text, restricted to approved role values
- created_at — timestamptz

Initial roles:

- customer
- admin

Rules:

- A user must not be able to assign themselves an admin role.
- Role assignment must be performed through a trusted administrative process.
- Do not trust role information supplied by frontend requests.

3.2 Product Catalogue

categories

- id — UUID, primary key
- name — text
- slug — text, unique
- description — text, nullable
- image_path — text, nullable
- parent_id — UUID, nullable, references categories(id)
- is_active — boolean
- sort_order — integer
- created_at — timestamptz
- updated_at — timestamptz

collections

- id — UUID, primary key
- name — text
- slug — text, unique
- description — text, nullable
- image_path — text, nullable
- is_active — boolean
- created_at — timestamptz
- updated_at — timestamptz

products

- id — UUID, primary key
- category_id — UUID, references categories(id)
- name — text
- slug — text, unique
- short_description — text, nullable
- description — text
- sku — text, unique
- brand — text, nullable
- base_price — numeric(12,2)
- compare_at_price — numeric(12,2), nullable
- currency — char(3)
- status — text, restricted to draft, active, archived
- featured — boolean
- metadata — jsonb, for controlled product attributes
- created_at — timestamptz
- updated_at — timestamptz

product_images

- id — UUID, primary key
- product_id — UUID, references products(id)
- storage_path — text
- alt_text — text
- sort_order — integer
- is_primary — boolean
- created_at — timestamptz

product_variants

- id — UUID, primary key
- product_id — UUID, references products(id)
- sku — text, unique
- variant_name — text
- attributes — jsonb
- price_adjustment — numeric(12,2)
- is_active — boolean
- created_at — timestamptz
- updated_at — timestamptz

collection_products

- collection_id — UUID, references collections(id)
- product_id — UUID, references products(id)
- sort_order — integer
- composite primary key — collection_id, product_id

3.3 Inventory

inventory

- id — UUID, primary key
- product_variant_id — UUID, unique, references product_variants(id)
- quantity_available — integer
- quantity_reserved — integer
- updated_at — timestamptz

Rules:

- Quantity values cannot be negative.
- Reserved quantity cannot exceed available stock under the chosen inventory model.
- Inventory changes must be validated on the server.
- Concurrent order attempts must not oversell stock.
- Use database transactions and appropriate row locking for reservation operations.

3.4 Customer Shopping Data

addresses

- id — UUID, primary key
- user_id — UUID, references auth.users(id)
- recipient_name — text
- phone — text
- address_line_1 — text
- address_line_2 — text, nullable
- city — text
- region — text, nullable
- postal_code — text
- country_code — char(2)
- is_default — boolean
- created_at — timestamptz
- updated_at — timestamptz

wishlists

- id — UUID, primary key
- user_id — UUID, references auth.users(id)
- name — text
- created_at — timestamptz

wishlist_items

- wishlist_id — UUID, references wishlists(id)
- product_id — UUID, references products(id)
- created_at — timestamptz
- composite primary key — wishlist_id, product_id

Guest wishlist data, if supported, must be handled separately and must not be treated as authenticated customer data.

3.5 Cart

carts

- id — UUID, primary key
- user_id — UUID, nullable, references auth.users(id)
- session_token_hash — text, nullable
- currency — char(3)
- created_at — timestamptz
- updated_at — timestamptz

cart_items

- id — UUID, primary key
- cart_id — UUID, references carts(id)
- product_variant_id — UUID, references product_variants(id)
- quantity — integer
- created_at — timestamptz
- updated_at — timestamptz

Rules:

- Quantity must be greater than zero.
- Prices must be recalculated from trusted product records.
- Client-submitted totals must never be trusted.
- Guest cart session identifiers must be random, protected, and never treated as authorization for another user's cart.
- Cart ownership must be validated on every server operation.

3.6 Orders

orders

- id — UUID, primary key
- order_number — text, unique
- user_id — UUID, nullable, references auth.users(id)
- customer_email — text
- customer_name — text
- currency — char(3)
- subtotal — numeric(12,2)
- discount_total — numeric(12,2)
- shipping_total — numeric(12,2)
- tax_total — numeric(12,2)
- grand_total — numeric(12,2)
- order_status — text
- payment_status — text
- shipping_address_snapshot — jsonb
- billing_address_snapshot — jsonb
- created_at — timestamptz
- updated_at — timestamptz

order_items

- id — UUID, primary key
- order_id — UUID, references orders(id)
- product_id — UUID, references products(id)
- variant_id — UUID, nullable, references product_variants(id)
- product_name_snapshot — text
- sku_snapshot — text
- quantity — integer
- unit_price — numeric(12,2)
- line_total — numeric(12,2)
- created_at — timestamptz

Rules:

- Order item snapshots preserve historical product and price information.
- An order must not depend on the current product name or price remaining unchanged.
- Order creation and inventory reservation must be transactionally consistent.
- Order totals must be calculated on the trusted backend.
- Customers must only access their own orders.
- Administrative order access must be restricted to authorized roles.

3.7 Payment Records

payments

- id — UUID, primary key
- order_id — UUID, references orders(id)
- provider — text
- provider_reference — text, nullable
- amount — numeric(12,2)
- currency — char(3)
- payment_status — text
- verified_at — timestamptz, nullable
- created_at — timestamptz
- updated_at — timestamptz

Rules:

- Never store full card numbers, CVV values, or raw payment credentials.
- Payment confirmation must come from verified provider server-side communication.
- Browser redirects alone cannot establish payment success.
- Provider webhooks must be authenticated and processed idempotently.
- Payment status transitions must be validated.
- No real payment provider is selected or integrated at this stage.

3.8 Discounts

coupons

- id — UUID, primary key
- code — text, unique
- discount_type — text
- discount_value — numeric(12,2)
- minimum_order_value — numeric(12,2), nullable
- maximum_discount — numeric(12,2), nullable
- usage_limit — integer, nullable
- used_count — integer
- starts_at — timestamptz, nullable
- expires_at — timestamptz, nullable
- is_active — boolean
- created_at — timestamptz

Coupon validation, usage limits, expiry, and discount calculations must run on the trusted backend.

3.9 Customer Support and Trade Enquiries

contact_enquiries

- id — UUID, primary key
- name — text
- email — text
- subject — text
- message — text
- status — text
- created_at — timestamptz

trade_enquiries

- id — UUID, primary key
- company_name — text
- contact_name — text
- email — text
- phone — text, nullable
- business_type — text
- message — text
- status — text
- created_at — timestamptz

Public users may submit enquiries but must not read other users' enquiries.

3.10 Administration and Audit

audit_logs

- id — UUID, primary key
- actor_user_id — UUID, nullable
- action — text
- entity_type — text
- entity_id — UUID, nullable
- metadata — jsonb
- created_at — timestamptz

Rules:

- Audit records must not contain passwords, access tokens, payment credentials, or unnecessary personal data.
- Normal users must not be able to edit or delete audit records.
- Sensitive administrative actions must be logged.
- Audit metadata must be minimized.

4. Relationship Overview

- auth.users → profiles: one-to-one
- auth.users → user_roles: one-to-many
- categories → products: one-to-many
- categories → categories: self-referencing hierarchy
- products → product_images: one-to-many
- products → product_variants: one-to-many
- collections ↔ products: many-to-many
- product_variants → inventory: one-to-one
- auth.users → addresses: one-to-many
- auth.users → wishlists: one-to-many
- wishlists → wishlist_items: one-to-many
- products → wishlist_items: one-to-many
- carts → cart_items: one-to-many
- orders → order_items: one-to-many
- orders → payments: one-to-many
- coupons: validated against trusted checkout operations

All foreign-key deletion behavior must be explicitly chosen. Historical order and payment records must not be accidentally deleted when a customer account or product is removed.

5. Row Level Security (RLS)

RLS must be enabled for every table exposed through Supabase's API.

Public access

Anonymous visitors may:

- Read active product information.
- Read active categories and collections.
- Read public product images.
- Submit validated contact or trade enquiries.

Anonymous visitors must not:

- Read customer profiles or addresses.
- Read orders or payment records.
- Read private inventory information.
- Access administrative data.
- Assign user roles.

Customer access

Authenticated customers may:

- Read and update their own permitted profile fields.
- Read, create, update, and delete their own addresses.
- Read and manage their own wishlist.
- Access only their own cart.
- Read only their own orders and permitted order details.

Customers must not:

- Read another customer's data.
- Change their own role.
- Change order totals or payment status.
- Directly modify protected inventory.
- Modify administrative audit logs.

Admin access

Administrative access must be granted only to verified admin users.

Admin operations must:

- Check authorization on the trusted server side.
- Use narrowly scoped database privileges.
- Validate all input.
- Log sensitive operations.
- Avoid exposing privileged credentials to the browser.

A hidden admin route or frontend-only role check is not sufficient security.

6. Authentication and Authorization

- Use Supabase Auth for authentication, if the planned provider remains suitable.
- Use secure session handling.
- Validate authenticated identity on trusted server-side operations.
- Use RLS as a database security boundary, not merely as a UI feature.
- Keep role assignment restricted.
- Protect administrative routes and APIs independently.
- Implement appropriate account recovery and session expiry behavior.
- Avoid revealing whether an email address is registered through unnecessary error detail.

7. Storage Security

Proposed storage buckets:

product-media

- Public read for approved published product assets.
- Upload, replacement, and deletion restricted to authorized administrators.

customer-media

- Private by default.
- Access limited to the owning customer and authorized processes.
- Use short-lived signed URLs when appropriate.

Rules:

- Validate MIME type and file size.
- Use safe generated file names.
- Do not trust file extensions alone.
- Restrict upload permissions.
- Do not allow arbitrary executable files.
- Store storage paths in database records rather than exposing private storage credentials.
- Ensure deleted or replaced product assets do not break published product pages.

8. Data Validation and Constraints

Implement database constraints wherever practical:

- Required fields must be NOT NULL.
- Unique identifiers must have UNIQUE constraints.
- Monetary values must be non-negative where applicable.
- Quantities must be integers and non-negative.
- Foreign keys must enforce valid relationships.
- Status fields must use controlled values.
- Email and text inputs must be validated and length-limited.
- Coupon usage must be concurrency-safe.
- Inventory reservation must be atomic.
- Order totals must be calculated using trusted records.

Application validation is useful, but database constraints and trusted backend validation remain necessary.

9. Indexing and Query Performance

Consider indexes for:

- products.slug
- products.sku
- products.category_id
- products.status
- products.created_at
- product_variants.product_id
- orders.user_id
- orders.order_number
- orders.order_status
- orders.created_at
- order_items.order_id
- addresses.user_id
- wishlists.user_id
- carts.user_id
- coupons.code

Use composite indexes only when supported by actual query patterns.

Avoid adding unnecessary indexes that increase storage and write overhead.

10. Database Migrations and Backups

- All schema changes must be version-controlled.
- Use repeatable migration naming conventions.
- Review destructive migrations before execution.
- Test migrations on a separate development environment where available.
- Do not manually modify production schema without recording the change.
- Define a backup and recovery process before any real production launch.
- Verify actual backup availability and restore procedures.

The Supabase Free plan has limitations. Do not assume automatic backups, point-in-time recovery, or guaranteed uptime are available without verifying the current plan.

11. Privacy and Data Retention

- Collect only information required for the intended service.
- Avoid storing unnecessary sensitive personal data.
- Define a retention policy for enquiries, customer data, and logs.
- Restrict access to customer information.
- Define an account deletion and data export process.
- Preserve legally required transaction records where applicable.
- Obtain appropriate consent for non-essential tracking and marketing.
- Publish accurate privacy, cookie, returns, and delivery policies before accepting real customers.

Applicable UK privacy, consumer, tax, and e-commerce obligations require separate legal and operational verification before production launch.

12. Security Testing Checklist

Before considering this design implemented, verify:

- [ ] RLS enabled on all API-exposed tables.
- [ ] Anonymous access cannot read private data.
- [ ] Customer A cannot access Customer B's profile.
- [ ] Customer A cannot access Customer B's address.
- [ ] Customer A cannot access Customer B's cart.
- [ ] Customer A cannot access Customer B's orders.
- [ ] Customers cannot assign themselves admin roles.
- [ ] Unauthorized users cannot access admin operations.
- [ ] Public users cannot modify product prices.
- [ ] Public users cannot modify inventory.
- [ ] Checkout recalculates totals on the trusted backend.
- [ ] Inventory reservation prevents overselling.
- [ ] Payment status cannot be changed by browser requests.
- [ ] Webhook processing is authenticated and idempotent.
- [ ] Storage upload policies reject unauthorized uploads.
- [ ] Private storage assets are not publicly accessible.
- [ ] No service-role key or secret is present in frontend bundles or Git history.
- [ ] Database migrations can be applied and rolled back safely where supported.
- [ ] Error responses do not leak sensitive internal information.

13. Free-Tier Constraints

The intended implementation must remain within a ₹0 budget.

Potential services:

- Supabase Free for PostgreSQL, Auth, and Storage.
- Cloudflare Pages for frontend hosting.
- GitHub for source control.

Important limitations:

- Free-tier quotas can change.
- Projects may pause due to inactivity.
- Free-tier backups and recovery capabilities may be limited.
- Storage, bandwidth, compute, and request quotas apply.
- Free services do not guarantee business-critical availability.
- Real payment processing, email delivery, custom domains, and other services may involve fees or eligibility requirements.

Do not activate a paid service or upgrade without explicit approval.

14. Implementation Sequence

1. Review and approve the logical schema.
2. Create the Supabase development project only after architecture approval.
3. Configure database migrations.
4. Create tables and constraints.
5. Add indexes.
6. Enable RLS.
7. Write and test access policies.
8. Configure authentication.
9. Configure storage buckets and policies.
10. Implement trusted database operations.
11. Test authorization and security boundaries.
12. Document verified results.

No production data should be entered before security policies have been reviewed.

15. Acceptance Criteria

This design is ready for implementation when:

- Every major application entity has a defined table.
- Primary and foreign keys are specified.
- Relationships are documented.
- Customer and administrator permissions are separated.
- RLS requirements are defined.
- Sensitive operations are assigned to trusted server-side processes.
- Payment and inventory boundaries are documented.
- Storage access is restricted.
- Privacy and retention requirements are identified.
- Free-tier risks are acknowledged.
- Security tests are defined.

16. Current Status

Database schema: Proposed
Relationships: Documented
RLS policies: Requirements documented; not implemented
Authentication: Planned; not configured
Storage: Planned; not configured
Payment provider: Not selected
Security tests: Defined; not executed
Production readiness: Not established

---

End of Document 05
