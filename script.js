/* =========================================================
   HCC — HAVANA CIGAR CLUB — script.js
   ========================================================= */

/* ---------------------------------------------------------
   CONFIGURATION
   --------------------------------------------------------- */
const CONFIG = {
  WHATSAPP_NUMBER: "963988614489",
  CART_STORAGE_KEY: "hcc_cart",
  AGE_GATE_KEY: "hcc_age_verified",
  SMOKE_MAX_PARTICLES: 38,
  SMOKE_SPAWN_RATE: 0.08,
  IMAGE_PATH: "assets/cigars/",   // Folder for cigar images
  IMAGE_EXT: ".jpg",              // Image extension
};

/* ---------------------------------------------------------
   1. PRODUCT CATALOG
   NOTE: box counts / ring gauge / length are illustrative,
   based on standard Habanos vitola formats. Confirm exact
   specs with your supplier before publishing live.

   IMAGE NAMING CONVENTION:
   Save cigar photos as: assets/cigars/cohiba-siglo-ii.jpg
   Use lowercase, replace spaces with hyphens.
   If image missing, a beautiful CSS fallback renders instead.
   --------------------------------------------------------- */
const PRODUCTS = [
  // Cohiba
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Siglo II", qty:25, ring:36, length:121, image:"cohiba-siglo-ii" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Siglo III", qty:25, ring:40, length:143, image:"cohiba-siglo-iii" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Siglo IV", qty:25, ring:46, length:143, image:"cohiba-siglo-iv" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Siglo VI", qty:25, ring:52, length:150, image:"cohiba-siglo-vi" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Behike 52", qty:10, ring:52, length:110, image:"cohiba-behike-52" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Behike 54", qty:10, ring:54, length:140, image:"cohiba-behike-54" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Behike 56", qty:10, ring:56, length:165, image:"cohiba-behike-56" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Maduro 5 Mágicos", qty:25, ring:52, length:121, image:"cohiba-maduro-5-magicos" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Maduro Genios", qty:25, ring:55, length:160, image:"cohiba-maduro-genios" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Novedosos", qty:25, ring:50, length:120, image:"cohiba-novedosos" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Robustos", qty:25, ring:50, length:124, image:"cohiba-robustos" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Robustos Supremos EL 2014", qty:10, ring:50, length:140, image:"cohiba-robustos-supremos-el-2014" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Talismán EL 2017", qty:10, ring:57, length:152, image:"cohiba-talisman-el-2017" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Espléndidos", qty:25, ring:47, length:178, image:"cohiba-esplendidos" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba 50 Majestuosos 1966", qty:20, ring:55, length:152, note:"Humidor of 20", image:"cohiba-50-majestuosos-1966" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Pirámides Extra", qty:25, ring:52, length:152, image:"cohiba-piramides-extra" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Pirámides Extra Tubos", qty:3, ring:52, length:152, note:"Tubos", image:"cohiba-piramides-extra-tubos" },
  { brand:"Cohiba", key:"cohiba", name:"Cohiba Siglo VI Tubos", qty:3, ring:52, length:150, note:"Tubos", image:"cohiba-siglo-vi-tubos" },

  // Montecristo
  { brand:"Montecristo", key:"montecristo", name:"Montecristo No.2", qty:25, ring:52, length:156, image:"montecristo-no-2" },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo No.4", qty:25, ring:42, length:129, image:"montecristo-no-4" },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo Edmundo", qty:25, ring:52, length:135, image:"montecristo-edmundo" },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo Petite No.2", qty:25, ring:52, length:120, image:"montecristo-petite-no-2" },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo Petite Edmundo", qty:25, ring:52, length:110, image:"montecristo-petite-edmundo" },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo Open Eagle", qty:20, ring:54, length:142, image:"montecristo-open-eagle" },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo 520 EL 2012", qty:10, ring:55, length:130, image:"montecristo-520-el-2012" },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo 25 Supremos EL 2019", qty:10, ring:55, length:152, image:"montecristo-25-supremos-el-2019" },
  { brand:"Montecristo", key:"montecristo", name:"Montecristo 80 Aniversario", qty:10, ring:55, length:178, image:"montecristo-80-aniversario" },

  // Partagás
  { brand:"Partagás", key:"partagas", name:"Partagás Serie E No.2", qty:25, ring:52, length:140, image:"partagas-serie-e-no-2" },
  { brand:"Partagás", key:"partagas", name:"Partagás Serie P No.2", qty:25, ring:52, length:156, image:"partagas-serie-p-no-2" },
  { brand:"Partagás", key:"partagas", name:"Partagás Serie E No.4", qty:25, ring:50, length:110, image:"partagas-serie-e-no-4" },
  { brand:"Partagás", key:"partagas", name:"Partagás Salamanes LCDH", qty:10, ring:56, length:192, image:"partagas-salamanes-lcdh" },
  { brand:"Partagás", key:"partagas", name:"Partagás Lusitanias", qty:25, ring:47, length:192, image:"partagas-lusitanias" },

  // Hoyo de Monterrey
  { brand:"Hoyo de Monterrey", key:"hoyo", name:"Hoyo de Monterrey Epicure No.2", qty:25, ring:50, length:124, image:"hoyo-epicure-no-2" },
  { brand:"Hoyo de Monterrey", key:"hoyo", name:"Hoyo de Monterrey Serie Le Hoyo San Juan", qty:25, ring:46, length:130, image:"hoyo-serie-le-hoyo-san-juan" },
  { brand:"Hoyo de Monterrey", key:"hoyo", name:"Hoyo de Monterrey Double Coronas", qty:25, ring:49, length:194, image:"hoyo-double-coronas" },
  { brand:"Hoyo de Monterrey", key:"hoyo", name:"Hoyo de Monterrey Grand Epicure EL 2013", qty:10, ring:54, length:142, image:"hoyo-grand-epicure-el-2013" },

  // Others
  { brand:"Trinidad", key:"others", name:"Trinidad 12 Topes EL 2016", qty:12, ring:54, length:110, image:"trinidad-12-topes-el-2016" },
  { brand:"H. Upmann", key:"others", name:"H. Upmann Magnum 56 EL 2015", qty:10, ring:56, length:120, image:"h-upmann-magnum-56-el-2015" },
  { brand:"Punch", key:"others", name:"Punch Double Coronas", qty:25, ring:49, length:194, image:"punch-double-coronas" },
  { brand:"Bolivar", key:"others", name:"Bolivar Belicosos Finos", qty:25, ring:52, length:127, image:"bolivar-belicosos-finos" },
  { brand:"Bolivar", key:"others", name:"Bolivar Royal Coronas AT", qty:25, ring:50, length:122, image:"bolivar-royal-coronas-at" },
  { brand:"Romeo y Julieta", key:"others", name:"Romeo y Julieta No.1 AT", qty:25, ring:47, length:178, image:"romeo-y-julieta-no-1-at" },
  { brand:"Romeo y Julieta", key:"others", name:"Romeo y Julieta Short Churchill", qty:25, ring:50, length:124, image:"romeo-y-julieta-short-churchill" },
  { brand:"Romeo y Julieta", key:"others", name:"Romeo y Julieta Wide Churchill", qty:25, ring:55, length:135, image:"romeo-y-julieta-wide-churchill" },
  { brand:"Romeo y Julieta", key:"others", name:"Romeo y Julieta Churchill", qty:25, ring:47, length:178, image:"romeo-y-julieta-churchill" },
];

