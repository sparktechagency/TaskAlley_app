import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CardProps {
  imageSource: ImageSourcePropType; // Type for image source (can be a remote URL or local image)
  title: string; // Title of the card
  onPress: () => void; // Function triggered on card press
}
const ImageButton: React.FC<CardProps> = ({ imageSource, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={imageSource}
        style={{
          width: "100%",
          borderRadius: 10,
          objectFit: 'contain',
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  title: {
    position: 'absolute',
    top: "60%",
    transform: [{ translateY: "-50%" }],
    right: 10,
    width: "50%",
    fontSize: 24,
    fontWeight: '700',
  }
});

export default ImageButton
