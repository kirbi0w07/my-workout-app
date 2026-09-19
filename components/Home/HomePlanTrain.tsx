import { Image } from "expo-image"
import { StyleSheet, View } from "react-native"
import { ThemedText } from "../themed-text"
import { ThemedView } from "../themed-view"

const HomePlanTrain = () => {

    // por ahora solo hare unos hardcodeados
    const imageUrl = require('../../assets/images/workout_plains/mancuernas.webp')
    return (
        <ThemedView >
            <ThemedText style={{ padding: 10 }} type='subtitle'>Tus planes de entrenamiento</ThemedText>
            <View style={styles.trainPlanesCard}>
                <Image
                    source={imageUrl ?? undefined}
                    style={styles.trainPlanesCard_Img}
                    contentFit="cover"
                    contentPosition="center"
                />
            </View>
            <ThemedText style={styles.trainPlanesCardTitle}>
                Jump Rope
            </ThemedText>
        </ThemedView >
    )
}

const styles = StyleSheet.create({

    trainPlanesCard: {
        width: '100%',
        flexDirection: 'column',
        alignContent: 'center',
        height: 140,
    },
    trainPlanesCard_Img: {
        ...StyleSheet.absoluteFillObject,
        width: '95%',
        height: '100%',
        left: '2%',
        borderRadius: 10,

    },
    trainPlanesCardTitle: {
        position: 'absolute',
        bottom: 15,
        left: '10%',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default HomePlanTrain