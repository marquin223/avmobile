import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ImageButton from "../components/ImageButton";
import { ImageSourcePropType } from "react-native";

describe("ImageButton Component", () => {
  const mockSource: ImageSourcePropType = {
    uri: "https://example.com/image.png",
  };
  const mockOnPress = jest.fn();

  it("deve renderizar a imagem corretamente", () => {
    const { getByTestId } = render(
      <ImageButton source={mockSource} onPress={mockOnPress} />
    );
    expect(getByTestId("image-button-image")).toBeTruthy();
  });

  it("deve chamar a função onPress quando pressionado", () => {
    const { getByTestId } = render(
      <ImageButton source={mockSource} onPress={mockOnPress} />
    );
    fireEvent.press(getByTestId("image-button"));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
