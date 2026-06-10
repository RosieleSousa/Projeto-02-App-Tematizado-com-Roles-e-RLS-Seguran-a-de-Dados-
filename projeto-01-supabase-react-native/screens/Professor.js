import { View, Text, TouchableOpacity } from "react-native";
import { supabase } from "../supabase";

export default function ProfessorScreen({ navigation }) {
  async function sair() {
    await supabase.auth.signOut();
    navigation.replace("Login");
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F4F7FC",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 60,
          marginBottom: 20,
        }}
      >
        👨‍🏫
      </Text>

      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: "#1E293B",
        }}
      >
        Área do Professor
      </Text>

      <Text
        style={{
          color: "#64748B",
          marginTop: 10,
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        Bem-vindo ao painel do professor.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Perfil")}
        style={{
          backgroundColor: "#4F46E5",
          padding: 15,
          borderRadius: 12,
          width: "80%",
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            color: "#FFF",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Meu Perfil
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={sair}
        style={{
          backgroundColor: "#EF4444",
          padding: 15,
          borderRadius: 12,
          width: "80%",
        }}
      >
        <Text
          style={{
            color: "#FFF",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}