import elementos_index from './index.js';

import axios from 'axios';

const button_gets = window.document.querySelectorAll("#button_get");
const button_posts = window.document.querySelectorAll("#button_post");
const button_puts = window.document.querySelectorAll("#button_put");
const button_patchs = window.document.querySelectorAll("#button_patch");
const button_deletes = window.document.querySelectorAll("#button_delete");
const button_multiplos = window.document.querySelectorAll("#button_multiplo");
const button_transforms = window.document.querySelectorAll("#button_transform");
const button_errorhandlings = window.document.querySelectorAll("#button_errorhandling");
const button_cancels = window.document.querySelectorAll("#button_cancel");
const button_limpars = window.document.querySelectorAll("#button_limpar");

const status = window.document.querySelector("#status");

const code_data = window.document.querySelector("#code_data");
const code_headers = window.document.querySelector("#code_headers");
const code_config = window.document.querySelector("#code_config");

// Função para retorno de resposta da API.
let return_response = (status_api, data, headers, config, type = null) => {

    if(status_api == '200' || status_api == '201') {
    
        if(status.classList.contains('bg-gray-200')) {

            status.classList.remove('bg-gray-200');

        } else if(status.classList.contains('bg-red-200')) {

            status.classList.remove('bg-red-200');

        };  

        status.classList.add('bg-green-200');

    } else if(status_api != '0') {

        if(status.classList.contains('bg-gray-200')) {

            status.classList.remove('bg-gray-200');

        } else if(status.classList.contains('bg-green-200')) {

            status.classList.remove('bg-green-200');

        };

        status.classList.add('bg-red-200');

    }

    status.innerHTML = status_api;

    let json_data = JSON.stringify(data, null, 2);
    let json_headers = JSON.stringify(headers, null, 2);
    let json_config = JSON.stringify(config, null, 2);

    if(type != 'delete') {

        json_data = json_data.slice(1, -1);

    }

    json_headers = json_headers.slice(1, -1);
    json_config = json_config.slice(1, -1);

    if(type == 'multiplo'){

        code_data.innerHTML += json_data;
        code_headers.innerHTML += json_headers;
        code_config.innerHTML += json_config;

    } else {

        code_data.innerHTML = json_data;
        code_headers.innerHTML = json_headers;
        code_config.innerHTML = json_config;

    }

    Prism.highlightAll();

}

// Botão para limpar os campos da requisição.
button_limpars.forEach(button_limpar => {

    button_limpar.addEventListener("click", () => {

        code_data.innerHTML = '';
        code_headers.innerHTML = '';
        code_config.innerHTML = '';

    })

});

// Aprendendo sobre interceptadores.
axios.interceptors.request.use(function (config) {

    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    return config;

}, function (error) {

    return Promise.reject(error);

});

// Configurações padrões.
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// const instance = axios.create({

//     baseURL: 'https://api.example.com'

// });

// Botão para requisição GET.
button_gets.forEach(button_get => {

    button_get.addEventListener("click", () => {

        const config = {

            params: {

                _limit: 5

            }

        };

        // Estamos utilizando a configuração padrão de URL. Linha 117.
        axios.get("/posts", config)
    
            .then(response => {
    
                return_response(response.status, response.data, response.headers, response.config);
    
            })
    
    });
    
});

// Botão para requisição POST.
button_posts.forEach(button_post => {

    const data = {

        title: 'foo',
        body: 'bar',
        userId: 1

    };

    button_post.addEventListener("click", () => {

        axios.post("https://jsonplaceholder.typicode.com/posts", data)
        
            .then(response => {

                return_response(response.status, response.data, response.headers, response.config);

            })

    });    
    
});

// Botão para requisição PUT.
button_puts.forEach(button_put => {

    button_put.addEventListener("click", () => {

        const data = {

            title: 'foo',
            body: 'bar',
            userId: 1
    
        };

        axios.put("https://jsonplaceholder.typicode.com/posts/1", data)

            .then(response => {

                return_response(response.status, response.data, response.headers, response.config);

            })

    });    
    
});

// Botão para requisição PATCH.
button_patchs.forEach(button_patch => {

    const data = {

        title: 'Laravel',

    };

    button_patch.addEventListener("click", () => {

        axios.patch("https://jsonplaceholder.typicode.com/posts/1", data)

            .then(response => {

                return_response(response.status, response.data, response.headers, response.config);

            })

    });    
    
});

// Botão para requisição DELETE.
button_deletes.forEach(button_delete => {

    button_delete.addEventListener("click", () => {

        axios.delete("https://jsonplaceholder.typicode.com/posts/1")

            .then(response => {

                return_response(response.status, response.data, response.headers, response.config, 'delete');

            })

    });    
    
});

// Botão para requisições multíplas.
button_multiplos.forEach(button_multiplo => {

    button_multiplo.addEventListener("click", () => {

        const config = {

            params: {

                _limit: 1

            }

        };

        Promise.all([

            axios.get("https://jsonplaceholder.typicode.com/posts", config),
            axios.get("https://jsonplaceholder.typicode.com/users", config)

        ])

            .then(responses => {

                for(let response in responses){

                    if(response == 0) {

                        return_response(responses[response].status, responses[response].data, responses[response].headers, responses[response].config);

                    } else {

                        return_response(responses[response].status, responses[response].data, responses[response].headers, responses[response].config, 'multiplo');

                    }

                }

            });

    });    
    
});

// Botão para requisição com transformação.
button_transforms.forEach(button_transform => {
    
    button_transform.addEventListener("click", () => {

        const config = {

            params: {

                _limit: 5

            },

            transformResponse: [function (data) {

                const titles = JSON.parse(data).map(event => {

                    return {

                        id: event.id,
                        title: event.title

                    }
                    

                })

                return titles;

            }],

        };

        axios.get("https://jsonplaceholder.typicode.com/posts", config)
    
            .then(response => {
    
                return_response(response.status, response.data, response.headers, response.config, 'transform');
    
            })

    });

});

// Botão para tratamento de erros.
button_errorhandlings.forEach(button_errorhandling => {
    
    button_errorhandling.addEventListener("click", () => {

        axios.get("https://jsonplaceholder.typicode.com/dasdsadasdasdsadasdsad")

            .catch(function (error) {

                console.log(error)

                return_response(error.status, error.message, error.response.headers, error.config);


            })
        
    });

});

// Botão para cancelar requisições.
button_cancels.forEach(button_cancel => {
    
    button_cancel.addEventListener("click", () => {

        const controller = new AbortController();

        const config = {

            params: {

                _limit: 1

            },

            signal: controller.signal

        };

        Promise.all([

            axios.get("https://jsonplaceholder.typicode.com/posts", config),
            axios.get("https://jsonplaceholder.typicode.com/users", config)

        ])

            .then(responses => {

                for(let response in responses){

                    if(response == 0) {

                        return_response(responses[response].status, responses[response].data, responses[response].headers, responses[response].config);

                    } else {

                        return_response(responses[response].status, responses[response].data, responses[response].headers, responses[response].config, 'multiplo');

                    }

                }

            })

            .catch(function (error){

                code_data.innerHTML = 'Requisição cancelada!';

            });
        
        controller.abort();
        
    });

});