import { Axios } from '../../boot/axios'

const SubscribeService = (user) => {
  console.log()
  return Axios.post('message/v1/subscribe', {
    email: user.email
  }).then(response => {
      console.log(response)
      return response.data.message
  })
}

export { SubscribeService }