/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AddCategoryModal from "./AddCategoryModal";
import EditCategoryModal from "./EditCategoryModal";
import DeleteCategoryModal from "./DeleteCategoryModal";
import Icon from 'react-native-vector-icons/FontAwesome5'
import {gere} from "style"
class GestionCategories extends Component {
    state = {
        category: [],
        isAddCategoryModalOpen: false,
        isEditCategoryModalOpen: false,
        isDeleteCategoryModalOpen: false,
        loading: false,
        errorMessage: "",
        selectedCategory: {}
    }

    componentDidMount() {
        this.getData();
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        this.setState = (state,callback)=>{
            
        };
    }

    getData = () => {
        this.setState({ errorMessage: "", loading: true })
        fetch('http://localhost:8881/loca/api/category', {
            method: "GET"
        })
            .then(res => res.json())
            .then(res => this.setState({
                category: res,
                loading: false, errorMessage: ""
            }))
            .catch(() => this.setState({
                loading: false,
                errorMessage: "Erreur réseau. Veuillez réessayer."
            }))
    }

    toggleAddCategoryModal = () => {
        this.setState({ isAddCategoryModalOpen: !this.state.isAddCategoryModalOpen });
    }

    toggleEditCategoryModal = () => {
        this.setState({ isEditCategoryModalOpen: !this.state.isEditCategoryModalOpen });
    }

    toggleDeleteCategoryModal = () => {
        this.setState({ isDeleteCategoryModalOpen: !this.state.isDeleteCategoryModalOpen });
    }

    addCategory = (data) => {
        this.setState({ category: [data, ...this.state.category] })
    }

    updateCategory = (data) => {
        this.setState({ category: this.state.category.map(cat => cat.id === data.id ? data : cat) });
    }

    deleteCategory = categoryId => {
        this.setState({ category: this.state.category.filter(cat => cat.id !== categoryId) })
    }

    render() {
        const { loading, errorMessage, category, isAddCategoryModalOpen,
            isEditCategoryModalOpen, isDeleteCategoryModalOpen, selectedCategory } = this.state;
        return (
            // eslint-disable-next-line react-native/no-color-literals
            <View style={{flex: 1, backgroundColor :'white'}}>

                <ScrollView>
                    <View style={{alignItems:"center",  justifyContent:'space-between', backgroundColor: 'white'}}>
                        <View style={{flexDirection:'row',justifyContent:"space-between",marginTop :33,padding:15,alignContent:"center",width :"100%",}}>
                            <TouchableOpacity >
                                <Icon name="arrow-left" size={20} style={{color:'#1860EF',}} />
                            </TouchableOpacity>
                            <Text style={{fontSize:18,}}>Catégories</Text>
                            <TouchableOpacity>
                                <Icon name="check" size={20} style={{color:'#1860EF',}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{...styles.container, justifyContent:'space-between'}} >
                        <Text style={styles.title}> </Text>
                        {category.length > 0 && category.map((data, index) => <View
                            style={styles.categoryListContainer}
                            key={data.id}>

                            <View style={styles.row}>
                                <View style={styles.col1}>
                                    <Text style={styles.name}>{data.libelle}</Text>
                                </View>

                                <View style={styles.col2}>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.toggleEditCategoryModal();
                                                this.setState({ selectedCategory: data })
                                            }}
                                            style={{ ...styles.button, marginVertical: 0, backgroundColor: "white" }}>
                                            <Icon name="edit" color="#1860EF" size={20} />
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={() => {
                                                this.toggleDeleteCategoryModal();
                                                this.setState({ selectedCategory: data })
                                            }}
                                            style={{ ...styles.button, marginVertical: 0, marginLeft : 10, backgroundColor: "white" }}>
                                            <Icon name="trash" color="#F93154" size={20} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>)}

                        {loading ? <Text
                            style={styles.message}>S'il vous plaît, attendez...</Text> : errorMessage ? <Text
                            style={styles.message}>{errorMessage}</Text> : null}

                        {/* AddCategoryModal modal is open when add Category button is clicked */}
                        {isAddCategoryModalOpen ? <AddCategoryModal
                            isOpen={isAddCategoryModalOpen}
                            closeModal={this.toggleAddCategoryModal}
                            addCategory={this.addCategory}
                        /> : null}

                        {/* EditCategoryModal modal is open when edit button is clicked in particular Category list */}
                        {isEditCategoryModalOpen ? <EditCategoryModal
                            isOpen={isEditCategoryModalOpen}
                            closeModal={this.toggleEditCategoryModal}
                            selectedCategory={selectedCategory}
                            updateCategory={this.updateCategory}
                        /> : null}

                        {/* DeleteCategoryModal modal is open when delete button is clicked in particular Category list */}
                        {isDeleteCategoryModalOpen ? <DeleteCategoryModal
                            isOpen={isDeleteCategoryModalOpen}
                            closeModal={this.toggleDeleteCategoryModal}
                            selectedCategory={selectedCategory}
                            updateCategory={this.deleteCategory}
                        /> : null}
                    </View>
                    <View style={styles.container}>
                    </View>

                </ScrollView>

                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        width : 65,
                        justifyContent: 'center',
                        position: 'absolute',
                        bottom : 10,
                        right : 10,
                        height : 65,
                        backgroundColor: '#1860EF',
                        borderRadius: 100}}
                    onPress= {this.toggleAddCategoryModal}>
                    <Icon name='plus' size={20} color='white' />
                </TouchableOpacity>
            </View>
        );
    }
}

export default GestionCategories;