/* ---------------------------------------------------------
   2. UTILITY FUNCTIONS
   --------------------------------------------------------- */
function initials(name){
  return name.replace(/[^A-Za-z\s]/g,"").trim().split(/\s+/).slice(0,2).map(w=>w[0]).join("").toUpperCase();
}

function slugify(str){
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function getImagePath(product){
  // Try the explicit image field first, fallback to auto-generated slug
  const filename = product.image || slugify(product.name);
  return CONFIG.IMAGE_PATH + filename + CONFIG.IMAGE_EXT;
}

/* ---------------------------------------------------------
   3. RENDER PRODUCT GRID
   --------------------------------------------------------- */
const grid = document.getElementById("product-grid");

function cardHTML(p, i){
  const spec = `${p.qty} ct · ${p.ring} × ${p.length}mm${p.note ? " · " + p.note : ""}`;
  const imgPath = getImagePath(p);
  const safeName = p.name.replace(/"/g, '&quot;');

  return `
  <article class="product-card reveal" data-key="${p.key}" data-index="${i}" data-name="${safeName}" style="transition-delay:${(i % 6) * 0.06}s">
    <div class="product-card__art">
      <img src="${imgPath}" alt="${safeName}" loading="lazy" 
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
      <div class="product-card__cigar-fallback" style="display:none">
        <div class="product-card__band">${initials(p.brand)}</div>
      </div>
    </div>
    <div class="product-card__body">
      <p class="product-card__brand">${p.brand}</p>
      <h3 class="product-card__name">${p.name}</h3>
      <p class="product-card__spec">${spec}</p>
      <button class="product-card__cta" data-index="${i}" aria-label="Add ${safeName} to inquiry list">
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
      span.textContent = "Added ✓";
      setTimeout(() => { span.textContent = original; btn.classList.remove("is-added"); }, 1400);
    });
  });
}

/* filter tabs */
document.getElementById("filter-tabs").addEventListener("click", (e) => {
  const tab = e.target.closest(".filter-tab");
  if(!tab) return;

  // Update tab states
  document.querySelectorAll(".filter-tab").forEach(t => {
    t.classList.remove("is-active");
    t.setAttribute("aria-selected", "false");
  });
  tab.classList.add("is-active");
  tab.setAttribute("aria-selected", "true");

  const f = tab.dataset.filter;
  let visibleCount = 0;

  document.querySelectorAll(".product-card").forEach((card, idx) => {
    const show = f === "all" || card.dataset.key === f;
    card.style.display = show ? "" : "none";
    if(show){
      card.style.transitionDelay = `${(visibleCount % 6) * 0.06}s`;
      visibleCount++;
    }
  });

  // Scroll to collection top on mobile when filtering
  if(window.innerWidth <= 600 && f !== "all"){
    document.getElementById("collection").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

/* ---------------------------------------------------------
   4. CART / INQUIRY LIST  (with localStorage persistence)
   --------------------------------------------------------- */
let cart = []; // array of product indices

// Load cart from storage on init
function loadCart(){
  try{
    const stored = localStorage.getItem(CONFIG.CART_STORAGE_KEY);
    if(stored){
      const parsed = JSON.parse(stored);
      if(Array.isArray(parsed)) cart = parsed;
    }
  }catch(e){ console.warn("Cart load failed:", e); }
}

function saveCart(){
  try{
    localStorage.setItem(CONFIG.CART_STORAGE_KEY, JSON.stringify(cart));
  }catch(e){ console.warn("Cart save failed:", e); }
}

const cartCountEl = document.getElementById("cart-count");
const cartItemsEl = document.getElementById("cart-items");
const cartEmptyEl = document.getElementById("cart-empty");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");

function addToCart(idx){
  cart.push(idx);
  saveCart();
  renderCart();
  showToast(`Added "${PRODUCTS[idx].name}" to your inquiry list`);

  // Bump animation on cart count
  cartCountEl.classList.add("is-bump");
  setTimeout(() => cartCountEl.classList.remove("is-bump"), 300);
}

function removeFromCart(cartPos){
  cart.splice(cartPos, 1);
  saveCart();
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
        <p class="cart-item__spec">${p.qty} ct · ${p.ring} × ${p.length}mm</p>
      </div>
      <button class="cart-item__remove" data-pos="${pos}" aria-label="Remove ${p.name.replace(/"/g, '')}">&times;</button>
    </div>`;
  }).join("");

  cartItemsEl.querySelectorAll(".cart-item__remove").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.pos)));
  });
}

