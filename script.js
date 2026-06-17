/* =========================================================
   HCC — HAVANA CIGAR CLUB — script.js
   ========================================================= */

/* ---------------------------------------------------------
   1. PRODUCT CATALOG
   NOTE: box counts / ring gauge / length are illustrative,
   based on standard Habanos vitola formats. Confirm exact
   specs with your supplier before publishing live.
   --------------------------------------------------------- */
const PRODUCTS = [
  // Cohiba
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Siglo II", qty:25, ring:36, length:121 },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Siglo III", qty:25, ring:40, length:143 },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Siglo IV", qty:25, ring:46, length:143 },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Siglo VI", qty:25, ring:52, length:150 },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Behike 52", qty:10, ring:52, length:110 },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Behike 54", qty:10, ring:54, length:140 },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Behike 56", qty:10, ring:56, length:165 },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Maduro 5 Mágicos", qty:25, ring:52, length:121 },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Maduro Genios", qty:25, ring:55, length:160 },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Novedosos", qty:25, ring:50, length:120 },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Robustos", qty:25, ring:50, length:124 },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Robustos Supremos EL 2014", qty:10, ring:50, length:140 },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Talismán EL 2017", qty:10, ring:57, length:152 },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Espléndidos", qty:25, ring:47, length:178 },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba 50 Majestuosos 1966", qty:20, ring:55, length:152, note:"Humidor of 20" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Pirámides Extra", qty:25, ring:52, length:152 },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Pirámides Extra Tubos", qty:3, ring:52, length:152, note:"Tubos" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Siglo VI Tubos", qty:3, ring:52, length:150, note:"Tubos" },

  // Montecristo
  { brand:"Montecristo", key:"montecristo", name:"Montecristo No.2", qty:25, ring:52, length:156 },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo No.4", qty:25, ring:42, length:129 },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo Edmundo", qty:25, ring:52, length:135 },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo Petite No.2", qty:25, ring:52, length:120 },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo Petite Edmundo", qty:25, ring:52, length:110 },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo Open Eagle", qty:20, ring:54, length:142 },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo 520 EL 2012", qty:10, ring:55, length:130 },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo 25 Supremos EL 2019", qty:10, ring:55, length:152 },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo 80 Aniversario", qty:10, ring:55, length:178 },

  // Partagás
  { brand:"Partagás", key:"partagas", name:"Partagás Serie E No.2", qty:25, ring:52, length:140 },
  { brand:"Partagás", key:"partagas", name:"Partagás Serie P No.2", qty:25, ring:52, length:156 },
  { brand:"Partagás", key:"partagas", name:"Partagás Serie E No.4", qty:25, ring:50, length:110 },
  { brand:"Partagás", key:"partagas", name:"Partagás Salamanes LCDH", qty:10, ring:56, length:192 },
  { brand:"Partagás", key:"partagas", name:"Partagás Lusitanias", qty:25, ring:47, length:192 },

  // Hoyo de Monterrey
  { brand:"Hoyo de Monterrey", key:"hoyo", name:"Hoyo de Monterrey Epicure No.2", qty:25, ring:50, length:124 },
  { brand:"Hoyo de Monterrey", key:"hoyo", name:"Hoyo de Monterrey Serie Le Hoyo San Juan", qty:25, ring:46, length:130 },
  { brand:"Hoyo de Monterrey", key:"hoyo", name:"Hoyo de Monterrey Double Coronas", qty:25, ring:49, length:194 },
  { brand:"Hoyo de Monterrey", key:"hoyo", name:"Hoyo de Monterrey Grand Epicure EL 2013", qty:10, ring:54, length:142 },

  // Others
  { brand:"Trinidad", key:"others", name:"Trinidad 12 Topes EL 2016", qty:12, ring:54, length:110 },
  { brand:"H. Upmann", key:"others", name:"H. Upmann Magnum 56 EL 2015", qty:10, ring:56, length:120 },
  { brand:"Punch", key:"others", name:"Punch Double Coronas", qty:25, ring:49, length:194 },
  { brand:"Bolivar", key:"others", name:"Bolivar Belicosos Finos", qty:25, ring:52, length:127 },
  { brand:"Bolivar", key:"others", name:"Bolivar Royal Coronas AT", qty:25, ring:50, length:122 },
  { brand:"Romeo y Julieta", key:"others", name:"Romeo y Julieta No.1 AT", qty:25, ring:47, length:178 },
  { brand:"Romeo y Julieta", key:"others", name:"Romeo y Julieta Short Churchill", qty:25, ring:50, length:124 },
  { brand:"Romeo y Julieta", key:"others", name:"Romeo y Julieta Wide Churchill", qty:25, ring:55, length:135 },
  { brand:"Romeo y Julieta", key:"others", name:"Romeo y Julieta Churchill", qty:25, ring:47, length:178 },
];

