import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { supabase } from "../supabase";

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrar() {
    const { data, error } = await supabase.auth.signUp({
      email,
      password: senha,
    });

    if (error) {
      alert("Erro"+ error.message);
      return;
    }

    const pito = await supabase.from("profiles").insert({
      id: data.user.id,
      nome: nome,
      role: "aluno",
    });

    

    if (pito.error) {
      alert("Erro"+ pito.error.message);
      return;
    }
    alert("Sucesso", "Conta criada!");
    navigation.goBack();
  }
return (
  <View
    style={{
      flex: 1,
      backgroundColor: "#F4F7FC",
      justifyContent: "center",
      padding: 25,
    }}
  >
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 25,
        padding: 30,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
      }}
    >
      <Text
        style={{
          fontSize: 42,
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        🎓
      </Text>

      <Text
        style={{
          color: "#1E293B",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        EduConnect
      </Text>

      <Text
        style={{
          color: "#64748B",
          textAlign: "center",
          marginTop: 5,
          marginBottom: 30,
        }}
      >
        Crie sua conta
      </Text>

      <TextInput
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
        style={{
          backgroundColor: "#F8FAFC",
          padding: 15,
          borderRadius: 12,
          marginBottom: 15,
          borderWidth: 1,
          borderColor: "#E2E8F0",
        }}
      />

      <TextInput
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          backgroundColor: "#F8FAFC",
          padding: 15,
          borderRadius: 12,
          marginBottom: 15,
          borderWidth: 1,
          borderColor: "#E2E8F0",
        }}
      />

      <TextInput
        placeholder="Crie uma senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={{
          backgroundColor: "#F8FAFC",
          padding: 15,
          borderRadius: 12,
          marginBottom: 25,
          borderWidth: 1,
          borderColor: "#E2E8F0",
        }}
      />

      <TouchableOpacity
        onPress={cadastrar}
        style={{
          backgroundColor: "#4F46E5",
          padding: 16,
          borderRadius: 12,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Criar Conta
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Text
          style={{
            color: "#4F46E5",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          Já possui conta? Entrar
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);}