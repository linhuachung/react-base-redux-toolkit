import axiosInstance from '../../apis/index.js';
import { verifyDataPost } from '../../utils/helpers/format.js';
import Toast from '../../components/Toast/index.jsx';
import { ListMessageError, ListMessageSuccess } from '../../utils/index.js';
import { TOAST_STATUS } from '../../components/Toast/toast-message.js';
import PropTypes from 'prop-types';

const methods = {
    get: (url) => axiosInstance.get(url),
    post: (url, data) => axiosInstance.post(url, data),
    put: (url, data) => axiosInstance.put(url, data),
    delete: (url, data) => axiosInstance.delete(url, { data }),
    postFile: (url, file) => {
        const formData = new FormData();
        formData.append('file', file)
        return axiosInstance.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

const callApi = async ({
                           method,
                           data,
                           url,
                           onRequest = () => {
                           },
                           onSuccess = () => {
                           },
                           onFailed = () => {
                           },
                           onFinally = () => {
                           },
                           textSuccess = ''
                       }) => {
    onRequest(textSuccess)
    try {
        const response = await methods[method](
            url,
            method === 'delete' || method === 'postFile' ? data : verifyDataPost(data)
        )
        onSuccess(response)

        textSuccess && Toast(ListMessageSuccess[textSuccess] || 'Success', TOAST_STATUS.success)

        return response
    } catch (error) {
        console.log(error)
        if (error.code === 'ERROR_NETWORK') {
            Toast('Network error', TOAST_STATUS.error);
            throw new Error('Network error')
        }
        const dataError = error.response.data
        if (dataError.error[0].code === '401') {
            localStorage.clear()
            window.location.href = '/login'
        }
        onFailed(dataError)
        Toast(ListMessageError[dataError.error[0].code] || dataError.error[0].code, TOAST_STATUS.error)
        throw new Error(dataError.message || 'Unknown error occurred')
    } finally {
        onFinally()
    }
}

callApi.prototype = {
    method: PropTypes.oneOf(['get', 'post', 'put', 'delete', 'postFile']).isRequired,
    url: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.instanceOf(FormData)]),
    onRequest: PropTypes.func,
    onSuccess: PropTypes.func,
    onFailed: PropTypes.func,
    onFinally: PropTypes.func,
    textSuccess: PropTypes.func,

}

export { callApi }
