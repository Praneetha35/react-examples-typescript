import { lazy } from "react";
export const HomePage = lazy(() =>
  import("./pages").then(({ Home }) => ({ default: Home }))
);

export const PageLoad1 = lazy(() =>
  import("./pages").then(({ Page1 }) => ({ default: Page1 }))
);

export const PageLoad2 = lazy(() =>
  import("./pages").then(({ Page2 }) => ({ default: Page2 }))
);
