import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

type ImageButtonProps = {
  source: ImageSourcePropType;
  onPress: () => void;
  style?: object;
};

const ImageButton: React.FC<ImageButtonProps> = ({
  source,
  onPress,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Image source={source} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
  },
  pressed: {
    opacity: 0.6,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default ImageButton;
