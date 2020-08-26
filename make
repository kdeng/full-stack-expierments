#!/bin/bash
set -e

# These should not need to be adjusted/configured
RUNMODE="$1"

# Selected run mode
case "$RUNMODE" in
  init)
    cd frontend && npm i && cd .. && cd backend && mvn clean dependency:tree && cd ..
    echo -e "All done"
    ;;

  run)
    APP="$2"
    case "$APP" in
      web)
        cd ./frontend && npm run start
        ;;
      api)
        cd ./backend && mvn -o spring-boot:run
        ;;
      *)
        echo -e "Unknown application"
    esac
    ;;

  *)
    echo 'Please select a runmode, only one mode can be selected and the mode names are case-sensitive.'
    echo ''
    echo "  $0 runmode"
    echo ''
    echo 'List of runmodes are:'
    echo '---------------------'
    echo ''
    echo '  init          Initialise the applications '
    echo '  run web       Startup web application'
    echo '  run api       Startup backend API application'
    echo ''
esac
