# Usar a imagem base do Python
FROM python:3.11-slim

# Configurar o diretório de trabalho
WORKDIR /app

# Copiar os arquivos da aplicação
COPY ../app /app

# Instalar as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Expor a porta usada pela aplicação
EXPOSE 5000

# Comando para iniciar o servidor Flask
CMD ["python", "app.py"]
