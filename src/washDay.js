



export function calcWashingDay(weather, object) {
    let minProbDay = weather.precipprobNext
      .map((valor, indice) => ({ valor, indice }))
      .sort((a, b) => a.valor - b.valor)
      .map((obj) => obj.indice);
    
    
    console.log(minProbDay)

    let day=false
    //console.log(object.days[minProbDay[0]].hours[0].precipprob);
    
    
    for (let i = 0; i < 15; i++){
        let sum=0
        
        console.log(`Day ${i} have: ${object.days[minProbDay[i]].precipprob}`);
        
        for (let j = 16; j < 21; j++){
            
            
            sum += object.days[minProbDay[i]].hours[j].precipprob;
        }   
        let prom = sum / 4;
        if (prom < 15) {
            
            console.log(sum)
            console.log(prom)
            return i
        }
    }


    
}