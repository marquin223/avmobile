import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import Header from "@/components/header";
import { useRouter, useSegments } from "expo-router";
import {
  useActionSheet,
  ActionSheetProvider,
} from "@expo/react-native-action-sheet";
import { Ionicons } from "@expo/vector-icons";

jest.mock("expo-font", () => ({
  loadAsync: jest.fn(),
  isLoaded: jest.fn(() => true), // Simula que as fontes já estão carregadas
}));

jest.mock("@expo/vector-icons", () => ({
  Ionicons: {
    name: "Ionicons",
    default: jest.fn(() => null),
  },
}));

jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({ push: jest.fn(), replace: jest.fn() })),
  useSegments: jest.fn(() => ["listagem"]),
}));

jest.mock("@expo/react-native-action-sheet", () => ({
  useActionSheet: jest.fn(() => ({
    showActionSheetWithOptions: jest.fn(),
  })),
}));

describe("Header Component", () => {
  it("deve exibir o título correto para a página listagem", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Listagem")).toBeTruthy();
  });

  it("deve ter a cor de fundo correta", () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId("header").props.style.backgroundColor).toBe("#40e0d0");
  });
});
