import { api, config } from '../utils/apiHandler'

const apiClient = api('/')

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll() {
    return apiClient.get('estates')
  },
  getEstateTypes() {
    return apiClient.get('estatetypes')
  },
}
