/* =====================================================
   Assets (local files in /assets, easy to swap)
   ===================================================== */
const ASSETS = {
  yuval: 'assets/yuval.png',
  eden:  'assets/eden.png',
  stav:  'assets/stav.png',
  miki:  'assets/miki.png',
  dolls: 'assets/dolls.png',
  arrow: 'assets/ArrowCircleUpLeft.png',
  logo:  'assets/logo-fattal.png',
  kipud: 'assets/kipud.png',
  kipudLogo: 'assets/kipud_logo.png'
};

/* Artists used by EVENT CARDS and the POPUP (artist photos, names) */
const ARTISTS = [
  { key: 'stav',  name: 'סתיו בכל הצבעים',      image: ASSETS.stav },
  { key: 'yuval', name: 'יובל המבולבל',           image: ASSETS.yuval },
  { key: 'eden',  name: 'עדן חסון',                image: ASSETS.eden },
  { key: 'dolls', name: 'בית הבובות של גבי',     image: ASSETS.dolls },
  { key: 'miki',  name: 'מיקי',                    image: ASSETS.miki }
];

/* Pre-styled CIRCLE images used in the top carousel (each PNG is a
   complete circular composition — background + photo + name).
   Display order specified by client: Circle2, Circle1, Circle3, Circle4, Circle5. */
const CIRCLES = [
  { src: 'assets/Circle2.png', name: 'סתיו בכל הצבעים' },
  { src: 'assets/Circle1.png', name: 'עדן חסון' },
  { src: 'assets/Circle3.png', name: 'יובל המבולבל' },
  { src: 'assets/Circle4.png', name: 'מיקי' },
  { src: 'assets/Circle5.png', name: 'בית הבובות של גבי' }
];

/* =====================================================
   Cities config: name, CTA copy + URL per city
   ===================================================== */
const CITIES = {
  eilat: {
    name: 'אילת',
    ctaShort: 'בחירת מלון לחופשת קיץ באילת',
    dealUrl: 'https://www.fattal.co.il/deals/city/eilat-deals'
  },
  tiberias: {
    name: 'טבריה',
    ctaShort: 'בחירת מלון לחופשת קיץ בטבריה',
    dealUrl: 'https://www.fattal.co.il/deals/city/tiberias-deals'
  },
  'dead-sea': {
    name: 'ים המלח',
    ctaShort: 'בחירת מלון לחופשת קיץ בים המלח',
    dealUrl: 'https://www.fattal.co.il/city/dead-sea-hotels'
  }
};

/* =====================================================
   Real events from the Google Sheet (single source of truth).
   To update events: edit this array (or replace by fetching the sheet
   via Apps Script / serverless and re-deploying).
   ===================================================== */
