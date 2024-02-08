import React, { useState } from 'react';
import { bool, node } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import classNames from 'classnames';

import { FormattedMessage, injectIntl, intlShape } from '../../../util/reactIntl';
import * as validators from '../../../util/validators';
import { Form, PrimaryButton, FieldTextInput, FieldRadioButton } from '../../../components';

import css from './SignupForm.module.css';

const SignupFormComponent = props => {
  
  const [show,setShow] = useState(true);

  const HandleChange = (event)=>{
      if(event.target.value==="Freelancer"){
          setShow(true);
      }else{
        setShow(false)
      }
    }
  
    return(
      <FinalForm
      {...props}
      mutators={{ ...arrayMutators }}
      render={fieldRenderProps => {
        const {
          rootClassName,
          className,
          formId,
          handleSubmit,
          inProgress,
          invalid,
          intl,
          termsAndConditions,
        } = fieldRenderProps;
  
        // email
        const emailRequired = validators.required(
          intl.formatMessage({
            id: 'SignupForm.emailRequired',
          })
        );
        const emailValid = validators.emailFormatValid(
          intl.formatMessage({
            id: 'SignupForm.emailInvalid',
          })
        );
  
        // password
        const passwordRequiredMessage = intl.formatMessage({
          id: 'SignupForm.passwordRequired',
        });
        const passwordMinLengthMessage = intl.formatMessage(
          {
            id: 'SignupForm.passwordTooShort',
          },
          {
            minLength: validators.PASSWORD_MIN_LENGTH,
          }
        );
        const passwordMaxLengthMessage = intl.formatMessage(
          {
            id: 'SignupForm.passwordTooLong',
          },
          {
            maxLength: validators.PASSWORD_MAX_LENGTH,
          }
        );
        const passwordMinLength = validators.minLength(
          passwordMinLengthMessage,
          validators.PASSWORD_MIN_LENGTH
        );
        const passwordMaxLength = validators.maxLength(
          passwordMaxLengthMessage,
          validators.PASSWORD_MAX_LENGTH
        );
        const passwordRequired = validators.requiredStringNoTrim(passwordRequiredMessage);
        const passwordValidators = validators.composeValidators(
          passwordRequired,
          passwordMinLength,
          passwordMaxLength
        );
  
        const classes = classNames(rootClassName || css.root, className);
        const submitInProgress = inProgress;
        const submitDisabled = invalid || submitInProgress;
        const showAsRequired = invalid || submitInProgress;
  
        
  
  
        return (
          <Form className={classes} onSubmit={handleSubmit}>
            <div>
              <FieldTextInput
                type="email"
                id={formId ? `${formId}.email` : 'email'}
                name="email"
                autoComplete="email"
                label={intl.formatMessage({
                  id: 'SignupForm.emailLabel',
                })}
                placeholder={intl.formatMessage({
                  id: 'SignupForm.emailPlaceholder',
                })}
                validate={validators.composeValidators(emailRequired, emailValid)}
              />
              <div className={css.name}>
                <FieldTextInput
                  className={css.firstNameRoot}
                  type="text"
                  id={formId ? `${formId}.fname` : 'fname'}
                  name="fname"
                  autoComplete="given-name"
                  label={intl.formatMessage({
                    id: 'SignupForm.firstNameLabel',
                  })}
                  placeholder={intl.formatMessage({
                    id: 'SignupForm.firstNamePlaceholder',
                  })}
                  validate={validators.required(
                    intl.formatMessage({
                      id: 'SignupForm.firstNameRequired',
                    })
                  )}
                />
                <FieldTextInput
                  className={css.lastNameRoot}
                  type="text"
                  id={formId ? `${formId}.lname` : 'lname'}
                  name="lname"
                  autoComplete="family-name"
                  label={intl.formatMessage({
                    id: 'SignupForm.lastNameLabel',
                  })}
                  placeholder={intl.formatMessage({
                    id: 'SignupForm.lastNamePlaceholder',
                  })}
                  validate={validators.required(
                    intl.formatMessage({
                      id: 'SignupForm.lastNameRequired',
                    })
                  )}
                />
              </div>
  
              <div  onChange={HandleChange} className={css.radioContainer}>
                <FieldRadioButton
                  id='SignupForm.RoleUser'
                  name="role"
                  label="I am an User"
                  value="User"
                  showAsRequired={showAsRequired}
                 
                />
                <div className={css.radio}></div>
                <FieldRadioButton
                  id='SignupForm.Freelancer'
                  name="role"
                  label="I am an Freelancer"
                  value="Freelancer"
                  showAsRequired={showAsRequired}
                  
                />
              </div>
              
              <FieldTextInput
                className={css.password}
                type="password"
                id={formId ? `${formId}.password` : 'password'}
                name="password"
                autoComplete="new-password"
                label={intl.formatMessage({
                  id: 'SignupForm.passwordLabel',
                })}
                placeholder={intl.formatMessage({
                  id: 'SignupForm.passwordPlaceholder',
                })}
                validate={passwordValidators}
              />
  
  
              {show?
               <FieldTextInput
               className={css.password}
               type="text"
               id={formId ? `${formId}.storefront` : 'storefront'}
               name="storeFront"
               autoComplete="your-store-front"
               label={intl.formatMessage({
                 id: 'SignupForm.storefrontLabel',
               })}
               placeholder={intl.formatMessage({
                 id: 'SignupForm.StoreFrontPlaceholder',
               })}
               validate={validators.required(
                 intl.formatMessage({
                   id: 'SignupForm.StoreFrontRequired',
                 })
               )}
             />:""
              
            }
             
            </div>
  
            <div className={css.bottomWrapper}>
            
              {termsAndConditions}
              <PrimaryButton type="submit" inProgress={submitInProgress} disabled={submitDisabled}>
                <FormattedMessage id="SignupForm.signUp" />
              </PrimaryButton>
            </div>
          </Form>
        );
      }}
    />
    )
  
  
};

SignupFormComponent.defaultProps = { inProgress: false };

SignupFormComponent.propTypes = {
  inProgress: bool,
  termsAndConditions: node.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const SignupForm = compose(injectIntl)(SignupFormComponent);
SignupForm.displayName = 'SignupForm';

export default SignupForm;
