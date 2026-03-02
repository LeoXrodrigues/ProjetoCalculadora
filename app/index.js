import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import ButtonLarge from "../components/buttonLarge";
import Button from "./../components/button";

const rowColors = [
  "#E6C79C",
  "#EED6B5",
  "#F3E2C9",
  "#F7EBDD",
  "#FBF3E9",
  "#fcf6f0",
];

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayResult}>Display Resultado</Text>
        <Text style={styles.displayExpression}>Display expreçao</Text>
      </View>
      <LinearGradient
        colors={["#f0dec0", "#a3ffd4"]}
        style={styles.keyboardNumber}
      >
        <View style={styles.colunas}>
          <ButtonLarge label="<-" color={rowColors[0]} />
          <ButtonLarge label="AC" color={rowColors[0]} />
        </View>
        <View style={styles.colunas}>
          <Button label="√" color={rowColors[1]} />
          <Button label="%" color={rowColors[1]} />
          <Button label="/" color={rowColors[1]} />
          <Button label="X" color={rowColors[1]} />
        </View>
        <View style={styles.colunas}>
          <Button label="1" color={rowColors[2]} />
          <Button label="2" color={rowColors[2]} />
          <Button label="3" color={rowColors[2]} />
          <Button label="+" color={rowColors[2]} />
        </View>
        <View style={styles.colunas}>
          <Button label="4" color={rowColors[3]} />
          <Button label="5" color={rowColors[3]} />
          <Button label="6" color={rowColors[3]} />
          <Button label="-" color={rowColors[3]} />
        </View>
        <View style={styles.colunas}>
          <Button label="7" color={rowColors[4]} />
          <Button label="8" color={rowColors[4]} />
          <Button label="9" color={rowColors[4]} />
          <Button label="," color={rowColors[4]} />
        </View>
        <View style={styles.colunas}>
          <ButtonLarge label="0" color={rowColors[5]} />
          <ButtonLarge label="=" color={rowColors[5]} />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#f0dec0",
  },
  display: {
    flex: 2.2,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 24,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  displayExpression: {
    fontSize: 20,
    color: "rgba(0,0,0,0.45)",
    marginTop: 50,
  },
  displayResult: {
    fontSize: 40,
    fontWeight: "700",
    color: "#1C1C1C",
  },
  keyboardNumber: {
    flex: 7.8,
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "center",
  },
  colunas: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});
