import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  Alert,
  TextInput,
} from "react-native";
import { useState } from "react";
const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");
  return (
    <View style={styles.sview}>
      <View style={styles.sview2}>
        <Image
          style={styles.simg}
          source={require("../assets/little-lemon-logo-grey.png")}
        />
        <Text style={styles.stext} numberOfLines={2}>
          Subscribe to our newsletter for our
        </Text>
        <Text style={styles.stext2}>latest delicious recipes!</Text>
      </View>
      <TextInput
        placeholder="Type your email"
        style={styles.stextin}
        onChangeText={(text) => setEmail(text)}
      />
      <Pressable
        onPress={() => Alert.alert("Thanks for subscribing, stay tuned!")}
        style={({ pressed }) => [
          styles.sbtn,
          { opacity: pressed || email === "" ? 0.5 : 1 },
        ]}
        disabled={email === ""}
      >
        <Text style={styles.sbtntext}>Subscribe</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  sview: {
    alignItems: "center",
    justifyContent: "center",
  },
  sview2: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  simg: { marginTop: 30, width: 140, height: 165 },
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
  stextin: {
    borderWidth: 1,
    width: 350,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default SubscribeScreen;
