const buildOptions = (data) => {
    const options = {};
    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            "content-type": "application/json",
        };
    }
    const token = localStorage.getItem('accessToken');
    
    if(token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        }
    }
    return options;
};

const request = async (method, url, data) => {
    const responce = await fetch(url, {
        ...buildOptions(data), // Here is important to destructurize because it is an object
        method, // Just to be sure that method is rewritten with the correct one
    });
   

    if(responce.status === 204) {
        return {};
    }

    const result = await responce.json();

    if (!responce.ok) {
        throw result
    }

    return result;
};

export const get = request.bind(null, "GET"); // here we bind the first param to be 'GET' and expect only the other params of reques fn, it is called'partial application'
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");
