import React from "react";

export const LazyLoading = React.lazy(() =>
  import("../../Routes/Home/Home.jsx")
);
