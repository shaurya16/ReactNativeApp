import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Field, reduxForm } from 'redux-form';

import Logo from '../components/Logo'
import Form from '../components/Form'
import InputText from '../components/InputText'
import PickerItem from '../components/PickerItem'

import {Actions} from 'react-native-router-flux'
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    signUpTextCont: {
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      marginVertical: 5,
      flexDirection: 'row'
    },
    signUpText: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 18,
      marginBottom: 20
    },
    signupButton: {
      color: '#ffffff',
      fontSize: 18,
      marginBottom: 21
    },
    button: {
        height: 50,
        width: 300,
        backgroundColor: '#1d313a',
        borderRadius: 25,
        marginVertical: 10,
        alignItems: 'center',
        paddingVertical: 14
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
    },
    inputBox: {
        height: 50,
        width: 300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 20,
        marginVertical: 10,
    },
    errorText: {
        color: '#ffffff',
        fontSize: 14,
        paddingHorizontal: 10,
        paddingBottom: 9

    }
});


class Signup extends Component<{}> {
    goBack() {
        Actions.pop()
    }

    onSubmit = (values) => {
        console.log(values);
    }

    renderTextInput = (field) => {
        const {meta: {touched, error, warning}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
              <InputText
                  onChangeText={onChange}
                  maxLength={maxLength}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  secureTextEntry={secureTextEntry}
                  label={label}
                  {...restInput} />

            {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
            </View>
        );
    }

    renderTextInputOptional = (field) => {
        const {meta: {touched, error, warning}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
              <InputText
                  onChangeText={onChange}
                  maxLength={maxLength}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  secureTextEntry={secureTextEntry}
                  label={label}
                  {...restInput} />
            </View>
        );
    }

    render() {
        const {handleSubmit} = this.props
        return (
        <View style={styles.container}>
            <Logo/>
            <Field
                name="firstname"
                placeholder="First Name"
                component={this.renderTextInput} />
            <Field
                name="lastname"
                placeholder="Last Name"
                component={this.renderTextInput} />
            <Field
                name="email"
                placeholder="Email"
                component={this.renderTextInput} />
            <Field
                name="password"
                placeholder="Password"
                secureTextEntry={true}
                component={this.renderTextInput} />
            <Field
                name="mobile"
                placeholder="Mobile phone number"
                maxLength={21}
                component={this.renderTextInput} />
            <Field
                name="month"
                placeholder="Month"
                component={this.renderTextInput} />
            <Field
                name="date"
                placeholder="Date"
                maxLength={2}
                component={this.renderTextInput} />
            <Field
                name="year"
                placeholder="Year"
                maxLength={4}
                component={this.renderTextInput} />
            <Field
                name="gender"
                placeholder="Gender (optional)"
                component={this.renderTextInputOptional} />
            <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
            <View style={styles.signUpTextCont}>
                <Text style={styles.signUpText}>Already have an account?</Text>
                <TouchableOpacity><Text style={styles.signupButton}> Signin</Text></TouchableOpacity>
            </View>
        </View>
        )
    }
};

const validate = (values) => {
    const errors = {}
    if (!values.firstname) {
        errors.firstname = "This is a required field"
    }

    if (!values.lastname) {
        errors.lastname = "This is a required field"
    }

    if (!values.email) {
        errors.email = "This is a required field"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address"
    }

    if (!values.password) {
        errors.password = "This is a required field"
    } else if (values.password.length < 8) {
        errors.password = "Your password isn’t strong!!"
    }
    
    if(!values.mobile) {
        errors.mobile = "This is a required field"
    } else if (!/^([0-9])*$/i.test(values.mobile)) {
        errors.mobile = "Please input a valid mobile phone number"
    }

    if(!values.month) {
        errors.month = "This is a required field"
    } else if (!/^(January|February|March|April|May|June|July|August|September|October|November|December)*$/i.test(values.month)) {
        errors.month = "Please enter a valid month"
    }

    if(!values.date) {
        errors.date = "This is a required field"
    } else if (!/^([0-9])*$/i.test(values.date)) {
        errors.date = "Please input a valid date"
    }

    if(!values.year) {
        errors.year = "This is a required field"
    } else if (!/^([0-9])*$/i.test(values.year)) {
        errors.year = "Please input a valid year"
    }

    return errors;
}

export default reduxForm({
    // a unique name for the form
    form: 'register',
    validate
  })(Signup)
