var hoje = new Date();
var ano = hoje.getFullYear();
var mes = hoje.getMonth() + 1; 
var dia = hoje.getDate();

if (mes < 10) {
  mes = '0' + mes;
}

if (dia < 10) {
  dia = '0' + dia;
}

data = dia + '/' + mes + '/' + ano;

document.write(data);

