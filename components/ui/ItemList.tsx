import { Image } from "expo-image";
import { FlatList, StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";

type ItemListObject = {
    id: string;
    name: string;
    exercises?: string;
    duration?: string;
    image: any;
};

type ItemListProps = {
    data: ItemListObject[];
};

const ItemList = ({ data }: ItemListProps) => {
    return (
        <FlatList
            style={{ flex: 1 }}
            data={data}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <View style={styles.card}>

                    <Image
                        source={item.image}
                        style={styles.image}
                        contentFit="cover"
                    />

                    <View style={styles.content}>
                        <ThemedText style={styles.name}>
                            {item.name}
                        </ThemedText>

                        {(item.exercises || item.duration) && (
                            <ThemedText style={styles.info}>
                                {item.exercises && `${item.exercises} ejercicios`}
                                {item.exercises && item.duration && ' · '}
                                {item.duration}
                            </ThemedText>
                        )}
                    </View>

                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 130,
        marginBottom: 12,
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
    },

    image: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
    },

    content: {
        position: 'absolute',
        left: 15,
        bottom: 15,
    },

    name: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    info: {
        color: 'white',
        marginTop: 4,
    },
});

export default ItemList;