/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {edit} from "style"
import {
    Modal,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

class EditCategoryModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            libelle: "",
            loading: false,
            errorMessage: ''
        };
    }

    componentDidMount() {
        const { libelle } = this.props.selectedCategory;
        this.setState({
            libelle: libelle,
        })
    }

    handleChange = (value, state) => {
        this.setState({ [state]: value })
    }

    updateCategory = () => {
        const { libelle } = this.state;
        this.setState({ errorMessage: "", loading: true });

        if (libelle) {
            fetch(`http://localhost:8881/loca/api/category/update/${this.props.selectedCategory.id}`, {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    libelle: this.state.libelle,
                })
            })
                .then(res => res.json())
                .then(res => {
                    this.props.closeModal();
                    this.props.updateCategory({
                        libelle: res.libelle,
                        id: this.props.selectedCategory.id
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
        const { libelle, loading, errorMessage } = this.state;
        return (
            <Modal
                visible={isOpen}
                onRequestClose={closeModal}
                animationType="slide"
                transparent>

                <View style={edit.BackgroundContainer}>
                    <View style={edit.container}>
                        <Text style={edit.title}>Modifier Catégorie</Text>

                        <TextInput
                            value={libelle}
                            style={edit.textBox}
                            onChangeText={(text) => this.handleChange(text, "libelle")}
                            placeholder="Libelle" />

                        {loading ? <Text
                            style={edit.message}>S'il vous plaît, attendez...</Text> : errorMessage ? <Text
                            style={edit.message}>{errorMessage}</Text> : null}

                        <View style={edit.buttonContainer}>
                            <TouchableOpacity
                                onPress={this.updateCategory}
                                style={{ ...edit.button, marginVertical: 0 }}>
                                <Text style={edit.buttonText}>Ok</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={closeModal}
                                style={{ ...edit.button, marginVertical: 0, marginLeft : 10, backgroundColor: "#F93154" }}>
                                <Text style={edit.buttonText}>Retour</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default EditCategoryModal;

