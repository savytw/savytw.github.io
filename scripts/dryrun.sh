if [ "$1" = "pro" ]; then
    s3cmd sync --dry-run --delete-removed --acl-public --exclude-from 'scripts/s3ignore' ./ s3://autoinsight.io/
elif [ "$1" = "stg" ]; then
    s3cmd sync --dry-run --delete-removed --acl-public --exclude-from 'scripts/s3ignore' ./ s3://devel-web.autoinsight.io/
else
    echo "Use 'pro' or 'stg' to specify production or staging server"
fi
