/* =====================================================
   Accessibility widget — Hebrew, RTL, IL law compliant
   (תקנות שוויון זכויות לאנשים עם מוגבלות, ת"י 5568, רמה AA)
   Self-contained: no external dependencies. State persists
   in localStorage.
   ===================================================== */
(function () {
  'use strict';

  const STATE_KEY = 'fattal-a11y-prefs';

  const DEFAULTS = {
    fontSize: 0,           // 0..3
    contrast: 'normal',    // normal | high | dark | light | yellow
    highlightLinks: false,
    readableFont: false,
    bigCursor: false,
    noAnimations: false
  };

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STATE_KEY) || '{}');
      return Object.assign({}, DEFAULTS, saved);
    } catch (e) {
      return Object.assign({}, DEFAULTS);
    }
  }

  function saveState(state) {
    try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function applyState(state) {
    const body = document.body;
    /* Font size */
    body.classList.remove('a11y-fs-1', 'a11y-fs-2', 'a11y-fs-3');
    if (state.fontSize > 0) body.classList.add('a11y-fs-' + state.fontSize);

    /* Contrast */
    ['high', 'dark', 'light', 'yellow'].forEach(function (c) {
      body.classList.toggle('a11y-contrast-' + c, state.contrast === c);
    });

    /* Toggles */
    body.classList.toggle('a11y-highlight-links', !!state.highlightLinks);
    body.classList.toggle('a11y-readable-font', !!state.readableFont);
    body.classList.toggle('a11y-big-cursor', !!state.bigCursor);
    body.classList.toggle('a11y-no-animations', !!state.noAnimations);
  }

  let state = loadState();

  /* =====================================================
     Build the widget DOM
     ===================================================== */
  function buildWidget() {
    const root = document.createElement('div');
    root.className = 'a11y-widget';
    root.setAttribute('dir', 'rtl');
    root.innerHTML = `
      <button class="a11y-toggle" type="button"
              aria-label="פתיחת תפריט נגישות"
              aria-expanded="false"
              aria-controls="a11y-panel">
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="currentColor">
          <circle cx="12" cy="4" r="2"/>
          <path d="M19 7.5c0-.4-.4-.8-.8-.8H5.8c-.4 0-.8.4-.8.8s.4.8.8.8h4.2v3.3l-1.6 7.8c-.1.5.2 1 .7 1.1.5.1 1-.2 1.1-.7l1.3-6.3h1l1.3 6.3c.1.5.6.8 1.1.7.5-.1.8-.6.7-1.1l-1.6-7.8V8.3h4.2c.4 0 .8-.4.8-.8z"/>
        </svg>
      </button>

      <div class="a11y-panel" id="a11y-panel" role="dialog"
           aria-label="תפריט נגישות" hidden>
        <header class="a11y-panel-header">
          <h2 class="a11y-panel-title">תפריט נגישות</h2>
          <button class="a11y-close" type="button" aria-label="סגירה">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" fill="none"/>
            </svg>
          </button>
        </header>

        <div class="a11y-panel-body">
          <div class="a11y-group">
            <h3 class="a11y-group-title">גודל גופן</h3>
            <div class="a11y-row">
              <button type="button" class="a11y-btn" data-action="font-dec" aria-label="הקטנת גופן">א-</button>
              <button type="button" class="a11y-btn a11y-btn-reset" data-action="font-reset" aria-label="גופן רגיל">איפוס</button>
              <button type="button" class="a11y-btn" data-action="font-inc" aria-label="הגדלת גופן">א+</button>
            </div>
          </div>

          <div class="a11y-group">
            <h3 class="a11y-group-title">ניגודיות וצבעים</h3>
            <div class="a11y-row a11y-row-grid">
              <button type="button" class="a11y-btn" data-contrast="normal">רגיל</button>
              <button type="button" class="a11y-btn" data-contrast="high">ניגודיות גבוהה</button>
              <button type="button" class="a11y-btn" data-contrast="dark">רקע כהה</button>
              <button type="button" class="a11y-btn" data-contrast="light">רקע בהיר</button>
              <button type="button" class="a11y-btn" data-contrast="yellow">צהוב על שחור</button>
            </div>
          </div>

          <div class="a11y-group">
            <h3 class="a11y-group-title">סיוע נוסף</h3>
            <div class="a11y-row a11y-row-stack">
              <button type="button" class="a11y-toggle-btn" data-toggle="highlightLinks">
                <span class="a11y-toggle-text">הדגשת קישורים</span>
                <span class="a11y-toggle-state" aria-hidden="true"></span>
              </button>
              <button type="button" class="a11y-toggle-btn" data-toggle="readableFont">
                <span class="a11y-toggle-text">גופן קריא</span>
                <span class="a11y-toggle-state" aria-hidden="true"></span>
              </button>
              <button type="button" class="a11y-toggle-btn" data-toggle="bigCursor">
                <span class="a11y-toggle-text">סמן עכבר מוגדל</span>
                <span class="a11y-toggle-state" aria-hidden="true"></span>
              </button>
              <button type="button" class="a11y-toggle-btn" data-toggle="noAnimations">
                <span class="a11y-toggle-text">עצירת אנימציות</span>
                <span class="a11y-toggle-state" aria-hidden="true"></span>
              </button>
            </div>
          </div>

          <div class="a11y-group">
            <button type="button" class="a11y-btn a11y-btn-wide" data-action="reset-all">
              איפוס כל ההגדרות
            </button>
          </div>

          <div class="a11y-group a11y-statement-link-wrap">
            <button type="button" class="a11y-link" data-action="show-statement">
              הצהרת נגישות »
            </button>
          </div>
        </div>
      </div>

      <div class="a11y-statement" id="a11y-statement" role="dialog"
           aria-label="הצהרת נגישות" hidden>
        <div class="a11y-statement-inner">
          <header class="a11y-statement-header">
            <h2>הצהרת נגישות</h2>
            <button class="a11y-close" type="button"
                    data-action="close-statement" aria-label="סגירה">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" fill="none"/>
              </svg>
            </button>
          </header>
          <div class="a11y-statement-body">
            <p>
              אתר זה מחויב להנגיש את שירותיו לכלל הציבור, לרבות אנשים עם
              מוגבלות, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות
              נגישות לשירות), תשע"ג-2013 ולתקן הישראלי ת"י 5568 ברמה AA
              (תואם WCAG 2.1 רמה AA).
            </p>
            <h3>אמצעי הנגישות באתר</h3>
            <ul>
              <li>אפשרויות התאמת גודל גופן (4 רמות).</li>
              <li>חמש ערכות ניגודיות צבעים, כולל רקע כהה ולבן ושחור-צהוב.</li>
              <li>הדגשת קישורים על מנת להבחין בהם בקלות.</li>
              <li>החלפה לגופן קריא יותר.</li>
              <li>הגדלת סמן העכבר.</li>
              <li>עצירת אנימציות ותנועות.</li>
              <li>ניווט באמצעות המקלדת בלבד (Tab, Enter).</li>
              <li>תיאורי תמונה (alt) על תמונות.</li>
              <li>תיוגי ARIA על אלמנטים אינטראקטיביים.</li>
            </ul>
            <h3>פנייה בנושאי נגישות</h3>
            <p>
              במידה ונתקלת בבעיית נגישות באתר, נשמח לסייע. אנא צרו קשר:<br />
              <strong>טלפון:</strong> 050-7017008<br />
              <strong>אימייל:</strong> guyas@fattal.co.il
            </p>
            <p>
              <small>עודכנה לאחרונה: ${new Date().toLocaleDateString('he-IL')}</small>
            </p>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(root);
    return root;
  }

  /* =====================================================
     Wire up events
     ===================================================== */
  function wire(root) {
    const toggle = root.querySelector('.a11y-toggle');
    const panel = root.querySelector('.a11y-panel');
    const closeBtn = root.querySelector('.a11y-panel .a11y-close');
    const statement = root.querySelector('.a11y-statement');

    function openPanel() {
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(() => panel.classList.add('is-open'));
    }
    function closePanel() {
      panel.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      setTimeout(() => { panel.hidden = true; }, 200);
    }
    toggle.addEventListener('click', () => {
      panel.hidden ? openPanel() : closePanel();
    });
    closeBtn.addEventListener('click', closePanel);

    /* Update active states on toggle buttons + contrast buttons */
    function syncUI() {
      root.querySelectorAll('[data-contrast]').forEach(b => {
        b.classList.toggle('is-active', b.dataset.contrast === state.contrast);
      });
      root.querySelectorAll('[data-toggle]').forEach(b => {
        const key = b.dataset.toggle;
        b.classList.toggle('is-on', !!state[key]);
        b.setAttribute('aria-pressed', state[key] ? 'true' : 'false');
      });
    }

    /* Generic click delegation */
    panel.addEventListener('click', (e) => {
      const t = e.target.closest('button');
      if (!t) return;

      const action = t.dataset.action;
      const contrast = t.dataset.contrast;
      const tgl = t.dataset.toggle;

      if (action === 'font-inc') {
        if (state.fontSize < 3) state.fontSize++;
      } else if (action === 'font-dec') {
        if (state.fontSize > 0) state.fontSize--;
      } else if (action === 'font-reset') {
        state.fontSize = 0;
      } else if (action === 'reset-all') {
        state = Object.assign({}, DEFAULTS);
      } else if (action === 'show-statement') {
        statement.hidden = false;
        requestAnimationFrame(() => statement.classList.add('is-open'));
        return;
      } else if (action === 'close-statement') {
        statement.classList.remove('is-open');
        setTimeout(() => { statement.hidden = true; }, 200);
        return;
      } else if (contrast) {
        state.contrast = contrast;
      } else if (tgl) {
        state[tgl] = !state[tgl];
      } else {
        return;
      }

      applyState(state);
      saveState(state);
      syncUI();
    });

    /* Click outside statement modal closes it */
    statement.addEventListener('click', (e) => {
      if (e.target === statement) {
        statement.classList.remove('is-open');
        setTimeout(() => { statement.hidden = true; }, 200);
      }
    });

    /* ESC closes whichever is open */
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (!statement.hidden) {
        statement.classList.remove('is-open');
        setTimeout(() => { statement.hidden = true; }, 200);
      } else if (!panel.hidden) {
        closePanel();
      }
    });

    syncUI();
  }

  /* =====================================================
     Init
     ===================================================== */
  function init() {
    applyState(state);
    const root = buildWidget();
    wire(root);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
