function showSection(id) {
  document.querySelectorAll('.section').forEach(function(section) {
    section.classList.remove('active');
  });

  document.querySelectorAll('nav a').forEach(function(link) {
    link.classList.remove('active');
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }

  const navLink = document.querySelector('nav a[data-section="' + id + '"]');
  if (navLink) {
    navLink.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showTournament(event, tournamentId) {
  document.querySelectorAll('.tournament-result').forEach(function(tournament) {
    tournament.style.display = 'none';
    tournament.classList.remove('active');
  });

  document.querySelectorAll('.archive-card:not(.upcoming-event)').forEach(function(card) {
    card.classList.remove('active');
  });

  const selected = document.getElementById(tournamentId);
  if (selected) {
    selected.style.display = 'block';
    selected.classList.add('active');
  }

  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }
}

document.querySelectorAll('nav a[data-section]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    showSection(this.dataset.section);
  });
});

(function () {
  const form = document.getElementById('inscription-form');
  const btn = document.getElementById('submit-btn');
  const msg = document.getElementById('form-message');

  if (!form || !btn || !msg) return;

  const defaultBtnText = 'Confirmer mon inscription';

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span>Envoi en cours…';
    msg.textContent = '';
    msg.className = 'form-message';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
      });

      const result = await response.json();

      if (result.success) {
        msg.textContent = '✅ Inscription confirmée ! À bientôt sur le tapis de jeu 🌶️';
        msg.className = 'form-message form-message-success';
        form.reset();
        btn.innerHTML = '✅ Inscription envoyée';

        setTimeout(function () {
          btn.disabled = false;
          btn.innerHTML = defaultBtnText;
          msg.textContent = '';
          msg.className = 'form-message';
        }, 2500);
      } else {
        throw new Error(result.message || 'Erreur serveur');
      }
    } catch (err) {
      msg.textContent = '❌ Erreur : ' + err.message + '. Réessaie ou contacte-nous.';
      msg.className = 'form-message form-message-error';
      btn.disabled = false;
      btn.innerHTML = defaultBtnText;
    }
  });
})();

(function () {
  const form = document.getElementById('contact-form');
  const btn = document.getElementById('contact-submit-btn');
  const msg = document.getElementById('contact-form-message');

  if (!form || !btn || !msg) return;

  const defaultBtnText = 'Envoyer';

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span>Envoi…';
    msg.textContent = '';
    msg.className = 'form-message';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
      });

      const result = await response.json();

      if (result.success) {
        msg.textContent = '✅ Message envoyé, merci !';
        msg.className = 'form-message form-message-success';
        form.reset();
        btn.innerHTML = '✅ Message envoyé';

        setTimeout(function () {
          btn.disabled = false;
          btn.innerHTML = defaultBtnText;
          msg.textContent = '';
          msg.className = 'form-message';
        }, 2500);
      } else {
        throw new Error(result.message || 'Erreur serveur');
      }
    } catch (err) {
      msg.textContent = "❌ Impossible d'envoyer. Réessaie ou contacte-nous directement.";
      msg.className = 'form-message form-message-error';
      btn.disabled = false;
      btn.innerHTML = defaultBtnText;
    }
  });
})();

(function () {
  const levels = [
    { name: 'Aucune sauce — bien joué !', shu: '0 SHU', color: '#3ecf1a' },
    { name: 'Hegoa', shu: '1 500 SHU', color: '#50c81e' },
    { name: 'Sriracha / Mistral', shu: '15 000 SHU', color: '#a0d911' },
    { name: 'Sirocco', shu: '75 000 SHU', color: '#faad14' },
    { name: 'Tonnerre', shu: '100 000 SHU', color: '#fa8c16' },
    { name: 'Foudre', shu: '120 000 SHU', color: '#ff4d4f' },
    { name: 'Armageddon', shu: '500 000 SHU', color: '#f5222d' },
    { name: 'Carolina Reaper', shu: '800 000 SHU', color: '#cf1322' },
    { name: 'Tsunami', shu: '1 000 000 SHU', color: '#a8071a' }
  ];

  const loseMinus = document.getElementById('lose-minus');
  const losePlus = document.getElementById('lose-plus');
  const tieMinus = document.getElementById('tie-minus');
  const tiePlus = document.getElementById('tie-plus');

  const loseVal = document.getElementById('lose-val');
  const tieVal = document.getElementById('tie-val');
  const resLevel = document.getElementById('res-level');
  const resName = document.getElementById('res-name');
  const resShu = document.getElementById('res-shu');

  if (!loseMinus || !losePlus || !tieMinus || !tiePlus || !loseVal || !tieVal || !resLevel || !resName || !resShu) {
    return;
  }

  let loses = 0;
  let ties = 0;

  function update() {
    const levelIndex = Math.min(loses * 2 + ties, 8);
    const current = levels[levelIndex];

    resLevel.textContent = levelIndex;
    resLevel.style.color = current.color;
    resName.textContent = current.name;
    resName.style.color = current.color;
    resShu.textContent = current.shu;
  }

  losePlus.addEventListener('click', function () {
    if (loses < 4) {
      loses++;
      loseVal.textContent = loses;
      update();
    }
  });

  loseMinus.addEventListener('click', function () {
    if (loses > 0) {
      loses--;
      loseVal.textContent = loses;
      update();
    }
  });

  tiePlus.addEventListener('click', function () {
    if (ties < 8) {
      ties++;
      tieVal.textContent = ties;
      update();
    }
  });

  tieMinus.addEventListener('click', function () {
    if (ties > 0) {
      ties--;
      tieVal.textContent = ties;
      update();
    }
  });

  update();
})();