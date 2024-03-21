const nuevaPaginaAbrigos=()=>{
    const container=document.getElementById('main');
    container.innerHTML= ` 
    
    <div class="h1">
            <h1>Abrigos </h1>
            <button onclick="paginaprincipal()">Atras</button>
        </div>
    <div class="main" >
    <div class="item">
                <img src="storage/img/abrigo01.png" alt="abrigo01">
                <div class="container">
                    <p>Chaqueta Impermeable En Gabán Para Dama Azul</p>
                    <div>
                        <p>$ 1.000</p>
                        <button onclick="incrementar('contador')">Agregar</button> 
                    </div> 
                </div>
            </div>
            <div class="item">
                <img src="storage/img/abrigo02.png" alt="abrigo02">
                <div class="container">
                    <p>Chaqueta Impermeable En Gabán Para Dama 'Negro'</p>
                    <div>
                        <p>$ 2.000</p>
                        <button class="btn02" onclick="incrementar('contador')">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="storage/img/abrigo03.png" alt="abrigo03">
                <div class="container">
                    <p>Chaqueta Impermeable En Gabán Para Dama 'Blanco'</p>
                    <div>
                        <p>$ 2.500</p>
                        <button class="btn03" onclick="incrementar('contador')">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="storage/img/abrigo04.png" alt="abrigo04">
                <div class="container">
                    <p>Chaqueta Hombre Cuero </p>
                    <div>
                        <p>$ 2.500</p>
                        <button class="btn04" onclick="incrementar('contador')">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="storage/img/abrigo05.png" alt="abrigo05">
                <div class="container">
                    <p>Chamarra moderna unisex</p>
                    <div>
                        <p>$ 2.000</p>
                        <button class="btn05" onclick="incrementar('contador')">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="storage/img/abrigo06.png" alt="abrigo06">
                <div class="container">
                    <p>Abrigo largo color cafe</p>
                    <div>
                        <p>$ 2.500</p>
                        <button class="btn06" onclick="incrementar('contador')">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="storage/img/abrigo07.png" alt="abrigo07">
                <div class="container">
                    <p>Abrigo de invierno blanco</p>
                    <div>
                        <p>$ 2.000</p>
                        <button class="btn07" onclick="incrementar('contador')">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="storage/img/abrigo08.png" alt="abrigo08">
                <div class="container">
                    <p>Esmoking elegante para hombre</p>
                    <div>
                        <p>$ 2.000</p>
                        <button class="btn08" onclick="incrementar('contador')">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="storage/img/abrigo09.png" alt="abrigo09">
                <div class="container">
                    <p>Abrigo imperneable azul cielo</p>
                    <div>
                        <p>$ 2.500</p>
                        <button class="btn09" onclick="incrementar('contador')">Agregar</button>
                    </div>
                </div>
            </div>
            </main>
    `
}