const WHATSAPP_NUMBER = "963988614489";

/* ---------------------------------------------------------
   2. RENDER PRODUCT GRID
   --------------------------------------------------------- */
const grid = document.getElementById("product-grid");

function initials(name){
  return name.replace(/[^A-Za-z\s]/g,"").trim().split(/\s+/).slice(0,2).map(w=>w[0]).join("").toUpperCase();
}

function cardHTML(p, i){
  const spec = `${p.qty} ct \u00b7 ${p.ring} \u00d7 ${p.length}mm${p.note ? " \u00b7 " + p.note : ""}`;
  return `
  <article class="product-card reveal" data-key="${p.key}" data-index="${i}" style="transition-delay:${(i % 6) * 0.06}s">
    <div class="product-card__art">
      <div class="product-card__cigar">
        <div class="product-card__band">${initials(p.brand)}</div>
      </div>
    </div>
    <div class="product-card__body">
      <p class="product-card__brand">${p.brand}</p>
      <h3 class="product-card__name">${p.name}</h3>
      <p class="product-card__spec">${spec}</p>
      <button class="product-card__cta" data-index="${i}">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.6-2.4-1.4-3.3-2.9-.1-.2-.1-.4.1-.5.2-.2.5-.5.7-.8.2-.2.1-.5 0-.7-.1-.2-.7-1.7-1-2.3-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9 1-.9 2.3 0 1.3 1 2.6 1.1 2.8.1.2 1.9 3 4.7 4.2 2.4 1 2.4.7 2.8.6.4 0 1.6-.6 1.8-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.5 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.3.9.9-3.2-.2-.3C3.6 14.6 3.1 13.3 3.1 12c0-4.9 4-8.9 8.9-8.9s8.9 4 8.9 8.9-4 8.9-8.9 8.9z"/></svg>
        <span>Ask for Price</span>
      </button>
    </div>
  </article>`;
}

function renderGrid(){
  grid.innerHTML = PRODUCTS.map(cardHTML).join("");
  attachCardEvents();
  // (re)observe reveal for newly injected cards
  document.querySelectorAll(".product-card.reveal").forEach(el => revealObserver.observe(el));
}

function attachCardEvents(){
  grid.querySelectorAll(".product-card__cta").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const idx = Number(btn.dataset.index);
      addToCart(idx);
      btn.classList.add("is-added");
      const span = btn.querySelector("span");
      const original = span.textContent;
      span.textContent = "Added \u2713";
      setTimeout(() => { span.textContent = original; btn.classList.remove("is-added"); }, 1400);
    });
  });
}

/* filter tabs */
document.getElementById("filter-tabs").addEventListener("click", (e) => {
  const tab = e.target.closest(".filter-tab");
  if(!tab) return;
  document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("is-active"));
  tab.classList.add("is-active");
  const f = tab.dataset.filter;
  document.querySelectorAll(".product-card").forEach(card => {
    const show = f === "all" || card.dataset.key === f;
    card.style.display = show ? "" : "none";
  });
});

/* ---------------------------------------------------------
   3. CART / INQUIRY LIST  (in-memory only — no browser storage)
   --------------------------------------------------------- */
let cart = []; // array of product indices

const cartCountEl = document.getElementById("cart-count");
const cartItemsEl = document.getElementById("cart-items");
const cartEmptyEl = document.getElementById("cart-empty");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");

function addToCart(idx){
  cart.push(idx);
  renderCart();
  showToast(`Added "${PRODUCTS[idx].name}" to your inquiry list`);
}

function removeFromCart(cartPos){
  cart.splice(cartPos, 1);
  renderCart();
}

function renderCart(){
  cartCountEl.textContent = cart.length;
  if(cart.length === 0){
    cartItemsEl.style.display = "none";
    cartEmptyEl.style.display = "flex";
    return;
  }
  cartItemsEl.style.display = "flex";
  cartEmptyEl.style.display = "none";
  cartItemsEl.innerHTML = cart.map((idx, pos) => {
    const p = PRODUCTS[idx];
    return `
    <div class="cart-item">
      <div>
        <p class="cart-item__name">${p.name}</p>
        <p class="cart-item__spec">${p.qty} ct \u00b7 ${p.ring} \u00d7 ${p.length}mm</p>
      </div>
      <button class="cart-item__remove" data-pos="${pos}" aria-label="Remove">&times;</button>
    </div>`;
  }).join("");
  cartItemsEl.querySelectorAll(".cart-item__remove").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.pos)));
  });
}

function openCart(){ cartDrawer.classList.add("is-open"); cartOverlay.classList.add("is-open"); }
function closeCart(){ cartDrawer.classList.remove("is-open"); cartOverlay.classList.remove("is-open"); }

document.getElementById("cart-toggle").addEventListener("click", openCart);
document.getElementById("cart-close").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

