import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from '@expo/vector-icons/Ionicons';


import HomePage from './src/pages/HomePage';
import ImcCalcPage from './src/pages/ImcCalcPage';

const Tab = createBottomTabNavigator();
const navigationOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'HomePage') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'CalculateIMC') {
      iconName = focused ? 'calculator' : 'calculator-outline';
    }

    // You can return any component that you like here!
    return <Ionicon name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: '#FF0043',
  tabBarInactiveTintColor: 'gray',
});

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={navigationOptions}>
        <Tab.Screen name='HomePage' component={HomePage} />
        <Tab.Screen name='CalculateIMC' component={ImcCalcPage}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}