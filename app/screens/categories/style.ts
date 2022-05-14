/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native"

export const loginStyle = StyleSheet.create({
  CardButton: {
    margin: 2,
    marginLeft: 0,
    marginRight: 0,
    color: "rgb(29,74,220)",
    borderRadius: 20,
  },

  CardTitle: {
    color: "rgb(29,74,220)",
  },

  Content: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  View: {
    width: "90%",
  },
})



const add = StyleSheet.create({
    BackgroundContainer: {
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.2)",
        display: "flex",
        height : 500,
        justifyContent: "center",
        position: 'absolute',
        width : "100%"
    },
    container: {
        width : "90%",
        padding: 15,
        maxHeight : "40%",
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 4
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom : 20
    },
    textBox: {
        borderWidth : 1,
        borderRadius: 6,
        borderColor: "rgba(0,0,0,0.3)",
        marginBottom : 15,
        fontSize: 18,
        padding: 10
    },
    buttonContainer: {
        marginTop : 10,
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        borderRadius: 5,
        marginVertical: 20,
        alignSelf: 'flex-start',
        backgroundColor: "#1860EF",
    },
    buttonText: {
        color: "white",
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontSize: 16
    },
    message: {
        color: "tomato",
        fontSize: 17
    }
})
const delet = StyleSheet.create({
    BackgroundContainer: {
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.2)",
        display: "flex",
        height : "100%",
        justifyContent: "center",
        width : "100%"
    },
    container: {
        width : "90%",
        padding: 15,
        maxHeight : "40%",
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 4
    },
    title: {
        fontWeight: "bold",
        fontSize: 17,
        marginBottom : 5
    },
    subTitle: {
        fontSize: 16
    },
    textBox: {
        borderWidth : 1,
        borderRadius: 6,
        borderColor: "rgba(0,0,0,0.3)",
        marginBottom : 15,
        fontSize: 18,
        padding: 10
    },
    buttonContainer: {
        marginTop : 10,
        flexDirection: "row",
        alignSelf: "flex-end"
    },
    buttonText: {
        color: "tomato",
        fontSize: 17
    },
    message: {
        color: "tomato",
        fontSize: 17
    }
})
const edit = StyleSheet.create({
    BackgroundContainer: {
        width : "100%",
        height : 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.2)",
        position: 'absolute'
    },
    container: {
        width : "90%",
        padding: 15,
        maxHeight : "40%",
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 4
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom : 20
    },
    textBox: {
        borderWidth : 1,
        borderRadius: 6,
        borderColor: "rgba(0,0,0,0.3)",
        marginBottom : 15,
        fontSize: 18,
        padding: 10
    },
    buttonContainer: {
        marginTop : 10,
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        borderRadius: 5,
        marginVertical: 20,
        alignSelf: 'flex-start',
        backgroundColor: "#1860EF",
    },
    buttonText: {
        color: "white",
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontSize: 16
    },
    message: {
        color: "tomato",
        fontSize: 17
    }
})
const gere = StyleSheet.create({
    container: {
        paddingHorizontal: 80,
        backgroundColor: 'white',

    },
    button: {
        borderRadius: 5,
        marginVertical: 20,
        alignSelf: 'flex-start',
        backgroundColor: "#1860EF",
    },
    row: {
        flexDirection: 'row',
    },
    col1: {
        flex: 0.9,
    },
    col2: {
        flex: 0.9
    },
    buttonText: {
        color: "white",
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontSize: 16
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom : 10
    },
    categoryListContainer: {
        marginBottom : 25,
        elevation: 4,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 6,
        borderTopWidth : 1,
        borderColor: "rgba(0,0,0,0.1)"
    },
    name: {
        fontWeight: "bold",
        fontSize: 16
    },
    listItem: {
        fontSize: 20
    },
    buttonContainer: {
        marginTop : 5,
        flexDirection: "row",
        alignItems: "center"
    },
    message: {
        color: "tomato",
        fontSize: 17
    }
})