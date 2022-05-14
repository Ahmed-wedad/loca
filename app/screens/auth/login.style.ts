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
});
export const forget = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 20,
  },
  text: {
    color: 'gray',
  },
  link: {
    color: '#FDB075',
  },
  input: {
    borderColor:'#000',
    borderRadius: 10,
    borderWidth :0.5,
    height :'20.5%' ,
    width : '80%', 
   },
   button: {
    width : '90%',
    height :'20.5%',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  
    borderRadius: 20
   },
})
