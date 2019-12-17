let mapa = []
const letras= ['A','B','C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N','O']
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const batalhaNaval = () =>{
    for(let i=0; i<letras.length;i++){
        mapa[i] = letras[i] + numeros[i]
    } 
     console.log (mapa)
}

batalhaNaval()
