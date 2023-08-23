import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

// Text 컴포넌트 안에 Text 컴포넌트를 추가하여 감쌀 수 있음 (Text 컴포넌트로 안에 VIEW 컴포넌트를 감싸지는 못함)
// Text 컴포넌트에 스타일을 적용하면, 그 내에 감싸고 있는 자식 Text 컴포넌트에도 동일한 스타일 적용
// (반면 View 컴포넌트에 style이 적용되면 자식 Text에는 해당 style이 적용되지 않음. 이것이 RN의 정석 - 계산식인 CSS와는 다름)
function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.hightlight}>X</Text> rounds to
        guess the number <Text style={styles.hightlight}>Y</Text>.
      </Text>
      <PrimaryButton text={"Start New Game"} />
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  hightlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
