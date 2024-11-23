/**
 * Retorna lista na ordem aleatória.
 */
function shuffle(lst){
    let res = [],
        indices = [];
    
    while (res.length < lst.length) {
        let idx = randint(0, lst.length - 1);
        if (!indices.includes(idx)) {
            res.push(lst[idx]);
            indices.push(idx);
        }
    }
    
    return res;    
}

function randint(a, b) {
    return (Math.random() * (b + 1 - a) + a) | 0;
}

/**
 * Retorna n exemplos a partir da lista sem reposição.
 */
function sample(lst, n) {
    let res = [];
        python= [];

    while (res.length < n) {
        let l = randint(0, lst.length - 1);
        if (!python.includes(l)) {
            res.push(lst[l]);
            python.push(l);
        }
    }

    return res;
} 



/**
 * Inicializa as cartas em ordem aleatória
 */
$(() => {
    let cartoes = $('.cartao'),
        aleatorio = shuffle([
            '01', '02', '03', '04', '05', '06',
            '01', '02', '03', '04', '05', '06',
        ]);

    for (let i=0; i < cartoes.length; i++) {
        let cartao = cartoes[i],
            img = 'imgs/' + aleatorio[i] + '.jpg';
        $(cartao).attr('src', img);
    }
});


/**
 * Controle clique nas cartas
 */
let selecionada = null;


/**
 * Controle de pontos dos jogadores
 */

let jogador1 = 0;
let jogador2 = 0;
let vez = true;
 
$(() => {
    $(".cartao")
        .on("click", ev => {
            let clicada = ev.target;
            
            if (selecionada === null) {
                $(clicada).toggleClass('virado');
                selecionada = clicada;
            } 
            
            else if (clicada === selecionada) {
                alert('Você deve clicar em outra imagem!');
            }
            
            else if ($(selecionada).attr('src') === 
                     $(clicada).attr('src')) {

                $(clicada).toggleClass('virado');
                $(clicada).toggleClass('bloqueada');
                $(selecionada).toggleClass('bloqueada');
                $(clicada).off('click');
                $(selecionada).off('click');
                if (vez) {
                    jogador1+=1;
                }
                else {
                    jogador2+=1;
                }

                if(jogador1+jogador2 === 6) {
                    alert(`Jogador1 ${jogador1} x ${jogador2} Jogador2`)
                }
                selecionada = null;


            }
            
            else if (selecionada !== null) {
                $(clicada).toggleClass('virado');
                let selecionadaCopia = selecionada;
                selecionada = null;
                vez = !vez;
                setTimeout(() => {
                    $(clicada).toggleClass('virado');
                    $(selecionadaCopia).toggleClass('virado');
                }, 1000);
            }
            
        });
});

function copyList(lst) {
	var lista = [];
	
	for(i = 0; i < lst.length; i++) {
		lista.push(lst[i]);
    }
	
	return lista;
}


