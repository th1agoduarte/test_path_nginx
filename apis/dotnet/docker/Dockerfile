# Etapa de build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
COPY ./app ./
RUN dotnet publish -c Release -o /out

# Etapa de runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine
WORKDIR /app
COPY --from=build /out ./

# Configurar o ASP.NET Core para escutar em todas as interfaces
ENV ASPNETCORE_URLS=http://+:80

EXPOSE 80
ENTRYPOINT ["dotnet", "TestDotNetAPI.dll"]
