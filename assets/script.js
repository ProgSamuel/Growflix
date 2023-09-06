const videos = document.getElementById('videos');
const painelConteudo = document.getElementById('painelConteudo');
const modalAqui = document.getElementById('modalAqui');
const growcast = document.getElementById('growcast');
const Webinar = document.getElementById('Webinar');
const ux = document.getElementById('ux');
const diversos = document.getElementById('diversos');

function getVideo() {
  for (const item of catalogo) {
    const img = item.img;
    const titulo = item.titulo;
    const link = item.link;
    const categoria = item.categoria;

    painelConteudo.innerHTML += `
      <div class="col-3 iframe-container abrir-modal conteudo cardVideos p-3">
        <div class="row">
          <img class="img w-100" onclick="verVideo({ titulo: '${titulo}', link: '${link}' })" data-bs-toggle="modal" data-bs-target="#myModal" src="${img}" alt="${titulo}">
        </div>
        <div class="row text-light text-center fs-4 complemento-img m-auto textoVideo">
          <div class="col-2 py-2 fs-1" >
            <i class="bi bi-play-circle"></i>
          </div>
          <div class="col-10">
            <div class="h-100 d-flex align-items-center justify-content-start">
              <p class="p-0 mx-3 my-2 tituloVideo">${item.titulo}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
// const videosFiltrados = catalogo.filter(video => video.categoria === categoriaSelecionada);

getVideo();

function verVideo(videoInfo) {
  const titulo = videoInfo.titulo;
  const link = videoInfo.link;
  modalAqui.innerHTML = `
<div class="modal fade" id="myModal" tabindex="-1">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content bg-black">
      <div class="modal-header text-light">
        <h5 class="modal-title ">Assista ao vídeo</h5>
        <button type="button" class="btn-close" onclick="pauseVideo()" data-bs-dismiss="modal" aria-label="Close"> <i class="bi bi-x-circle"></i> </button>
      </div>
      
        <div class="embed-responsive embed-responsive-16by9">
        <iframe id="videoFrame" class="embed-responsive-item m-auto" src="${link}" title="YouTube video player" 
        frameborder="0" style="width: 100vw; height:90vh;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      
    </div>
  </div>
</div>
`
}


