import styled from 'styled-components'

export const PasswordValidatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  min-height: 100vh;
`

export const PasswordContainer = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   background-color: #475569;
  //   width: 400px;
  //   height: 400px;
  //   border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383a4e;
  border-radius: 12px;
  margin-right: 13px;
  //   margin-left: 5px;
  width: 64%;
  height: 33vh;
  min-width: 325px;
  box-shadow: 0px 1px 1px #434451;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 62vh;
    min-width: 520px;
    max-width: 600px;
  }
`
export const PasswordValidatorHeading = styled.h1`
  //   font-weight: bold;
  //   color: #f8fafc;
  //   font-size: 'Roboto';
  //   //   line-height: 5px;
  //   margin-bottom: 20px;

  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`
export const PasswordValidatorParagraph = styled.p`
  //   font-weight: bold;
  //   color: #f8fafc;
  //   font-size: 'Roboto';
  //   line-height: 5px;
  color: #f8fafc;
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
  width: 80%;
  margin-top: 12px;
  margin-bottom: 16px;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 28px;
  }
`
export const InputContainer = styled.input`
  //   font-weight: bold;
  //   color: #383a4e;
  //   font-size: 'Roboto';
  //   background-color: #ffffff;
  //   width: 100px;
  //   height: 50px;
  color: #475569;
  background-color: #edeeff;
  font-size: 14px;
  height: 43px;
  border: 1px solid #24263c;
  border-radius: 2px;
  margin-top: 16px;
  padding: 8px 16px;
  min-width: 280px;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    height: 47px;
    margin-top: 28px;
    min-width: 383px;
  }
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 8px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
