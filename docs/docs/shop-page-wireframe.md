09 — Shop Page & Product Listing Wireframe

Project: AURELLE LIVING
Page: Shop / Product Listing
Status: Wireframe specification
Implementation status: Not implemented
Testing status: Not tested

---

1. Purpose

Define the structure and expected behaviour of the Shop page, where customers can browse furniture products, discover collections, filter results, sort products and open product detail pages.

The interface must follow the approved AURELLE LIVING design system and provide a premium, minimal, accessible shopping experience.

2. Page URL Structure

Proposed routes:

- "/shop" — All products
- "/shop?category=sofas" — Filtered category
- "/shop?collection=new-arrivals" — Selected collection
- "/shop?sort=price-low-high" — Selected sorting option
- "/shop?q=search-term" — Search results

Query parameters must be shareable and should preserve the selected filters when the page is refreshed.

3. Global Page Structure

The Shop page should contain:

1. Global announcement bar
2. Main navigation header
3. Breadcrumb navigation
4. Page title and introductory text
5. Optional collection banner
6. Product result count
7. Filter and sort controls
8. Active filter indicators
9. Product listing grid
10. Pagination or load-more control
11. Recently viewed products (only when supported)
12. Newsletter section (only with valid consent handling)
13. Global footer

4. Page Header

Display:

- Breadcrumb: Home / Shop
- Heading: Shop All Furniture
- Short introductory description
- Optional category or collection introduction

Do not publish unverified claims about product materials, manufacturing, sustainability or delivery.

5. Filter System

Provide the following filters only when matching product data exists.

Category

- Sofas
- Armchairs
- Dining Tables
- Dining Chairs
- Beds
- Bedroom Furniture
- Coffee Tables
- Side Tables
- Storage
- Lighting
- Accessories

These are proposed category labels. Final categories must match the approved product catalogue.

Price

- Minimum price
- Maximum price
- Apply price range
- Clear price filter

Use GBP (£) formatting if the UK market and currency are confirmed.

Colour

Show available colour options based on actual product attributes.

Material

Show only materials recorded in verified product data.

Availability

- In Stock
- Out of Stock

Do not display made-to-order or delivery availability unless the inventory system supports those states.

Other filters

Additional filters such as collection, size or style may be added only when reliable product attributes exist.

6. Sorting Options

Provide:

- Featured
- Newest
- Price: Low to High
- Price: High to Low
- Name: A to Z

Sorting must operate on the actual result set and must not change product prices or inventory.

The default Featured order must be explicitly defined by the catalogue or backend. Do not create fake popularity rankings.

7. Product Card Design

Each product card should support:

- Main product image
- Optional secondary image on hover
- Product name
- Actual selling price
- Optional original price when a genuine sale exists
- Available colour options, if supported
- Wishlist control
- Product detail link
- Availability status when verified

Product card rules

- Use consistent image ratios.
- Use high-quality, properly licensed product imagery.
- Maintain consistent spacing and typography.
- Avoid fake ratings, reviews, discount percentages or stock urgency.
- Do not display placeholder product information as real catalogue data.
- Product cards must remain readable on mobile.

8. Product Grid Layout

Desktop

- Four columns on wide screens where space permits.
- Three columns on medium desktop layouts.
- Consistent card dimensions and spacing.
- Filters displayed in a sidebar or accessible filter panel.

Tablet

- Two or three columns depending on available width.
- Filters accessible through a compact control.

Mobile

- Two columns where product cards remain readable.
- Filter button opens a mobile filter drawer.
- Sort control remains easy to access.
- Filter drawer includes Apply and Clear All controls.
- No horizontal page overflow.

9. Filter Interaction

Expected behaviour:

1. Customer opens the filter panel.
2. Customer selects one or more filter values.
3. Selected values are visibly marked.
4. Customer applies the filters.
5. Product results update.
6. Result count updates.
7. Active filters appear above the grid.
8. Customer can remove individual filters.
9. Clear All resets every selected filter.

If filters are applied through query parameters, browser refresh and navigation should preserve the state.

10. Sorting Interaction

- Sorting control must be keyboard accessible.
- Selected sorting option must be visible.
- Changing sorting must update the displayed products.
- Sorting must work together with active filters.
- Loading feedback must be provided when data is being fetched.

11. Wishlist Interaction

- Wishlist button must have an accessible label.
- Logged-in customers may save products to their account.
- Guest wishlist behaviour must be explicitly defined before implementation.
- Wishlist state must not be falsely presented as saved if the operation fails.
- Customers should receive clear success or error feedback.

12. Pagination / Load More

Choose one approach during implementation:

Option A — Pagination

- Previous and Next controls
- Current page indicator
- Accessible page navigation

Option B — Load More

- Load More button
- Clear loading state
- Correct result count
- No duplicate products

The selected approach must support large product catalogues without loading every product at once.

13. Loading, Empty and Error States

Loading

- Display product-card skeletons.
- Preserve the page structure.
- Avoid sudden layout shifts.

Empty results

Display a clear message:

No products found

Suggested guidance:

- Remove some filters.
- Adjust the price range.
- Browse all products.

Provide a Clear All Filters action.

Error

- Explain that products could not be loaded.
- Provide a Retry action.
- Do not display fabricated products as successful results.

14. Accessibility Requirements

- Semantic page headings.
- Accessible filter controls.
- Keyboard navigation.
- Visible focus indicators.
- Proper image alternative text.
- Sufficient text contrast.
- Screen-reader labels for wishlist and filter buttons.
- Accessible dialog or drawer behaviour.
- Respect reduced-motion preferences.

Target: WCAG 2.2 AA as an implementation objective, subject to testing.

15. SEO Requirements

- Unique page title and meta description.
- Canonical URL strategy.
- Descriptive product links.
- Crawlable category navigation.
- Correct heading hierarchy.
- Product structured data only when supported by accurate product information.
- Avoid indexing uncontrolled combinations of filter parameters.
- Provide meaningful image alt text.

16. Performance Requirements

- Responsive image delivery.
- Lazy-load below-the-fold product images.
- Avoid unnecessary JavaScript.
- Prevent layout shifts.
- Use pagination or controlled loading.
- Provide appropriate loading feedback.
- Test mobile performance.

17. Security and Data Integrity

- Product information must come from the approved data source.
- Prices must be validated on the server for any future checkout.
- Do not trust client-side price calculations for orders.
- Do not expose private database keys.
- Apply appropriate database access policies.
- Validate filter and search parameters.
- Do not expose administrative product controls to customers.

18. Acceptance Checklist

- [ ] Shop page structure documented.
- [ ] Breadcrumb and page heading defined.
- [ ] Product card fields defined.
- [ ] Filter categories documented.
- [ ] Sorting options documented.
- [ ] Active filter behaviour documented.
- [ ] Mobile filter drawer requirements documented.
- [ ] Wishlist behaviour documented.
- [ ] Pagination or load-more approach identified.
- [ ] Loading, empty and error states defined.
- [ ] Accessibility requirements documented.
- [ ] SEO requirements documented.
- [ ] Performance requirements documented.
- [ ] Security and data integrity requirements documented.
- [ ] Product claims and catalogue data are not fabricated.

19. Current Completion Status

This document defines the Shop page and product listing requirements.

It does not mean that:

- The Shop page has been coded.
- Filters or sorting are operational.
- Product data has been connected.
- Wishlist functionality has been implemented.
- Mobile responsiveness has been tested.
- SEO or accessibility audits have passed.

Next step: Review this specification before frontend implementation.

Document status: Specification drafted; implementation and testing pending.
