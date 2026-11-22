AURELLE LIVING — Luxury Design System & UI Specifications

Document: 06 — Luxury Design System
Project: AURELLE LIVING
Status: Proposed — Not Implemented
Design Direction: Original Luxury Contemporary
Last Updated: 22 November 2026

---

1. Purpose

This document defines the visual identity, design tokens, typography, layout rules, reusable interface components, responsive behavior, accessibility requirements, and visual quality standards for AURELLE LIVING.

The goal is to create an original, premium furniture-shopping experience with a refined editorial appearance and clear product presentation.

This document is a design specification. It does not confirm that any UI has been implemented or tested.

2. Brand Direction

Working brand name: AURELLE LIVING
Proposed tagline: Designed for the art of living.
Brand status: Provisional — trademark and domain availability not verified.

Brand characteristics

- Contemporary luxury
- Architectural and editorial
- Calm and minimal
- Material and craftsmanship focused
- Premium but approachable
- Product photography led
- Clear and functional shopping experience

Brand principles

1. Design should feel intentional, not decorative.
2. Product photography should remain the primary visual focus.
3. Typography should communicate quality and clarity.
4. Animations should be subtle and purposeful.
5. Navigation should remain simple.
6. Every page should be usable on mobile.
7. Visual polish must not reduce accessibility or performance.

Do not copy another retailer's logo, brand identity, written content, proprietary design assets, or exact page layouts.

3. Visual Identity

3.1 Proposed Colour Palette

Token| Proposed colour| Purpose
Ivory| #F7F5F0| Main page background
Warm White| #FFFFFF| Cards and surfaces
Soft Sand| #E9E3D9| Secondary sections
Stone| #C9C0B4| Borders and muted surfaces
Charcoal| #242421| Main text
Deep Charcoal| #171715| Primary dark surfaces
Muted Bronze| #9B8064| Limited decorative accent
Muted Grey| #77746E| Secondary text
Success| #356B50| Success feedback
Warning| #A56A28| Warning feedback
Error| #A43D38| Error feedback

These are proposed design tokens, not final approved brand colours.

Colour usage rules

- Use ivory and warm white for most page surfaces.
- Use charcoal for primary text and important controls.
- Use muted bronze sparingly for small decorative accents.
- Do not use gold-coloured primary buttons.
- Primary buttons should use charcoal or deep charcoal backgrounds with readable text.
- Maintain accessible contrast for all text and controls.
- Do not communicate status through colour alone.

4. Typography System

Use a refined editorial serif for selected display headings and a highly readable sans-serif for interface content.

Proposed font direction

Display / Editorial

- Elegant serif family.
- Use for hero headings and selected section titles.
- Avoid excessive decorative styling.

Body / Interface

- Modern sans-serif family.
- Use for navigation, product information, forms, prices, buttons, and descriptions.

Font implementation requirements

- Prefer locally bundled or reliable open-source fonts.
- Check font licensing before use.
- Provide sensible fallback fonts.
- Avoid loading too many font weights.
- Use font-display strategies that reduce invisible text.
- Maintain readable line lengths and line heights.

Type scale

Token| Desktop size| Usage
Display XL| 64px| Main hero heading
Display L| 52px| Major editorial headings
Heading 1| 40px| Page headings
Heading 2| 32px| Section headings
Heading 3| 24px| Subsection headings
Heading 4| 20px| Card and product headings
Body Large| 18px| Introductory text
Body| 16px| Main interface content
Body Small| 14px| Supporting information
Caption| 12px| Small metadata

Responsive typography must scale down appropriately on smaller screens. Avoid fixed large headings that overflow mobile screens.

5. Spacing and Layout System

Use a consistent spacing scale:

Token| Value
space-1| 4px
space-2| 8px
space-3| 12px
space-4| 16px
space-5| 24px
space-6| 32px
space-7| 48px
space-8| 64px
space-9| 80px
space-10| 112px

Layout rules

- Use a consistent maximum content width.
- Use a centered content container.
- Keep sufficient whitespace around editorial content.
- Use a consistent grid system.
- Avoid unnecessary nested cards.
- Align headings, images, and product information consistently.
- Do not force desktop layouts onto mobile screens.

Proposed desktop layout

- Maximum content width: approximately 1440px.
- Side padding: approximately 48px.
- Product grids: 3 or 4 columns depending on content.
- Editorial sections: flexible two-column or full-width layouts.

Proposed tablet layout

- Side padding: approximately 28px.
- Product grids: 2 or 3 columns depending on available width.
- Navigation adapts to available space.

Proposed mobile layout

- Side padding: approximately 16px.
- Product grids: normally 2 columns, with 1 column where content requires it.
- Navigation uses an accessible mobile menu.
- Buttons and form controls remain easy to operate by touch.
- No horizontal page overflow.

