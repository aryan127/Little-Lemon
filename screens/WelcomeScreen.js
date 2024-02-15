import * as React from "react";
import { View, Image, StyleSheet, Text, Button, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

// const navigation = useNavigation();
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.sview}>
      <View style={styles.sview2}>
        <Image
          style={styles.simg}
          source={require("../assets/little-lemon-logo.png")}
        />
        <Text style={styles.stext} numberOfLines={2}>
          Little Lemon, Your local
        </Text>
        <Text style={styles.stext2}>Mediterranean Bistro</Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate("Subscribe")}
        style={styles.sbtn}
      >
        <Text style={styles.sbtntext}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sview: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  sview2: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  simg: { alignItems: "center", width: 150, height: 265 },
  stext: {
    paddingTop: 50,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  stext2: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  sbtn: {
    marginBottom: -150,
    width: 350,
    paddingVertical: 10,
    backgroundColor: "#495e57",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  sbtntext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default WelcomeScreen;
