import React from "react";
import CardSkeleton from "./CardSkeleton";

function Loading({ children }) {
  return (
      <CardSkeleton
        label="Loading..."
        labelHeight="82vh"
        bodyHeight="82vh"
      />
  );
}

export default Loading;
