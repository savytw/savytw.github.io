s3cmd sync --delete-removed --acl-public --exclude-from 'scripts/s3ignore' ./ s3://autoinsight.io/
