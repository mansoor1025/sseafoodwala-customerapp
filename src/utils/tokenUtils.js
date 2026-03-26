// utils/tokenUtils.js
import { jwtDecode } from 'jwt-decode';

export const isTokenExpiringSoon = (token, bufferSeconds = 300) => {
    if (!token) return false;

    const { exp, iat } = jwtDecode(token); // exp in seconds

    const now = Date.now() / 1000;

    return exp - now <= bufferSeconds;
};
