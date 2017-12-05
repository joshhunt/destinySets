#!/usr/bin/env bash

RAYGUN_AUTH_TOKEN=""
RAYGUN_API_KEY=""
DEPLOYMENT_VERSION=""
DEPLOYED_BY=""
EMAIL_ADDRESS=""
DEPLOYMENT_NOTES=""
GIT_HASH=""
HELP=0

while getopts "t:a:v:n:e:g:h" opt; do
	case $opt in
	t)
		RAYGUN_AUTH_TOKEN=$OPTARG
		;;
	a)
		RAYGUN_API_KEY=$OPTARG
		;;
	v)
		DEPLOYMENT_VERSION=$OPTARG
		;;
	n)
		DEPLOYED_BY=$OPTARG
		;;
	e)
		EMAIL_ADDRESS=$OPTARG
		;;
    g)
		GIT_HASH=$OPTARG
		;;
    h)
        HELP=1
        ;;
	esac
done

shift $((OPTIND-1))

if [ $HELP -eq 1 ]
then
cat << EOF
usage: deployment.sh [-h] -v VERSION -t TOKEN -a API_KEY
                      -e EMAIL -n NAME [-g GIT_HASH] NOTES
  h:          show this help
  v VERSION:  version string for this deployment
  t TOKEN:    your Raygun External Auth Token
  a API_KEY:  the API Key for your Raygun Application
  n NAME:     the name of the person who created the deployment
  e EMAIL:    the email address of the person who created the deployment.
              Should be a Raygun users email
  g GIT_HASH: the git commit hash this deployment was built from
  NOTES:      the release notes for this deployment.
              Will be formatted using a Markdown parser
EOF
exit
fi

[ "$1" = "--" ] && shift

if [ "$1" != "" ]
then
    DEPLOYMENT_NOTES=$1
    DEPLOYMENT_NOTES=`echo $DEPLOYMENT_NOTES | sed s/\"/\\\\\\\\\"/g`
fi


url="https://app.raygun.com/deployments?authToken=$RAYGUN_AUTH_TOKEN"

read -d '' deployment <<- EOF
{
    apiKey: \"$RAYGUN_API_KEY\",
    version: \"$DEPLOYMENT_VERSION\",
    ownerName: \"$DEPLOYED_BY\",
    emailAddress: \"$EMAIL_ADDRESS\",
    scmIdentifier: \"$GIT_HASH\",
    comment: \"$DEPLOYMENT_NOTES\"
}
EOF

if ! curl -H "Content-Type: application/json" -d "$deployment" -f $url
then
  echo "Could not send deployment details to Raygun"
  exit 1
fi
