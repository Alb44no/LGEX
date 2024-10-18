// Mapa de bandeiras
const flagMap = {
    pt: 'img/pt.png',
    fr: 'img/fr.png',
    de: 'img/de.png',
    en: 'img/en.png'
};



// Função para trocar idioma e bandeira
function changeLanguage(language) {
    // Troca o texto com base na língua selecionada
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[language][key]) {
            el.textContent = translations[language][key];
        }
    });
    
    // Salva o idioma no localStorage
    localStorage.setItem('selectedLanguage', language);

    // Troca a bandeira no dropdown
    const flagIcon = document.querySelector('#selected-flag');
    flagIcon.src = flagMap[language];
    flagIcon.alt = language;
   
    //Eliminar a bandeira das opções possíevis caso for selecionado
    const ptChange = document.querySelector('#pt');
    const frChange = document.querySelector('#fr');
    const deChange = document.querySelector('#de');
    const enChange = document.querySelector('#en');
  
    if(flagIcon.src==ptChange.src){
        ptChange.remove(); // Remove completamente o elemento 
    }
    if(flagIcon.src==frChange.src){
        frChange.remove(); // Remove completamente o elemento 
        

    }
    if(flagIcon.src==deChange.src){
        deChange.remove(); // Remove completamente o elemento 
        
    }
    if(flagIcon.src==enChange.src){
        enChange.remove(); // Remove completamente o elemento 
        
    }
  
         
}

// Ao carregar a página, carrega o idioma salvo no localStorage
document.addEventListener("DOMContentLoaded", function() {
    var savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
        
    } else {
        changeLanguage('pt'); // Idioma padrão é o Português
    }

    // Adiciona eventos de clique às bandeiras no dropdown
    document.querySelectorAll('.dropdown-flag').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLanguage = this.getAttribute('data-language');
            changeLanguage(selectedLanguage);
            
   
        });
    });
});
