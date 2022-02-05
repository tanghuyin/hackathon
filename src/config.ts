import { stringify } from 'qs';

const data = {
    username: "webhookie_admin",
    password: "passwd1",
    grant_type: "password"
}

const AUTH_BODY = stringify(data)

const AUTH_HEADER = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic d2ViaG9va2llX2NsaWVudDo="
}

export { AUTH_BODY, AUTH_HEADER }