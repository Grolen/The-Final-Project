import { useCallback, useState } from 'react'

const storageName = 'InfoAboutUser'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken)
    setUserId(id)

    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId,
        token,
      })
    )
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)

    // localStorage.removeItem
  }, [])

  return { login, logout }
}
