import { Text, View, StyleSheet, Image } from "react-native";
import global from "@/styles/global";
export default function InfoCard({ info }) {
  return (
    <View style={styles.card}>
      <Text
        style={[
          global.text,
          {
            flex: 1,
          },
        ]}
      >
        {info}
      </Text>
      <Image
        source={require("../assets/logo.png")}
        style={{
          height: 60,
          width: 60,
          resizeMode: "contain",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2E3136",
    borderRadius: 30,
    padding: 24,
    gap: 5,
    marginVertical: "3%",
    marginHorizontal: "2%",
    alignItems: "center",
    flexDirection: "row",
  },
});
