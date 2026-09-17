import { View, Alert, Pressable, Text, StyleSheet } from "react-native";
import global from "@/styles/global";

export default function AlertButton() {
  const handlePress = () => {
    Alert.alert("Alert Button pressed");
  };
  return (
    <Pressable style={styles.alert} onPress={handlePress}>
      <Text style={global.text}>Alert</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  alert: {
    position: "absolute",
    backgroundColor: "#dc143c",
    borderRadius: 25,
    bottom: "17%",
    paddingVertical: 6,

    paddingHorizontal: 20,
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
