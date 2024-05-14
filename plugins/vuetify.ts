import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VBtn } from "vuetify/components";

const accadisLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#004c93",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    accadis: "#004c93",
  },
};

const accadisDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#1976D2",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    accadis: "#004c93",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      ...components,
    },
    directives,
    theme: {
      defaultTheme: "accadisLightTheme",
      themes: {
        accadisLightTheme,
        accadisDarkTheme,
      },
    },
    aliases: {
      VDevBtn: VBtn,
      AccButton: VBtn,
      VPlainTextField: components.VTextField,
    },
    defaults: {
      AccButton: {
        color: "primary",
        variant: "flat",
        rounded: "0",
        size: "x-large",
      },

      VCard: {
        variant: "flat",
        rounded: "0",
      },

      VDevBtn: {
        density: "compact",
        variant: "outlined",
        rounded: "0",
      },
      global: {
        ripple: true,
      },
      VSelect: {
        density: "compact",
        variant: "underlined",
        chips: true,
      },
      VExpansionPanel: {
        density: "compact",
      },
      VTextField: {
        variant: "underlined",
        density: "compact",
      },
      VPlainTextField: {
        variant: "plain",
        density: "compact",
        class: "font-weight-bold",
      },
      VFileInput: {
        variant: "outlined",
        density: "compact",
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