function openCart(){ 
  cartDrawer.classList.add("is-open"); 
  cartOverlay.classList.add("is-open"); 
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCart(){ 
  cartDrawer.classList.remove("is-open"); 
  cartOverlay.classList.remove("is-open"); 
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("cart-toggle").addEventListener("click", openCart);
document.getElementById("cart-close").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// Close cart on Escape key
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && cartDrawer.classList.contains("is-open")){
    closeCart();
  }
});

document.getElementById("cart-send").addEventListener("click", () => {
  if(cart.length === 0){
    showToast("Add a cigar to your list first");
    return;
  }
  const lines = cart.map(idx => `• ${PRODUCTS[idx].name} (${PRODUCTS[idx].qty} ct)`);
  const message = `Hello HCC, I'd like to ask for pricing on:
${lines.join("\n")}`;
  const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
});

/* ---------------------------------------------------------
   5. TOAST
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
   6. AGE GATE
   --------------------------------------------------------- */
const ageGate = document.getElementById("age-gate");

function checkAgeGate(){
  try{
    const verified = localStorage.getItem(CONFIG.AGE_GATE_KEY);
    if(verified === "true"){
      ageGate.classList.add("is-hidden");
      document.body.style.overflow = "";
      return true;
    }
  }catch(e){}
  return false;
}

