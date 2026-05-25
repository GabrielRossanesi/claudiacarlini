@echo off
setlocal

cd /d "%~dp0"

echo.
echo ==========================================
echo  Claudia Carlini - Site institucional
echo ==========================================
echo.

if not exist "package.json" (
  echo Nao encontrei o package.json nesta pasta.
  echo Execute este arquivo dentro da pasta do projeto.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo Instalando dependencias do projeto...
  call npm.cmd install
  if errorlevel 1 (
    echo.
    echo Nao foi possivel instalar as dependencias.
    pause
    exit /b 1
  )
)

echo Ligando o site em modo desenvolvimento...
echo.
echo Depois que aparecer "Ready", acesse:
echo http://localhost:3000
echo.
echo Para desligar, pressione CTRL + C nesta janela.
echo.

call npm.cmd run dev

pause
