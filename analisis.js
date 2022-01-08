const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSort = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA -salaryB;
    }
);

function esPar(numerito) {
    return(numerito % 2 ===0);
}

function calcularMediaAri(lista) {
    let sumaLista = 0;
     for (let i = 0; i <lista.length; i++){
    sumaLista = sumaLista + lista[i];
    }  
    const promedioLista = sumaLista/lista.length;

    return promedioLista;
    }
    

function medianaSalarios(lista) {
    const mitad =parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAri([personitaMitad1,personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSort);

//Mediana del top 10%
const splceStart = (salariosColSort.length *90) / 100;
const spliceCount = salariosColSort.length -splceStart;

const salariosColTop10 = salariosColSort.splice(
    splceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
})