import {useState} from 'react'

import {
  PasswordValidatorContainer,
  PasswordContainer,
  PasswordValidatorHeading,
  PasswordValidatorParagraph,
  InputContainer,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [value, setUpdate] = useState('')
  const showErrorMessage = value.length < 8

  const onChangeValue = event => {
    event.preventDefault()
    setUpdate(event.target.value)
  }
  return (
    <>
      <PasswordValidatorContainer>
        <PasswordContainer>
          <PasswordValidatorHeading>
            Password Validator
          </PasswordValidatorHeading>
          <PasswordValidatorParagraph>
            Check how strong and secure is your password{' '}
          </PasswordValidatorParagraph>
          <InputContainer
            type="password"
            value={value}
            onChange={onChangeValue}
          />
          {showErrorMessage && (
            <ErrorMessage>
              Your password must be at least 8 characters
            </ErrorMessage>
          )}
        </PasswordContainer>
      </PasswordValidatorContainer>
    </>
  )
}

export default PasswordValidator
