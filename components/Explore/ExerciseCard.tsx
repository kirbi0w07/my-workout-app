import { Exercise, getAssetUrl } from '@bryllim/workout-guide';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../themed-text';

type ExerciseCardProps = {
    exercise: Exercise;
};

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        // Si no existen al menos 3 frames, no hacemos animación
        if (exercise.frames.length < 3) return;

        const interval = setInterval(() => {
            setFrame((prev) => (prev === 0 ? 2 : 0));
        }, 500);

        return () => clearInterval(interval);
    }, [exercise.frames.length]);

    const currentFrame = exercise.frames[frame];

    const image = currentFrame
        ? getAssetUrl(
            exercise.id,
            currentFrame.index as 1 | 2 | 3
        )
        : null;

    return (
        <View style={styles.card}>
            {image && (
                <Image
                    key={`${exercise.id}-${frame}`}
                    source={{ uri: image.toString() }}
                    style={styles.image}
                    contentFit="contain"
                />
            )}

            <View style={styles.content}>
                <ThemedText type="subtitle">
                    {exercise.name}
                </ThemedText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 110,
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 12,
        flexDirection: 'row',
        // backgroundColor: '#000000de',
    },

    image: {
        width: 110,
        height: 110,
        tintColor: '#0f0f0f'
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
});