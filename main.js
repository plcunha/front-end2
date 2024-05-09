const moment = require('moment');

function adicionarDias(data, dias) {
    return moment(data).add(dias, 'days').toDate();
}

function diferencaEntreDatas(data1, data2) {
    return moment(data1).diff(moment(data2), 'days');
}

function formatarData(data, formato) {
    return moment(data).format(formato);
}

let data = new Date();
console.log("Data original: ", data);

let novaData = adicionarDias(data, 5);
console.log("Nova data após adicionar 5 dias: ", novaData);

let diferenca = diferencaEntreDatas(novaData, data);
console.log("Diferença entre as datas: ", diferenca, "dias");

let dataFormatada = formatarData(data, 'DD/MM/YYYY');
console.log("Data formatada: ", dataFormatada);