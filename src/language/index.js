const languages = [
  {
    id: "en",
    title: {
      en: "English",
      es: "Inglés",
      por: "Inglês",
    },
    isDefault: true,
  },
  {
    id: "es",
    title: {
      en: "Spanish",
      es: "Español",
      por: "Espanhol",
    },
  },
  {
    id: "por",
    title: {
      en: "Portuguese",
      es: "Portugués",
      por: "Português",
    },
  },
];

const i18n = {
  languages,
  base: languages.find((item) => item.isDefault).id,
};

export { i18n, languages };
