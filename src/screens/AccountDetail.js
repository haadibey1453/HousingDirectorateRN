import { View, Text, StyleSheet, Alert, TouchableHighlight, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { styles } from "../../assets/css/styles";
import Ionicicons from "@expo/vector-icons/Ionicons";

const AccountDetail = ({ route, navigation }) => {
    const { user } = route.params;

    // Button 1 Handler
    const acc_details = () => {
        Alert.alert(`Account Details ${user}`);
        navigation.navigate("AccountDetail", { user: `${user}` });
    }

    // Back To Home Button Handler
    const backToHome = () => {
        navigation.navigate("Home", { user: `${user}` });
    }

    // Logout Button Handler
    const logout = () => {
        navigation.navigate("Login");
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            {/* Banner View */}
            <View style={styles.welcomeBanner}>
                <Text style={styles.headerText}>Welcome! {user}</Text>
                <View style={styles.headerBtns}>
                    <TouchableOpacity onPress={() => acc_details()}>
                        <Ionicicons name="person-outline" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => logout()} style={styles.logoutbtn}>
                        <Ionicicons name="log-out-outline" size={33} style={{
                            transform: [
                                { scaleX: -1 }
                            ]
                        }} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Header View */}
            <View style={styles.headerView}>
                <View style={styles.firstRow}>
                    <Text style={styles.infoTextTwo}>Member No: 12345</Text>
                    <Text style={styles.infoTextTwo}>PA No: {user}</Text>
                </View>
                <Text style={styles.infoTextTwo}>Rank: Captain</Text>
                <Text style={styles.infoTextTwo}>Name: Hafiz Muhammad Akmal Naseer</Text>
            </View>

            {/* After Header View */}
            <View style={styles.afterHeaderView}>
                <Text style={styles.afterHeaderViewInfoText}>DOC:</Text>
                <Text style={styles.afterHeaderViewNumberText}>13-Oct-2018</Text>
                <Text style={styles.afterHeaderViewInfoText}>Arm</Text>
                <Text style={styles.afterHeaderViewNumberText}>SIG</Text>
            </View>
            <View style={styles.completeAccInfo}>
                <Text style={styles.completeAccInfoText}>Course Name:</Text>
                <Text style={styles.completeAccInfoTextTwo}>Grad 37</Text>
                <Text style={styles.completeAccInfoText}>Membership Year:</Text>
                <Text style={styles.completeAccInfoTextTwo}>2018</Text>
                <Text style={styles.completeAccInfoText}>Choice Stations:</Text>
                <Text style={styles.completeAccInfoTextTwo}>Lahore</Text>
                <Text style={styles.completeAccInfoText}></Text>
                <Text style={styles.completeAccInfoTextTwo}>Rawalpindi</Text>
                <Text style={styles.postalAddress}>Postal Address:</Text>
                <Text style={styles.completeAccInfoTextTwo}>C4I Dte GHQ Rawalpindi</Text>
                <Text style={styles.permanentAddress}>Permanent{"\n"}Address:</Text>
                <Text style={styles.completeAccInfoTextTwo}>C4I Dte GHQ Rawalpindi</Text>
                <Text style={styles.completeAccInfoTextThree}>Province:</Text>
                <Text style={styles.completeAccInfoTextFour}>Punjab</Text>
                <Text style={styles.completeAccInfoTextThree}>Division:</Text>
                <Text style={styles.completeAccInfoTextFour}>Gujranwala</Text>
                <Text style={styles.completeAccInfoTextThree}>District:</Text>
                <Text style={styles.completeAccInfoTextFour}>Narowal</Text>
                <Text style={styles.completeAccInfoTextThree}>Tehsil:</Text>
                <Text style={styles.completeAccInfoTextFour}>Sakargarh</Text>
                <Text style={styles.completeAccInfoTextThree}>City:</Text>
                <Text style={styles.completeAccInfoTextFour}>Sakargarh</Text>
                <Text style={styles.completeAccInfoTextThree}>Phone#1:</Text>
                <Text style={styles.completeAccInfoTextFour}>03001234567</Text>
                <Text style={styles.completeAccInfoTextThree}>Phone#2:</Text>
                <Text style={styles.completeAccInfoTextFour}>03001234567</Text>
                <Text style={styles.completeAccInfoTextThree}>Mobile#1:</Text>
                <Text style={styles.completeAccInfoTextFour}>03001234567</Text>
                <Text style={styles.completeAccInfoTextThree}>Mobile#2:</Text>
                <Text style={styles.completeAccInfoTextFour}>03001234567</Text>
                <Text style={styles.completeAccInfoTextThree}>Email:</Text>
                <Text style={styles.completeAccInfoTextFour}>abcd@gmail.com</Text>
                <Text style={styles.completeAccInfoTextThree}>Updated On:</Text>
                <Text style={styles.completeAccInfoTextFour}>10-Nov-23</Text>
            </View>

            <View style={styles.backToHomeBtn}>
                <Ionicicons name="home-outline" size={20} style={styles.homeIcon} onPress={() => backToHome()} />
                <TouchableOpacity onPress={() => backToHome()}>
                    <Text style={styles.backToHomeText}>
                        Back To Home
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default AccountDetail