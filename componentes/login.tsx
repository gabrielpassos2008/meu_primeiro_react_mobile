import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export function Login(){
    return(
        <View style={estilo.card}>
            <h1 style={estilo.titulo}>Login</h1>
            <InputUser></InputUser>
            <InputPassword></InputPassword>
        <View style={estilo.botoesLogin}>
            <View style={estilo.botao}><ButtonLogin></ButtonLogin></View>
            <View style={estilo.botao}><ButtonResgister></ButtonResgister></View>
        </View>
        </View>
    );
}
const ButtonLogin = () => (
    <Button mode="contained">
      Login
    </Button>
);
const ButtonResgister = () =>(
    <Button mode="contained"> Register</Button>
);

const InputUser = () => {
    const [text, setText] = React.useState("");
  
    return (
        <TextInput
        mode="flat" // 👈 AQUI
        style={estilo.input}
        label="User"
        value={text}
        onChangeText={text => setText(text)}
        underlineColor="#E06219"
        activeUnderlineColor="#E06219"
      />
    );
  };

const InputPassword = () => {
const [text, setText] = React.useState("");

return (
    <TextInput style={estilo.input}
    mode="flat"
    label="Password"
    value={text}
    onChangeText={text => setText(text)}
    underlineColor="#717171"
    activeUnderlineColor="##717171"
    />
);
};

const estilo = StyleSheet.create(
    {
        input:{
            marginVertical: 10,
        },
        botoesLogin:{
            flexDirection: 'row',
            gap: 10
        },
        botao:{
            marginVertical: 10,
            width: '50%',
        },
        titulo:{
            textAlign: "center",
            color: "E06219",
            marginVertical: 10
        },
        card:{
            backgroundColor: "#454545",
            padding: 20,
            borderRadius: 25
        }
    }
)