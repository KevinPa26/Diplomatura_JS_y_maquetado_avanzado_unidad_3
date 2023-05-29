function movilidad(numero){
    const obj = {pie: 1000, bicicleta: 10000, colectivo: 30000, auto: 100000, avion: 1000000000000000000000000000000}
    const claves = Object.keys(obj)
    for (let index = 0; index < claves.length; index++) {
        if(numero <= obj[claves[index]]){
            return claves[index];
        }
    }
}