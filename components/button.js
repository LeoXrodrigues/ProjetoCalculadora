import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ label, size = 1, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 83,
    height: 83,
    borderRadius: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginTop: 10,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
