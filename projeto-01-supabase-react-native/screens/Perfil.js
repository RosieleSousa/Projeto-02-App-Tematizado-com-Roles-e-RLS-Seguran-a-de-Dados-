import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { supabase } from "../supabase";

export default function ProfileScreen() {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    carregarPerfil();
  }, []);

  async function carregarPerfil() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    setPerfil(data);
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
          fontSize: 70,
          marginBottom: 20,
        }}
      >
        👤
      </Text>

      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Meu Perfil
      </Text>

      <Text
        style={{
          fontSize: 18,
          marginBottom: 10,
        }}
      >
        Nome: {perfil?.nome}
      </Text>

      <Text
        style={{
          fontSize: 18,
          marginBottom: 10,
        }}
      >
        Cargo: {perfil?.role}
      </Text>
    </View>
  );
}