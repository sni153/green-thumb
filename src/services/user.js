import apiFetch from "./apiFetch";

export const createUser = ({ username, password }) =>
  apiFetch("POST", "/users", { username, password });

export const createSession = ({ username, password }) => {
  return apiFetch("POST", "/users/session", {
    username,
    password,
  });
};

const CAPSTONE_SESSION_KEY = "capstone_session_token";

export const setSessionToken = (capstoneSessionToken) =>
  localStorage.setItem(CAPSTONE_SESSION_KEY, capstoneSessionToken);

export const getSessionTokenStorage = () =>
  localStorage.getItem(CAPSTONE_SESSION_KEY);

export const removeSessionToken = () =>
  localStorage.removeItem(CAPSTONE_SESSION_KEY);
