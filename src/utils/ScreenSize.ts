import { Dimensions } from "react-native";

export const ScreenSize = () => {
  const { height, width } = Dimensions.get("window");
  return { width, height };
};
export default ScreenSize;
