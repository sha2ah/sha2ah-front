import { api } from '../utils/apiHandler'

const client = api('')

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login(creds: { username: string; password: string }) {
    return client.post('token/', creds)
  },
}
