import React from 'react';
import styled from 'styled-components';

function AvatarPage() {

    return (
        <div>
            <h1>CHOOSE YOUR AVATAR.</h1>
        <AvatarSelection>
            
        </AvatarSelection>
        </div>
    );
}

const AvatarSelection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export default AvatarPage;