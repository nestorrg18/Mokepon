//VARIABLES GLOBALES
// sections
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionResultadoCombate = document.getElementById("resultado-combate")
const sectionReiniciar = document.getElementById("reiniciar")
const sectionMensajes = document.getElementById("mensajes")
const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")
const contendorTarjetas = document.getElementById("contendorTarjetas")
const contendorBotones = document.getElementById("contendorBotones")
// buttons
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReciniciar = document.getElementById("boton-reiniciar")

// span
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const contenedorImagenJugador = document.getElementById("img-jugador")
const contenedorImagenEnemigo = document.getElementById("img-enemigo")
const spanVictoriasJugador = document.getElementById("victorias-jugador")
const spanVictoriasEnemigo = document.getElementById("victorias-enemigo")
const statusJugador = document.getElementById("ataques-jugador")
const statusEnemigo = document.getElementById("ataques-enemigo")
//
let mokepones = []
let mokeponesEnemigos = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
// inputs
let inputHipodoge 
let inputCapipepo 
let inputRatigueya
let inputLangostelvis
let inputPydos
let inputTucapalma
//ataques
let botonFuego 
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
//
let mascotaJugador 
let mascotaJugadorObjeto
let ataquesMokepon
let ataqueMokeponEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let titulo
//mapa
let lienzo = mapa.getContext("2d")
mapa.width = 700
mapa.height = 500
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./assets/map.png"
//
class Mokepon {
    constructor(nombre, foto, vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 50
        this.alto = 50
        this.x= Math.random()*mapa.width,
        this.y= Math.random()*mapa.height,
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa || foto
        this.velocidadX = 0
        this.velocidadY = 0
        console.log(this.x, this.y)
    }
    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}
///MOKEPONES
let hipodoge = new Mokepon("Hipodoge","./assets/mokepons_mokepon_hipodoge_attack.png", 5, "./assets/hipodoge.png")
let capipepo = new Mokepon("Capipepo","./assets/mokepons_mokepon_capipepo_attack.png", 5, "./assets/capipepo.png")
let ratigueya = new Mokepon("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png", 5, "./assets/ratigueya.png")
let langostelvis = new Mokepon("Langostelvis","./assets/mokepons_mokepon_langostelvis_attack.png", 5, "https://imgur.com/iaJhdyY.png")
let pydos = new Mokepon("Pydos","./assets/mokepons_mokepon_pydos_attack.png", 5, "https://imgur.com/LWkctTb.png")
let tucapalma = new Mokepon("Tucapalma","./assets/mokepons_mokepon_tucapalma_attack.png", 5, "https://i.imgur.com/y3s277X.png")

hipodoge.ataques.push(
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
)
capipepo.ataques.push(
    {nombre: "TIERRA🗻", id: "boton-tierra"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
)
ratigueya.ataques.push(
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
)
langostelvis.ataques.push(
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
)
pydos.ataques.push(
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
)
tucapalma.ataques.push(
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
)
mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, pydos, tucapalma)
///MOKEPONES ENEMIGOS
let hipodogeEnemigo = new Mokepon("Hipodoge","./assets/mokepons_mokepon_hipodoge_attack.png", 5, "./assets/hipodoge.png")
let capipepoEnemigo = new Mokepon("CapipepoEnemigo","./assets/mokepons_mokepon_capipepo_attack.png", 5, "./assets/capipepo.png")
let ratigueyaEnemigo = new Mokepon("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png", 5, "./assets/ratigueya.png")
let langostelvisEnemigo = new Mokepon("Langostelvis","./assets/mokepons_mokepon_langostelvis_attack.png", 5, "https://imgur.com/iaJhdyY.png")
let pydosEnemigo = new Mokepon("Pydos","./assets/mokepons_mokepon_pydos_attack.png", 5, "https://imgur.com/LWkctTb.png")
let tucapalmaEnemigo = new Mokepon("Tucapalma","./assets/mokepons_mokepon_tucapalma_attack.png", 5, "https://i.imgur.com/y3s277X.png")

