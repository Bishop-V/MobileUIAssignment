import { View, StyleSheet, Image, Pressable, Text } from "react-native";
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
      <View style={styles.row}>
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
          <Pressable onPress={handlePress}>
            <Ionicons name="grid-outline" style={global.icon}></Ionicons>
          </Pressable>
          <Pressable onPress={handlePress}>
            <Ionicons
              name="notifications-outline"
              style={global.icon}
            ></Ionicons>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        {/* community/for you */}
        <View
          style={{
            flexDirection: "row",
            gap: 40,
          }}
        >
          <Pressable onPress={handlePress} onLongPress={handleLongPress}>
            <Text style={styles.currentPage}>Community</Text>
            {/* underline */}
            <View
              style={{
                borderColor: "#6699FF",
                borderRadius: 4,
                marginTop: 1,
                borderWidth: 1.4,
              }}
            />
          </Pressable>
          <Pressable onPress={handlePress} onLongPress={handleLongPress}>
            <Text style={styles.page}>For you</Text>
          </Pressable>
        </View>
        {/* language */}
        <Pressable onPress={handlePress}>
          <Ionicons name="language-outline" style={global.icon}></Ionicons>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  currentPage: {
    color: "#6699FF",
  },
  page: {},
  header: {
    flexDirection: "column",
    width: "100%",

    marginTop: "1%",
    paddingHorizontal: "3%",
    height: "5%",
  },
  row: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
