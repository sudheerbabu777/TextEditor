import React from 'react'
import {GoItalic} from 'react-icons/go'
import {VscBold} from 'react-icons/vsc'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  Container,
  ImageContainer,
  TextContainer,
  HeaderContainer,
  ButtonContainer,
  ItalicButton,
  BoldButton,
  UnderLineButton,
  TextArea,
  Input,
  Head,
  Item,
} from './styledComponents'

class TextEdit extends React.Component {
  state = {
    bold: false,
    underLine: false,
    italic: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onClickUnderLine = () => {
    this.setState(prevState => ({underLine: !prevState.underLine}))
  }

  render() {
    const {underLine, italic, bold} = this.state

    return (
      <Container>
        <ImageContainer>
          <HeaderContainer>
            <Head>Text Editor</Head>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </HeaderContainer>

          <TextContainer>
            <ButtonContainer>
              <Item>
                <BoldButton
                  data-testid="bold"
                  onClick={this.onClickBold}
                  bold={bold}
                >
                  <VscBold size={30} />
                </BoldButton>
              </Item>
              <Item>
                <ItalicButton
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  italic={italic}
                >
                  <GoItalic size={30} />
                </ItalicButton>
              </Item>
              <Item>
                <UnderLineButton
                  data-testid="underline"
                  onClick={this.onClickUnderLine}
                  underLine={underLine}
                >
                  <AiOutlineUnderline size={30} />
                </UnderLineButton>
              </Item>
            </ButtonContainer>
            <TextArea>
              <Input
                row="40"
                col="300"
                bold={bold}
                italic={italic}
                underLine={underLine}
              >
                Text
              </Input>
            </TextArea>
          </TextContainer>
        </ImageContainer>
      </Container>
    )
  }
}

export default TextEdit
