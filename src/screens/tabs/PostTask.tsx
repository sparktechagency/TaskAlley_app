import React, { useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FlexText from "../../components/shered/FlexText";
import SectionHeading from "../../components/shered/SectionHeading";
import ButtonBG from "../../components/ui/buttons/ButtonBG";
import ButtonTransparentBG from "../../components/ui/buttons/ButtonTransparentBG";
import ImageUploader from "../../components/ui/file/ImageUploader";
import PostTaskFields from "../../formFields/PostTaskFields";
import { handlePostTask } from "../../handler/postTask";
import SafeAreaProvider from "../../providers/SafeAreaProvider";
import { FieldsType } from "../../types/Types";
import Navigate from "../../utils/Navigate";
import { RenderField } from "../../utils/RenderField";
import ScreenSize from "../../utils/ScreenSize";
const slide = [
  {
    skip: 0,
    keep: 2,
  },
  {
    skip: 2,
    keep: 1,
  },
  {
    skip: 3,
    keep: 5,
  },
  {
    skip: 8,
    keep: 2,
  },
  {
    skip: 10,
    keep: 1,
  },
];
const title = ["Task Overview", "Task Details", "Date & Time", "Budget "];

const PostTask = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { height } = ScreenSize();
  const { fields, setFields } = PostTaskFields();
  const { top, bottom } = useSafeAreaInsets();
  const navigate = Navigate();

  return (
    <SafeAreaProvider backButtonText="Post Task">
      <View
        style={{
          flex: 1,
          gap: 6,
          justifyContent: "flex-start",
          minHeight: height - top - bottom,
          paddingBottom: 90,
          marginTop: 10,
        }}
      >
        <SectionHeading text={title[currentSlide]} showViewButton={false} />
        {fields
          ?.slice(
            slide[currentSlide].skip,
            slide[currentSlide].keep + slide[currentSlide].skip
          )
          ?.map((field: FieldsType) => RenderField(field, setFields))}
        {currentSlide == 1 && (
          <View>
            <ImageUploader />
          </View>
        )}
        <FlexText
          style={{
            marginTop: 6,
          }}
        >
          {currentSlide != 0 && (
            <ButtonTransparentBG
              style={{
                width: "auto",
              }}
              text="Previous"
              handler={() => setCurrentSlide((prev) => prev - 1)}
            />
          )}
          <ButtonBG
            style={{
              width: "auto",
            }}
            text={currentSlide == 3 ? "Post" : "Continue"}
            handler={() => {
              const isValid = handlePostTask(
                fields?.slice(
                  slide[currentSlide].skip,
                  slide[currentSlide].keep + slide[currentSlide].skip
                ),
                setFields,
                currentSlide
              );
              console.log(isValid);
              if (isValid && currentSlide < 3) {
                setCurrentSlide((prev) => prev + 1);
              } else if (currentSlide == 3) {
                setCurrentSlide(0)
                navigate("Task");
              }
              //  else if (currentSlide == 2) {
              //   navigate("Verify", {
              //     params: { phoneNumber: "", from: "signup" },
              //   });
              // }
            }}
          />
        </FlexText>
      </View>
    </SafeAreaProvider>
  );
};

export default PostTask;