document.getElementById("cart-send").addEventListener("click", () => {
  if(cart.length === 0){
    showToast("Add a cigar to your list first");
    return;
  }
  const lines = cart.map(idx => `\u2022 ${PRODUCTS[idx].name} (${PRODUCTS[idx].qty} ct)`);
  const message = `Hello HCC, I'd like to ask for pricing on:\n${lines.join("\n")}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
});

/* ---------------------------------------------------------
   4. TOAST
   --------------------------------------------------------- */
let toastTimer;
function showToast(msg){
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("is-shown");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-shown"), 2600);
}

/* ---------------------------------------------------------
   5. AGE GATE
   --------------------------------------------------------- */
const ageGate = document.getElementById("age-gate");
document.getElementById("age-confirm").addEventListener("click", () => {
  ageGate.classList.add("is-hidden");
  document.body.style.overflow = "";
});
document.body.style.overflow = "hidden";
// safety: if gate markup somehow fails to bind, never trap the page closed
setTimeout(() => { if(!ageGate.classList.contains("is-hidden")) document.body.style.overflow = "hidden"; }, 0);

/* ---------------------------------------------------------
   6. NAV: scroll state + mobile menu
   --------------------------------------------------------- */
const siteNav = document.getElementById("site-nav");
window.addEventListener("scroll", () => {
  siteNav.classList.toggle("is-scrolled", window.scrollY > 30);
}, { passive: true });

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("is-open");
});
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.remove("is-open")));

/* ---------------------------------------------------------
   7. NEWSLETTER (front-end only mock — no backend wired up)
   --------------------------------------------------------- */
document.getElementById("newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("newsletter-success").classList.add("is-shown");
  e.target.reset();
});

/* ---------------------------------------------------------
   8. SCROLL REVEALS (IntersectionObserver — lightweight, GSAP for hero only)
   --------------------------------------------------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.transition = "opacity .8s var(--ease), transform .8s var(--ease)";
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* GSAP — hero entrance + section title reveals */
if(window.gsap){
  gsap.registerPlugin(ScrollTrigger);

  gsap.timeline({ delay: .3 })
    .to(".hero__eyebrow", { opacity: 1, y: 0, duration: .7, ease: "power2.out" }, 0)
    .fromTo(".hero__crest", { opacity:0, scale:.85 }, { opacity: 1, scale:1, duration: 1, ease: "power2.out" }, .1)
    .fromTo(".hero__title", { opacity:0, y: 26 }, { opacity:1, y:0, duration: 1, ease: "power3.out" }, .25)
    .fromTo(".hero__slogan", { opacity:0, y: 16 }, { opacity:1, y:0, duration: .9, ease: "power3.out" }, .5)
    .fromTo(".hero__actions", { opacity:0, y: 16 }, { opacity:1, y:0, duration: .9, ease: "power3.out" }, .65);

  gsap.set(".hero__eyebrow", { opacity:0, y:10 });

  gsap.utils.toArray(".section-title, .eyebrow").forEach(el => {
    gsap.fromTo(el, { opacity:0, y:20 }, {
      opacity:1, y:0, duration:.8, ease:"power2.out",
      scrollTrigger: { trigger: el, start: "top 88%" }
    });
  });
}

/* ---------------------------------------------------------
   9. AMBIENT SMOKE / EMBER CANVAS
   --------------------------------------------------------- */
(function smokeSystem(){
  const canvas = document.getElementById("smoke-canvas");
  const ctx = canvas.getContext("2d");
  let w, h, particles = [];
  const MAX_PARTICLES = 38;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function spawn(){
    particles.push({
      x: w * 0.5 + (Math.random() - 0.5) * w * 0.5,
      y: h + 20,
      r: 30 + Math.random() * 70,
      speedY: 0.25 + Math.random() * 0.4,
      drift: (Math.random() - 0.5) * 0.4,
      life: 0,
      maxLife: 600 + Math.random() * 400,
      alpha: 0.04 + Math.random() * 0.05
    });
  }

  function tick(){
    ctx.clearRect(0, 0, w, h);
    if(particles.length < MAX_PARTICLES && Math.random() < 0.08) spawn();

    particles.forEach(p => {
      p.life++;
      p.y -= p.speedY;
      p.x += p.drift;
      p.r += 0.06;
      const lifeRatio = p.life / p.maxLife;
      const fade = lifeRatio < 0.15 ? lifeRatio / 0.15 : 1 - Math.max(0, (lifeRatio - 0.6) / 0.4);
      const a = Math.max(0, p.alpha * fade);

      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      grad.addColorStop(0, `rgba(220,200,180,${a})`);
      grad.addColorStop(1, "rgba(220,200,180,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    particles = particles.filter(p => p.life < p.maxLife && p.y > -200);
    requestAnimationFrame(tick);
  }

  if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    tick();
  }
})();

/* ---------------------------------------------------------
   10. MISC
   --------------------------------------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();

renderGrid();
