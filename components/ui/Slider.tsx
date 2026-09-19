import { Image } from "expo-image"
import { FlatList, StyleSheet, View } from "react-native"
import { ThemedText } from "../themed-text"
import { ThemedView } from "../themed-view"

type SliderItem = {
    id: string;
    name: string;
    exercises?: string;
    duration?: string;
    image: any;
}

type FastTrainProps = {
    subtitle: string,
    data: SliderItem[]
}
const Slider = (props: FastTrainProps) => {

    return (
        <ThemedView style={styles.fastTrainContainer}>
            <View style={styles.fastTrainHeaderContainer}>
                <ThemedText type="subtitle">{props.subtitle}</ThemedText>
                <ThemedText type='smallLink'>Ver Todos   -{'>'} </ThemedText>
            </View>

            <FlatList
                data={props.data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingHorizontal: 20 }}
                renderItem={({ item }) => (
                    <View style={styles.fastTrainCard}>

                        <Image
                            source={item.image}
                            style={styles.fastTrainCard_Img}
                            contentFit="cover"
                        />

                        <View style={styles.fastTrainContent}>
                            <ThemedText style={styles.fastTrainTitle}>
                                {item.name}
                            </ThemedText>

                            {(item.exercises || item.duration) && (
                                <ThemedText style={styles.fastTrainInfo}>
                                    {item.exercises && `${item.exercises} ejercicios`}
                                    {item.exercises && item.duration && " · "}
                                    {item.duration}
                                </ThemedText>
                            )}
                        </View>

                    </View>
                )}
            />

        </ThemedView>
    )
}

const styles = StyleSheet.create({
    fastTrainContainer: {
        marginTop: 14
    },
    fastTrainHeaderContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10
    },

    fastTrainCard: {
        width: 300,
        height: 160,
        marginRight: 12,
        borderRadius: 15,
        overflow: 'hidden',
        position: 'relative',
    },

    fastTrainCard_Img: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
    },

    fastTrainContent: {
        position: 'absolute',
        bottom: 15,
        left: 15,
    },

    fastTrainTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    fastTrainInfo: {
        color: 'white',
        marginTop: 4,
    },
})

export default Slider