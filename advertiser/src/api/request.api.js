import server from './server'

export const requestAd = `${server}/api/advertisements`;
export const createAd = `${server}/api/advertisements/create_adds`;


export const requestRegister = `${server}/api/auth/register`;

export const requestLogin = `${server}/api/auth/login`;

export const getComments = `${server}/api/comment/get_comments`;

export const postComments = `${server}/api/comment/post_comment`;