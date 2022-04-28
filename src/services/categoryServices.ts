import { api, config } from '../utils/apiHandler'

const apiClient = api('/')

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getStatusTypes() {
    return apiClient.get('invoices/status/')
  },
}
