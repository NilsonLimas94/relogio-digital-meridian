//Atualiza o relógio no DOM
/*
    Porque Intl e não geHours():
    Intl respeita fuso e formato pt-BR automaticamente
*/
function updateClock() {
    const agora = new Date();
    const partes = new Intl.DateTimeFormat(
        'pt-BR',
        {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }
    ).formatToParts(agora);

    for(const parte of partes) {
        if(parte.type === 'hour') {
            document.getElementById('hours').textContent = parte.value;
        }
        if(parte.type === 'minute') {
            document.getElementById('minutes').textContent = parte.value;
        }
        if(parte.type === 'second') {
            document.getElementById('seconds').textContent = parte.value;
        }
    }
}

updateClock();
// setInterval: mantém relógia vivo.
// 1000ms = 1s, suficiente e não pesa CPU
setInterval(updateClock, 1000);