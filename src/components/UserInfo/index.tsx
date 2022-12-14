import * as React from "react";

import { UserInfoContainer, UserPicture, NameText, Progress } from "./styles";
import { IUserInfo } from "./types";

const UserInfo = ({name, image, percentual}: IUserInfo) => {
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