function retorna_fecha_ymdhi(fecha){
    let new_fecha = new Date(fecha);
    let anho = new_fecha.getFullYear();
    let dia = new_fecha.getDate();
    let mes = new_fecha.getMonth()+1;
    let hora = new_fecha.getHours();
    let min = new_fecha.getMinutes();
    let fecha_nueva = `${anho}-${((mes+'').length<2?'0'+mes:mes)}-${((dia+'').length<2?'0'+dia:dia)} ${(hora+'').length<2?'0'+hora:hora}:${(min+'').length<2?'0'+min:min}`;
    return fecha_nueva;
}
