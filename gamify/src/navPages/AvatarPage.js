import React from 'react';
import styled from 'styled-components';

function AvatarPage() {

    return (
        <div>
            <h1>CHOOSE YOUR AVATAR.</h1>
        <div className="avatarselection">
            <div>
            <input type="radio" id="avatar1" name="avatar" value="avatar1" />
            <img src= "/Assets/avatar1.png" alt="avatar1" />
            </div>
            <div>
            <input type="radio" id="avatar2" name="avatar" value="avatar2" />
            <img src= "/Assets/avatar2.png" alt="avatar2" />
            </div>
            <div>
            <input type="radio" id="avatar3" name="avatar" value="avatar3" />
            <img src= "/Assets/avatar3.png" alt="avatar3" />
            </div>
            <div>
            <input type="radio" id="avatar4" name="avatar" value="avatar4" />
            <img src= "/Assets/avatar4.png" alt="avatar4" />
            </div>
            <div>
            <input type="radio" id="avatar5" name="avatar" value="avatar5" />
            <img src= "/Assets/avatar5.png" alt="avatar5" />
            </div>
            <div>
            <input type="radio" id="avatar6" name="avatar" value="avatar6" />
            <img src= "/Assets/avatar6.png" alt="avatar6" />
            </div>
        </div>
        </div>
    );
}

const StyledDiv = styled.div`
  .avatarselection {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export default AvatarPage;