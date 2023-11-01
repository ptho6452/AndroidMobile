import { StyleSheet } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { createStackNavigator } from '@react-navigation/stack';
import Filter from './src/screens/Filter';
import { NavigationContainer } from '@react-navigation/native';
import Chatmessage from './src/components/Chatmessage'
import PaymentCard from './src/components/CardPayment';
import Payment from './src/components/Payment';
import Login from './src/components/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="Chat" component={Chatmessage} />
        <Stack.Screen name="EditPayment" component={PaymentCard} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});