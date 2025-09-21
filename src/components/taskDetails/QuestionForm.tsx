import React, { useState } from "react";
import { Image, ImageSourcePropType, TextInput, View } from "react-native";
import { otherIcons } from "../../constant/images";
import FlexText from "../shered/FlexText";
import ButtonBG from "../ui/buttons/ButtonBG";
import ImageUploader from "../ui/file/ImageUploader";

const QuestionForm = () => {
  const [value, setValue] = useState("");
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#E6F4F1",
        marginTop: 10,
      }}
    >
      <TextInput
        value={value}
        style={{
          textAlignVertical: "top",
        }}
        multiline={true}
        onChangeText={(text) => setValue(text)}
        placeholder="Type your text here..."
      />
      <FlexText
        style={{
          justifyContent: "space-between",
        }}
      >
        <ImageUploader
          component={<Image source={otherIcons.Image as ImageSourcePropType} />}
        />
        <ButtonBG
          text="Send"
          style={{
            width: "auto",
          }}
          handler={() => console.log("")}
        />
      </FlexText>
    </View>
  );
};

export default QuestionForm;
