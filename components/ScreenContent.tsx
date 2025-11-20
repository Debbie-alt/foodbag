import React from "react";
import { Text, View, ScrollView } from "react-native";
import { EditScreenInfo } from "./EditScreenInfo";

type ScreenContentProps = {
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ path, children }: ScreenContentProps) => {
  return (
    <ScrollView className=" flex-1 h-screen bg-[#F50316]">
      <EditScreenInfo path={path} />
      {children}
    </ScrollView>
  );
};
