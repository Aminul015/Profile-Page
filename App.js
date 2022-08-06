import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageFile from "./src/images";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageFile />

      <Text style={styles.name}>Md. Aminul Islam</Text>

      <Text style={styles.add}>Address: 44 West Tejturi Bazar,Tejgaon,Dhaka-1215</Text>


      <Text style={styles.add}>Designation: Student</Text>

      <Text style={styles.add}>Phone: 01709788546</Text>

      <Text style={styles.add}>Email: aminultibro015@gmail.com</Text>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    fontFamily: 'BodoniOrnamentsITCTT',
    marginTop: 20,
    fontSize: 40,
    fontWeight: 700,
  },

  add:{
    marginTop: 20,
    fontFamily: "Cochin",
    fontSize: 20,
    fontWeight: 500,
  }

});