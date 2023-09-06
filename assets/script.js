const videos = document.getElementById('videos');
const painelConteudo = document.getElementById('painelConteudo');
const modalAqui = document.getElementById('modalAqui');

const filterGrowcast = catalogo.filter((item) => item.categoria === 'growcast');
const filterWebinar = catalogo.filter((item) => item.categoria === 'Webinar');
const filterUX = catalogo.filter((item) => item.categoria === 'UX/UI');
const filterDiversos = catalogo.filter((item) => item.categoria === 'Diversos');

function criarVideoHTML(item) {
  const img = item.img;
  const titulo = item.titulo;
  const link = item.link;
  
  return `
    <div class="col-12 col-md-6 col-xl-4 iframe-container abrir-modal conteudo cardVideos p-3">
      <div class="row">
        <img class="img w-100" src="${img}" alt="${titulo}" style="height:200px;">
        <div class="playerCard m-auto col-12"> <i class="bi bi-play-fill" onclick="verVideo('${titulo}', '${link}')"  data-bs-toggle="modal" data-bs-target="#myModal" ></i> </div>
      </div>
      <div class="row text-light text-center fs-4 complemento-img m-auto textoVideo">
        <div class="col-12">
          <div class="h-100 d-flex align-items-center justify-content-start">
            <p class="p-0 mx-1 my-2 tituloVideo">${titulo}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderizarVideosComNomeSessao(videos, container, nomeSessao) {
  const htmlNomeSessao = `<h2>${nomeSessao}</h2>`;
  const htmlVideos = videos.map(criarVideoHTML).join('');
  container.innerHTML = htmlNomeSessao + htmlVideos;
}

renderizarVideosComNomeSessao(filterGrowcast, growcast, "Growcast");
renderizarVideosComNomeSessao(filterWebinar, Webinar, "Webinar em Flutter");
renderizarVideosComNomeSessao(filterUX, ux, "Jornada UX/UI");
renderizarVideosComNomeSessao(filterDiversos, diversos, "Diversos");

function verVideo(titulo, link) {
  modalAqui.innerHTML = `
    <div class="modal fade" id="myModal" tabindex="-1">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content bg-black">
          <div class="modal-header text-light">
            <h5 class="modal-title ">Assista ao vídeo</h5>
            <button type="button" class="btn-close" onclick="pauseVideo()" data-bs-dismiss="modal" aria-label="Close"> <i class="bi bi-x-circle"></i> </button>
          </div>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe id="videoFrame" class="embed-responsive-item m-auto" src="${link}" title="YouTube video player" frameborder="0" style="width: 100vw; height:90vh;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  `;
}
