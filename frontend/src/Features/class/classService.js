import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

const getClasses = async () => {
  const response = await axios.get(`${API_URL}/materie`)
  return response.data
}

export default {
  getClasses,
}
