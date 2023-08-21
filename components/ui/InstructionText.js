import Colors from "../../constants/colors";

import { Text, StyleSheet } from "react-native";

// style 병합 가능하며 충돌 시 앞에 적ㅣ style이 우선됨 (여기서는 styles.instructionText)
function instructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default instructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
