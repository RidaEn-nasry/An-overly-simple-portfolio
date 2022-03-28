#create a script to run command "node format.js" every 5 seconds
#!/bin/bash
function run_command() {
    while true; do
	node format.js
	sleep 30
    done
}

# run_command  & 
