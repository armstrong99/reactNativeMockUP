import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import * as Icons from "react-native-heroicons/solid";

export const SearchBar = () => {
  return (
    <View style={styles.searchSection}>
      <Icons.MagnifyingGlassIcon color={"grey"} />
      <TextInput
        style={styles.input}
        placeholder="Search lists and saved posts"
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    width: screenWidth * 0.95,
    height: screenWidth * 0.15,
    borderRadius: 14,
    paddingRight: 10,
    paddingLeft: 10,
    
  },

  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "transparent",
    color: "#424242",
    marginLeft: 5,
    height: screenWidth * (0.12),
    fontSize: 18,
    fontFamily: "Nunito-Bold"
  },
});