const EVENTS = [
  /* ---------- אילת ---------- */
  { city: 'eilat', date: '3.8', day: 'שני', artistKey: 'yuval', slots: [
    { time: '12:00', hotels: 'לאונרדו פלאזה' },
    { time: '14:30', hotels: 'לאונרדו קלאב, לאונרדו רויאל ריזורט, לאונרדו פריווילג\' (מיקום: לאונרדו קלאב)' },
    { time: '17:00', hotels: 'הרודס' },
    { time: '20:30', hotels: 'U מג\'יק פאלאס' }
  ]},
  { city: 'eilat', date: '4.8', day: 'שלישי', artistKey: 'eden', slots: [
    { time: '21:30', hotels: 'כל מלונות האזור (מיקום: חוף ה-U קורל ביץ\')' }
  ]},
  { city: 'eilat', date: '7.8', day: 'שישי', artistKey: 'stav', slots: [
    { time: '12:00', hotels: 'לאונרדו פלאזה' },
    { time: '14:30', hotels: 'לאונרדו קלאב, לאונרדו רויאל ריזורט, לאונרדו פריווילג\' (מיקום: לאונרדו קלאב)' },
    { time: '17:00', hotels: 'הרודס' },
    { time: '20:30', hotels: 'U מג\'יק פאלאס' }
  ]},
  { city: 'eilat', date: '10.8', day: 'שני', artistKey: 'dolls', slots: [
    { time: '12:00', hotels: 'לאונרדו פלאזה' },
    { time: '14:30', hotels: 'לאונרדו קלאב, לאונרדו רויאל ריזורט, לאונרדו פריווילג\' (מיקום: לאונרדו קלאב)' },
    { time: '17:00', hotels: 'הרודס' },
    { time: '20:30', hotels: 'U מג\'יק פאלאס' }
  ]},
  { city: 'eilat', date: '11.8', day: 'שלישי', artistKey: 'eden', slots: [
    { time: '21:30', hotels: 'כל מלונות האזור (מיקום: חוף ה-U קורל ביץ\')' }
  ]},
  { city: 'eilat', date: '14.8', day: 'שישי', artistKey: 'miki', slots: [
    { time: '12:00', hotels: 'לאונרדו פלאזה' },
    { time: '14:30', hotels: 'לאונרדו קלאב, לאונרדו רויאל ריזורט, לאונרדו פריווילג\' (מיקום: לאונרדו קלאב)' },
    { time: '17:00', hotels: 'הרודס' },
    { time: '20:30', hotels: 'U מג\'יק פאלאס' }
  ]},
  { city: 'eilat', date: '15.8', day: 'שבת', artistKey: 'eden', slots: [
    { time: '21:30', hotels: 'כל מלונות האזור (מיקום: חוף ה-U קורל ביץ\')' }
  ]},
  { city: 'eilat', date: '17.8', day: 'שני', artistKey: 'yuval', slots: [
    { time: '12:00', hotels: 'לאונרדו פלאזה' },
    { time: '14:30', hotels: 'לאונרדו קלאב, לאונרדו רויאל ריזורט, לאונרדו פריווילג\' (מיקום: לאונרדו קלאב)' },
    { time: '17:00', hotels: 'הרודס' },
    { time: '20:30', hotels: 'U מג\'יק פאלאס' }
  ]},
  { city: 'eilat', date: '18.8', day: '', artistKey: 'eden', slots: [
    { time: '21:30', hotels: 'כל מלונות האזור (מיקום: חוף ה-U קורל ביץ\')' }
  ]},
  { city: 'eilat', date: '21.8', day: 'שישי', artistKey: 'miki', slots: [
    { time: '12:00', hotels: 'לאונרדו פלאזה' },
    { time: '14:30', hotels: 'לאונרדו קלאב, לאונרדו רויאל ריזורט, לאונרדו פריווילג\' (מיקום: לאונרדו קלאב)' },
    { time: '17:00', hotels: 'הרודס' },
    { time: '20:30', hotels: 'U מג\'יק פאלאס' }
  ]},
  { city: 'eilat', date: '25.8', day: 'שלישי', artistKey: 'eden', slots: [
    { time: '21:30', hotels: 'כל מלונות האזור (מיקום: חוף ה-U קורל ביץ\')' }
  ]},

  /* ---------- טבריה ---------- */
  { city: 'tiberias', date: '4.8', day: 'שלישי', artistKey: 'dolls', slots: [
    { time: '18:00', hotels: 'לאונרדו, U בוטיק כנרת, לאונרדו פלאזה (מיקום: לאונרדו פלאזה)' },
    { time: '20:30', hotels: 'לאונרדו קלאב' }
  ]},
  { city: 'tiberias', date: '6.8', day: 'חמישי', artistKey: 'miki', slots: [
    { time: '18:00', hotels: 'לאונרדו פלאזה, U בוטיק כנרת (מיקום: לאונרדו פלאזה)' },
    { time: '20:30', hotels: 'לאונרדו קלאב' }
  ]},
  { city: 'tiberias', date: '11.8', day: 'שלישי', artistKey: 'miki', slots: [
    { time: '18:00', hotels: 'לאונרדו פלאזה, U בוטיק כנרת (מיקום: לאונרדו פלאזה)' },
    { time: '20:30', hotels: 'לאונרדו קלאב' }
  ]},
  { city: 'tiberias', date: '13.8', day: 'חמישי', artistKey: 'yuval', slots: [
    { time: '18:00', hotels: 'לאונרדו פלאזה, U בוטיק כנרת (מיקום: לאונרדו פלאזה)' },
    { time: '20:30', hotels: 'לאונרדו קלאב' }
  ]},
  { city: 'tiberias', date: '18.8', day: 'שלישי', artistKey: 'stav', slots: [
    { time: '18:00', hotels: 'לאונרדו פלאזה, U בוטיק כנרת (מיקום: לאונרדו פלאזה)' },
    { time: '20:30', hotels: 'לאונרדו קלאב' }
  ]},
  { city: 'tiberias', date: '20.8', day: 'חמישי', artistKey: 'stav', slots: [
    { time: '18:00', hotels: 'לאונרדו פלאזה, U בוטיק כנרת (מיקום: לאונרדו פלאזה)' },
    { time: '20:30', hotels: 'לאונרדו קלאב' }
  ]},
  { city: 'tiberias', date: '27.8', day: 'חמישי', artistKey: 'dolls', slots: [
    { time: '18:00', hotels: 'לאונרדו פלאזה, U בוטיק כנרת (מיקום: לאונרדו פלאזה)' },
    { time: '20:30', hotels: 'לאונרדו קלאב' }
  ]},

  /* ---------- ים המלח ---------- */
  { city: 'dead-sea', date: '24.7', day: 'שישי', artistKey: 'stav', slots: [
    { time: '16:00', hotels: 'הרודס, לאונרדו פלאזה (מיקום: לאונרדו פלאזה)' },
    { time: '20:30', hotels: 'לאונרדו אין, לאונרדו קלאב (מיקום: לאונרדו קלאב)' }
  ]},
  { city: 'dead-sea', date: '7.8', day: 'שישי', artistKey: 'dolls', slots: [
    { time: '16:00', hotels: 'הרודס, לאונרדו פלאזה (מיקום: לאונרדו פלאזה)' },
    { time: '20:30', hotels: 'לאונרדו אין, לאונרדו קלאב (מיקום: לאונרדו קלאב)' }
  ]},
  { city: 'dead-sea', date: '11.8', day: 'שלישי', artistKey: 'miki', slots: [
    { time: '18:00', hotels: 'לאונרדו אין, לאונרדו קלאב (מיקום: לאונרדו קלאב)' },
    { time: '20:30', hotels: 'הרודס, לאונרדו פלאזה (מיקום: לאונרדו פלאזה)' }
  ]},
  { city: 'dead-sea', date: '14.8', day: 'שישי', artistKey: 'stav', slots: [
    { time: '16:00', hotels: 'הרודס, לאונרדו פלאזה (מיקום: לאונרדו פלאזה)' },
    { time: '20:30', hotels: 'לאונרדו אין, לאונרדו קלאב (מיקום: לאונרדו קלאב)' }
  ]},
  { city: 'dead-sea', date: '18.8', day: 'שלישי', artistKey: 'dolls', slots: [
    { time: '18:00', hotels: 'לאונרדו אין, לאונרדו קלאב (מיקום: לאונרדו קלאב)' },
    { time: '20:30', hotels: 'הרודס, לאונרדו פלאזה (מיקום: לאונרדו פלאזה)' }
  ]},
  { city: 'dead-sea', date: '21.8', day: 'שישי', artistKey: 'stav', slots: [
    { time: '16:00', hotels: 'הרודס, לאונרדו פלאזה (מיקום: לאונרדו פלאזה)' },
    { time: '20:30', hotels: 'לאונרדו אין, לאונרדו קלאב (מיקום: לאונרדו קלאב)' }
  ]},
  { city: 'dead-sea', date: '25.8', day: 'שלישי', artistKey: 'yuval', slots: [
    { time: '18:00', hotels: 'לאונרדו אין, לאונרדו קלאב (מיקום: לאונרדו קלאב)' },
    { time: '20:30', hotels: 'הרודס, לאונרדו פלאזה (מיקום: לאונרדו פלאזה)' }
  ]}
];

