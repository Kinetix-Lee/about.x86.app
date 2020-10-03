#!/bin/bash

export COMMIT_ID=$(git rev-parse --short HEAD)

# fetch repo
git clone --depth=1 git@github.com:Kinetix-Lee/Kinetix-Lee.git deploy
cd deploy

# apply changes
rm -rf pages
cp ../dist ./pages -r

# commit & push
git add --all
git commit -m "CI built pages from commit ${COMMIT_ID} in Kinetix-Lee/about.x86.app"
git push origin HEAD
