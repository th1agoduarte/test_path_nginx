# Proxy Reverso com Nginx e Load Balancer

Este projeto utiliza **Nginx** como proxy reverso para gerenciar diferentes serviços (React, Laravel, APIs .NET e Python), com suporte a **load balancing** para escalabilidade.

## Estrutura do Projeto

- **Frontend**: 
  - Aplicação React com microfrontends.
- **Backend**: 
  - API em .NET (Web API).
  - API em Python (Flask).
- **Proxy Reverso**: 
  - Configurado com Nginx para roteamento e balanceamento de carga.

### Arquivos de Configuração

- `docker-compose.yml`: Configura os serviços do Docker.
- `nginx/nginx.conf`: Configuração principal do Nginx.
- `.env`: Variáveis de ambiente para ajustar as configurações.

## Pré-requisitos
  
- Docker e Docker Compose instalados.
- Permissões adequadas para executar o Docker como o usuário atual.

## Como Levantar os Contêineres

### Passo 1: Clonar o Repositório

git clone [https://github.com/th1agoduarte/test_path_nginx.git)
cd seu-repositorio

Passo 2: Configurar as Permissões para o Usuário Atual
Certifique-se de que o usuário atual tenha acesso às pastas e arquivos criados dentro dos contêineres:
```
export LOCAL_UID=$(id -u)
export LOCAL_GID=$(id -g)
```
Passo 3: Subir os Contêineres
Execute o comando para iniciar todos os serviços:
docker compose up -d --build
Isso levantará os serviços configurados no docker-compose.yml, incluindo:

Frontends React.
Backends .NET e Python.
Proxy reverso com Nginx.

Passo 4: Testar os Serviços
Frontend React:
Rota principal: http://localhost:8088/enviroment_react/
Backend .NET:
Rota principal: http://localhost:8088/enviroment_python/api/v1/test
Backend Python:
Rota principal: http://localhost:8088/enviroment_python/api/v1/test
Rota principal: http://localhost:8088/enviroment_python/api/v1/test2

Load Balancer e Escalabilidade
O Nginx está configurado para fazer balanceamento de carga entre múltiplas réplicas dos serviços. A configuração padrão do balanceamento de carga pode ser encontrada no arquivo nginx/nginx.conf.

Exemplo de balanceamento para o serviço React:
```
nginx
upstream react_front {
    server react1:80;
    server react2:80;
    server react3:80;
}
```
##Estrutura de Diretórios
```
├── apis/
│   ├── dotnet/   # API .NET
│   └── python/   # API Python (Flask)
├── html/
│   ├── react/    # Aplicação React
├── nginx/
│   ├── nginx.conf  # Configuração do Nginx
├── docker-compose.yml
└── README.md
```
Adicionando Novos Projetos
Passo 1: Criar o Projeto
Frontend React:
Siga o guia oficial para criar um projeto React.

Backend:
Siga a documentação da linguagem/framework desejada.

Passo 2: Atualizar docker-compose.yml
Adicione o novo serviço com a estrutura similar aos existentes.

Passo 3: Configurar o Nginx
Adicione as rotas no nginx.conf para o novo serviço.

Exemplo para um novo backend:
```nginx
upstream new_backend {
    server new-backend:80;
}

location /enviroment_new/ {
    proxy_pass http://new_backend;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```
Reinicie o serviço Nginx após salvar as alterações:
docker-compose restart nginx

Contribuições
Sinta-se à vontade para contribuir com melhorias no projeto!

Licença
Este projeto está licenciado sob a MIT License.

Contato
E-mail: thiago.duarte.q@gmail.com
GitHub: th1agoduarte