const MONTH_NAMES_HEB = { 7: 'יול', 8: 'אוג' };

/* =====================================================
   Helpers
   ===================================================== */
const artistByKey = ARTISTS.reduce((acc, a) => { acc[a.key] = a; return acc; }, {});

function parseDate(dateStr) {
  const [d, m] = dateStr.split('.').map(Number);
  return { day: d, month: m };
}

function formatMonthShort(month) {
  return MONTH_NAMES_HEB[month] || '';
}

/* =====================================================
   Render: circles carousel (true infinite marquee on mobile)
   The CIRCLES list is rendered TWICE so that translateX(-50%) lands
   exactly on the start of the duplicate set — when the animation
   restarts at 0% the picture is identical to where it left off,
   making the loop perfectly seamless (no jump, no gap).
   ===================================================== */
function renderCircles() {
  const track = document.getElementById('circlesTrack');
  if (!track) return;

  /* Total sets rendered. Animation translates by exactly ONE set width,
     so any extra sets are pure visual buffer that keeps the loop point
     hidden in the middle of the track (never at the visible edge). */
  const SET_COPIES = 3;

  const buildItem = (circle, isClone) => {
    const li = document.createElement('li');
    li.className = 'circle-item';
    if (isClone) li.setAttribute('aria-hidden', 'true');
    li.innerHTML = `
      <div class="circle">
        <img src="${circle.src}" alt="${circle.name}" loading="lazy" />
      </div>
      <span class="circle-name">${circle.name}</span>
    `;
    return li;
  };

  for (let i = 0; i < SET_COPIES; i++) {
    CIRCLES.forEach((c) => track.appendChild(buildItem(c, i > 0)));
  }
}

