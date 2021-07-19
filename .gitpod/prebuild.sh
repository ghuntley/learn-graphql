#!/usr/bin/env bash
# https://www.gitpod.io/docs/prebuilds

# https://stackoverflow.com/questions/56355499/stop-angular-cli-asking-for-collecting-analytics-when-i-use-ng-build
export NG_CLI_ANALYTICS=ci

function findAndExecute {
    echo "Searching for: $1"
    for directory in `find /workspace -type f -name "$1" | grep -v "node_modules" | sed -r 's|/[^/]+$||' |sort |uniq`; do
        echo "'$2' will be executed in '$directory' because it contains '$1'" 
        cd $directory && $2
    done
} 

docker-compose up -d

findAndExecute "Dockerfile.localdev" "docker build -f Dockerfile.localdev ."
findAndExecute "Dockerfile" "docker build -f Dockerfile ."

findAndExecute "package.json" "npm install"
findAndExecute "package.json" "npm run build"

