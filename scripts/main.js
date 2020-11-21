let infoDivs = document.querySelectorAll('.info-div');
let albums = document.querySelectorAll('.album');
let players = document.querySelectorAll('audio');



function hideAll() {
  infoDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

albums.forEach(function(el) {
  el.onclick = (e) => {

    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });

    hideAll();

      switch (e.target.getAttribute('id')) {
        case 'jingle':
          document.querySelector('#christmas')
            .style.display = 'block';
          break;
        case 'fly':
          document.querySelector('#flyme')
            .style.display = 'block';
          break;
        case 'new':
          document.querySelector('#ny')
            .style.display = 'block';
          break;
        case 'my':
          document.querySelector('#myway')
            .style.display = 'block';
              break;
        }

        switch (e.target.getAttribute('id')) {
          case 'jingle':
            document.querySelector('#soundtrack1')
              .style.display = 'block';
            break;
          case 'fly':
            document.querySelector('#soundtrack2')
              .style.display = 'block';
            break;
          case 'new':
            document.querySelector('#soundtrack3')
              .style.display = 'block';
            break;
          case 'my':
            document.querySelector('#soundtrack4')
              .style.display = 'block';
                break;
          }
      }
    });
