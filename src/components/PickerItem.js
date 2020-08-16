import PropTypes from "prop-types";
import React, {Component} from "react";
import { Button, Modal, Picker, TouchableHighlight, TouchableOpacity, Text, View, StyleSheet} from "react-native";

const propTypes = {
    buttonTitle: PropTypes.string,
    pickerSelection: PropTypes.string, 
    pickerDisplayed: PropTypes.bool,
    value: PropTypes.string
};

const defaultProps = {
    buttonTitle: 'Select a Month!',
    pickerSelection: '',
    pickerDisplayed: false,
    value: '',
};

const styles = StyleSheet.create({
  inputBox: {
    height: 30,
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:20,
    color:'#ffffff',
    marginVertical: 10
  },
  modal: {
    margin: 20, 
    padding: 20,
    backgroundColor: '#efefef',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
    position: 'absolute'
  },
  pickerButton: {
    height: 30,
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:20,
    color:'#ffffff',
    marginVertical: 10
  },
  pickerButtonText: {
    marginTop: 2,
    fontSize: 20,
    color: 'rgba(255,255,255,0.8)',
  },
  

});

class PickerItem extends Component<{}> {

    state = {
        buttonTitle: "",
        pickerDisplayed: false,
        value: ""
    }
    
    componentDidMount() {
        this.setState({
            buttonTitle: this.props.buttonTitle,
            pickerSelection: this.props.pickerSelection,
            value: this.props.value
        });
    }

    setPickerValue(title, value) {
        this.setState({
            value
        })
    
        this.togglePicker();
    }
    
    togglePicker() {
        this.setState({
          pickerDisplayed: !this.state.pickerDisplayed
        })
    }

    render() {
        const pickerValues = [
            {
                title: 'January',
                value: 'january'
            },
            {
                title: 'February',
                value: 'february'
            },
            {
                title: 'March',
                value: 'march'
            },
            {
                title: 'April',
                value: 'april'
            },
            {
                title: 'June',
                value: 'june'
            },
            {
                title: 'July',
                value: 'july'
            },
            {
                title: 'August',
                value: 'august'
            },
            {
                title: 'September',
                value: 'september'
            },
            {
                title: 'October',
                value: 'october'
            },
            {
                title: 'November',
                value: 'november'
            },
            {
                title: 'December',
                value: 'december'
            },
        ]
        const {selectedValue, onValueChange} = this.props;
        return (
            <View>
                <TouchableOpacity style={styles.pickerButton} onPress={() => this.togglePicker()}>
                    <Text style={styles.pickerButtonText}>{ this.state.buttonTitle }</Text>
                </TouchableOpacity>
                <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true}>
                    <View style={styles.modal}>
                        <Text>Please pick a value</Text>
                            { pickerValues.map((value, index) => {
                            return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.title, value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                                <Text>{ value.title }</Text>
                                </TouchableHighlight>
                            })}
                        <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
                        <Text style={{ color: '#999' }}>Cancel</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
        );
    }
}

PickerItem.defaultProps = defaultProps;

PickerItem.propTypes = propTypes;

export default PickerItem;