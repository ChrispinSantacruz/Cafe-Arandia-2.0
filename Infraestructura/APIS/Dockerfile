FROM node:20

USER root

RUN apt-get update && apt-get install -y \
    wget\
    nano

RUN npm cache clean --force

RUN npm install -g npm@8.12.1

RUN npm install prisma -g \
    &&npm install cors -g \
    &&npm install dotenv -g \
    &&npm install express -g \
    &&npm install jsonwebtoken -g \
    &&npm install nodemon -g \
    &&npm install @prisma/client  -g

RUN mkdir -p /usr/userAPI

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/userAPI

# Copia el archivo package.json y package-lock.json (si existe) desde la carpeta APIS al directorio de trabajo del contenedor
COPY APIS/package*.json ./

# Instala las dependencias npm
RUN npm install

# Copia el contenido del directorio APIS al directorio de trabajo del contenedor
COPY APIS/ ./

# Copia el directorio prisma desde el directorio raíz al contenedor
COPY prisma ./prisma

# Copia app.js y prismaClient.js desde el directorio raíz al directorio de trabajo del contenedor
COPY app.js ./
COPY prismaClient.js ./

# Genera los clientes de Prisma, si estás usando Prisma
RUN prisma generate

# Comando para iniciar la aplicación
CMD ["nodemon", "app.js"]
