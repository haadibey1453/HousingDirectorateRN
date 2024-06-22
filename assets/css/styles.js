import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const { slideWidth } = width - 60;

const styles = StyleSheet.create({
    /*------------------------------
                Login Page
    --------------------------------*/
    mainContainerLogin: {
        flex: 1,
        justifyContent: 'top',
        paddingTop: 50,
    },

    imageContainer: {
        alignItems: 'center',
    },

    logo: {
        marginTop: 50,
    },

    inputContainer: {
        marginTop: 50,
        paddingLeft: 30,
        paddingRight: 30,
    },

    inputLabel: {
        fontSize: 20,
        marginBottom: 10,
    },

    inputField: {
        backgroundColor: "#DEE1E6FF",
        borderRadius: 10,
        paddingVertical: 7,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 20,
    },

    loginbtn: {
        backgroundColor: "#1A7A30FF",
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 50,
    },

    loginbtnText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 18,
    },

    icon: {
        marginLeft: 10,
        position: 'absolute',
        right: 40,
        bottom: 120,
        height: 25,
        width: 25,
        padding: 0,
    },

    mainContainer: {
        flex: 1,
        paddingTop: 30,
        paddingStart: 15,
        paddingEnd: 15,
    },

    /*------------------------------
                Home Page
    --------------------------------*/
    // Welcome Banner
    welcomeBanner: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    headerBtns: {
        flexDirection: "row",
    },

    logoutbtn: {
        marginTop: -4,
        marginLeft: 5,
    },

    // After Welcome Banner
    infoContainer: {
        paddingTop: 25,
        paddingStart: 12,
        paddingEnd: 12,
    },

    firstRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    infoText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#454545",
        marginBottom: 7,
    },

    //Dark Green Card
    darkGreenCard: {
        borderRadius: 10,
        backgroundColor: "#1A7A30FF",
        padding: 15,
        marginTop: 5,
        marginEnd: 10,
        marginStart: 13,
        width: width - 55,
    },

    dgcHeading: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },

    dgcRow1Container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 10,
        paddingEnd: 10,
        marginBottom: 10,
    },

    dgcText: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
    },

    dgcRow2Container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 35,
        paddingEnd: 40,
        marginBottom: 10,
    },

    dgcRow3Container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingStart: 15,
        paddingEnd: 40,
        marginBottom: 10,
    },

    // After Dark Green Card
    infoContainerTwo: {
        paddingStart: 12,
        paddingEnd: 12,
    },

    secafterDarkGreen: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 10,
    },

    numberText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#949494",
        marginBottom: 7,
    },

    // Light Green Card
    lightGreenCardView: {
        borderRadius: 10,
        backgroundColor: "#ACECA1FF",
        padding: 15,
    },

    lgcHeading: {
        fontSize: 20,
        fontWeight: "bold",
    },

    lgcInfo: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },

    lgcText: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 5,
    },

    numberTextTwo: {
        fontSize: 20,
        fontWeight: "bold",
    },

    /*------------------------------
                Pagination
    --------------------------------*/
    paginationContainer: {
        flexDirection: "row",
        marginTop: 10,
        width: "100%",
        justifyContent: 'center',
    },

    dot: {
        height: 10,
        borderRadius: 15,
        marginHorizontal: 5,
        backgroundColor: "#000",
    },

    dotActive: {
        backgroundColor: "#1A7A30FF",
    },

    /*------------------------------
            Account Detail
    --------------------------------*/
    headerView: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 10,
        marginTop: 10,
        backgroundColor: "#1A7A30FF",
        elevation: 20,
    },

    infoTextTwo: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 7,
    },

    // After Header View
    afterHeaderView: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 10,
    },

    afterHeaderViewInfoText: {
        fontSize: 18,
        color: "#6a6a6a",
        marginBottom: 7,
    },

    afterHeaderViewNumberText: {
        fontSize: 18,
        color: "#2a2a2a",
        marginBottom: 7,
    },

    completeAccInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap",
    },

    completeAccInfoText: {
        fontSize: 17,
        color: "#6a6a6a",
        marginBottom: 7,
        width: width / 2,
    },

    completeAccInfoTextTwo: {
        fontSize: 17,
        color: "#2a2a2a",
        marginBottom: 7,
    },

    postalAddress: {
        fontSize: 17,
        color: "#6a6a6a",
        marginBottom: 4,
        width: width / 3,
    },

    permanentAddress: {
        fontSize: 17,
        color: "#6a6a6a",
        marginBottom: 4,
        width: width / 3,
    },

    completeAccInfoTextThree: {
        fontSize: 17,
        color: "#6a6a6a",
        marginBottom: 2,
        width: width / 2,
    },

    completeAccInfoTextFour: {
        fontSize: 17,
        color: "#2a2a2a",
        marginBottom: 2,
    },

    backToHomeBtn: {
        flexDirection: "row",
        borderRadius: 10,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#1A7A30FF",
        marginTop: 10,
        marginStart: 5,
        marginEnd: 5,
        paddingTop: 10,
        paddingBottom: 10,
    },

    backToHomeText: {
        color: "#fff",
        fontSize: 18,
    },

    homeIcon: {
        marginEnd: 5,
        color: "#fff",
        marginTop: 2,
    }
});

export { styles }