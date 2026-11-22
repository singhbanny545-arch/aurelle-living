AURELLE LIVING — Wireframes & Page Layout Specifications

Document: 07 — Wireframes & Page Layouts
Status: Proposed — Not Implemented
Related Documents: 01–06
Date: 22 November 2026

---

1. Purpose

Define the page-by-page structural layout of AURELLE LIVING before frontend implementation.

This document describes content hierarchy, navigation, component placement, responsive behavior, and page-level interaction requirements.

These are structural specifications, not finished visual designs or implemented pages.

2. Global Website Structure

All public pages share:

1. Announcement bar (optional).
2. Main site header.
3. Primary navigation.
4. Main page content.
5. Footer.
6. Global search interface.
7. Cart access.
8. Account access.
9. Wishlist access.

The header and footer must be reusable components.

3. Homepage Wireframe

Desktop structure

1. Announcement bar.
2. Header and navigation.
3. Full-width editorial hero image/video.
4. Hero headline and primary CTA.
5. Featured category grid.
6. Featured collection section.
7. New arrivals product grid.
8. Brand editorial section.
9. Material and craftsmanship feature.
10. Room inspiration section.
11. Customer reviews (only genuine reviews).
12. Newsletter subscription (only when operational).
13. Footer.

Mobile structure

- Compact header.
- Accessible menu.
- Search and cart access.
- Responsive hero image.
- Stacked editorial content.
- Two-column product grid where appropriate.
- Readable buttons and headings.
- No horizontal overflow.

4. Shop / Product Listing Page

Layout

- Breadcrumbs.
- Page title and introduction.
- Product result count.
- Sort control.
- Filter controls.
- Product grid.
- Pagination or controlled loading.
- Footer.

Filters

- Category.
- Price range.
- Material.
- Colour.
- Availability.
- Collection.

Only filters supported by actual product data should be displayed.

Mobile behavior

- Filters open in an accessible drawer.
- Sorting remains easy to reach.
- Product grid adapts to available width.
- Active filters can be removed individually.
- Clear-all action is available.

5. Category Page

Structure:

1. Breadcrumb.
2. Category heading.
3. Category description.
4. Optional category hero image.
5. Subcategory links.
6. Product listing.
7. Related collection.
8. Footer.

Do not create empty category pages without a clear purpose or products.

6. Collection Page

Structure:

1. Breadcrumb.
2. Collection hero.
3. Collection title.
4. Editorial description.
5. Product grid.
6. Related collections.
7. Footer.

Collection content must be manageable through the planned administration system.

7. Product Detail Page

Desktop

- Left: Product image gallery.
- Right: Product title, price, variants, availability and purchase controls.
- Below: Product description, specifications, materials, care and delivery details.
- Related products at the bottom.

Mobile

- Image gallery first.
- Product title and price.
- Variant selection.
- Quantity control.
- Add to Cart.
- Product details in accessible expandable sections.
- Related products.

Required states:

- Loading.
- Product unavailable.
- Out of stock.
- Variant not selected.
- Add-to-cart success.
- Add-to-cart failure.

8. Search Page

Structure:

1. Search heading or search field.
2. Search query.
3. Result count.
4. Sort and filter controls.
5. Product grid.
6. Empty-result state.
7. Suggested categories or recovery action.

Search must handle empty input, no results and invalid query conditions.

9. Wishlist Page

Structure:

1. Page heading.
2. Saved product grid.
3. Remove action.
4. Add-to-cart action where available.
5. Empty wishlist state.

Customers must only access their own saved products.

Guest wishlist persistence must be clearly defined before implementation.

10. Cart Page

Structure:

1. Page heading.
2. Cart item list.
3. Product thumbnail.
4. Product and variant information.
5. Quantity controls.
6. Remove action.
7. Subtotal.
8. Shipping/tax information when available.
9. Checkout CTA.
10. Continue shopping link.

Required states:

- Empty cart.
- Loading cart.
- Updating quantity.
- Product unavailable.
- Stock changed.
- Update failed.

All price calculations must be validated by trusted backend logic during checkout.

11. Checkout Page

Proposed sections:

1. Contact details.
2. Delivery address.
3. Billing address.
4. Shipping method.
5. Order summary.
6. Payment method, only after real provider integration.
7. Place order action.

Requirements:

- Validate required fields.
- Recalculate totals on the server.
- Prevent duplicate order submission.
- Explain unavailable shipping options.
- Never report payment success without verified provider confirmation.

A simulated checkout must be labelled as a demonstration.

12. Order Confirmation Page

Structure:

1. Confirmation or pending-payment status.
2. Order reference.
3. Order summary.
4. Delivery details.
5. Next steps.
6. Account/order history link.

A successful confirmation must only be displayed after the trusted order and payment status have been verified.

