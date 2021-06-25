# Bugs
- Look into 'Invalid time value' bug 
    In server > api-server, line 138 - change toISOString()

# Bugs Fixed
- why doesn't setting a env variable in scripts work? 
    Solution: use cross-env instead https://www.npmjs.com/package/cross-env
- why doesn't this script work? "npm install --prefix client"
    Solution: use "cd ./client && npm install" instead https://stackoverflow.com/questions/52835564/cd-to-correct-folder-in-package-json