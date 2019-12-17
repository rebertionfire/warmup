const exemplo = 15
const exemplo1 = 5
const exemplo2 = 3

const wildcode = (number) => {
    if (number%5 === 0 && number%3 === 0){
       return console.log('WildCode')
    }
    if (number%3 === 0){
        console.log('Wilde')
    }
    if (number%5 === 0 ){
        console.log('Code')
    }
    

}


wildcode(exemplo)