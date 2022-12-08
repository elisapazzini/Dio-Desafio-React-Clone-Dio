import * as React from "react";

import { UserInfoContainer, UserPicture, NameText, Progress } from "./styles";

const UserInfo = ({name, image, percentual}) => {
    return (
        <UserInfoContainer>
            <UserPicture src={image}></UserPicture>
            <div>
                <NameText>{name}</NameText>
                <Progress percentual = {percentual}></Progress>
            </div>
        </UserInfoContainer>
    )
}

export { UserInfo }