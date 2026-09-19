import { Octicons } from "@expo/vector-icons"
import { Image } from "expo-image"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { HelloWave } from "../hello-wave"
import { ThemedText } from "../themed-text"
import { ThemedView } from "../themed-view"

const HomeHeader = () => {
    return (
        <ThemedView style={styles.titleContainer}>
            <View style={{ flexDirection: 'row', gap: 14, }}>
                <Image
                    style={{ width: 60, height: 60, borderRadius: 100, }}
                    source={{ uri: 'https://ui-avatars.com/api/?name=Elon+Musk' }}
                />
                <ThemedView style={{ paddingTop: 6 }}>
                    <View style={{ flexDirection: 'row', gap: 6 }}>
                        <ThemedText type='subtitle'>Hi User</ThemedText>
                        <HelloWave />
                    </View>
                    <ThemedText type='small'>Fitnes freak</ThemedText>
                </ThemedView>
            </View>
            <View>
                <TouchableOpacity style={styles.bellButton}>
                    <Octicons name="bell-fill" size={20} color="black" />
                </TouchableOpacity>
            </View>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        padding: 20,
    },

    bellButton: {
        backgroundColor: '#ddd6d64b',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 8
    },


});

export default HomeHeader