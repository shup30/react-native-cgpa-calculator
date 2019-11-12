import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/Screens/HomeScreen";
import CgpaScreen from "./src/Screens/CgpaScreens";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Cgpa: CgpaScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "CGPA To % CALCULATOR",
      headerStyle: {
        backgroundColor: '#001840',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);


export default createAppContainer(navigator);