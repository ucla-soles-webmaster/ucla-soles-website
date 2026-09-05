#!/bin/bash
echo "Creating conda environment for UCLA SOLES website..."

# Create conda environment
conda env create -f environment.yml

# Activate environment
source activate ucla-soles-website

# Install npm dependencies
npm install

# Install Firebase CLI globally
npm install -g firebase-tools

echo ""
echo "Environment setup complete!"
echo ""
echo "To activate the environment, run:"
echo "conda activate ucla-soles-website"
echo ""
echo "To start the development server, run:"
echo "npm start"
echo ""
echo "To build for production, run:"
echo "npm run build"
echo ""
echo "To deploy to Firebase, run:"
echo "firebase deploy"