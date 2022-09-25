import { observer } from 'mobx-react-lite';
import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';

export default observer(function ServerError() {
    const {commonStore} = useStore();
    return (
        <Container>
            <h1>error</h1>
            {/* <Header content='Server Error' />
            <Header  />
            {commonStore.error?.details &&
                <Segment>
                    <Header  content='Stack trace' color='teal' />
                    <code style={{marginTop: '10px'}}>{commonStore.error.details}</code>
                </Segment> */}
                
            {/* } */}
        </Container>
    )
})