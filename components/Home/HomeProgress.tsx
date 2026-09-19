import { StyleSheet, View } from "react-native"
import { ThemedText } from "../themed-text"
import { ThemedView } from "../themed-view"

const ProgressHome = () => {
    return (
        <View style={styles.progressRow}>
            <ThemedView style={styles.progressCard}>
                <ThemedText type="defaultSemiBold">
                    Progreso Diario
                </ThemedText>

                <ThemedText>
                    0%
                </ThemedText>
            </ThemedView>

            <ThemedView style={styles.progressCard}>
                <ThemedText type="defaultSemiBold">
                    Progreso Semanal
                </ThemedText>

                <ThemedText>
                    4 días seguidos
                </ThemedText>
            </ThemedView>
        </View>
    )
}

const styles = StyleSheet.create({
    progressRow: {
        flexDirection: 'row',
        gap: 12,
        paddingHorizontal: 20,
        marginVertical: 10,
    },

    progressCard: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderRadius: 14,
    },
})

export default ProgressHome