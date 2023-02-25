import styled from 'styled-components'

export const TextContainer = styled.div`
  background-color: #25262c;
  height: 90%;
  width: 40%;
  border-radius: 12px;
  border: 1px solid #f8fafc;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const TextArea = styled.div``
export const Item = styled.li`
  list-style-type: none;
`

export const Input = styled.textarea`
  width: 100%;
  height: 520px;
  background-color: transparent;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-family: 'Roboto';
  font-size: 22px;
  color: #f8fafc;
  padding: 30px;
  text-decoration: ${props => (props.underLine ? 'underline' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
`

export const UnderLineButton = styled.button`
  padding: 12px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${props => (props.underLine ? '#faff00' : '#f1f5f9')};
`
export const ItalicButton = styled.button`
  padding: 12px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
`
export const BoldButton = styled.button`
  padding: 12px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
`

export const ButtonContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 10%;
  border-bottom: 1.5px solid #f8fafc;
`

export const ImageContainer = styled.div`
  width: 90vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #1b1c22;
`

export const Container = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Head = styled.h1`
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 34px;
  color: #f8fafc;
`
