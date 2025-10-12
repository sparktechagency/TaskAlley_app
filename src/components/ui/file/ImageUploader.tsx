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
  Modal,
} from "react-native";
import { launchCamera } from "react-native-image-picker";
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
  const [showModal, setShowModal] = React.useState(false);

  const handlePick = async () => {
    try {
      const pickResult = (await pick({})) as any;
      const file = {
        uri: pickResult?.[0]?.uri,
        name: pickResult?.[0]?.name,
        type: pickResult?.[0]?.type,
      };
      if (file.uri && setFiels) {
        setFiels((prev: any) => [file, ...prev]);
      }
    } catch (err: unknown) {
      // ignore
    } finally {
      setShowModal(false);
    }
  };

  const handleCapture = async () => {
    try {
      const res: any = await launchCamera({
        mediaType: "photo",
        saveToPhotos: true,
      });
      const asset = res?.assets?.[0];
      const file = asset
        ? {
            uri: asset.uri,
            name: asset.fileName,
            type: asset.type,
          }
        : null;
      if (file?.uri && setFiels) {
        setFiels((prev: any) => [file, ...prev]);
      }
    } catch (e) {
      // ignore
    } finally {
      setShowModal(false);
    }
  };

  return (
    <TouchableOpacity
      style={{
        width: component ? "auto" : 140,
      }}
      onPress={() => setShowModal(true)}
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
      <Modal visible={showModal} transparent animationType="fade" onRequestClose={() => setShowModal(false)}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.45)",
            justifyContent: "center",
            alignItems: "center",
            padding: 24,
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 16,
              padding: 20,
              width: "100%",
              maxWidth: 360,
              shadowColor: "#000",
              shadowOpacity: 0.15,
              shadowRadius: 12,
              shadowOffset: { width: 0, height: 6 },
              elevation: 6,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <Text style={{ fontSize: 18, fontWeight: "700", color: "#111827" }}>Upload</Text>
              <TouchableOpacity onPress={() => setShowModal(false)} style={{ padding: 8 }}>
                <Text style={{ fontSize: 16, color: "#6B7280" }}>✕</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 13, color: "#6B7280", marginBottom: 16 }}>Choose how you want to add your file</Text>
            <View style={{ gap: 12 }}>
              <TouchableOpacity
                onPress={handleCapture}
                style={{
                  backgroundColor: "#115E59",
                  paddingVertical: 12,
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#fff", fontSize: 15, fontWeight: "600" }}>Capture</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handlePick}
                style={{
                  backgroundColor: "#E6F4F1",
                  paddingVertical: 12,
                  borderRadius: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#115E59", fontSize: 15, fontWeight: "600" }}>Pick</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowModal(false)} style={{ paddingVertical: 10, alignItems: "center" }}>
                <Text style={{ color: "#6B7280", fontSize: 14 }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default ImageUploader;

const styles = StyleSheet.create({});
