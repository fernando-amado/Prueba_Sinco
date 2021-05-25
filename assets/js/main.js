const informacion = document.querySelector('.contenedorInformacionImportante');
let html = "";
for (let i = 0; i < 4; i++) {
   
    html+=`<section class="seccionFormularioTabla">
    <div class="cuadroTabla">
        <ul >
            <li class="primerLi">Parche ocular (PROGRAMA SST)</li>
            <li>ASEO Y CAFETERÍA</li>
            <li class="tercerLi">Retiro</li>
        </ul>
    </div>
    <div class="cuadroTabla ">
        <label for="Estado">Estado</label>
        <select name="Estado" >
            <option value="">Pendiente</option>
            <option value="">Listo</option>
        </select>
    </div>
    <div class="cuadroTabla ">
        <label for="">Fecha De entrega</label>
        <input type="date">
    </div>
    <div class="cuadroTabla">
        <label for="">Fecha De reposición</label>
        <input type="date" >
    </div>
    <div class="cuadroTabla ultimo">
        <textarea placeholder="Observaciones" ></textarea>
        
        <img class="iconoAdjuntar" src="./assets/iconos/adjuntar.svg" alt="icono adjuntar">
        <button class="botonCompletar">Completar</button>
    </div>
    
</section>`;
informacion.innerHTML=html;
    
}