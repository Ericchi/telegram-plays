#!/bin/sh

SCRIPT_DIR=$(dirname "$0")

while :
do
        node $SCRIPT_DIR/telegramplays.js
        sleep 5
done
