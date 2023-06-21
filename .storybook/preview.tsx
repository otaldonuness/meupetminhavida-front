import * as NextImage from "next/image";
import React, { Suspense, useEffect } from "react";
import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, customViewports } from "./themes";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const preview: Preview = {
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
    storySort: {
      order: ["Examples", "Docs", "Demo"],
    },
    viewport: {
      viewport: {
        viewports: { ...INITIAL_VIEWPORTS, ...customViewports },
        defaultViewport: "iPad",
      },
      defaultViewport: "someDefault",
    },

    actions: { argTypesRegex: "^on.*" },
    options: {
      storySort: {
        order: ["Intro", "Components"],
        method: "alphabetical",
        locales: "pt-BR",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === "" ? darkTheme : lightTheme;

      return (
        <Suspense fallback={<div>loading translations...</div>}>
          <ThemeProvider theme={theme}>
            <Story />
          </ThemeProvider>
        </Suspense>
      );
    },
  ],
};

export default preview;

export const InputWithoutAutofill = () => <input type="text" />;

InputWithoutAutofill.parameters = {
  a11y: {
    // Avoid doing this, as it will fully disable all accessibility checks for this story.
    disable: true,

    // Instead, override rules 👇
    // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    config: {
      rules: [
        {
          // You can exclude some elements from failing a specific rule:
          id: "autocomplete-valid",
          selector: '*:not([autocomplete="nope"])',
        },
        {
          // You can also signify that a violation will need to be fixed in the future
          // by overriding the result of a rule to return "Needs Review"
          // rather than "Violation" if the rule fails:
          id: "landmark-complementary-is-top-level",
          reviewOnFail: true,
        },
      ],
    },
  },
};

export const Inaccessible = () => (
  <button style={{ backgroundColor: "red", color: "darkRed" }}>
    Inaccessible button
  </button>
);
Inaccessible.parameters = {
  a11y: {
    config: {
      rules: [{ id: "color-contrast", enabled: false }],
    },
  },
};
