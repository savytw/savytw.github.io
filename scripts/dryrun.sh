base_cmd="s3cmd --dry-run --delete-removed --acl-public --exclude-from 'scripts/s3ignore' sync ./ "

if [ "$1" = "pro" ]; then
    dest="s3://autoinsight.io/"
elif [ "$1" = "stg" ]; then
    echo "stg is not supported anymore"
    exit
else
    echo "Use 'pro' or 'stg' to specify production or staging server"
fi

cmd="$base_cmd $dest"
eval $cmd

echo "================================================================================"
echo $cmd
echo "================================================================================"
