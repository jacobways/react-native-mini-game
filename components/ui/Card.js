import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // android 그림자
    shadowColor: "black", // ios 그림자
    shadowOffset: { width: 0, height: 2 }, // ios 그림자
    shadowRadius: 6, // ios 그림자
    shadowOpacity: 0.25, // ios 그림자
  },
});
