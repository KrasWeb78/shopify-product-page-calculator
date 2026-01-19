# PFC (Product Feature Components) for Shopify

PFC is a modular set of Shopify Liquid snippets, vanilla JavaScript, and CSS for product-focused Shopify sections.
It combines a calculator, product gallery, metafields display, sample flow, and an upsell slider to build rich product experiences without external dependencies.

## Features
- Calculator with package sizing, waste option, totals, and optional EUR conversion
- Product gallery with zoom, navigation, thumbnails, and badge support
- Desktop and mobile metafields display with automatic specifications list
- Sample link with optional banner and popup flow
- Upsell products slider driven by metafields

## File Map
- `assets/product-cards.js` – EUR conversion and price display logic for product cards
- `assets/product-cards.css` – Base styles for product cards and grid layout
- `snippets/pfc-accordion.liquid` – Accordion container with filtering logic
- `snippets/pfc-accordion-item.liquid` – Single accordion item rendering
- `snippets/pfc-calculator.liquid` – Calculator UI, package logic, and CTAs
- `snippets/pfc-calculator-pricing.liquid` – Unit and package pricing display
- `snippets/pfc-calculator-totals.liquid` – Total pricing and savings output
- `snippets/pfc-collection-card.liquid` – Product card for collections and upsell sliders
- `snippets/pfc-gallery.liquid` – Main gallery image area and controls
- `snippets/pfc-gallery-actions.liquid` – Gallery action buttons (sample / virtual)
- `snippets/pfc-gallery-thumbs.liquid` – Thumbnail strip and navigation
- `snippets/pfc-gallery-zoom.liquid` – Zoom modal markup
- `snippets/pfc-metafields-desktop.liquid` – Metafields display (desktop)
- `snippets/pfc-metafields-mobile.liquid` – Metafields display (mobile)
- `snippets/pfc-sample-box.liquid` – Sample banner and popup UI
- `snippets/pfc-sample-link.liquid` – Sample link logic
- `snippets/pfc-upsell-slider.liquid` – Upsell products slider

## Installation
1. Copy the `assets/` and `snippets/` folders into your Shopify theme.
2. Ensure the section or template rendering `product-card.liquid` includes the required snippets.
3. Include `product-cards.css` and `product-cards.js` in your theme
   (via `theme.liquid` or section assets).
4. Configure section settings and metafields as described below.

## Required Metafields (Overview)
All metafields are optional unless your design depends on them.
Namespaces and example keys used by the snippets:

### `custom`
- `calculator_package_size`
- `calculator_waste_percent`
- `calculator_default_quantity`
- `calculator_quantity_step`
- `calculator_min_quantity`
- `calculator_unit_label`
- `promo_product`
- `promo_title`
- `promo_quantity`
- `promo_button_label`
- `category_title`
- `category_link`
- `category_button_label`
- `sample_black_banner`

### `specs`
- `key_features`, `free_sample`, `compare_enabled`
- `bevel`, `waterproof`, `floor_heating`, `uv_resistant`
- `plank_width`, `plank_length`, `m2_per_pack`
- `manufacturer`, `surface`, `integrated_underlay`
- `class`, `wear_layer`, `thickness`

### `upsell`
- `title`
- `collection`
- `products`

Variant-level metafields:
- `custom.calculator_package_size` (used when variant-specific package size is required)

## Configuration Overview
Common section settings used across the components:

- Labels: `cta_label`, `sold_out_label`, `quantity_label`, `package_label`,
  `waste_label`, `waste_info`, `saved_label`
- Calculator defaults: `package_size`, `waste_percent`, `default_quantity`,
  `quantity_step`, `min_quantity`, `unit_label`
- Toggles: `show_savings_badge`, `show_package_calculation`,
  `show_package_details`, `show_waste_option`, `show_request_offer`
- Gallery: `image_badge_text`, `placeholder_image`,
  `show_sample_button`, `show_virtual_button`
- Metafields: `show_metafields`, `auto_show_all_metafields`,
  `show_empty_metafields`, `empty_metafield_text`
- Currency conversion:
  `enable_currency_conversion`, `show_eur_alongside_bgn`, `eur_to_bgn_rate`

## License
MIT

## Target Audience

This project is intended for:

- Shopify developers working on product-focused themes
- Shopify agencies building reusable, modular components
- Technical Product Owners in e-commerce
- Teams aiming to deliver performant product pages without external dependencies


