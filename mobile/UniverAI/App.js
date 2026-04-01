import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
} from "react-native";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const schema = yup.object().shape({
    nome: yup
      .string()
      .min(1, 'O menor nome do mundo é "J", então vc não tem escapatória!')
      .required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    senha: yup
      .string()
      .min(6, "Minimo 6 caracteres")
      .required("Senha obrigatória"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // await api.post('./', data);
      Alert.alert("Sucesso", "Cadastro realizado!");
    } catch (errors) {
      Alert.alert("Erro", "Falha ao cadastrar.");
    }
  };

  return (
    <>
      <Text style={styles.h1}>
        Univer
        <Image
          source={require("./assets/logo.png")}
          style={{ width: 50, height: 50, borderRadius: 10 }}
        />
      </Text>
      <Image
        source={{
          uri: "https://amplix.com/wp-content/uploads/2025/02/amp-ai-strategy@2x.jpg",
        }}
        style={{
          width: 280,
          height: 180,
          borderRadius: 10,
          imgRendering: "pixelated",
        }}
      />
      <Text style={styles.h2}>Bem vindo(a)!</Text>
      <View style={styles.cadastroDiv}>
        <KeyboardAvoidingView>
          <Controller
            control={control}
            name="nome"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text style={styles.text1}>Nome: </Text>
                <TextInput
                  placeholder="Ana Banana"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  keyboardType={"default"}
                  placeholderTextColor="#999"
                  autoCapitalize="none"
                  style={styles.TextInput}
                />
                {errors.nome && (
                  <Text style={{ color: "red" }}>{errors.nome.message}</Text>
                )}
              </>
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text style={styles.text1}>Email: </Text>
                <TextInput
                  placeholder="seuemail@gmail.com"
                  value={value}
                  onChangeText={onChange}
                  keyboardType={"email"}
                  placeholderTextColor="#999"
                  autoCapitalize="none"
                  style={styles.TextInput}
                />
                {errors.email && (
                  <Text style={{ color: "red" }}>{errors.email.message}</Text>
                )}
              </>
            )}
          />
          <Controller
            control={control}
            name="senha"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <Text style={styles.text1}>Senha: </Text>
                <TextInput
                  placeholder="senha123"
                  value={value}
                  onChangeText={onChange}
                  placeholderTextColor="#999"
                  keyboardType={"default"}
                  style={styles.TextInput}
                  secureTextEntry={true}
                />
                {errors.senha && (
                  <Text style={{ color: "red" }}>{errors.senha.message}</Text>
                )}
              </>
            )}
          />

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.btnCadastro}
          >
            <Text style={styles.text1}>Cadastrar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Cadastro />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#253449",
    color: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    fontFamily: ["system-ui", "sans-serif"],
  },

  h1: {
    color: "#fff",
    fontSize: 50,
    fontWeight: 700,
    fontFamily: "monospace",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  h2: {
    color: "#fff",
    fontSize: 25,
    fontWeight: 700,
    fontFamily: "monospace",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  TextInput: {
    backgroundColor: "#e9e9e9",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },

  text1: {
    color: "#efefef",
    fontSize: 20,
    textAlign: "left",
    width: 180,
  },

  btnCadastro: {
    color: "#eee",
    borderRadius: 8,
    backgroundColor: "rgba(255, 165, 0, 1)",
    borderStyle: "none",
    padding: 12,
    width: 200,
  },

  cadastroDiv: {
    display: "grid",
    gridTemplateCollumns: "1fr 1fr",
    gap: 8,
  },
});
