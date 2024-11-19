import client from "./client.js"


export const userLogin = async (userInformaiton) => {
  try{
    const response = await client.post("/login", userInformaiton);
    // locastorage 활용..
    return response;
  } catch(error) {
    console.log("로그인 실패", error);
    throw error;
  }
}

export const userSignup = async (userInformaiton) => {
  try{
    const response = await client.post("/user", userInformaiton);
    return response.data;
  } catch (error) {
    console.log("회원가입 실패", error);
    throw error;
  }
}

export const checkTel = async (tel) => {
  try {
    const response = await client.get(`/user/tel/${tel}`);
    return response.data;
  } catch(error) {
    console.log("중복 검사 실패", error);
    throw error;
  }
}

export const getUserInformation = async (userId) => {
  try {
    const response = await client.get(`/user/${userId}`);
    return response.data;
  }
  catch(error) {
    console.log("유저 정보를 가져오는데 실패했습니다.", error);
    throw error;
  }
}