These values are starting specifications and must be validated during implementation.

6. Shape, Borders and Shadows

Border radius

- Small controls: 4px.
- Standard cards: 6px.
- Large image panels: 8px.
- Full pill shapes only where functionally appropriate.

Avoid excessive rounded cards and generic app-dashboard styling.

Borders

- Use subtle neutral borders.
- Separate content through spacing where possible.
- Avoid heavy outlines on every component.

Shadows

- Use soft, restrained shadows.
- Avoid strong floating-card effects.
- Keep product imagery visually clean.

7. Button System

Primary button

- Background: Deep Charcoal.
- Text: White.
- Shape: restrained rectangular form.
- Clear hover, focus, active, and disabled states.
- No gold background.

Secondary button

- Background: Transparent or Warm White.
- Border: subtle neutral.
- Text: Charcoal.

Text button

- Minimal styling.
- Used for secondary navigation and lightweight actions.
- Must remain visibly interactive.

Button requirements

Every button must have a real action.

- Disabled state must be clear.
- Loading state must prevent accidental repeated submission.
- Keyboard focus must be visible.
- Touch targets must be sufficiently large.
- Destructive actions must be visually distinguishable.

8. Navigation System

Announcement bar

- Optional promotional or delivery message.
- Must not occupy excessive vertical space.
- Must be dismissible if designed as a temporary notice.

Main navigation

Proposed navigation:

- New In
- Living
- Dining
- Bedroom
- Storage
- Lighting
- Accessories
- Collections

The final category structure must follow the approved sitemap and actual product catalogue.

Header elements

- Original brand wordmark.
- Main navigation.
- Search.
- Account.
- Wishlist.
- Cart with item count.

Mobile navigation

- Accessible menu button.
- Clearly structured category navigation.
- Visible search and cart access.
- Keyboard and screen-reader support.
- Correct focus management when the menu opens and closes.

9. Product Card Design

Every product card should support:

- Product image.
- Product name.
- Price and currency.
- Optional comparison price.
- Optional verified promotional label.
- Optional colour or variant indicators.
- Wishlist action.
- Product detail navigation.

Product card behavior

- Images use consistent aspect ratios.
- Hover effects must not hide essential information.
- Product titles must remain readable.
- Price must be clearly visible.
- Wishlist state must be communicated.
- Out-of-stock products must be clearly identified.
- Product cards must not display invented ratings, reviews, discounts, or availability.

10. Product Detail Page Design

Proposed page structure:

1. Breadcrumb navigation.
2. Product image gallery.
3. Product name and price.
4. Product description.
5. Available variants.
6. Quantity selector.
7. Stock or availability information.
8. Add to Cart action.
9. Delivery information.
10. Product specifications.
11. Materials and care information.
12. Related products.

Gallery requirements

- Support multiple product images.
- Provide accessible image navigation.
- Maintain image quality and responsive loading.
- Include descriptive alt text.
- Do not stretch or distort product photography.

Product information requirements

- Display only verified product information.
- Distinguish optional and required selections.
- Validate variant selection before adding to cart.
- Provide clear feedback after cart actions.

11. Form Design

Forms must include:

- Persistent field labels.
- Helpful placeholders where useful.
- Required-field indicators.
- Inline validation.
- Clear error messages.
- Accessible success messages.
- Keyboard navigation.
- Correct autocomplete attributes where applicable.

Do not rely on placeholder text as the only label.

12. Cart and Checkout Visual Design

Cart

- Product thumbnail.
- Product name and selected variant.
- Unit price.
- Quantity controls.
- Remove action.
- Subtotal.
- Shipping and tax information when available.
- Clear checkout action.

Checkout

- Contact information.
- Delivery address.
- Billing address where required.
- Shipping method where available.
- Order summary.
- Payment interface only when a real provider is configured.

If payment is simulated, label it clearly as a demonstration. Never display a false real-payment confirmation.

13. Editorial and Homepage Design

The homepage should communicate the brand through original content and high-quality product imagery.

Proposed sections:

1. Announcement bar.
2. Main navigation.
3. Cinematic or editorial hero section.
4. Featured collections.
5. Selected products.
6. Brand introduction.
7. Material and craftsmanship editorial section.
8. Inspiration or room-setting imagery.
9. Customer feedback, only when genuine.
10. Newsletter section, only when a working consent-based subscription service exists.
11. Footer with support and policy links.

Hero requirements

- Strong visual composition.
- Short and readable headline.
- Clear call to action.
- Image or video must be optimized.
- Video must not autoplay with sound.
- Respect reduced-motion preferences.
- Provide a suitable static fallback.

