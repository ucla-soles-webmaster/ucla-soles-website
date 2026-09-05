@echo off
echo Deploying to Firebase...

REM Login first if needed
firebase login

REM Deploy hosting only
firebase deploy --only hosting

REM If that fails, try with debug
if %errorlevel% neq 0 (
    echo Retrying with debug...
    firebase deploy --only hosting --debug
)