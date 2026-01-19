# PFC (Product Feature Components) für Shopify

PFC ist ein modulares Set aus Shopify-Liquid-Snippets, Vanilla JavaScript und CSS zur Umsetzung leistungsstarker, produktzentrierter Shopify-Produktseiten.  
Es kombiniert einen Produkt-Rechner, eine Galerie, Metafields-Darstellung, einen Muster-Flow sowie einen Upsell-Slider – vollständig ohne externe Abhängigkeiten.

PFC wurde speziell für Produkte entwickelt, die nach m², Paket oder Set verkauft werden und eine erweiterte Preislogik, Kalkulationen sowie strukturierte Produktdaten erfordern.

---

## Zielgruppe

Dieses Projekt richtet sich an:

- Shopify-Entwickler:innen
- Shopify-Agenturen
- Technische Product Owner im E-Commerce
- Teams, die modulare, performante und wartbare Product Pages umsetzen möchten

---

## Features

- Produkt-Rechner für m² / Paket / Set mit Verschnitt-Option
- Automatische Gesamtpreis- und Ersparnis-Berechnung
- Produktgalerie mit Zoom, Thumbnails, Badges und Aktionsbuttons
- Metafields-basierte Produktspezifikationen (Desktop & Mobile)
- Muster-Bestelllogik mit Banner und Popup
- Upsell-Slider, gesteuert über Produkt- oder Collection-Metafields
- Optionale Währungsumrechnung (z. B. EUR → BGN)
- Keine externen Apps oder Libraries erforderlich

---

## Dateimap

### Assets
- `assets/product-cards.js` – EUR-Umrechnung und Preislogik für Produktkarten
- `assets/product-cards.css` – Basis-Styles für Produktkarten und Grid-Layouts

### Snippets
- `snippets/pfc-accordion.liquid` – Accordion-Container mit Filterlogik
- `snippets/pfc-accordion-item.liquid` – Einzelnes Accordion-Item
- `snippets/pfc-calculator.liquid` – Rechner-UI, Paketlogik und CTAs
- `snippets/pfc-calculator-pricing.liquid` – Anzeige von Stück- und Paketpreisen
- `snippets/pfc-calculator-totals.liquid` – Gesamtpreise und Ersparnis-Ausgabe
- `snippets/pfc-collection-card.liquid` – Produktkarte für Collection- und Upsell-Slider
- `snippets/pfc-gallery.liquid` – Hauptgalerie mit Controls
- `snippets/pfc-gallery-actions.liquid` – Galerie-Aktionsbuttons (Muster / virtuell)
- `snippets/pfc-gallery-thumbs.liquid` – Thumbnail-Leiste und Navigation
- `snippets/pfc-gallery-zoom.liquid` – Zoom-Modal
- `snippets/pfc-metafields-desktop.liquid` – Metafields-Ausgabe für Desktop
- `snippets/pfc-metafields-mobile.liquid` – Metafields-Ausgabe für Mobile
- `snippets/pfc-sample-box.liquid` – Muster-Banner und Popup
- `snippets/pfc-sample-link.liquid` – Muster-Link-Logik und Ausgabe
- `snippets/pfc-upsell-slider.liquid` – Upsell-Produkt-Slider

---

## Installation

1. Kopiere die Ordner `assets/` und `snippets/` in dein Shopify-Theme.
2. Stelle sicher, dass deine Produkt-Section oder dein Template (z. B. `product-card.liquid`) die benötigten Snippets rendert.
3. Binde die Assets in dein Theme ein, z. B. in `theme.liquid`:
   - `product-cards.css`
   - `product-cards.js`
4. Konfiguriere die Section-Einstellungen und Metafields wie unten beschrieben.

---

## Erforderliche Metafields (Übersicht)

Alle Metafields sind optional, sofern dein Design oder deine Logik sie nicht zwingend benötigt.

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

### Varianten-Metafields
- `custom.calculator_package_size`  
  *(für variantenabhängige Paketgrößen)*

---

## Konfigurationsübersicht

Wichtige Section-Settings, die von den PFC-Snippets genutzt werden:

### Labels
- `cta_label`
- `sold_out_label`
- `quantity_label`
- `package_label`
- `waste_label`
- `waste_info`
- `saved_label`

### Rechner-Defaults
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

### Galerie
- `image_badge_text`
- `placeholder_image`
- `show_sample_button`
- `show_virtual_button`

### Metafields-Anzeige
- `show_metafields`
- `auto_show_all_metafields`
- `show_empty_metafields`
- `empty_metafield_text`

### Währungsumrechnung
- `enable_currency_conversion`
- `show_eur_alongside_bgn`
- `eur_to_bgn_rate`

---

## License

MIT License

Dieses Projekt ist unter der MIT-Lizenz veröffentlicht.  
Der Code darf frei verwendet, angepasst und auch in kommerziellen Projekten eingesetzt werden, sofern der ursprüngliche Copyright-Hinweis erhalten bleibt.

