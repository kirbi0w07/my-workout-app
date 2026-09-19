import { authService } from "@/app/services/authService";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            const data = await authService.login(email, password);
            console.log(data);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    }

    return (
        <ThemedView style={styles.container}>
            <View style={styles.loginContainer}>
                <ThemedText type="title" style={{ textAlign: 'center' }}>
                    Logo
                </ThemedText>
                <View style={styles.loginFormContainer}>
                    <ThemedText type="subtitle">Login</ThemedText>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={{ width: '90%', borderWidth: 1, paddingHorizontal: 10 }}
                        placeholder="Email"
                        keyboardType="email-address"
                    />
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={{ width: '90%', borderWidth: 1, paddingHorizontal: 10, }}
                        placeholder="Password"
                        secureTextEntry
                    />
                    <Pressable onPress={login} style={{ width: '90%', backgroundColor: '#259dff', borderRadius: 5, alignItems: 'center' }}>
                        <ThemedText style={{ padding: 10, color: 'white' }} type="default">Login</ThemedText>
                    </Pressable>
                </View>
            </View>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'
    },
    loginContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '80%',
        height: '100%',
        flex: 1,
        gap: 20,
    },
    loginFormContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        padding: 20,
    }
});

export default LoginScreen;