13. Customer Account Pages

Account overview

- Profile summary.
- Recent orders.
- Saved addresses.
- Wishlist access.

Profile

- Name.
- Email display.
- Permitted profile updates.

Addresses

- Address list.
- Add address.
- Edit address.
- Delete address.
- Default address selection.

Order history

- Order reference.
- Date.
- Status.
- Total.
- Order detail access.

Order details

- Purchased items.
- Historical item prices.
- Delivery address snapshot.
- Payment status.
- Order status.

Customers must never access another customer's account information.

14. Brand and Editorial Pages

Proposed pages:

- About Us.
- Materials and Craftsmanship.
- Inspiration.
- Contact.
- Delivery Information.
- Returns Information.
- FAQs.

All claims, policies and business information must be verified before publication.

Do not invent manufacturing locations, certifications, customer numbers, delivery promises or company history.

15. Trade Enquiry Page

Structure:

1. Trade introduction.
2. Intended audience.
3. Verified programme benefits, if available.
4. Trade enquiry form.
5. Submission confirmation.

Do not promise discounts, account managers or special services until the actual business has approved them.

16. Admin Dashboard Wireframe

Main navigation

- Overview.
- Products.
- Categories.
- Collections.
- Inventory.
- Orders.
- Customers.
- Discounts.
- Returns.
- Enquiries.
- Content.
- Settings.
- Audit Logs.

Dashboard overview

- Order count.
- Revenue summary.
- Inventory alerts.
- Recent orders.
- Pending enquiries.
- Recent administrative activity.

Only display metrics supported by real database records. Demo metrics must be labelled as sample data.

17. Admin Product Management

Structure:

- Product list.
- Search and filters.
- Create product.
- Edit product.
- Product status.
- Image management.
- Variants and SKUs.
- Price management.
- Category and collection assignment.
- Inventory information.

All mutations require authorization and server-side validation.

18. Admin Order Management

Structure:

- Order list.
- Search by order reference.
- Order detail.
- Customer details.
- Purchased items.
- Payment status.
- Fulfilment status.
- Internal notes, if implemented.
- Permitted status updates.

Do not permit arbitrary payment-status changes that bypass provider verification.

19. Admin Inventory Management

Structure:

- Inventory list.
- Product and variant.
- SKU.
- Available quantity.
- Reserved quantity.
- Stock update operation.
- Low-stock alert.

Inventory changes must be recorded and protected against unauthorized modification.

20. Admin Enquiries and Content

Enquiry management:

- Contact enquiries.
- Trade enquiries.
- Status.
- Submission date.
- Permitted response workflow.

Content management:

- Homepage content.
- Editorial sections.
- Collection content.
- FAQ entries.
- Policy content.

Published information must be reviewed for accuracy.

21. Global Footer

Proposed groups:

Explore

- Shop.
- Collections.
- New In.

Customer Care

- Contact.
- FAQs.
- Delivery.
- Returns.

About

- About Us.
- Materials.
- Inspiration.

Legal

- Privacy.
- Cookies.
- Terms.
- Returns policy.

Social links must only appear when genuine official accounts exist.

22. Responsive Layout Verification

Test each major page at:

- 360px mobile width.
- 390px mobile width.
- 768px tablet width.
- 1024px laptop/tablet width.
- 1440px desktop width.

Verify:

- No horizontal overflow.
- Navigation works.
- Text remains readable.
- Product grids adapt.
- Images maintain their aspect ratio.
- Forms remain usable.
- Dialogs and drawers fit the viewport.
- Touch targets are usable.
- Footer content does not overlap.

23. Wireframe Acceptance Checklist

- [ ] Homepage hierarchy documented.
- [ ] Product listing layout documented.
- [ ] Category and collection layouts documented.
- [ ] Product detail layout documented.
- [ ] Search and wishlist layouts documented.
- [ ] Cart and checkout layouts documented.
- [ ] Confirmation page documented.
- [ ] Customer account layouts documented.
- [ ] Editorial pages documented.
- [ ] Trade enquiry layout documented.
- [ ] Admin dashboard documented.
- [ ] Product and inventory management documented.
- [ ] Order management documented.
- [ ] Mobile behavior documented.
- [ ] Loading, empty and error states documented.
- [ ] No unverified business claims included.

24. Implementation Gate

Before implementation:

1. Review the sitemap and functional requirements.
2. Review the design system.
3. Resolve any conflict between documents.
4. Confirm final navigation labels.
5. Create low-fidelity wireframes.
6. Review desktop and mobile layouts.
7. Approve the page hierarchy.
8. Begin implementation only after approval.

25. Current Status

Page structures: Documented
Visual wireframes: Not created
Responsive behavior: Specified
UI implementation: Not started
Mobile testing: Not performed
Design approval: Pending

---

End of Document 07
