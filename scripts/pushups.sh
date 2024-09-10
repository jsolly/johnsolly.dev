#!/usr/bin/env sh

# Force the script to be interactive
exec < /dev/tty

# Ask the user to do 10 pushups before continuing
echo "Before committing, please do 10 pushups! Press Enter when you're done:"

# Wait for the user to press Enter
read

# Exit with success
exit 0
