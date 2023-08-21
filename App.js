import { useState, useEffect } from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen"; // 스플래시나 로딩 화면을 연장하게 만듬. 여기서는 글꼴이 불러와질 때가지 해당 화면 연장시키기 위해 사용

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  // useFonts는 컴포넌트에 글꼴 로딩하는 hook
  // 첫번째 엘리먼트는 로딩 여부를 boolean 타입으로 보여줌
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  // 글꼴이 모두 로딩되어야 스플래시 화면이 안 나타남
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync(); //splash screen 닫기
    }
    if (fontsLoaded) {
      //font 로드완료
      hideSplashScreen();
    }
  }, [fontsLoaded]); //fontsLoaded 상태 변경 마다 실행

  if (!fontsLoaded) {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootSceen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover" // 이미지가 왜곡되지 않고 확대 축소로 모든 영역 덮기
        style={styles.rootSceen}
        imageStyle={styles.backgroundImages} // 특별한 props
      >
        {/* // SafeAreaView는 상단 노치 영역을 빼줘서 노치에 콘텐츠가 가려지는 일 방지 */}
        <SafeAreaView style={styles.rootSceen}>{screen}</SafeAreaView>
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
