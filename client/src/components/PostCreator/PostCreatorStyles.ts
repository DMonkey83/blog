import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`

export const Title = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  font-size: 30px;
  line-height: 34px;
  margin-bottom: 10px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
    width: 80%;
    >label {
        font-size: 20px;
        margin-bottom: 6px;
    }
    >input {
        width: 100%;
    }
`
export const ButtonContainer = styled.div`
  display: flex;
  
`

interface IButton {
   readonly main: boolean;
}
export const Button = styled.button<IButton>`
  width: 165px;
  height: 28px;
  box-sizing: border-box;
  margin-right: ${props => props.main ? 'auto' : '10px'};
  background-color: ${props => props.main ? 'darkslateblue': 'red'};
  color: white;
  appearance: none;
  outline: 0;
  border: 1px solid black;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 700;
`
