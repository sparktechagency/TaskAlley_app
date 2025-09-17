import React from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import CategoryButton from '../shered/CategoryButton';
import SectionHeading from '../shered/SectionHeading';

const { width } = Dimensions.get("window");

const data = [
  { name: "Cleaning", image: "" },
  { name: "Plumbing", image: "" },
  { name: "Appliances", image: "" },
  { name: "Painting", image: "" },
  { name: "Moving", image: "" },
  { name: "Furniture", image: "" },
  { name: "Gardening", image: "" },
  { name: "Carpentry", image: "" }
];

const CategorySection = () => {
  const itemWidth = (width - 80) / 4;
  return (
    <View style={{ marginTop: 10 }}>
      <SectionHeading text="Category" />
      <FlatList
        data={data}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <CategoryButton

            width={itemWidth}
            style={{ width: itemWidth, paddingVertical: 15, }}
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
    justifyContent: "space-between"
  },
});
