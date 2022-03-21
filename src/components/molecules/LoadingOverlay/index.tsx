import React from "react";
import Loading from "../../atoms/Loading";

interface Props {
  active: boolean;
}

const LoadingOverlay = ({ active }: Props) => {
  if (!active) return <></>;

  return (
    <div className="rounded-lg absolute inset-0 bg-gray-300 flex items-center justify-center opacity-30 z-10">
      <Loading />
    </div>
  );
};

export default LoadingOverlay;
