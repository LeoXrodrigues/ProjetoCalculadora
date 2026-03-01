import { StyleSheet, Text, View } from "react-native";
import ButtonLarge from "../components/buttonLarge";
import Button from "./../components/button";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text> teste</Text>
      </View>
      <View style={styles.tecladoNumerico}>
        <View style={styles.colunas}>
          <ButtonLarge label="<-" />
          <ButtonLarge label="AC" />
        </View>
        <View style={styles.colunas}>
          <Button label="√" />
          <Button label="%" />
          <Button label="/" />
          <Button label="X" />
        </View>
        <View style={styles.colunas}>
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="+" />
        </View>
        <View style={styles.colunas}>
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="-" />
        </View>
        <View style={styles.colunas}>
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="," />
        </View>
        <View style={styles.colunas}>
          <ButtonLarge label="0" />
          <ButtonLarge label="=" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#FFFAF0",
  },
  display: {
    flex: 1,
  },
  tecladoNumerico: {
    flex: 3,
    backgroundColor: "#C4FEE3",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  colunas: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});
