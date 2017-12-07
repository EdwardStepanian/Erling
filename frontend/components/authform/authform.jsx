import React from 'react';
import { bindActionCreators } from 'redux';
import { Field, formValueSelector } from 'react-redux';
import { connect } from 'reac-redux';
import { makeTestAction } from '../../actions/testaction';
import Button from 'arui-feather/button';
import Form from 'arui-feather/form';
import FormField from 'arui-feather/form-field';
import Input from 'arui-feather/input';
import Label from 'arui-feather/label';
import { inputField } from '../../utils/componentFactory';

let formConfig = {
    form: 'testForm'
};

let foundStatus = '';
const selector = formValueSelector('testFrom');

function mapStateToProps() {
    return {
        phoneField: selector(state, 'phoneNumber'),
        statusResp: state.testRed.respResult,
        answer: state.testRed.answerReceived
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ makeTestAction}, dispatch)
}