import client from "./client.js"


export const createAccount = async (userId) => {
  try {
    const response = await client.post("/account", userId);
    return response.data;
  } catch(error) {
    console.log("계좌 생성 실패", error);
    throw error;
  }
}

export const depositAccount = async (balanceInfo) => {
  try{
    const response = await client.patch("/account/deposit", balanceInfo);
    return response.data;
  } catch(error) {
    console.log("입금 실패", error);
    throw error;
  }
}

export const withdrawalAccount = async (balanceInfo) => {
  try{
    const response = await client.patch("/account/withdraw", balanceInfo);
    return response.data;
  } catch(error) {
    console.log("출금 실패", error);
    throw error;
  }
}

export const remittanceAccount = async (balanceInfo) => {
  try{
    const response = await client.patch("/account/transfer", balanceInfo);
    return response.data;
  } catch(error) {
    console.log("송금 실패", error);
    throw error;
  }
}

export const getAccountInformation = async (accountNumber) => {
  try {
    const response = await client.get(`/account/${accountNumber}`);
    return response.data;
  } catch(error) {
    console.log("계좌 정보 조회 실패", error);
    throw error;
  }
}
