let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
    
    let nomeAtletas = atletas.map(function(nomes){
    return nomes.nome
    })

    let notasObtidas = atletas.map(function(notas){
    return notas.notas
    })
];
calculaMediaValida() {
    this.notas = this.notas.sort();
    this.notas = this.notas.slice(1, 4);
    var acumulador = 0;
    this.notas.forEach((nota) => {
        acumulador = nota + acumulador;
   });
   let mediaValida = acumulador / this.notas.length;
   return mediaValida;
}

console.log(nomeAtletas)
console.log(notasObtidas) 
console.log(calculaMediaValida)
//Lucas Santos