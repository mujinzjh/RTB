import { constantsInterface } from "../Interface"

const Constants: constantsInterface = {
  BASE_URL: process.env.NODE_ENV == 'development' ? "/api" : '',
  HTTP_SUCCESS_CODE: 200,
  TOKEN_ISVAILD: 401
}

export default Constants