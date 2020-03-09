import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const customViewports = {
  minResponsive: {
    name: "Min Responsive",
    styles: {
      width: "160px",
      height: "963px"
    }
  }
};

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      // or ...MINIMAL_VIEWPORTS,
      ...customViewports
    },
  }
});
