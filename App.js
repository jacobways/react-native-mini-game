import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootSceen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover" // 이미지가 왜곡되지 않고 확대 축소로 모든 영역 덮기
        style={styles.rootSceen}
        imageStyle={styles.backgroundImages} // 특별한 props
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootSceen: {
    flex: 1, //View 컴포넌트는 콘텐츠 크기만큼만 사이즈가 형성되기에 배경색도 그만큼 적용됨. flex 1 을 설정함으로써 모든 공간 차지하게 만들기ㄷ테ㅐ
    // backgroundColor: "#ddb5sf",
  },
  backgroundImages: {
    opacity: 0.15,
  },
});
