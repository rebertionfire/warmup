const exemplo = [3,1,10,99, -1, 100]
const resposta = []

const highLow = (array) =>{
    let low = array[1];

    for (let i=0; i<array.length; i++){
       if (array[i]<low){
           low = array[i]  
          }
    }
    resposta.push(low)

    let high = array[1]

    for (let j=0; j<array.length; j++){
        if (array[j]>high){
            high = array[j]
        }
    }
    resposta.push(high)
    console.log(resposta)
}

highLow(exemplo);