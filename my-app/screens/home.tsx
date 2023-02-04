import { NavigationProp } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Dimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderBtn } from '../components/button';
import { SearchBar } from '../components/textinput';
import { listDt } from '../data';

const screenWidth = Dimensions.get('screen').width;

const HomeScreen = ({ navigation }: {navigation: NavigationProp<any>}) => {
    const [fontsLoaded] = useFonts({
        'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
      });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerTransparent: false,
      headerShadowVisible: {
        borderBottomWidth: 10,
        },
      headerStyle: {
        backgroundColor: '#ffff', //Set Header color
      },
      headerLeft: () => (
           <Text style={{ color: 'black', fontFamily: "Nunito-Bold", fontSize: 25, marginLeft: 10}}>Lists</Text>
       ),
      headerRight: () => (
          <HeaderBtn text='New' icon="plusIcon" action={() => {alert("New button pressed")}}/>
       ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
     <View style={styles.container}>
     <SearchBar />
     </View>
     <ScrollView>
      {listDt.map((item, index) => (
        <TouchableOpacity key={index}>
          <View style={{ padding: 16, paddingLeft: 10, display: "flex", flexDirection: "row", alignItems: "center",  }}>
         <View style={{backgroundColor: item.color, height: 150, width: 100, borderRadius: 25}}></View>

          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 23, fontFamily: "Nunito-Bold"}}>
             {item.title}
            </Text>
            <Text style={{fontSize: 17, marginTop: 12, fontFamily: "Nunito-Bold", color: "gray"}}>
              {`${item.count} post${item.count > 1 ? "s" : ""}`}
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        
      ))}
    </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container: {
      height: 70,
      width: screenWidth,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: "#ffff"
    },
    contentArea: {
       
    }
  });


export default HomeScreen;