const paginaprincipal=()=>{
    const container=document.getElementById('main');
    container.innerHTML= ` <div class="h1">
    <h1>Todos los Productos</h1>
</div>
<div class="main" >
    <div class="item">
        <img src="storage/img/abrigo01.png" alt="abrigo01">
        <div class="container">
            <p>Chaqueta Impermeable En Gabán Para Dama Azul</p>
            <div>
                <p>$ 1.000</p>
                <button onclick="incrementar('contador')">Agregar</button> 
            </div> 
        </div>
    </div>
    <div class="item">
        <img src="storage/img/abrigo02.png" alt="abrigo02">
        <div class="container">
            <p>Chaqueta Impermeable En Gabán Para Dama 'Negro'</p>
            <div>
                <p>$ 2.000</p>
                <button class="btn02" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="storage/img/abrigo03.png" alt="abrigo03">
        <div class="container">
            <p>Chaqueta Impermeable En Gabán Para Dama 'Blanco'</p>
            <div>
                <p>$ 2.500</p>
                <button class="btn03" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="storage/img/abrigo04.png" alt="abrigo04">
        <div class="container">
            <p>Chaqueta Hombre Cuero </p>
            <div>
                <p>$ 2.500</p>
                <button class="btn04" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="storage/img/abrigo05.png" alt="abrigo05">
        <div class="container">
            <p>Chamarra moderna unisex</p>
            <div>
                <p>$ 2.000</p>
                <button class="btn05" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="storage/img/abrigo06.png" alt="abrigo06">
        <div class="container">
            <p>Abrigo largo color cafe</p>
            <div>
                <p>$ 2.500</p>
                <button class="btn06" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="storage/img/abrigo07.png" alt="abrigo07">
        <div class="container">
            <p>Abrigo de invierno blanco</p>
            <div>
                <p>$ 2.000</p>
                <button class="btn07" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="storage/img/abrigo08.png" alt="abrigo08">
        <div class="container">
            <p>Esmoking elegante para hombre</p>
            <div>
                <p>$ 2.000</p>
                <button class="btn08" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="storage/img/abrigo09.png" alt="abrigo09">
        <div class="container">
            <p>Abrigo imperneable azul cielo</p>
            <div>
                <p>$ 2.500</p>
                <button class="btn09" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/camisa01.png" alt="camisa01">
        <div class="container">
            <p>Camiseta De Compresión En Licra Uv Slim</p>
            <div>
                <p>$ 1.000</p>
                <button class="btn10" onclick="incrementar('contador')">Agregar</button> 
            </div> 
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/camisa02.png" alt="camisa02">
        <div class="container">
            <p>Camiseta Tipo Polo Color Dama Mujer</p>
            <div>
                <p>$ 2.000</p>
                <button class="btn11" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/camisa03.png" alt="camisa03">
        <div class="container">
            <p>Camiseta Deportiva, Crossfit, Gym, Ejercicios Al Aire Libre</p>
            <div>
                <p>$ 2.500</p>
                <button class="btn12" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/camisa04.png" alt="camisa04">
        <div class="container">
            <p>Camisetas Bandas De Rock Metal Heavy Riffs</p>
            <div>
                <p>$ 2.500</p>
                <button class="btn13" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/camisa05.png" alt="camisa05">
        <div class="container">
            <p>Camiseta Anime Nezuko Kamado Kimetsu No Yaiba Demon Slayer</p>
            <div>
                <p>$ 2.000</p>
                <button class="btn14" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/camisa06.png" alt="camisa06">
        <div class="container">
            <p> Camisa de algodon negra semformal</p>
            <div>
                <p>$ 2.500</p>
                <button class="btn15" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/camisa07.png" alt="camisa07">
        <div class="container">
            <p>Camisa de Cuadros Manga corta, Para Hombre</p>
            <div>
                <p>$ 2.000</p>
                <button class="btn16" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/camisa08.png" alt="camisa08">
        <div class="container">
            <p>Camiseta de Cuadros Roja con negro unisex</p>
            <div>
                <p>$ 2.000</p>
                <button class="btn17" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/camisa09.png" alt="pantalon09">
        <div class="container">
            <p>Camisa de lineas algodon artificial</p>
            <div>
                <p>$ 2.500</p>
                <button class="btn18" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/pantalon01.png" alt="pantalon01">
        <div class="container">
            <p>Pantalon En Dril Licrado Para Hombre</p>
            <div>
                <p>$ 1.000</p>
                <button class="btn19" onclick="incrementar('contador')">Agregar</button> 
            </div> 
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/pantalon02.png" alt="pantalon02">
        <div class="container">
            <p>Pantalón Camuflado Hermoso</p>
            <div>
                <p>$ 2.000</p>
                <button class="btn20" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/pantalon03.png" alt="pantalon03">
        <div class="container">
            <p>Pantalón Jogger Cargo, Táctico, Militar</p>
            <div>
                <p>$ 2.500</p>
                <button class="btn21" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/pantalon04.png" alt="pantalon04">
        <div class="container">
            <p>Pantalón Jeans De Colores Entubado Para Hombre</p>
            <div>
                <p>$ 2.500</p>
                <button class="btn22" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/pantalon05.png" alt="pantalon05">
        <div class="container">
            <p>Pantalon Camuflado, De Bolsillos 100% Dreal</p>
            <div>
                <p>$ 2.000</p>
                <button class="btn23" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/pantalon06.png" alt="pantalon06">
        <div class="container">
            <p>Pantalon Azul Bota Ahcha, Altura de Cadera</p>
            <div>
                <p>$ 2.500</p>
                <button class="btn25" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/pantalon07.png" alt="pantalon07">
        <div class="container">
            <p>Pantalon de Vestir Azul Marino</p>
            <div>
                <p>$ 2.000</p>
                <button class="btn25" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/pantalon08.png" alt="pantalon08">
        <div class="container">
            <p>Jean Casual para hombre</p>
            <div>
                <p>$ 2.000</p>
                <button class="btn26" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src="../storage/img/pantalon09.png" alt="pantalon09">
        <div class="container">
            <p>Jogger Negro Bota Ancha con Bolsillos</p>
            <div>
                <p>$ 2.500</p>
                <button class="btn27" onclick="incrementar('contador')">Agregar</button>
            </div>
        </div>
    </div>
</div>
    `
}
const PaginaCamisas=()=>{
    const container=document.getElementById('main');
    container.innerHTML=`
    <div class="h1">
    <h1>Camisetas </h1>
    <button onclick="paginaprincipal()">Atras</button>
    </div>
    <div class="main" >
    <div class="item">
    <img src="../storage/img/camisa01.png" alt="camisa01">
    <div class="container">
        <p>Camiseta De Compresión En Licra Uv Slim</p>
        <div>
            <p>$ 1.000</p>
            <button class="btn10" onclick="incrementar('contador')">Agregar</button> 
        </div> 
    </div>
</div>
<div class="item">
    <img src="../storage/img/camisa02.png" alt="camisa02">
    <div class="container">
        <p>Camiseta Tipo Polo Color Dama Mujer</p>
        <div>
            <p>$ 2.000</p>
            <button class="btn11" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
<div class="item">
    <img src="../storage/img/camisa03.png" alt="camisa03">
    <div class="container">
        <p>Camiseta Deportiva, Crossfit, Gym, Ejercicios Al Aire Libre</p>
        <div>
            <p>$ 2.500</p>
            <button class="btn12" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
<div class="item">
    <img src="../storage/img/camisa04.png" alt="camisa04">
    <div class="container">
        <p>Camisetas Bandas De Rock Metal Heavy Riffs</p>
        <div>
            <p>$ 2.500</p>
            <button class="btn13" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
<div class="item">
    <img src="../storage/img/camisa05.png" alt="camisa05">
    <div class="container">
        <p>Camiseta Anime Nezuko Kamado Kimetsu No Yaiba Demon Slayer</p>
        <div>
            <p>$ 2.000</p>
            <button class="btn14" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
<div class="item">
    <img src="../storage/img/camisa06.png" alt="camisa06">
    <div class="container">
        <p> Camisa de algodon negra semformal</p>
        <div>
            <p>$ 2.500</p>
            <button class="btn15" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
<div class="item">
    <img src="../storage/img/camisa07.png" alt="camisa07">
    <div class="container">
        <p>Camisa de Cuadros Manga corta, Para Hombre</p>
        <div>
            <p>$ 2.000</p>
            <button class="btn16" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
<div class="item">
    <img src="../storage/img/camisa08.png" alt="camisa08">
    <div class="container">
        <p>Camiseta de Cuadros Roja con negro unisex</p>
        <div>
            <p>$ 2.000</p>
            <button class="btn17" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
<div class="item">
    <img src="../storage/img/camisa09.png" alt="pantalon09">
    <div class="container">
        <p>Camisa de lineas algodon artificial</p>
        <div>
            <p>$ 2.500</p>
            <button class="btn18" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
</main>
    `
}

