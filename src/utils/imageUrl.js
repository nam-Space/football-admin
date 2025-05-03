import defaultAvatar from "../images/user/default-avatar.png";

export const getUserAvatar = (name) => {
    return name || defaultAvatar;
};