14. Motion and Interaction

Use subtle motion only when it improves clarity or experience.

Allowed patterns:

- Gentle fade-in.
- Short transitions.
- Image hover effects.
- Menu transitions.
- Drawer and modal transitions.
- Loading indicators.

Requirements:

- Respect "prefers-reduced-motion".
- Avoid excessive parallax.
- Avoid distracting continuous animations.
- Do not delay core navigation or shopping actions.
- Avoid animations that cause layout shifts.

15. Responsive Breakpoints

Proposed breakpoints:

- Small mobile: below 480px.
- Large mobile: 480px and above.
- Tablet: 768px and above.
- Desktop: 1024px and above.
- Wide desktop: 1440px and above.

These are initial CSS breakpoints, not rigid device categories.

Test actual layouts at intermediate widths as well as the defined breakpoints.

16. Accessibility Requirements

Target WCAG 2.2 AA as the design and implementation objective.

Requirements:

- Semantic HTML.
- Keyboard-accessible navigation.
- Visible focus indicators.
- Appropriate colour contrast.
- Descriptive alt text.
- Accessible form labels.
- Clear validation messages.
- Correct heading hierarchy.
- Accessible dialogs and menus.
- Screen-reader-friendly cart updates.
- Reduced-motion support.
- Touch-friendly controls.

Accessibility must be tested rather than assumed from visual appearance.

17. Loading, Empty and Error States

Every major interface must define:

Loading

- Skeleton or restrained loading indicator.
- Prevent misleading duplicate actions.
- Preserve layout stability.

Empty

- Empty cart.
- Empty wishlist.
- No search results.
- No available products.
- Empty order history.

Error

- Network failure.
- Failed product loading.
- Failed cart update.
- Invalid form submission.
- Failed checkout.
- Unauthorized access.

Each state must explain what happened and provide an appropriate recovery action where possible.

18. Image and Asset Guidelines

- Use original, licensed, or properly authorized assets.
- Do not reuse competitor product images without permission.
- Use responsive image sizes.
- Prefer modern image formats where supported.
- Provide descriptive alt text.
- Avoid unnecessarily large images.
- Set image dimensions or aspect ratios to reduce layout shifts.
- Verify every image source before public release.

Do not use placeholder images in final public-facing product listings without clearly identifying them as demonstration content.

19. Performance Requirements

Design must support:

- Responsive images.
- Lazy loading below the fold.
- Prioritized loading of the main hero asset.
- Limited font weights.
- Minimal animation overhead.
- Stable layout dimensions.
- Efficient component rendering.

Performance must be measured using Lighthouse or equivalent testing after implementation.

No performance score is guaranteed by this design document.

20. Design System Component Inventory

Proposed reusable components:

- AnnouncementBar
- SiteHeader
- DesktopNavigation
- MobileNavigation
- SearchDialog
- SiteFooter
- Button
- IconButton
- ProductCard
- ProductGrid
- ProductGallery
- PriceDisplay
- QuantitySelector
- VariantSelector
- Breadcrumbs
- FormField
- Modal
- Drawer
- Toast
- LoadingState
- EmptyState
- ErrorState
- Pagination
- NewsletterForm

Each component must have documented props, states, accessibility behavior, and responsive behavior before being considered complete.

21. Design Quality Checklist

- [ ] Brand identity is original.
- [ ] Colour tokens are consistently applied.
- [ ] Typography hierarchy is consistent.
- [ ] No gold primary buttons.
- [ ] Navigation works at all supported widths.
- [ ] Product cards have consistent proportions.
- [ ] Product detail layout is responsive.
- [ ] Cart and checkout are readable.
- [ ] Form states are defined.
- [ ] Loading, empty, and error states exist.
- [ ] Focus states are visible.
- [ ] Reduced-motion support is considered.
- [ ] Images are optimized and licensed.
- [ ] No horizontal overflow.
- [ ] Contrast is tested.
- [ ] Mobile interactions are tested.
- [ ] No decorative control falsely appears functional.

22. Approval and Implementation Gate

Before coding the design system:

1. Confirm the provisional brand name and brand direction.
2. Confirm the target market and currency.
3. Review the palette and typography.
4. Approve the responsive layout rules.
5. Confirm the product photography direction.
6. Review homepage and product page wireframes.
7. Verify that the design remains feasible within the ₹0 budget.
8. Only then implement reusable design tokens and components.

23. Current Status

Brand direction: Proposed
Colour palette: Proposed
Typography: Proposed
Component inventory: Documented
Responsive rules: Proposed
Accessibility requirements: Documented
Wireframes: Not created
UI components: Not implemented
Visual testing: Not performed
Design approval: Pending

---

End of Document 06
