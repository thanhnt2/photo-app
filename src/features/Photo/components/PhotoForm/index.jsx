import { FastField, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Images from '../../../../constants/images';
import InputField from '../../../../custom-fields/InputField';
import RandomPhotoField from '../../../../custom-fields/RandomPhotoField';
import SelectField from '../../../../custom-fields/SelectField';

PhotoForm.propTypes = {
    obSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    obSubmit: null,
}

function PhotoForm(props) {
    const initialValues = {
        title: '',
        categoryId: null,
    };
    
    return (
        <Formik 
            initialValues={initialValues}
            onSubmit={values => console.log('Submit: ',values)}
        >
            {formikProps => {
                // do something here

                const {values, errors, touched } = formikProps;
                console.log({values, errors, touched});

                return (
                    <Form>
                        <FastField 
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        />

                        <FastField 
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />
                  
                        <FastField
                        name="photo"
                        component={RandomPhotoField}
                        label="photo"
                        />
                     
                        <FormGroup>
                            <Button type="submit" color="primary">Add to album</Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
        
    );
}

export default PhotoForm;