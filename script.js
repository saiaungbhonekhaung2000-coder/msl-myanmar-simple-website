const teams = [{'name': 'Yangon Galacticos', 'tag': 'YG', 'place': '1st', 'players': ['Ying', 'Hannn', 'Kaize', 'Sanji', 'Blink']}, {'name': 'Team 7', 'tag': 'T7', 'place': '2nd', 'players': ['Aether', 'Super Mark', 'Pisi', 'Slayer', 'Cenzuq']}, {'name': 'Falcon Esports', 'tag': 'FE', 'place': '3rd', 'players': ['New Cold', 'Lucky', 'Ps', 'OP Tempest', 'KidX']}, {'name': 'Mythic SEAL', 'tag': 'MS', 'place': '4th', 'players': ['Madzy', 'K1NGFLASH', 'YoYoe', 'Altaaа', 'Bo Ye']}, {'name': 'Paladins', 'tag': 'PA', 'place': '5th–6th', 'players': ['Kaizen', 'Rocco', 'Avatar', 'Yuto', 'Cuzzo']}, {'name': 'Wyverns', 'tag': 'WY', 'place': '5th–6th', 'players': ['Super Khant', 'Rixum Leo', 'Super Bird', 'Kafuu', 'Shine CG'], 'note': 'formerly Raion Esports'}, {'name': 'AI Esports', 'tag': 'AI', 'place': '7th–8th', 'players': ['Young X', 'ShiZuu', 'E Benji', 'Cherryqt', 'Ruuketzy'], 'note': "formerly J'DAI"}, {'name': 'Team Secret', 'tag': 'TS', 'place': '7th–8th', 'players': ['Coin', 'Dear', 'Niko', 'Shyco', 'J3X']}, {'name': 'TEC BG', 'tag': 'TEC', 'place': 'Qualified', 'players': ['CK', 'Daxx', 'Xian', 'Beni', 'Than Pouk']}, {'name': 'D Family', 'tag': 'DF', 'place': 'Qualified', 'players': ['Daniela', 'Tension', 'SAN', 'Yuuji', 'Kage']}];

const matches = [
  {date:"Upcoming", time:"7:00 PM", a:"Falcon Esports", b:"Team 7"},
  {date:"Upcoming", time:"8:30 PM", a:"Mythic SEAL", b:"Team Secret"},
  {date:"Upcoming", time:"7:00 PM", a:"Yangon Galacticos", b:"Paladins"}
];

const standings = teams.map((t, i) => [
  t.name,
  Math.max(0, 4 - i % 4),
  Math.min(4, i % 4),
  Math.max(0, (4 - i % 4) * 2)
]);

document.querySelector("#match-list").innerHTML = matches.map(m => `
  <article class="match">
    <div class="match-date">${m.date} · ${m.time}</div>
    <div class="teams"><span>${m.a}</span><span class="vs">VS</span><span>${m.b}</span></div>
  </article>`).join("");

document.querySelector("#standings-body").innerHTML = standings.map((t,i) => `
  <tr><td class="rank">${i+1}</td><td>${t[0]}</td><td>${t[1]}</td><td>${t[2]}</td><td>${t[3]}</td></tr>`).join("");

document.querySelector("#team-list").innerHTML = teams.map(t => `
  <article class="team-card">
    <div class="team-head">
      <div class="badge">${t.tag}</div>
      <div class="team-name"><strong>${t.name}</strong><small>${t.note || "MSL Myanmar Season 4"}</small></div>
      <span class="place">${t.place}</span>
    </div>
    <div class="roster-title">MAIN ROSTER</div>
    <div class="roster">${t.players.map((p,i) => `<div><span class="role">${["EXP","JGL","MID","GOLD","ROAM"][i]}</span>${p}</div>`).join("")}</div>
  </article>`).join("");