/* =====================================================
   Render: event cards for selected city
   ===================================================== */
function renderEvents(city = 'eilat') {
  const list = document.getElementById('eventList');
  if (!list) return;

  list.innerHTML = '';

  const cityEvents = EVENTS.filter((e) => e.city === city);
  /* Backgrounds cycle bg1 → bg2 → bg3 → bg4 → bg5 → bg1 → ... */
  const BG_COUNT = 5;

  cityEvents.forEach((event, idx) => {
    const artist = artistByKey[event.artistKey];
    if (!artist) return;

    const { day, month } = parseDate(event.date);
    const monthLabel = formatMonthShort(month);
    const bgIndex = (idx % BG_COUNT) + 1;

    const li = document.createElement('li');
    li.innerHTML = `
      <button class="event-card" type="button"
        aria-label="${artist.name}, ${day} ב${monthLabel}"
        data-event-index="${EVENTS.indexOf(event)}"
        data-bg="${bgIndex}"
        data-artist="${artist.key}"
        style="background-image: url('assets/bg${bgIndex}.png')">
        <div class="event-image-wrap">
          <img class="event-image" src="${artist.image}" alt="" loading="lazy" />
        </div>
        <span class="event-arrow" aria-hidden="true">
          <img src="${ASSETS.arrow}" alt="" />
        </span>
        <div class="event-date">
          <span class="month">${monthLabel}</span>
          <span class="day">${day}</span>
        </div>
        <div class="event-name">${artist.name}</div>
      </button>
    `;
    list.appendChild(li);
  });

  /* Kipud cube — always appears at the end regardless of city filter.
     Layout: kipud character image on the LEFT (in RTL), and a stack of
     "בכל מופעי הילדים יופיע גם" + kipud wordmark on the RIGHT. */
  const kipud = document.createElement('li');
  kipud.className = 'event-kipud-wrap';
  kipud.innerHTML = `
    <div class="event-kipud" role="note" aria-label="בכל מופעי הילדים יופיע גם קיפוד">
      <div class="kipud-content">
        <span class="kipud-text">בכל מופעי הילדים יופיע גם</span>
        <img class="kipud-wordmark" src="${ASSETS.kipudLogo}" alt="קיפוד" />
      </div>
      <img class="kipud-character" src="${ASSETS.kipud}" alt="" aria-hidden="true" />
    </div>
  `;
  list.appendChild(kipud);

  /* Wire popup */
  list.querySelectorAll('.event-card').forEach((card) => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.eventIndex, 10);
      openPopup(idx);
    });
  });
}

