/*
Você está desenvolvendo uma API para uma indústria que monitora a temperatura de máquinas durante o 
funcionamento da fábrica. Os sensores enviam leituras de temperatura constantemente para o sistema. 

Porém:
    - Algumas leituras chegam inválidas
    - A equipe de manutenção precisa analisar rapidamente os dados
    - Temperaturas muito altas podem indicar risco de falha
*/
const leituraTemperaturas = [30.0,29.7,32.5,42,33,25,22.6,0,-4,-22,-200,80]

const listaTemperaturasValidas = leituraTemperaturas.filter(temperatura => temperatura >= 0 && temperatura<=100)

console.log(listaTemperaturasValidas)

const existeRiscoFalha = listaTemperaturasValidas.some(temperatura => temperatura>=50)
console.log(existeRiscoFalha)