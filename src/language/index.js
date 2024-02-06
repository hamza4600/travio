const languages = [
    { id: "en", title: "English", isDefault: true },
    { id: "es", title: "Spanish" },
    { id: "por", title: "Portuguese" },
];

const i18n = {
    languages,
    base: languages.find((item) => item.isDefault).id,
};

export { i18n, languages };
