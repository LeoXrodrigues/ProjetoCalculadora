import { StyleSheet, Text, View } from "react-native";

export default function Display({ result, expression }) {
  return (
    <View style={styles.container}>
        <Text style={styles.resultText}>{result}</Text>
        <Text style={styles.expressionText}>{expression}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2.2,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 34,
    paddingBottom: 18,
    alignItems: "flex-end", 
    justifyContent: "flex-start", 
    backgroundColor: "transparent", 
  },
  resultText: {
    fontSize: 45,
    fontWeight: "500",
    color: "rgba(0,0,0,0.45)", 
    flexGrow: 1, 
  },
  expressionText: {
    fontSize: 25,
    color: "#1C1C1C", 
    fontWeight: "800",
    marginTop: 8,
  },
});