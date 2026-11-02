//Atualiza o relógio no DOM
/*
orbPaths: Lista de configuração.
Cada objeto é uma luz.
x/y = onde ela anda
size/max = tamanho responsivo
color = RGB sem o rgb()
seconds = tempos da animação
delay = atraso pra não andarem juntas
*/
const orbPaths = [
    { 
    x: '-18vw', y: '-12vh', 
    dx: '78vw', dy: '67vh', 
    size: 42, max: 540, 
    color: '49,245,222', 
    seconds: 13, delay: 0 
    },
    { 
        x: 'auto', y: 'auto', 
        right: '-18vw', bottom: '-12vh', 
        dx: '-72vw', dy: '-62vh', 
        size: 38, max: 500, 
        color: '105,203,255', 
        seconds: 16, delay: -6 
    },
    { 
        x: 'auto', y: '-22vh', 
        right: '12vw', 
        dx: '-46vw', dy: '60vh', 
        size: 29, max: 370, 
        color: '115,255,207', 
        seconds: 19, delay: -9 
    },
    { 
        x: '34vw', y: '-24vh', 
        dx: '48vw', dy: '92vh', 
        size: 27, max: 350, 
        color: '100,220,255', 
        seconds: 17, delay: -11 
    },
    { 
        x: '-14vw', y: 'auto', 
        bottom: '8vh', 
        dx: '76vw', dy: '-54vh', 
        size: 25, max: 330, 
        color: '109,255,225', 
        seconds: 15, delay: -4 
    },
    { 
        x: '62vw', y: '8vh', 
        dx: '-54vw', dy: '55vh', 
        size: 22, max: 290, 
        color: '137,221,255', 
        seconds: 18, delay: -13 
    },
    { 
        x: '18vw', y: 'auto', 
        bottom: '-14vh', 
        dx: '67vw', dy: '-58vh', 
        size: 20, max: 270, 
        color: '118,255,225', 
        seconds: 14, delay: -8 
    },
    { 
        x: 'auto', y: 'auto', 
        right: '24vw', bottom: '2vh', 
        dx: '-42vw', dy: '-62vh', 
        size: 19, max: 250, 
        color: '93,201,246', 
        seconds: 20, delay: -5 
    },
    { 
        x: '8vw', y: '14vh', 
        dx: '62vw', dy: '48vh', 
        size: 16, max: 230, 
        color: '82,231,222', 
        seconds: 19, delay: -7 
    },
    { 
        x: '72vw', y: '18vh', 
        dx: '-58vw', dy: '50vh', 
        size: 18, max: 230, 
        color: '100,195,245', 
        seconds: 23, delay: -12 
    },
    { 
        x: '42vw', y: '66vh', 
        dx: '34vw', dy: '-58vh', 
        size: 20, max: 230, 
        color: '105,244,218', 
        seconds: 21, delay: -4 
    },
    { 
        x: '90vw', y: '42vh', 
        dx: '-70vw', dy: '-34vh', 
        size: 16, max: 230, 
        color: '102,177,236', 
        seconds: 25, delay: -16 
    },
    { 
        x: '65vw', y: '90vh', 
        dx: '-56vw', dy: '-67vh', 
        size: 18, max: 230, 
        color: '84,221,238', 
        seconds: 22, delay: -9 
    },
    { 
        x: '24vw', y: '-10vh', 
        dx: '54vw', dy: '72vh', 
        size: 20, max: 230, 
        color: '93,235,214', 
        seconds: 26, delay: -18 
    },
    { 
        x: '-12vw', y: '47vh', 
        dx: '52vw', dy: '-43vh', 
        size: 16, max: 230, 
        color: '92,185,235', 
        seconds: 20, delay: -11 
    },
    { 
        x: '98vw', y: '76vh', 
        dx: '-76vw', dy: '-60vh', 
        size: 18, max: 230, 
        color: '117,230,221', 
        seconds: 24, delay: -5 
    }
];

/*
Cria um <style> na cabeça do documento.
Por que não escrever no style.css?
Porque cada luz tem tamanho e animações diferentes.
Gerar via JS evita repetir 16 vezes a mesma estrutura
*/
const style = document.createElement('style');

style.textContent = orbPaths.map((orb, i) => {
    const name = `orb-${i + 1}`

    /*
    Define left/right e top/bottom. 
    Se x for 'auto', usa right.
    Isso permite posicionar nos 4 cantos
    */
    const pos = [
        orb.x !== 'auto'
        ? `left:${orb.x}`
        : `right:${orb.right}`,

        orb.y !== 'auto'
        ? `top:${orb.y}`
        : `bottom:${orb.bottom}`
    ].join(';');

    return `
        .orb.${name} {
            width:clamp(150px,${orb.size}vw,${orb.max}px);
            height:clamp(150px,${orb.size}vw,${orb.max}px);
            ${pos};
            --orb-rgb:${orb.color};
            animation:${name} ${orb.seconds}s
                ease-in-out ${orb.delay}s
                infinite alternate
        }
        @keyframes ${name} {
            from{transform:translate(0,0) scale(.8)}
            to{transform:translate(${orb.dx},${orb.dy}) scale(1.12)}
        }
    `;
}).join('');

document.head.append(style);

/*
Cria as divs de verdade.
prepend joga no começo do body, atrás do main por causa do z-index
*/
orbPaths.forEach((_, i) => {
    const orb = document.createElement('div');
    orb.className = `orb orb-${i + 1}`;
    orb.setAttribute('aria-hidden', 'true');
    document.body.prepend(orb);
});

/*
    Porque Intl e não geHours():
    Intl respeita fuso e formato pt-BR automaticamente
*/
function updateClock() {
    const agora = new Date();
    // formatToParts: Separa hora/minuto/segundo sem precisar de getHours() manual
    const partes = new Intl.DateTimeFormat(
        'pt-BR',
        {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }
    ).formatToParts(agora);

    // Atualiza a data por extenso
    /*
    Porque Intl de novo: Já traduz dia da semana e mês para pt-BR
    */
    const dataFormatada = new Intl.DateTimeFormat('pt-BR',
        {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        }).format(agora);
        document.getElementById('date').textContent = dataFormatada;

    // Data fora do loop: Só precisa rodar 1 vez por segundo
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
// setInterval 1000ms: suficiente para relógio, ão pesa CPU
setInterval(updateClock, 1000);