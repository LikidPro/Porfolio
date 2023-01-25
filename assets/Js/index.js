const { createApp } = Vue

  createApp({
    data() {
    return{
        style:"./assets/Css/style.css",
        favicon:"./assets/IMG/Favicon.png"

  
    }
  }, 
  created(){
   
  },
  methods:{
    elegirStylo(elemento){
        let titulo = document.getElementById("titulo-presentacion")
        let titulo2 = document.getElementById("titulo-presentacion2")
        let seleccionDeElemento = document.getElementById("SeleccionDeElemento")
        let seccionAire = document.getElementById("seccionAire")
        let seccionFuego = document.getElementById("seccionFuego")
        let seccionTierra = document.getElementById("seccionTierra")
        let seccionAgua = document.getElementById("seccionAgua")
        let loader = document.getElementById('contenedor-loader');
        let loader1 = document.getElementById("loader")
        if(elemento == "aire"){
            loader.classList.remove("control-display")
            loader.classList.add("loader-full") ;
            seleccionDeElemento.style.display = "none"
            titulo.style.display = "none"
            titulo2.style.display = "none"
            seccionAire.classList.remove("control-display")
            setTimeout(() => {
              loader.classList.remove("loader-full");
              loader.classList.add("control-display")
            
           
            }, 2000);
           

        }
        if(elemento == "fuego"){
            loader.classList.remove("control-display")
            loader.classList.add("loader-full") ;
            seleccionDeElemento.style.display = "none"
            titulo.style.display = "none"
            titulo2.style.display = "none"
            seccionFuego.classList.remove("control-display")
            setTimeout(() => {
              loader.classList.remove("loader-full");
              loader.classList.add("control-display")

            
            
            }, 2000);
            
        }
        if(elemento == "tierra"){
            loader.classList.remove("control-display")
            loader.classList.add("loader-full") ;
            seleccionDeElemento.style.display = "none"
            titulo.style.display = "none"
            titulo2.style.display = "none"
            seccionTierra.classList.remove("control-display")
            setTimeout(() => {
              loader.classList.remove("loader-full");
              loader.classList.add("control-display")

            
          
            }, 2000);
 
        }
        if(elemento == "agua"){
            loader.classList.remove("control-display")
            loader.classList.add("loader-full") ;
            seleccionDeElemento.style.display = "none"
            titulo.style.display = "none"
            titulo2.style.display = "none"
            seccionAgua.classList.remove("control-display")
            setTimeout(() => {
              loader.classList.remove("loader-full");
              loader.classList.add("control-display")

           
          
            }, 2000);
 
        }
        
    },
    volverAElementos(){
        let titulo = document.getElementById("titulo-presentacion")
        let titulo2 = document.getElementById("titulo-presentacion2")
        let seleccionDeElemento = document.getElementById("SeleccionDeElemento")
        let seccionAire = document.getElementById("seccionAire")
        let seccionFuego = document.getElementById("seccionFuego")
        let seccionTierra = document.getElementById("seccionTierra")
        let seccionAgua = document.getElementById("seccionAgua")
        let loader = document.getElementById('contenedor-loader');
        let loader1 = document.getElementById("loader")
      
            loader.classList.remove("control-display")
            loader.classList.add("loader-full") ;
            seccionAire.classList.add("control-display")
            seccionFuego.classList.add("control-display")
            seccionTierra.classList.add("control-display")
            seccionAgua.classList.add("control-display")
            seleccionDeElemento.style.display = "flex"
            titulo.style.display = "block"
            titulo2.style.display = "block"
            setTimeout(() => {
              loader.classList.remove("loader-full");
              loader.classList.add("control-display")

            
             
             
            }, 2000);
           

      
    }
    
    
   },
  computed:{
   

  }
}).mount('#app')