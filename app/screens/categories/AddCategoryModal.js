/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
    Modal,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

class AddCategoryModal extends Component {
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

    addCategory = () => {
        const {libelle} = this.state;
        this.setState({ errorMessage: "", loading: true });

        if (libelle) {
            fetch('http://localhost:8881/loca/api/category/add', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    libelle: this.state.libelle
                })
            })
                .then(res => res.json())
                .then(res => {
                    this.props.closeModal();
                    this.props.addCategory({
                        libelle: res.libelle,
                        id: res.id
                    });
                })
                .catch(() => {
                    this.setState({ errorMessage: "Erreur réseau. Veuillez réessayer.", loading: false })
                })
        } else {
            this.setState({ errorMessage: "Le champ Libelle est obligatoire", loading: false })
        }
    }

    render() {
        const { isOpen, closeModal } = this.props;
        const { loading, errorMessage } = this.state;
        return (
            <Modal
                visible={isOpen}
                onRequestClose={closeModal}
                animationType="slide"
                transparent>

                <View style={styles.BackgroundContainer}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Ajouter une catégorie</Text>

                        <TextInput
                            style={styles.textBox}
                            onChangeText={(text) => this.handleChange(text, "libelle")}
                            placeholder="libelle" />

                        {loading ? <Text
                            style={styles.message}>S'il vous plaît, attendez..</Text> : errorMessage ? <Text
                            style={styles.message}>{errorMessage}</Text> : null}

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={this.addCategory}
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{ ...styles.button, marginVertical: 0 }}>
                                <Text style={styles.buttonText}>Ok</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={closeModal}
                                // eslint-disable-next-line react-native/no-inline-styles
                                // eslint-disable-next-line react-native/no-color-literals
                                style={{ ...styles.button, marginVertical: 0, marginLeft : 10, backgroundColor: "#F93154" }}>
                                <Text style={styles.buttonText}>Annuler</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}



export default AddCategoryModal;