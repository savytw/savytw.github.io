base_cmd="s3cmd --cf-invalidate --cf-invalidate-default-index --acl-public --recursive --delete-removed --exclude-from 'scripts/s3ignore' sync ./"

if [ "$1" = "pro" ]; then
    dest="s3://autoinsight.io/"
elif [ "$1" = "stg" ]; then
    dest="s3://devel-web.autoinsight.io/"
else
    echo "Use 'pro' or 'stg' to specify production or staging server"
fi

cmd="$base_cmd $dest"
eval $cmd

echo "================================================================================"
echo $cmd
echo "================================================================================"
