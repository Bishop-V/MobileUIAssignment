import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
export default function Index() {
  return (
    <SafeAreaView style={styles.main}>
      <Header />

      <InfoCard info="Content and resources selected by and about the Wikimedia community" />

      <View style={styles.body}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 40,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1%",
    paddingHorizontal: "3%",
  },
  body: {
    flex: 2,
  },
  main: {
    flex: 1,
    backgroundColor: "#202122",
  },
});
