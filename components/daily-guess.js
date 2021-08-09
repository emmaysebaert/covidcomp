import React, { Fragment } from 'react';

import { DatePicker } from '@atlaskit/datetime-picker';
import Select from '@atlaskit/select';
import Textfield from '@atlaskit/textfield';
import Form, { Field, FormFooter, ErrorMessage } from '@atlaskit/form';
import LoadingButton from '@atlaskit/button/loading-button';


import moment from 'moment';
// get participants
// fetch from DB

// add participant
// put to DB

// form
// participant
// cases number 1
// hospitalisations number 2
// colour color picker
// date date picker days from yesterday disabled

const today = moment().format("DD/MM/YYYY");


const participants = [{label: 'Emma', value: 'Emma'},{label: 'Loki', value: 'Loki'}];
function DailyGuess({ }) {
    const handleSubmit = (data) => { 
        console.log(data);
    }

    const validateParticipant = (value) => {
        if (!value) {
            return 'Please select a participant';
        }
        return undefined;
    }

    const validateNumber = (value) => {
        if (value < 0 || !value) {
            return 'Please enter a number greater than 0';
        }
        return undefined;
    }

    const validateDate = (value) => {
        console.log(value);
        if (!value) {
            return 'Please select a date';
        }
        return undefined;
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            {({ formProps, submitting }) => (
                <form {...formProps}>
                    <Field name="participant" label="Participant" validate={validateParticipant}>
                        {({ fieldProps, error }) => (
                            <>
                                <Select 
                                    validationState={error ? 'error' : 'default'}
                                    options={participants}
                                    {...fieldProps}
                                />
                                {error && (
                                    <ErrorMessage>{error}</ErrorMessage>
                                )}
                            </>
                        )}
                    </Field>
                    <Field name="Cases" label="Locally acquired cases" validate={validateNumber}>
                        {({ fieldProps, error }) => (
                            <>
                                <Textfield
                                    type="number"
                                    {...fieldProps}
                                    isInvalid={!!error}
                                />
                                {error && (
                                    <ErrorMessage>{error}</ErrorMessage>
                                )}
                            </>
                        )}
                    </Field>
                    <Field name="Hospitalisations" label="Hospitalisations" validate={validateNumber}>
                        {({ fieldProps, error }) => (
                            <>
                                <Textfield
                                    type="number"
                                    {...fieldProps}
                                    isInvalid={!!error}
                                />
                                {error && (
                                    <ErrorMessage>{error}</ErrorMessage>
                                )}
                            </>
                        )}
                    </Field>
                    <Field name="Date" label="Guess date" validate={validateDate} defaultValue={moment().format()}>
                        {({ fieldProps, error }) => (
                            <>
                                <DatePicker dateFormat="DD/MM/YYYY" minDate={today} {...fieldProps} />
                                {error && (
                                    <ErrorMessage>{error}</ErrorMessage>
                                )}
                            </>
                        )}
                    </Field>
                    <FormFooter>
                        <LoadingButton
                            appearance="primary"
                            type="submit"
                            isLoading={submitting}
                        >
                            Submit my guess
                        </LoadingButton>
                    </FormFooter>
                </form>
            )}
        </Form>
    )
};

export default DailyGuess;