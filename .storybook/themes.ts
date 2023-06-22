export const lightTheme = {
  colors: {
    background: "#ffffff",
    text: "#333333",
    primary: "#6200ee",
    secondary: "#03dac6",
    error: "#b00020",
    surface: "#ffffff",
  },
  // Adicione mais estilos específicos do tema light, se necessário
};

export const darkTheme = {
  colors: {
    background: "#121212",
    text: "#ffffff",
    primary: "#bb86fc",
    secondary: "#03dac6",
    error: "#cf6679",
    surface: "#121212",
  },
  // Adicione mais estilos específicos do tema dark, se necessário
};

export const customViewports = {
  MOBILE: {
    name: "Cellphone Example",
    styles: {
      width: "415px",
      height: "915px",
    },
  },
  IPAD: {
    name: "iPad Example",
    styles: {
      width: "810px",
      height: "1080px",
    },
  },
  DESKTOP: {
    name: "Desktop Example",
    styles: {
      width: "1300px",
      height: "1080px",
    },
  },
};

export const globalTranslate = [
  { value: "en", right: "🇺🇸", title: "English" },
  { value: "fr", right: "🇫🇷", title: "Français" },
  { value: "es", right: "🇪🇸", title: "Español" },
  { value: "zh", right: "🇨🇳", title: "中文" },
  { value: "kr", right: "🇰🇷", title: "한국어" },
];
