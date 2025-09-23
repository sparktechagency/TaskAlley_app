import React, { useState } from "react";
import { FlatList } from "react-native";
import ButtonBG from "../ui/buttons/ButtonBG";

const TabButton = ({ tab, handler }: { tab?: string[], handler?: (tab: string) => void }) => {
  const tabs = [
    "All Tasks",
    "open for bids",
    "in Progress",
    "completed",
    "cancelled",
  ];
  const [activeTab, setActiveTab] = useState<string>(tab ? tab[0] : tabs[0]);

  return (
    <FlatList
      data={tab || tabs}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <ButtonBG
          text={item}
          handler={() => { setActiveTab(item), handler?.(item) }}
          style={{
            width: "auto",
            backgroundColor: item == activeTab ? "#115E59" : "#E6F4F1",
            marginHorizontal: 5,
          }}
          textStyle={{
            color: item == activeTab ? "#FFFFFF" : "#000000",
          }}
        />
      )}
    />
  );
};

export default TabButton;
