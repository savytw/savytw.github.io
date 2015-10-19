s3cmd sync --dry-run --delete-removed --acl-public --exclude-from 'scripts/s3ignore' ./ s3://autoinsight.io/
