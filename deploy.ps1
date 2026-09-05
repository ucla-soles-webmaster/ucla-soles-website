Write-Host "Deploying to Firebase..."

# Login first if needed
firebase login
if ($LASTEXITCODE -ne 0) {
    Write-Host "Login failed or cancelled"
    exit 1
}

# Deploy hosting only
Write-Host "Starting deployment..."
firebase deploy --only hosting

if ($LASTEXITCODE -ne 0) {
    Write-Host "Deployment failed, retrying with debug..."
    firebase deploy --only hosting --debug
}

Write-Host "Deployment complete!"