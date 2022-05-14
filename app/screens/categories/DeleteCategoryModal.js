/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {delet} from "style"
import {
    Modal,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

class DeleteCategoryModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            libelle: "",
            loading: false,
            errorMessage: ''
        };
    }

    handleChange = (value, state) => {
        this.setState({ [state]: value })
    }

    deleteCategory = () => {
        this.setState({ errorMessage: "", loading: true });
        fetch(`http://localhost:8881/loca/api/category/delete/${this.props.selectedCategory.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(res => {
                this.props.closeModal();
                this.props.updateCategory(this.props.selectedCategory.id);
            })
            .catch(() => {
                this.setState({ errorMessage: "Erreur réseau. Veuillez réessayer.", loading: false })
            })
    }

    render() {
        const { isOpen, closeModal, selectedCategory } = this.props;
        const { loading, errorMessage } = this.state;
        return (
            <Modal
                visible={isOpen}
                onRequestClose={closeModal}
                animationType="slide"
                transparent
            >
                <View style={styles.BackgroundContainer}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Souhaitez-vous supprimer la catégorie ({selectedCategory.libelle})?</Text>

                        {loading ? <Text
                            style={styles.message}>S'il vous plaît, attendez...</Text> : errorMessage ? <Text
                            style={styles.message}>{errorMessage}</Text> : null}

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={this.deleteCategory}>
                                <Text style={styles.buttonText}>Confirmer</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ marginLeft : 10 }}
                                onPress={closeModal}>
                          
                                <Text style={{ ...delet.buttonText, color: "#1860EF" }}>Annuler</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default DeleteCategoryModal;

