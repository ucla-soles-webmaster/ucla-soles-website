Write-Host "Setting up UCLA SOLES website environment..."

# Initialize conda for PowerShell
& "C:\Users\cjgir\anaconda3\condabin\conda.bat" init powershell
& "C:\Users\cjgir\anaconda3\condabin\conda.bat" activate ucla-soles-website

# Install npm packages
npm install --legacy-peer-deps
if ($LASTEXITCODE -ne 0) { 
    Write-Host "npm install failed"
    exit 1 
}

# Install Firebase CLI
npm uninstall -g firebase-tools
npm install -g firebase-tools@11.30.0
if ($LASTEXITCODE -ne 0) { 
    Write-Host "Firebase CLI install failed"
    exit 1 
}

Write-Host "Setup complete! Environment: ucla-soles-website"