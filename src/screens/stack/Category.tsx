import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CategorySquareButton from "../../components/category/CategorySquareButton";
import BackButton from "../../components/shered/BackButton";
import SafeAreaProviderNoScroll from "../../providers/SafeAreaProviderNoScroll";
import Navigate from "../../utils/Navigate";
import ScreenSize from "../../utils/ScreenSize";
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

const Category = () => {
  const { width } = ScreenSize();
  const itemWidth = (width - 80) / 2;
  const navigate = Navigate();
  return (
    <SafeAreaProviderNoScroll backButtonText="Tasks Categories">
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <CategorySquareButton
            width={itemWidth}
            style={{ width: itemWidth, paddingVertical: 15 }}
            name={item.name}
          />
        )}
      />
    </SafeAreaProviderNoScroll>
  );
};

export default Category;

const styles = StyleSheet.create({
  listContent: {
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
    marginTop: 10,
  },
});
