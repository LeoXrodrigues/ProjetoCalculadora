import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonLarge({ label, onPress, color = "#FFF" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 177,
    height: 83,
    borderRadius: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginTop: 5,
    elevation: 6,
  },
  text: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
