

function validateUser(values) {
  const error = {};

  if(!values.username.trim()){
    error.username = "이름을 입력하세요"
  };
  if(!/^\d{10,11}$/.test(values.tel)) {
    error.tel = "전화번호는 숫자로만 10~11자로 입력하세요"
  }

  if (!(values.password.length >= 8 && values.password.length < 20)) {
    error.password = '비밀번호는 8~20자 사이로 입력해 주세요';
  } else if(!values.password.trim()) {
    error.password =  "비밀번호를 입력해주세요";
  }

  if (values.password !== values.passwordConfirm) {
    error.passwordConfirm = '비밀번호가 일치하지 않습니다.';
  } else if(!values.passwordConfirm.trim()) {
    error.passwordConfirm = "비밀번호를 입력해주세요";
   }
  return error
}

export {validateUser};