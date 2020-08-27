import React from 'react';
import {BottomContainer, Container, GlobalStyles} from './AppStyles';
import {PostCreator} from "../PostCreator/PostCreator";
import {Posts} from "../posts/Posts";

interface IAppProps {

}

const App: React.FC<IAppProps> = () => {
    return (
        <Container>
            <GlobalStyles />
            <PostCreator />
            <BottomContainer>
                <Posts />
            </BottomContainer>
        </Container>
    );
}

export default App;
