@echo off

REM Navegar até o diretório onde está o código-fonte do backend
cd weg-leopard-cad-web-app\src\backend

REM Iniciar o primeiro json-server na porta 3001
start /b json-server --watch json/quick-guide.json --host 10.1.66.57 --port 3001

REM Esperar 5 segundos para que o primeiro json-server inicie completamente antes de iniciar o segundo
timeout /t 5 /nobreak >nul

REM Iniciar o segundo json-server na porta 3002
start /b json-server --watch json/release-notes.json --host 10.1.66.57 --port 3002

REM Esperar 5 segundos para que o segundo json-server inicie completamente antes de navegar para o diretório do frontend
timeout /t 5 /nobreak >nul

REM Navegar até o diretório onde está o código-fonte do frontend
cd ..

REM Iniciar o servidor Express backend com nodemon na porta 3003
start /b npm run start-backend

REM Esperar 5 segundos para que o servidor Express backend inicie completamente antes de iniciar o frontend
timeout /t 5 /nobreak >nul

REM Iniciar o frontend na porta 3000
start /b npm run start-frontend