/* =====================================================
   Update CTAs (sticky-bottom + inline banner + popup)
   ===================================================== */
function updateCtaForCity(city) {
  const config = CITIES[city];
  if (!config) return;

  document.querySelectorAll('[data-cta="city"]').forEach((el) => {
    el.textContent = config.ctaShort;
    if (el.tagName === 'A') el.href = config.dealUrl;
  });

  /* Track current city for popup CTA */
  document.body.dataset.currentCity = city;
}

/* =====================================================
   City filter chips
   ===================================================== */
function setupCityFilters() {
  const chips = document.querySelectorAll('.chip[data-city]');
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => {
        c.classList.remove('is-active');
        c.setAttribute('aria-selected', 'false');
      });
      chip.classList.add('is-active');
      chip.setAttribute('aria-selected', 'true');
      const city = chip.dataset.city;
      renderEvents(city);
      updateCtaForCity(city);
    });
  });
}

/* =====================================================
   FAQ accordion
   ===================================================== */
function setupFaq() {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });
}

/* =====================================================
   Popup
   - Mobile: bottom-sheet, slides up from below
   - Desktop: centered modal (CSS handles via @media)
   - Closes on: X button, overlay click, ESC key
   ===================================================== */
function openPopup(eventIndex) {
  const event = EVENTS[eventIndex];
  if (!event) return;
  const artist = artistByKey[event.artistKey];
  if (!artist) return;

  const overlay = document.getElementById('popupOverlay');
  const title = document.getElementById('popupTitle');
  const table = document.getElementById('popupTable');
  const ctaBtn = document.getElementById('popupCta');
  if (!overlay || !title || !table) return;

  const cityName = CITIES[event.city]?.name || '';
  const dayPart = event.day ? `${event.date} ${event.day}` : event.date;
  title.textContent = `${artist.name} | ${dayPart} | ${cityName}`;

  /* Rebuild rows (keep the head row) */
  table.querySelectorAll('.popup-row:not(.popup-row-head)').forEach((r) => r.remove());

  event.slots.forEach((slot) => {
    const div = document.createElement('div');
    div.className = 'popup-row';
    div.innerHTML = `
      <span class="popup-cell popup-cell-time">${slot.time}</span>
      <span class="popup-cell popup-cell-hotel">${slot.hotels}</span>
    `;
    table.appendChild(div);
  });

  /* CTA button leads to current event's city deals page */
  if (ctaBtn) {
    const cfg = CITIES[event.city];
    if (cfg) {
      ctaBtn.href = cfg.dealUrl;
      ctaBtn.textContent = 'בחירת מלון לחופשת קיץ';
    }
  }

  overlay.hidden = false;
  document.body.classList.add('popup-open');
  requestAnimationFrame(() => overlay.classList.add('is-open'));
}

function closePopup() {
  const overlay = document.getElementById('popupOverlay');
  if (!overlay) return;
  overlay.classList.remove('is-open');
  document.body.classList.remove('popup-open');
  setTimeout(() => { overlay.hidden = true; }, 280);
}

function setupPopup() {
  const overlay = document.getElementById('popupOverlay');
  const closeBtn = document.getElementById('popupClose');
  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', closePopup);

  /* Click on dark overlay (outside the sheet) closes */
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePopup();
  });

  /* ESC to close */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closePopup();
  });
}

/* Pause marquee when tab hidden (saves CPU) */
function setupVisibilityPause() {
  const track = document.getElementById('circlesTrack');
  if (!track) return;
  document.addEventListener('visibilitychange', () => {
    track.style.animationPlayState = document.hidden ? 'paused' : 'running';
  });
}

/* =====================================================
   Init
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderCircles();
  renderEvents('eilat');
  setupCityFilters();
  setupFaq();
  setupPopup();
  setupVisibilityPause();
  updateCtaForCity('eilat');
});
