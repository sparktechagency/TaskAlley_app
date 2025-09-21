import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Navigate from "../../utils/Navigate";
import ScreenSize from "../../utils/ScreenSize";
import CategoryButton from "../category/CategoryButton";
import SectionHeading from "../shered/SectionHeading";

const data = [
  { name: "Cleaning", image: "" },
  { name: "Plumbing", image: "" },
  { name: "Appliances", image: "" },
  { name: "Painting", image: "" },
  { name: "Moving", image: "" },
  { name: "Furniture", image: "" },
  { name: "Gardening", image: "" },
  { name: "Carpentry", image: "" },
];

const CategorySection = () => {
  const { width } = ScreenSize();
  const itemWidth = (width - 80) / 4;
  const navigate = Navigate();
  return (
    <View style={{ marginTop: 10 }}>
      <SectionHeading text="Category" handler={() => navigate("Category")} />
      <FlatList
        data={data}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <CategoryButton
            width={itemWidth}
            style={{ width: itemWidth, paddingVertical: 15 }}
            name={item.name}
          />
        )}
      />
    </View>
  );
};

export default CategorySection;

const styles = StyleSheet.create({
  listContent: {
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
  },
});
