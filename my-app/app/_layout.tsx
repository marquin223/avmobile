import React from "react";
import { Slot } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

const Layout = () => {
  return (
    <ActionSheetProvider>
      <Slot />
    </ActionSheetProvider>
  );
};

export default Layout;
