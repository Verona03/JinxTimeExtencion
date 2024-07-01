// Definindo a função sem parâmetros
// Declarando as variáveis de data e hora
// Declarando um objeto Date no momento atual
// Obtém a data atual formatada como string
// Obtém o horário atual formatado como string
// Define o conteúdo de texto dos elementos 'date' e 'time'
// Define um intervalo de atualização a cada 1 segundo(1000 milisegundos),
// chamando a função JinxTime para atualizar a data e a hora
// Chama a função JinxTime ao carregar a página para mostrar a data e a hora inicial


document.addEventListener('DOMContentLoaded', function() {
    function JinxTime() {
        const data_jinx = document.getElementById('date');
        const timer_jinx = document.getElementById('time');
        const agora = new Date();
        const date = agora.toLocaleDateString();
        const time = agora.toLocaleTimeString();

        if (data_jinx && timer_jinx) { 
            data_jinx.textContent = `DIA: ${date}`;
            timer_jinx.textContent = `CLOCKS: ${time}`;
        }
    }

    setInterval(JinxTime, 1000);

    JinxTime(); 
});
