# PFC (Product Feature Components) für Shopify

PFC ist ein modulares Set aus Shopify-Liquid-Snippets, Vanilla-JS und CSS für produktzentrierte Sections. Es kombiniert Rechner, Galerie, Metafields-Ansicht, Muster-Flow und Upsell-Slider – ohne externe Abhängigkeiten.

## Features
- Rechner mit Paketgröße, Verschnitt-Option, Summen und optionaler EUR-Umrechnung.
- Produktgalerie mit Zoom, Navigation, Thumbnails und Badge-Unterstützung.
- Metafields-Ausgabe für Desktop und Mobile mit automatischer Spezifikationsliste.
- Muster-Link und optionales Banner mit Popup.
- Upsell-Produkt-Slider aus Metafields.

## Dateimap
- `assets/product-cards.js` – EUR-Umrechnung für Produktkarten.
- `assets/product-cards.css` – Basis-Styles für Produktkarten und Grid.
- `snippets/pfc-accordion.liquid` – Accordion-Container mit Filterlogik.
- `snippets/pfc-accordion-item.liquid` – Einzelnes Accordion-Item.
- `snippets/pfc-calculator.liquid` – Rechner-UI, Paketlogik und CTAs.
- `snippets/pfc-calculator-pricing.liquid` – Anzeige von Stück- und Paketpreisen.
- `snippets/pfc-calculator-totals.liquid` – Gesamtpreise und Ersparnis.
- `snippets/pfc-collection-card.liquid` – Produktkarte für Collection-/Upsell-Slider.
- `snippets/pfc-gallery.liquid` – Hauptgalerie mit Controls.
- `snippets/pfc-gallery-actions.liquid` – Galerie-Aktionsbuttons (Muster/virtuell).
- `snippets/pfc-gallery-thumbs.liquid` – Thumbnail-Leiste und Navigation.
- `snippets/pfc-gallery-zoom.liquid` – Zoom-Modal.
- `snippets/pfc-metafields-desktop.liquid` – Metafields-Ausgabe für Desktop.
- `snippets/pfc-metafields-mobile.liquid` – Metafields-Ausgabe für Mobile.
- `snippets/pfc-sample-box.liquid` – Muster-Banner und Popup.
- `snippets/pfc-sample-link.liquid` – Muster-Link-Logik und Ausgabe.
- `snippets/pfc-upsell-slider.liquid` – Upsell-Produkt-Slider.

## Installation
1) Kopiere die Dateien aus `assets/` und `snippets/` in dein Shopify-Theme.
2) Stelle sicher, dass die Section oder das Template mit `product-card.liquid` die benötigten Snippets rendert.
3) Binde `product-cards.css` und `product-cards.js` in dein Theme ein (z. B. in `theme.liquid`).
4) Konfiguriere Section-Einstellungen und Metafields wie unten beschrieben.

## Erforderliche Metafields (Übersicht)
Alle Metafields sind optional, sofern dein Design sie nicht zwingend benötigt. Namespaces und Beispiel-Keys:

- `custom`
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
- `specs`
  - `key_features`, `free_sample`, `compare_enabled`, `bevel`, `waterproof`, `floor_heating`, `uv_resistant`
  - `plank_width`, `plank_length`, `m2_per_pack`, `manufacturer`, `surface`, `integrated_underlay`
  - `class`, `wear_layer`, `thickness`
- `upsell`
  - `title`
  - `collection`
  - `products`

Metafields auf Varianten-Ebene:
- `custom.calculator_package_size` (für variantenabhängige Paketgrößen)

## Konfigurationsübersicht
Wichtige Section-Settings, die von den Snippets genutzt werden:

- Labels: `cta_label`, `sold_out_label`, `quantity_label`, `package_label`, `waste_label`, `waste_info`, `saved_label`.
- Rechner-Defaults: `package_size`, `waste_percent`, `default_quantity`, `quantity_step`, `min_quantity`, `unit_label`.
- Toggles: `show_savings_badge`, `show_package_calculation`, `show_package_details`, `show_waste_option`, `show_request_offer`.
- Galerie: `image_badge_text`, `placeholder_image`, `show_sample_button`, `show_virtual_button`.
- Metafields: `show_metafields`, `auto_show_all_metafields`, `show_empty_metafields`, `empty_metafield_text`.
- Währungsumrechnung: `enable_currency_conversion`, `show_eur_alongside_bgn`, `eur_to_bgn_rate`.

## Zielgruppe

Dieses Projekt richtet sich an:

- Shopify-Entwickler:innen
- Shopify-Agenturen
- Technische Product Owner im E-Commerce
- Teams, die modulare, performante Product Pages umsetzen wollen

