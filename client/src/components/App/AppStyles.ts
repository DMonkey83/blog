import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
    body {
        font-family: 'Lato', sans-serif;
    }
`

export const Container = styled.div`
margin: 0 auto;

@media (max-width: 786px) {
max-width: 100%;
}
@media (max-width: 1080px) {
max-width: 90%;
}
@media (min-width: 1080px) {
max-width: 80%;
}
`

export const BottomContainer = styled.div``