import { toast, TypeOptions } from 'react-toastify'

export const Toast = (message: string, type: TypeOptions | undefined) => {
  toast(message, {
    position: 'top-right',
    type: type,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    theme: 'colored',
    pauseOnHover: true,
    progress: undefined,
  })
}
