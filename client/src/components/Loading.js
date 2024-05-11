import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const Loading = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);

  return (
    <>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default Loading;
