window.onload = function() {
  carregarJogo(
    "Olympiacos BC VS Fenerbahce Beko.jpg",
    "Olympiacos BC VS Fenerbahce Beko",
    "Quinta Feira (04/05) 21:30",
    "Money Line / Poit Spread / Total Points",
    "Olympiacos BC",
    "-300 / -6.5 / O 230.5 (-115)",
    "Fenerbahce Beko",
    "+240 / +6.5 / U 230.5 (-105)"
  );

  carregarJogo(
    "RealMadridVSPartizanMozzart.jpg",
    "Real Madrid VS Partizan Mozzart",
    "Sexta Feira (05/05) 21:00",
    "Money Line / Poit Spread / Total Points",
    "Real Madrid",
    "+240 / +7.5 / O 234.5 (-115)",
    "Partizan Mozzart",
    "-300 / -7.5 / U 234.5 (-105)"
  );

  carregarJogo(
    "sacramentoGS.png",
    "a",
    "a",
    "a",
    "a"
  );
};

function carregarJogo(
  img,
  titulo,
  data,
  info,
  time1,
  odd1,
  time2,
  odd2
) {
  var NewGame = {
    "img": img,
    "titulo": titulo,
    "data": data,
    "info": info,
    "time1": time1,
    "odd1": odd1,
    "time2": time2,
    "odd2": odd2,
  };

  var games = JSON.parse(localStorage.getItem("games")) || [];
  games.push(NewGame);
  localStorage.setItem("games", JSON.stringify(games));

  var novocard = document.createElement("div");
  novocard.classList.add("catalogo", "principal");
  novocard.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="images/${NewGame.img}" alt="..." class="img">
        <div class="card-body">
            <h5 class="card-title">${NewGame.titulo}</h5>
            <p class="card-text"><strong>${NewGame.data}</strong></p>
            <p>${NewGame.info}</p>
            <p><strong>${NewGame.time1}</strong></p>
            <p>${NewGame.odd1}</p>
            <p><strong>${NewGame.time2}</strong></p>
            <p>${NewGame.odd2}</p>
            <a href="#" class="btn btn-success game-info-toggle">Game Info +</a>
            <div class="game-info" style="display: none;">
              <!-- Conteúdo das casas de apostas -->
              <p>Casas de Apostas:</p>
              <ul>
                <li><img src="images/bet365-logo-0.png" alt="" style="width: 40px;">- 2.00 - Vitória Celtics</li>
                <li><img src="images/betano-logo-1.png" alt="" style="width: 40px;">- 2.00 - Vitória Celtics</li>
                <li><img src="images/Betway_Logo_(black).svg.png" alt="" style="width: 40px;">- 2.00 - Vitória Celtics</li>
                <!-- Adicione mais casas de apostas aqui -->
              </ul>
            </div>
        </div>
    </div>
  `;

  var main = document.getElementById("principal");
  main.appendChild(novocard);

  var gameInfoToggle = novocard.querySelector('.game-info-toggle');
  var gameInfoDiv = novocard.querySelector('.game-info');
  
  gameInfoToggle.addEventListener('click', function(event) {
    event.preventDefault();

    if (gameInfoDiv.style.display === 'block') {
      gameInfoDiv.style.display = 'none';
      gameInfoToggle.textContent = 'Game Info +';
    } else {
      var openGameInfos = document.querySelectorAll('.game-info');

      openGameInfos.forEach(function(info) {
        info.style.display = 'none';
      });

      gameInfoDiv.style.display = 'block';
      gameInfoToggle.textContent = 'Game Info -';
    }
  });
}