const paginaPantalones=()=>{
    const container=document.getElementById('main');
    container.innerHTML=`
    <div class="h1">
    <h1>Pantalones </h1>
    <button onclick="paginaprincipal()">Atras</button>
    </div>
    <div class="main" >
    <div class="item">
    <img src="../storage/img/pantalon01.png" alt="pantalon01">
    <div class="container">
        <p>Pantalon En Dril Licrado Para Hombre</p>
        <div>
            <p>$ 1.000</p>
            <button class="btn19" onclick="incrementar('contador')">Agregar</button> 
        </div> 
    </div>
</div>
<div class="item">
    <img src="../storage/img/pantalon02.png" alt="pantalon02">
    <div class="container">
        <p>Pantalón Camuflado Hermoso</p>
        <div>
            <p>$ 2.000</p>
            <button class="btn20" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
<div class="item">
    <img src="../storage/img/pantalon03.png" alt="pantalon03">
    <div class="container">
        <p>Pantalón Jogger Cargo, Táctico, Militar</p>
        <div>
            <p>$ 2.500</p>
            <button class="btn21" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
<div class="item">
    <img src="../storage/img/pantalon04.png" alt="pantalon04">
    <div class="container">
        <p>Pantalón Jeans De Colores Entubado Para Hombre</p>
        <div>
            <p>$ 2.500</p>
            <button class="btn22" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
<div class="item">
    <img src="../storage/img/pantalon05.png" alt="pantalon05">
    <div class="container">
        <p>Pantalon Camuflado, De Bolsillos 100% Dreal</p>
        <div>
            <p>$ 2.000</p>
            <button class="btn23" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
<div class="item">
    <img src="../storage/img/pantalon06.png" alt="pantalon06">
    <div class="container">
        <p>Pantalon Azul Bota Ahcha, Altura de Cadera</p>
        <div>
            <p>$ 2.500</p>
            <button class="btn25" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
<div class="item">
    <img src="../storage/img/pantalon07.png" alt="pantalon07">
    <div class="container">
        <p>Pantalon de Vestir Azul Marino</p>
        <div>
            <p>$ 2.000</p>
            <button class="btn25" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
<div class="item">
    <img src="../storage/img/pantalon08.png" alt="pantalon08">
    <div class="container">
        <p>Jean Casual para hombre</p>
        <div>
            <p>$ 2.000</p>
            <button class="btn26" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
<div class="item">
    <img src="../storage/img/pantalon09.png" alt="pantalon09">
    <div class="container">
        <p>Jogger Negro Bota Ancha con Bolsillos</p>
        <div>
            <p>$ 2.500</p>
            <button class="btn27" onclick="incrementar('contador')">Agregar</button>
        </div>
    </div>
</div>
</div>
</main>
`
}

const incrementar=async(id)=>{
    let contador = parseInt(document.getElementById(id).innerText);
    contador++;
    document.getElementById(id).innerText = contador;
    await obtenerArticulos()
}

const mostrarCarrito=()=>{
    const contenedor=document.getElementById('main');
    carrito.forEach(articulo={

    })
    contenedor.innerHTML=`
    
    `

}
// const obtenerArticulos = () => {
//     const contenedorArticulos = document.getElementById("idArticulo");
//     if (contenedorArticulos) {
//         const articulos = contenedorArticulos.querySelectorAll(".articulo"); 

//         let listaArticulos = []; 

//         articulos.forEach(articulo => {

//             let ArticuloAgregar = {
//                 nombre: articulo.querySelector(".nombre").innerText, 
//                 imagen: articulo.querySelector(".imagen").getAttribute("src") 
//             };

    
//             listaArticulos.push(ArticuloAgregar);
//         });

//         console.log(listaArticulos); 
//     } else {
//         console.log("No se encontró el contenedor de artículos");
//     }
// };

