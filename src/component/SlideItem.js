import { Text, StyleSheet, View } from 'react-native';
import React from 'react';
import { styles } from "../../assets/css/styles";


const SlideItem = ({ item }) => {
    return (
        <View style={styles.darkGreenCard}>
            <Text style={styles.dgcHeading}>{item.year}</Text>
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 15,
                }}
            />
            <View style={styles.dgcRow1Container}>
                <Text style={styles.dgcText}>{item.firstHalf}</Text>
                <Text style={styles.dgcText}>{item.secondHalf}</Text>
            </View>
            <View style={styles.dgcRow2Container}>
                <Text style={styles.dgcText}>{item.firstHalfCount}</Text>
                <Text style={styles.dgcText}>{item.secondHalfCount}</Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 10,
                }}
            />
            <View style={styles.dgcRow3Container}>
                <Text style={styles.dgcText}>{item.Total}</Text>
                <Text style={styles.dgcText}>{item.TotalCount}</Text>
            </View>
        </View>
    );
};

export default SlideItem