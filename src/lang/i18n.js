import { createI18n } from "vue-i18n";

const messages = {
  en: {
    navbar: {
      home: "Home",
      about: "Tools",
    },
    home: {
      title: "WRB2022",
      subtitle: "Test IT lang ",
    },
    tools: {
      title: "Tools",
      subtitle: "Test IT lang ",
    }
  },
  it: {
    navbar: {
      home: "Home",
      about: "Tools",
    },
    home: {
      title: "WRB2022",
      subtitle: "Test EN lang ",
    },
    tools: {
      title: "Tools",
      subtitle: "Test EN lang ",
    }
  },
};


const userLocale = localStorage.getItem("language");
const locale = userLocale && ['en', 'it'].includes(userLocale) ? userLocale : 'en';

const i18n = createI18n({
  legacy: false,
  locale: locale, 
  fallbackLocale: "en",
  messages,
});

export default i18n;