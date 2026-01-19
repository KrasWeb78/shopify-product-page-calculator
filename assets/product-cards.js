(function() {
    function parseBGN(text) {
      if (!text) return null;
      var t = text.replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
      var m = t.match(/([\d\s.,]+)\s*лв/i) || t.match(/(^|[^0-9])([\d\s.,]+)($|[^0-9])/);
      var num = (m && (m[1] || m[2])) ? (m[1] || m[2]) : null;
      if (!num) return null;
      var n = num.toString().replace(/\s/g, '').replace(',', '.');
      var val = parseFloat(n);
      return isNaN(val) ? null : val;
    }
  
    function formatEUR(num) {
      var v = Math.round(num * 100) / 100;
      return v.toFixed(2).replace('.', ',');
    }
  
    function applyEurConversion(section) {
      var enabled = section.dataset.eurEnabled === 'true';
      if (!enabled) return;
      var rate = parseFloat(section.dataset.eurRate);
      if (!rate || rate <= 0) return;
  
      var targets = section.querySelectorAll('.current-price, .package-price');
      targets.forEach(function(el) {
        if (!el || el.dataset.pcEurAdded === '1') return;
        var raw = el.textContent;
        var bgn = parseBGN(raw);
        if (bgn === null) return;
        var eur = bgn / rate;
  
        var textMatch = raw.match(/(.+?)(\s*\/\s*(m²|м²|m2|пакет))?$/i);
        var priceText = textMatch ? textMatch[1].trim() : raw.trim();
        var unitRaw = textMatch && textMatch[3] ? textMatch[3].toLowerCase() : '';
        var unitNorm = unitRaw === 'm2' ? 'm²' : unitRaw;
        var unitText = unitNorm ? '/' + unitNorm : '';
  
        el.innerHTML = '';
  
        var eurSpan = document.createElement('span');
        eurSpan.className = 'pc-eur-inline pc-eur-price';
        eurSpan.textContent = formatEUR(eur) + ' €' + unitText;
        el.appendChild(eurSpan);
  
        var sepSpan = document.createElement('span');
        sepSpan.className = 'pc-eur-separator';
        sepSpan.textContent = '|';
        el.appendChild(sepSpan);
  
        var bgnSpan = document.createElement('span');
        bgnSpan.className = 'pc-bgn-price';
        bgnSpan.textContent = priceText + (unitText ? ' ' + unitText : '');
        el.appendChild(bgnSpan);
  
        el.dataset.pcEurAdded = '1';
      });
    }
  
    function initSection(section) {
      applyEurConversion(section);
    }
  
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('.product-cards-wrapper').forEach(initSection);
    });
  })();
  