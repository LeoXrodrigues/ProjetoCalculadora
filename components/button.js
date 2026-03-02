import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ label, onPress, color = "#FFF" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.textButton}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 83,
    height: 83,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginTop: 5,
    elevation: 6,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
