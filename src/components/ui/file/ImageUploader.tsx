import { pick } from "@react-native-documents/picker";
import React, { ReactNode } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { otherIcons } from "../../../constant/images";
const ImageUploader = ({
  style,
  component,
  setFiels,
}: {
  style?: ViewStyle;
  component?: ReactNode;
  setFiels?: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  return (
    <TouchableOpacity
      style={{
        width: component ? "auto" : 140,
      }}
      onPress={async () => {
        try {
          const pickResult = (await pick({})) as any;
          const file = {
            uri: pickResult?.[0]?.uri,
            name: pickResult?.[0]?.name,
            type: pickResult?.[0]?.type,
          };
          if (setFiels) {
            setFiels((prev: any) => [file,...prev]);
          }
          // const [pickResult] = await pick({mode:'import'}) // equivalent
          // do something with the picked file
        } catch (err: unknown) {
          // see error handling
        }
      }}
    >
      {component ? (
        component
      ) : (
        <View
          style={[
            {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: 140,
              width: 140,
              borderRadius: 10,
              backgroundColor: "#E6F4F1",
            },
            style,
          ]}
        >
          <Image source={otherIcons.Image as ImageSourcePropType} />
          <Text>Upload Document</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ImageUploader;

const styles = StyleSheet.create({});
