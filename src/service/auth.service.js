import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  // jika berhasil mengirim token ke callback ke halaman formLogin mengirim true dan token jika gagal mengirim false dan pesan error ke callback
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((error) => {
      callback(false, error);
    });
};
// jika token valid mengembalikan username dari token dan jika token tidak valid mengembalikan null
export const getUserName = (token) => {
  // fungsinya untuk mengambil username dari token valid atau tidak valid dengan jwt decode
  const decoded = jwtDecode(token);
  //   mengembalikan username jika token valid dan null jika token tidak valid
  return decoded.user;
};