hipodogeEnemigo.ataques.push(
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
)
capipepoEnemigo.ataques.push(
    {nombre: "TIERRA🗻", id: "boton-tierra"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
)
ratigueyaEnemigo.ataques.push(
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
)
langostelvisEnemigo.ataques.push(
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
)
pydosEnemigo.ataques.push(
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
)
tucapalmaEnemigo.ataques.push(
    {nombre: "AGUA💧", id: "boton-agua"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "FUEGO🔥", id: "boton-fuego"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
    {nombre: "TIERRA🗻", id: "boton-tierra"},
)
mokeponesEnemigos.push(hipodogeEnemigo, capipepoEnemigo, ratigueyaEnemigo, langostelvisEnemigo, pydosEnemigo, tucapalmaEnemigo)
//
function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = "none"
    sectionReiniciar.style.display = "none"
    sectionVerMapa.style.display = "none"
    
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjetas-de-mokepon" for=${mokepon.nombre}>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
            ${mokepon.nombre}
        </label>    
        `
        contendorTarjetas.innerHTML += opcionDeMokepones
        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
        inputLangostelvis = document.getElementById("Langostelvis")
        inputPydos = document.getElementById("Pydos")
        inputTucapalma = document.getElementById("Tucapalma")
    })
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonReciniciar.addEventListener("click", reiciciarjuego)
}


function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display = "none"
    // sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "flex"
    
    if(inputHipodoge.checked){ 
        spanMascotaJugador.innerHTML = inputHipodoge.id 
        mascotaJugador = inputHipodoge.id
        seleccionarMascotaEnemigo()
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
        seleccionarMascotaEnemigo()
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
        seleccionarMascotaEnemigo()
    }else if(inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
        seleccionarMascotaEnemigo()
    }else if(inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
        seleccionarMascotaEnemigo()
    }else if(inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
        seleccionarMascotaEnemigo()
    }else{
        alert("Selecciona una mascota")
    }
    crearJugador(mascotaJugador)
    iniciarMapa()
}

function crearJugador(mascotaJugador) {
    let ataques;
    let foto;
    let nombre;

    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
            foto = mokepones[i].foto
            nombre = mokepones[i].nombre
        }
    }
    mostrarAtaques(ataques);
    function mostrarAtaques(ataques) {
        ataques.forEach((ataque) => {
            ataquesMokepon = `<button id=${ataque.id} class="boton-de-ataque BotonAtaque">${ataque.nombre}</button>`
            contendorBotones.innerHTML += ataquesMokepon;
        })
        botonFuego = document.getElementById("boton-fuego")
        botonAgua = document.getElementById("boton-agua")
        botonTierra = document.getElementById("boton-tierra")
        botones = document.querySelectorAll(".BotonAtaque")
    }
    determinarImagenJugador()
    function determinarImagenJugador() { // Esta funcion ha sido mejorada.
        let imagen = document.createElement('img') 
        imagen.src = foto
        imagen.alt = nombre
        contenedorImagenJugador.appendChild(imagen);
    }
    secuenciaAtaque()
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "FUEGO🔥") {
                ataqueJugador.push("FUEGO")
                boton.disabled = true
                boton.style.cursor = 'not-allowed'
            }else if (e.target.textContent === "AGUA💧") {
                ataqueJugador.push("AGUA")
                boton.disabled = true
                boton.style.cursor = 'not-allowed'
            } else {
                ataqueJugador.push("TIERRA")
                boton.disabled = true
                boton.style.cursor = 'not-allowed'
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo(){
    let enemigo = aleatorio(0, mokepones.length - 1)
    let imagen = document.createElement('img')
    imagen.src = mokepones[enemigo].foto
    imagen.alt = mokepones[enemigo].nombre

    spanMascotaEnemigo.innerHTML = mokepones[enemigo].nombre
    ataqueMokeponEnemigo = mokepones[enemigo].ataques
    contenedorImagenEnemigo.appendChild(imagen);
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, ataqueMokeponEnemigo.length - 1)

    if(ataqueAleatorio == 0|| ataqueAleatorio == 1){
        ataqueEnemigo.push("FUEGO")
    }else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push("AGUA")
    }else{
        ataqueEnemigo.push("TIERRA")
    } 
    combate()
}
function iniciarValidacion(){
    if (ataqueJugador.length === 5) {
        revisarVictorias()
    }
}

function indexAtaques(jugador,enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    // fuego le gana a tierra, agua le gana a fuego, tierra le gana a agua
    let resultado
    for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] === ataqueEnemigo[i]) {
            indexAtaques(i, i)
            resultado = "EMPATE 🙂"
        } else if (
            (ataqueJugador[i] == "FUEGO" && ataqueEnemigo[i] == "TIERRA") ||
            (ataqueJugador[i] == "AGUA" && ataqueEnemigo[i] == "FUEGO") ||
            (ataqueJugador[i] == "TIERRA" && ataqueEnemigo[i] == "AGUA")
        ) { 
            indexAtaques(i, i)
            resultado = "GANASTE 😎"
        } else {
            indexAtaques(i, i)
            resultado = "PERDISTE 😫"
        }
    }
    crearMensaje(resultado)
    iniciarValidacion()
}
function revisarVictorias(){
    if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("GANASTE LA BATALLA✌")
    }else if(victoriasJugador < victoriasEnemigo){
        crearMensajeFinal("PERDISTE LA BATALLA😞")
    }else {
        crearMensajeFinal("HA SIDO UN EMPATE⚖")
    }
}

function crearMensaje(resultadoCombate){
    sectionResultadoCombate.innerHTML = resultadoCombate
    crearMensajeAtaqueJugador()
    crearMensajeAtaqueEnemigo()
    function crearMensajeAtaqueJugador() {
        let parrafo = document.createElement("li")
        if (resultadoCombate === "GANASTE 😎") {
            parrafo.style.color = "#186A3B"
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador
        }if (resultadoCombate === "PERDISTE 😫") {
            parrafo.style.color = "#EB1D36"
        }
        parrafo.innerHTML = "Atacó con " + indexAtaqueJugador
        statusJugador.appendChild(parrafo)
    }
    function crearMensajeAtaqueEnemigo() {
        let parrafo = document.createElement("li")
        if (resultadoCombate === "PERDISTE 😫") {
            parrafo.style.color = "#186A3B"
            victoriasEnemigo++
            spanVictoriasEnemigo.innerHTML = victoriasEnemigo
        }if (resultadoCombate === "GANASTE 😎") {
            parrafo.style.color = "#EB1D36"
        }
        parrafo.innerHTML = "Atacó con " + indexAtaqueEnemigo
        statusEnemigo.appendChild(parrafo)
    }
}


function crearMensajeFinal(resultadoFinal){
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    sectionReiniciar.style.display = "block"
    sectionResultadoCombate.style.display = "none"
}

function reiciciarjuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function pintarCanvas() {
    mascotaJugadorObjeto.x += mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y += mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
    mapaBackground,
    0,
    0,
    mapa.width,
    mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    mokeponesEnemigos.forEach((mokeponEnemigo) => {
        mokeponEnemigo.pintarMokepon()
        if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
            revisarColision(mokeponEnemigo)
        }
    })
}
function moverMokepon(direccion) {
    switch (direccion) {
        case "ArrowUp":
        case "w":
            mascotaJugadorObjeto.velocidadY = -5;
            break;
        case "ArrowLeft":
        case "a":
            mascotaJugadorObjeto.velocidadX = -5;
            break;
        case "ArrowRight":
        case "d":
            mascotaJugadorObjeto.velocidadX = 5;
            break;
        case "ArrowDown":
        case "s":
            mascotaJugadorObjeto.velocidadY = 5;
            break;
        default:
            break;
    }
}
function detenerMokepon() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}
function sePresionoTecla(event) {
    tecla = event.key
    console.log(event.key);
    switch (event.key) {
        case "ArrowUp":
        case "w":
            moverMokepon(tecla)
            break;
        case "ArrowLeft":
        case "a":
            moverMokepon(tecla)
            break;
        case "ArrowRight":
        case "d":
            moverMokepon(tecla)
            break;
        case "ArrowDown":
        case "s":
            moverMokepon(tecla)
            break;
        default:
            break;
    }
}
function iniciarMapa() {
    mapa.width = 700
    mapa.height = 500
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    const controls = document.querySelectorAll('.boton-controles')
    controls.forEach((control)=>{
        control.addEventListener('mousedown',()=>moverMokepon(control.id))
        control.addEventListener('mouseup',()=>detenerMokepon())
        control.addEventListener('touchstart',()=>moverMokepon(control.id))
        control.addEventListener('touchend',()=>detenerMokepon())
    })
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener("keydown", sePresionoTecla)
    window.addEventListener("keyup", detenerMokepon)
    
    console.table(mokepones)
    console.table(mokeponesEnemigos)
}
function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}
function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    detenerMokepon()
    alert("Hay colision con: " + enemigo.nombre)
}
window.addEventListener("load", iniciarJuego)