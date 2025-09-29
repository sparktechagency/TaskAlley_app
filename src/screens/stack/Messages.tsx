import React from "react";
import { FlatList, ImageSourcePropType, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ChatHeader from "../../components/message/ChatHeader";
import Message from "../../components/message/Message";
import SendMessage from "../../components/message/SendMessage";
import { otherIcons } from "../../constant/images";
import SafeAreaProviderNoScroll from '../../providers/SafeAreaProviderNoScroll';
import Navigate from "../../utils/Navigate";
import ScreenSize from "../../utils/ScreenSize";
const data = [1, 2, 3, 4, 5, 6];
const Messages = () => {
  const navigate = Navigate();
  const { height } = ScreenSize();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <SafeAreaProviderNoScroll>
      <ChatHeader
        show={true}
        imageSource={otherIcons.ChatBlock as ImageSourcePropType}
      />
      <View
        style={{
          flexDirection: "column",
          // height: height - (top + bottom),
        }}
      >

        <KeyboardAwareScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <FlatList
            style={{
              height: height - (top + bottom + 60 + 15 + 60 + 40 + 50),
              maxHeight: height - (top + bottom + 60 + 15 + 60 + 40 + 50),
            }}
            keyExtractor={(item, index) => index.toString()}
            inverted
            showsVerticalScrollIndicator={false}
            data={[...data,]}
            renderItem={({ item, index }) => <Message i={index} />}
          />
          <SendMessage />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaProviderNoScroll>
  );
};
export default Messages;
