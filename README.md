# PFC (Product Feature Components) for Shopify

PFC is a modular set of Shopify Liquid snippets, vanilla JavaScript, and CSS for building product-focused Shopify experiences without external dependencies.

It is designed for products sold by **unit, m², package, or set** and supports advanced pricing logic, calculators, and structured product data.

---

## Why it exists

Most Shopify themes handle products in a generic way.  
PFC adds **reusable, performance-friendly components** that can be integrated into any theme and configured entirely via **product and variant metafields**.

It is especially useful for complex products such as flooring, tiles, building materials, and technical goods.

---

## Quick highlights

- Package / m² calculator with waste %, totals, and optional currency conversion
- Product gallery with thumbnails, zoom, and badge support
- Metafields-driven specifications (desktop and mobile layouts)
- Sample flow with links and popup box
- Upsell slider driven entirely by metafields
- No external libraries or Shopify apps required

---

## Who this is for

- Shopify developers building custom product templates
- Shopify agencies creating reusable component systems
- Technical product owners in e-commerce
- Stores that require precise unit-based pricing logic

---

## Features

- Calculator with package sizing, waste option, totals, and optional EUR conversion
- Product gallery with zoom, navigation, thumbnails, and badges
- Desktop and mobile metafields display with automatic specification lists
- Sample link with optional banner and popup flow
- Upsell products slider driven by product or collection metafields

---

## File Map

### Assets
- `assets/product-cards.js`  
  EUR conversion and price display logic for product cards

- `assets/product-cards.css`  
  Base styles for product cards and grid layout

### Snippets
- `snippets/pfc-accordion.liquid`  
  Accordion container with filtering logic

- `snippets/pfc-accordion-item.liquid`  
  Single accordion item rendering

- `snippets/pfc-calculator.liquid`  
  Calculator UI, package logic, and CTAs

- `snippets/pfc-calculator-pricing.liquid`  
  Unit and package pricing display

- `snippets/pfc-calculator-totals.liquid`  
  Total pricing and savings output

- `snippets/pfc-collection-card.liquid`  
  Product card for collections and upsell sliders

- `snippets/pfc-gallery.liquid`  
  Main gallery image area and controls

- `snippets/pfc-gallery-actions.liquid`  
  Gallery action buttons (sample / virtual)

- `snippets/pfc-gallery-thumbs.liquid`  
  Thumbnail strip and navigation

- `snippets/pfc-gallery-zoom.liquid`  
  Zoom modal markup

- `snippets/pfc-metafields-desktop.liquid`  
  Metafields display for desktop

- `snippets/pfc-metafields-mobile.liquid`  
  Metafields display for mobile

- `snippets/pfc-sample-box.liquid`  
  Sample banner and popup UI

- `snippets/pfc-sample-link.liquid`  
  Sample link logic and output

- `snippets/pfc-upsell-slider.liquid`  
  Upsell products slider

---

## Installation

1. Copy the `assets/` and `snippets/` folders into your Shopify theme.
2. Include the assets in your theme:
   - Add `product-cards.css` to your main CSS bundle
   - Add `product-cards.js` before `</body>` or via section assets
3. Ensure your product template or section renders:
   - `pfc-gallery`
   - `pfc-calculator`
   - `pfc-metafields-*`
   - `pfc-sample-*`
   - `pfc-upsell-slider` (optional)
4. Configure metafields and section settings as described below.

---

## Required Metafields (Overview)

All metafields are optional unless your design or logic depends on them.

### Namespace: `custom`
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

### Namespace: `specs`
- `key_features`
- `free_sample`
- `compare_enabled`
- `bevel`
- `waterproof`
- `floor_heating`
- `uv_resistant`
- `plank_width`
- `plank_length`
- `m2_per_pack`
- `manufacturer`
- `surface`
- `integrated_underlay`
- `class`
- `wear_layer`
- `thickness`

### Namespace: `upsell`
- `title`
- `collection`
- `products`

### Variant-level metafields
- `custom.calculator_package_size`  
  Used when package size differs per variant

---

## Configuration Overview

Common section settings used across PFC components:

### Labels
- `cta_label`
- `sold_out_label`
- `quantity_label`
- `package_label`
- `waste_label`
- `waste_info`
- `saved_label`

### Calculator defaults
- `package_size`
- `waste_percent`
- `default_quantity`
- `quantity_step`
- `min_quantity`
- `unit_label`

### Toggles
- `show_savings_badge`
- `show_package_calculation`
- `show_package_details`
- `show_waste_option`
- `show_request_offer`

### Gallery
- `image_badge_text`
- `placeholder_image`
- `show_sample_button`
- `show_virtual_button`

### Metafields display
- `show_metafields`
- `auto_show_all_metafields`
- `show_empty_metafields`
- `empty_metafield_text`

### Currency conversion
- `enable_currency_conversion`
- `show_eur_alongside_bgn`
- `eur_to_bgn_rate`

---

## License

MIT License

This project is released under the MIT License.  
You are free to use, modify, and distribute the code, including for commercial projects, as long as the original copyright notice is retained.

