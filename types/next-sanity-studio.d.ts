declare module "next-sanity/studio" {
  import type { ComponentType } from "react";

  export type NextStudioProps = {
    config: unknown;
  };

  export const NextStudio: ComponentType<NextStudioProps>;
  export default NextStudio;
}
