import { Text, View, StyleSheet } from "react-native";
import { Home } from "./src/screens/Home";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#fdfcfe",
    marginTop: 48,
    fontWeight: "bold",
    fontSize: 24,
  },
  eventDate: {
    color: "#6b6b6b",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default function App() {
  return <Home />;
}
