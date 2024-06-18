import { toast } from 'react-toastify'

import startCase from 'lodash.startcase'

export const notify = (message: string, success: boolean) => {
    if (success) {
        toast.success(message)
    } else {
        toast.error(message)
    }
}

export const capitalizeString = (inputString: string) => {
    return inputString.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
        return str.toUpperCase()
    })
}

export const normalizeText = (text: string) => {
    return startCase(text)
}
