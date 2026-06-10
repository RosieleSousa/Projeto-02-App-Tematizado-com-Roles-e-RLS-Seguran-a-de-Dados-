import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import AlunoScreen from "./screens/Aluno";
import ProfessorScreen from "./screens/Professor";
import ProfileScreen from "./screens/Perfil";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0F172A",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
        />
        <Stack.Screen
         name="Professor"
          component={ProfessorScreen}
           />
        <Stack.Screen
        name="Aluno"
          component={AlunoScreen}
          />
        <Stack.Screen
         name="Perfil"
          component={ProfileScreen}
           />
      </Stack.Navigator>
    </NavigationContainer>
  );
}