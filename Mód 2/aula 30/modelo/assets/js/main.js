const h1 = document.querySelector('.container h1');
const data = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
//options.timeZoneName = 'short';

h1.innerHTML = data.toLocaleDateString('pt-BR', options );
