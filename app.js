i18next.init({
    lng: 'en', // idioma inicial
    resources: {
      en: {
        translation: {
          "key": "Hello World"
        }
      },
      de: {
        translation: {
          "key": "Hallo Welt"
        }
      }
    }
  }, function(err, t) {
    document.getElementById('output').innerHTML = i18next.t('key');
  });