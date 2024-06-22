import { FlatList, Text, Animated, View, Dimensions } from 'react-native';
import React from 'react';
import { styles } from "../../assets/css/styles";

const { width } = Dimensions.get('screen');

const Pagination = ({ data, scrollX, index }) => {
    return (
        <View style={styles.paginationContainer}>
            {data.map((_, idx) => {
                const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [12, 30, 12],
                    extrapolate: 'clamp',
                });
                return (
                    <Animated.View key={idx.toString()}
                        style={[styles.dot, { width: dotWidth },
                        idx === index && styles.dotActive,]}
                    />
                );
            })}
        </View>
    );
};

export default Pagination