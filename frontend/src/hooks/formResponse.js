import axios from 'axios';

export const useExternalApi = () => {
    const apiServerUrl = "http://localhost:8080";

    const makeRequest = async (options) => {
        try {
            const response = await axios(options.config)
            const {data}  = response

            return data
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response.data
            }

            return error.message
        }
    }

    const getFormularios = async (setForms) => {
        console.log("Estoy llegando aqui")
        var url = `${apiServerUrl}/formularios`
        const config = {
            url: url,
            method: 'GET',
            headers: {},
            data: {}
        }

        const data = await makeRequest({config})
        console.log(data)
        setForms(data)
    }

    const createFormulario = async (formulario) => {
        const config = {
            url: `${apiServerUrl}/create/formulario`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: formulario
        }

        const data = await makeRequest({config})
        console.log("Form created successfully", data)
    }






    return {
        getFormularios,
        createFormulario,
    }
}