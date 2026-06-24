// Copy Bitcoin address to clipboard
function copiar() {
  const addr = document.getElementById('btc-addr').textContent.trim();
  navigator.clipboard.writeText(addr).then(() => {
    const btn = document.getElementById('copy-lbl');
    btn.textContent = 'copiado ✓';
    setTimeout(() => btn.textContent = 'copiar', 2000);
  }).catch(() => {
    alert('Copia la dirección manualmente: ' + addr);
  });
}

// FAQ accordion toggle
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// Store category filter (tiendas.html)
function toggleFilter(btn, cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tiendas-section').forEach(sec => {
    sec.style.display = (cat === 'all' || sec.dataset.cat === cat) ? '' : 'none';
  });
}
