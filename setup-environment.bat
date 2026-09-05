@echo off
echo Creating conda environment for UCLA SOLES website...

REM Remove existing environment if it exists
conda env remove -n ucla-soles-website -y

REM Create conda environment
echo Creating new environment...
conda env create -f environment.yml
if %errorlevel% neq 0 (
    echo Environment creation failed!
    pause
    exit /b 1
)

echo Environment created successfully!
echo Run manually: conda activate ucla-soles-website
echo Then run: npm install --legacy-peer-deps
echo Then run: npm install -g firebase-tools@11.30.0