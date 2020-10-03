#!/bin/bash

export COMMIT_ID=$(git rev-parse --short HEAD)

# start SSH agent
eval `ssh-agent -s`
ssh-add ./github.key

# Git configurations
git config user.name "Kinetix-Lee"
git config user.email "lee@x86.app"


# fetch repo
git clone --depth=1 git@github.com:Kinetix-Lee/Kinetix-Lee.git deploy
cd deploy

# clear ssh-agent processes
killall ssh-agent

# apply changes
rm -rf docs
cp ../dist ./docs -r

# commit & push
git add --all
git commit -m "Update from commit ${COMMIT_ID} in Kinetix-Lee/about.x86.app"
git push origin HEAD