document.getElementById("age-confirm").addEventListener("click", () => {
  ageGate.classList.add("is-hidden");
  document.body.style.overflow = "";
  try{ localStorage.setItem(CONFIG.AGE_GATE_KEY, "true"); }catch(e){}
});

// Only lock scroll if age not verified
if(!checkAgeGate()){
  document.body.style.overflow = "hidden";
}

/* ---------------------------------------------------------
   7. NAV: scroll state + mobile menu
   --------------------------------------------------------- */
const siteNav = document.getElementById("site-nav");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
  const currentY = window.scrollY;
  siteNav.classList.toggle("is-scrolled", currentY > 30);
  lastScrollY = currentY;
}, { passive: true });

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  menuToggle.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  mobileMenu.setAttribute("aria-hidden", isOpen ? "false" : "true");
});

mobileMenu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
  });
});

/* ---------------------------------------------------------
   8. NEWSLETTER (front-end only mock)
   --------------------------------------------------------- */
document.getElementById("newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("newsletter-success").classList.add("is-shown");
  e.target.reset();
  setTimeout(() => {
    document.getElementById("newsletter-success").classList.remove("is-shown");
  }, 4000);
});

/* ---------------------------------------------------------
   9. SCROLL REVEALS (IntersectionObserver)
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
} else {
  // Fallback: show hero content immediately if GSAP fails
  document.querySelectorAll(".hero__eyebrow, .hero__crest, .hero__title, .hero__slogan, .hero__actions").forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
}

/* ---------------------------------------------------------
   10. AMBIENT SMOKE / EMBER CANVAS
   --------------------------------------------------------- */
(function smokeSystem(){
  const canvas = document.getElementById("smoke-canvas");
  if(!canvas) return;

  const ctx = canvas.getContext("2d");
  let w, h, particles = [];
  let isVisible = true;
  let rafId = null;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  // Pause when tab hidden or page not visible
  document.addEventListener("visibilitychange", () => {
    isVisible = !document.hidden;
    if(isVisible && !rafId) tick();
  });

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
    if(!isVisible){ rafId = null; return; }

    ctx.clearRect(0, 0, w, h);
    if(particles.length < CONFIG.SMOKE_MAX_PARTICLES && Math.random() < CONFIG.SMOKE_SPAWN_RATE) spawn();

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
    rafId = requestAnimationFrame(tick);
  }

  if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    tick();
  }
})();

/* ---------------------------------------------------------
   11. SMOOTH SCROLL FOR ANCHOR LINKS
   --------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    const targetId = this.getAttribute("href");
    if(targetId === "#") return;
    const target = document.querySelector(targetId);
    if(target){
      e.preventDefault();
      const navHeight = siteNav.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  });
});

/* ---------------------------------------------------------
   12. MISC
   --------------------------------------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();

// Initialize
loadCart();
renderGrid();
renderCart();
