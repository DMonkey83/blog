import styled from 'styled-components'

export const Container = styled.div``

interface ICommentProps {
    hasFlag: boolean;
}

export const Comment = styled.div<ICommentProps>`
  color: ${props => props.hasFlag ? 'red' : ''}
`