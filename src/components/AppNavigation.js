import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBroad1 } from "../screen/onBroad1";
import { OnBroad2 } from "../screen/onBroad2";
import { OnBroad3 } from "../screen/onBroad3";
import { OnBroad4 } from "../screen/onBroad4";
import { OnBroad5 } from "../screen/onBroad5";


const Stack = createNativeStackNavigator();
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Broad1">
        <Stack.Screen name="Broad1" component={OnBroad1} />
        <Stack.Screen name="Broad2" component={OnBroad2} />
        <Stack.Screen name="Broad3" component={OnBroad3} />
        <Stack.Screen name="Broad4" component={OnBroad4} />
        <Stack.Screen name="Broad5" component={OnBroad5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;