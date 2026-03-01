import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonLarge({ label, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
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
    marginTop: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
