import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import Button from "../components/button";
import ButtonLarge from "../components/buttonLarge";
import Display from "../components/display";
import useCalculator from "../hooks/useCalculator";

const rowColors = [
  "#E6C79C",
  "#EED6B5",
  "#F3E2C9",
  "#F7EBDD",
  "#FBF3E9",
  "#fcf6f0",
];

export default function RootLayout() {
  const { expression, result, handlePress, calculateResult, clear } = useCalculator();

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Display result={result} expression={expression} />
      </View>
      <LinearGradient
        colors={["#f0dec0", "#a3ffd4"]}
        style={styles.keyboardNumber}
      >
        <View style={styles.colunas}>
          <ButtonLarge label="AC" onPress={clear} color={rowColors[0]} />
          <ButtonLarge label="<-" onPress={() => {}} color={rowColors[0]} />
        </View>
        <View style={styles.colunas}>
          <Button label="√" onPress={() => handlePress("√")} color={rowColors[1]} />
          <Button label="%" onPress={() => handlePress("%")} color={rowColors[1]} />
          <Button label="/" onPress={() => handlePress("/")} color={rowColors[1]} />
          <Button label="X" onPress={() => handlePress("*")} color={rowColors[1]} />
        </View>
        <View style={styles.colunas}>
          <Button label="1" onPress={() => handlePress("1")} color={rowColors[2]} />
          <Button label="2" onPress={() => handlePress("2")} color={rowColors[2]} />
          <Button label="3" onPress={() => handlePress("3")} color={rowColors[2]} />
          <Button label="+" onPress={() => handlePress("+")} color={rowColors[2]} />
        </View>
        <View style={styles.colunas}>
          <Button label="4" onPress={() => handlePress("4")} color={rowColors[3]} />
          <Button label="5" onPress={() => handlePress("5")} color={rowColors[3]} />
          <Button label="6" onPress={() => handlePress("6")} color={rowColors[3]} />
          <Button label="-" onPress={() => handlePress("-")} color={rowColors[3]} />
        </View>
        <View style={styles.colunas}>
          <Button label="7" onPress={() => handlePress("7")} color={rowColors[4]} />
          <Button label="8" onPress={() => handlePress("8")} color={rowColors[4]} />
          <Button label="9" onPress={() => handlePress("9")} color={rowColors[4]} />
          <Button label="," onPress={() => handlePress(",")} color={rowColors[4]} />
        </View>
        <View style={styles.colunas}>
          <ButtonLarge label="0" onPress={() => handlePress("0")} color={rowColors[5]} />
          <ButtonLarge label="=" onPress={calculateResult} color={rowColors[5]} />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  keyboardNumber: {
    flex: 7.8,
    width: "100%",
    justifyContent: "center",
  },
  colunas: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});