import React from "react";
import { FlatList, ImageSourcePropType } from "react-native";
import { KeyboardStickyView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ChatHeader from '../../components/message/ChatHeader';
import Message from "../../components/message/Message";
import SendMessage from "../../components/message/SendMessage";
import { otherIcons } from '../../constant/images';
import SafeAreaProvider from '../../providers/SafeAreaProvider';
import Navigate from "../../utils/Navigate";
import ScreenSize from "../../utils/ScreenSize";
const data = [1, 2, 3, 4, 5, 6];
const Messages = () => {
  const navigate = Navigate();
  const { height } = ScreenSize();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <SafeAreaProvider
      zeroPadding={true}
      headerComponent={<ChatHeader
        show={true}
        imageSource={otherIcons.ChatBlock as ImageSourcePropType}
      />}
      keyboard={false}
    >

      <KeyboardStickyView style={{
        paddingHorizontal: 20
      }}>
        <FlatList
          style={{
            height: height - (top + bottom + 180),
            minHeight: height - (top + bottom + 180),
          }}
          keyExtractor={(item, index) => index.toString()}
          inverted
          showsVerticalScrollIndicator={false}
          data={[...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data,]}
          renderItem={({ item, index }) => <Message i={index} />}
        />

        <SendMessage />
      </KeyboardStickyView>
    </SafeAreaProvider>
  );
};
export default Messages;
