export default function ScovilleTournamentSite() {
  const events = [
    {
      date: '12 Avril 2026',
      title: 'Scoville Cup #1 — Format Standard',
      location: 'Lille',
      format: 'Standard',
      heat: '8 niveaux',
      cta: 'Voir l’évènement',
    },
    {
      date: '03 Mai 2026',
      title: 'Scoville Clash — Off-Meta Night',
      location: 'Bruxelles',
      format: 'Off-meta',
      heat: '10 niveaux',
      cta: 'S’inscrire',
    },
    {
      date: '24 Mai 2026',
      title: 'Scoville League — Standard Challenge',
      location: 'Paris',
      format: 'Standard',
      heat: '8 niveaux',
      cta: 'Réserver sa place',
    },
  ];

  const results = [
    {
      player: 'Lucas M.',
      event: 'Scoville Cup #0',
      ranking: 'Top 1',
      deck: 'Gardevoir ex',
      losses: '0 défaite',
      spice: 'Niveau 0 — aucune sauce',
    },
    {
      player: 'Mélanie R.',
      event: 'Scoville Cup #0',
      ranking: 'Top 4',
      deck: 'Miraidon ex',
      losses: '2 défaites',
      spice: 'Niveau 3 — montée douce',
    },
    {
      player: 'Enzo T.',
      event: 'Scoville Cup #0',
      ranking: 'Top 8',
      deck: 'Deck Off-meta Tinkaton',
      losses: '4 défaites',
      spice: 'Niveau 6 — ça pique fort',
    },
  ];

  const sauces = [
    ['Niveau 1', 'Sauce Verde', '1 500 SHU'],
    ['Niveau 2', 'Jalapeño Kick', '4 000 SHU'],
    ['Niveau 3', 'Chipotle Smash', '8 000 SHU'],
    ['Niveau 4', 'Rouge Arena', '15 000 SHU'],
    ['Niveau 5', 'Flamme League', '30 000 SHU'],
    ['Niveau 6', 'Dracaufeu Heat', '60 000 SHU'],
    ['Niveau 7', 'Inferno Cup', '95 000 SHU'],
    ['Niveau 8', 'Scovillain Core', '140 000 SHU'],
    ['Niveau 9', 'Boss Pepper', '250 000 SHU'],
    ['Niveau 10', 'Final KO', '500 000 SHU'],
  ];

  const deckFeatures = [
    'Déposer sa deck list avant l’évènement',
    'Indiquer le format Standard ou Off-meta',
    'Partager les archétypes marquants du tournoi',
    'Conserver un historique des listes jouées',
  ];

  const faq = [
    {
      q: 'Comment fonctionne la montée du piquant ?',
      a: 'Chaque défaite augmente le niveau de sauce à consommer avec un aliment défini par l’organisation : poulet frit, croquette de fromage ou bouchée végétale.',
    },
    {
      q: 'Quels formats sont proposés ?',
      a: 'Les tournois Scoville Tournament alternent entre le format Standard Pokémon TCG et des soirées Off-meta pour encourager la créativité.',
    },
    {
      q: 'Où les joueurs retrouvent-ils leurs inscriptions ?',
      a: 'Un espace dédié permet de visualiser les tournois déjà rejoints, leur statut, le deck soumis et les horaires utiles.',
    },
  ];

  const logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYCAIAAAD+U+nuAAEAAElEQVR42u19d7ylVbXu7z1Vvde7nTt3zn2n0zM9M5PJJJPJbDKZmSw2m80m2Ww2k8lkMpnMZjKZzWYy2WQymUwmm8lkMpnMZjKZzWYy2WQymUwmm8lkMpnMZjKZzWYy2WQymUwmm8lkMpnMZjKZzWYy2WQymUwmm8lkMpnMZjKZzWYy2WQymUwmm8lkMpnMZjKZzWYy2WQymUwmm8lkMpnMZjKZzWYy2WQymUwmm8lkMpnMZjKZzWYy2WQymUwmm8lkMpnMZjKZzWYy2WQymUwmm8lkMpnMZjKZzWYy2WQymUwmm8lkMpnMZjKZzWYy2WQymUwmm8lkMpnMZjKZzWYy2WSy7zP9v/8fYeH1Ax1gAAAASUVORK5CYII=';

  return (
    <div className="min-h-screen bg-[#081108] text-white selection:bg-lime-400 selection:text-black">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-lime-400/30 bg-gradient-to-br from-red-600/20 to-lime-500/20 shadow-lg shadow-red-500/10">
              <img src={logo} alt="Logo Scoville Tournament" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-lime-300">scoville-tournament.com</p>
              <h1 className="text-xl font-black md:text-2xl">Scoville Tournament</h1>
            </div>
          </div>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm md:flex">
            {['Accueil', 'Calendrier', 'Résultats', 'Decks', 'Inscription', 'Règles', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, '')}`}
                className="rounded-full px-4 py-2 text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="accueil" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(132,204,22,0.22),_transparent_30%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm text-red-200">
                Pokémon TCG • Tournois Standard & Off-meta • Challenge épicé
              </div>
              <h2 className="max-w-3xl text-5xl font-black leading-tight md:text-7xl">
                Des tournois <span className="text-red-400">Pokémon TCG</span> où chaque défaite fait monter le <span className="text-lime-400">piquant</span>.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Scoville Tournament organise régulièrement des évènements compétitifs et fun autour du JCC Pokémon. Les joueurs s’affrontent en format Standard ou Off-meta, publient leur deck list, suivent leurs résultats et relèvent un défi culinaire à base de sauces pimentées.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#calendrier" className="rounded-2xl bg-gradient-to-r from-red-500 to-orange-400 px-6 py-4 font-bold text-black shadow-xl shadow-red-500/20 transition hover:scale-[1.02]">
                  Voir les prochains tournois
                </a>
                <a href="#regles" className="rounded-2xl border border-lime-400/40 bg-lime-400/10 px-6 py-4 font-bold text-lime-200 transition hover:bg-lime-400/20">
                  Comprendre le défi Scoville
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  ['2 formats', 'Standard & Off-meta'],
                  ['8 à 10 niveaux', 'de sauces pimentées'],
                  ['1 communauté', 'jeu, fun et défi'],
                ].map(([value, label]) => (
                  <div key={value} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20">
                    <div className="text-2xl font-black text-white">{value}</div>
                    <div className="mt-1 text-sm text-white/65">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl shadow-black/30">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-black">Parcours du joueur</h3>
                  <span className="rounded-full bg-lime-400/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300">Scoville Flow</span>
                </div>
                <div className="space-y-4">
                  {[
                    ['1', 'Je m’inscris', 'Je choisis un tournoi dans le calendrier et réserve ma place.'],
                    ['2', 'Je soumets mon deck', 'Je publie ma deck list avant le début de la ronde 1.'],
                    ['3', 'Je joue mon event', 'Je dispute mes matchs en Standard ou en Off-meta.'],
                    ['4', 'Je monte en piquant', 'Chaque défaite peut m’envoyer vers une sauce plus intense.'],
                    ['5', 'Je consulte mes résultats', 'Classement, deck joué et niveau de sauce consommé.'],
                  ].map(([step, title, text]) => (
                    <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-lime-400 font-black text-black">
                        {step}
                      </div>
                      <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm leading-6 text-white/65">{text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="calendrier" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-300">Calendrier</p>
              <h3 className="mt-3 text-4xl font-black">Les prochains évènements</h3>
              <p className="mt-3 max-w-2xl text-white/70">Chaque fiche pourra rediriger vers la page détaillée de l’évènement ou vers la plateforme d’inscription choisie.</p>
            </div>
            <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
              À brancher ensuite sur Eventbrite, Limitless, Melee ou un formulaire maison.
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {events.map((event) => (
              <article key={event.title} className="group rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/3 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-lime-400/30">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-lime-400/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-lime-300">{event.format}</span>
                  <span className="text-sm text-white/55">{event.date}</span>
                </div>
                <h4 className="mt-6 text-2xl font-black leading-tight">{event.title}</h4>
                <div className="mt-6 space-y-3 text-sm text-white/70">
                  <div>📍 {event.location}</div>
                  <div>🌶️ {event.heat}</div>
                  <div>🎟️ Places limitées</div>
                </div>
                <button className="mt-8 w-full rounded-2xl bg-black px-4 py-3 font-bold text-white ring-1 ring-white/10 transition group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-lime-400 group-hover:text-black">
                  {event.cta}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="resultats" className="border-y border-white/10 bg-black/30">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-300">Résultats</p>
              <h3 className="mt-3 text-4xl font-black">Historique des performances</h3>
              <p className="mt-3 text-white/70">Le classement peut afficher les joueurs, leur deck, leur nombre de défaites et le niveau de sauce atteint durant l’évènement.</p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="grid grid-cols-6 gap-4 border-b border-white/10 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/45">
                <div>Joueur</div>
                <div>Évènement</div>
                <div>Classement</div>
                <div>Deck</div>
                <div>Défaites</div>
                <div>Piquant atteint</div>
              </div>
              {results.map((row) => (
                <div key={row.player} className="grid grid-cols-1 gap-3 border-b border-white/10 px-6 py-5 text-sm last:border-b-0 md:grid-cols-6 md:gap-4">
                  <div><span className="font-bold text-white md:hidden">Joueur : </span>{row.player}</div>
                  <div><span className="font-bold text-white md:hidden">Évènement : </span>{row.event}</div>
                  <div><span className="font-bold text-white md:hidden">Classement : </span>{row.ranking}</div>
                  <div><span className="font-bold text-white md:hidden">Deck : </span>{row.deck}</div>
                  <div><span className="font-bold text-white md:hidden">Défaites : </span>{row.losses}</div>
                  <div className="font-semibold text-lime-300"><span className="font-bold text-white md:hidden">Piquant : </span>{row.spice}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="decks" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-300">Decks</p>
              <h3 className="mt-3 text-4xl font-black">Déposer et suivre les deck lists</h3>
              <p className="mt-4 text-white/70">Cette section peut devenir un vrai espace joueur avec formulaire d’ajout, validation par l’organisation et bibliothèque des listes jouées.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {deckFeatures.map((item) => (
                <div key={item} className="rounded-3xl border border-lime-400/20 bg-lime-400/8 p-6 shadow-lg shadow-lime-950/20">
                  <div className="text-lg font-bold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="inscription" className="border-y border-white/10 bg-gradient-to-r from-red-950/40 to-lime-950/40">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-black/30 p-8">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-300">Espace inscription</p>
                <h3 className="mt-3 text-3xl font-black">Retrouver ses tournois inscrits</h3>
                <p className="mt-4 text-white/70">Les joueurs pourront consulter leurs inscriptions confirmées, leur statut de paiement, le deck associé et les horaires de convocation.</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {['Tournois à venir', 'Deck soumis', 'Paiement validé', 'Check-in le jour J'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 font-semibold text-white/85">{item}</div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-300">Pages complémentaires</p>
                <h3 className="mt-3 text-3xl font-black">Autres onglets recommandés</h3>
                <div className="mt-8 space-y-4">
                  {[
                    ['Galerie', 'Photos des précédents évènements, podiums, réactions au challenge piment.'],
                    ['Communauté', 'Infos Discord, Instagram, actus, annonces et partenariats.'],
                    ['Contact', 'Formulaire pour questions, demandes de sponsoring ou organisation locale.'],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                      <div className="font-bold">{title}</div>
                      <div className="mt-1 text-sm leading-6 text-white/65">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="regles" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-300">Règles</p>
              <h3 className="mt-3 text-4xl font-black">Le défi Scoville</h3>
              <p className="mt-4 text-white/70">Le principe est simple : selon le nombre de défaites dans le tournoi, le joueur consomme une bouchée accompagnée d’une sauce plus ou moins forte. Vous pourrez ajuster le barème exact selon les formats et le nombre de rondes.</p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="grid grid-cols-3 gap-4 border-b border-white/10 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/45">
                <div>Niveau</div>
                <div>Sauce</div>
                <div>Scoville</div>
              </div>
              {sauces.map(([level, sauce, shu]) => (
                <div key={level} className="grid grid-cols-3 gap-4 border-b border-white/10 px-6 py-4 text-sm last:border-b-0">
                  <div className="font-bold text-white">{level}</div>
                  <div className="text-white/75">{sauce}</div>
                  <div className="font-semibold text-lime-300">{shu}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-red-400/20 bg-red-500/10 p-6 text-sm leading-7 text-red-50">
            Important : prévoir un règlement clair, une charte sécurité alimentaire, les allergènes, des alternatives végétariennes et un consentement explicite des participants avant toute consommation de sauces pimentées.
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 pb-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-300">FAQ</p>
            <h3 className="mt-3 text-4xl font-black">Questions fréquentes</h3>
          </div>
          <div className="mt-10 grid gap-4">
            {faq.map((item) => (
              <div key={item.q} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-bold">{item.q}</h4>
                <p className="mt-2 leading-7 text-white/70">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-bold text-white">Scoville Tournament</span> — Le Pokémon TCG qui met le feu à la table.
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#calendrier" className="hover:text-white">Calendrier</a>
            <a href="#resultats" className="hover:text-white">Résultats</a>
            <a href="#decks" className="hover:text-white">Decks</a>
            <a href="#regles" className="hover:text-white">Règles</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
