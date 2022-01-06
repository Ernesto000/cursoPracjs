//const pOri = 100;
//const desc  = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDesc = (precio *porcentajePrecioConDescuento)/100;

    return precioConDesc;
}



//console.log({pOri,desc,porcentajePrecioConDescuento,precioConDesc});