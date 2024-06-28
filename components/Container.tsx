import React from "react";

const inputContainer: React.CSSProperties = {

  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  justifyContent:"center",
};

export const InputContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div style={inputContainer}>{children}</div>;
};
