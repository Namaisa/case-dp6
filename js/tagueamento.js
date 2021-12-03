// Biblioteca do Google Analytics
(function(i,s,o,g,r,a,m) {

    i['GoogleAnalyticsObject']=r;

    i[r]=i[r]||function() {
        (i[r].q=i[r].q||[]).push(arguments)
    },i[r].l=1*new Date();
    
    a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];
    
    a.async=1;
    a.src=g;
    m.parentNode.insertBefore(a,m)

})(
    window, 
    document, 
    'script', 
    'https://www.google-analytics.com/analytics.js',
    'ga'
);

ga('create', 'UA-12345-6', 'auto');

// Eventos

ga('send', 'pageview', location.pathname);

$('.menu-lista-contato').click(() =>  {   
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo')
});

$('.menu-lista-download').click(() => 
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf')
);

$('.card-montadoras').each((i, card) => {

    card.addEventListener('click', () => 
        ga('send', 'event', 'analise', 'ver_mais', card.dataset.name)
    );  
});

let camposDeContato = $('.campo-contato');

camposDeContato.each((i, campo) => {

    if(i < camposDeContato.length - 1) {

        campo.addEventListener('blur', () => 
            ga('send', 'event', 'contato', campo.id, 'preencheu')
        );
    } else {
        campo.addEventListener('focus', () => 
            ga('send', 'event', 'contato', campo.id, 'preencheu')
        );
    }
})

$('#enviar-form').click(() => {
    setTimeout(() => {

        if($('.lightbox-open').length > 0) 
            ga('send', 'event', 'contato', 'enviado', 'enviado');

    }, 2000)
}) 