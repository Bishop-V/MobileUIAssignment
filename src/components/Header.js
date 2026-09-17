import { View, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import global from "../styles/global";
export default function Header() {
  const handlePress = () => {
    console.log("on press");
  };
  const handleLongPress = () => {
    console.log("on long press");
  };
  return (
    <View style={styles.header}>
      <Image
        style={{
          height: 60,

          width: 230,

          resizeMode: "contain",
          tintColor: "white",
        }}
        source={require("../assets/wordmark.png")}
      />

      <View
        style={{
          flexDirection: "row",
          gap: 40,
        }}
      >
        <Pressable onPress={handlePress} onLongPress={handleLongPress}>
          <Ionicons name="grid-outline" style={global.icon}></Ionicons>
        </Pressable>
        <Pressable onPress={handlePress}>
          <Ionicons name="notifications-outline" style={global.icon}></Ionicons>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1%",
    paddingHorizontal: "3%",
    height: "5%",
  },
});
