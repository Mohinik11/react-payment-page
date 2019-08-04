import axios from "axios"
const basePath = `${process.env.REACT_APP_API_ROOT_URL}/paymentData`;

const index = () =>
  axios
    .get(basePath)
    .then((response) => {
      const data = response.data
      if (response.status >= 200 && response.status <= 300) {
        console.log(response);
        return data
      } else {
        const error = (data && data.message) || response.statusText
        return Promise.reject(error)
      }
    })

export const paymentService = {
  index
}
