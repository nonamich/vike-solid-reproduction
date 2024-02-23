import { OnBeforeRenderSync } from "vike/types";

export const onBeforeRender: OnBeforeRenderSync = () => {
  return {
    pageContext: {
      random: (Math.random() + 1).toString(36).substring(2),
    },
  };
};
