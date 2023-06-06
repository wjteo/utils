ssh -f sm-orchestrator -L 6379:sm-redis.private.saltmine.com:6379 -N
docker run --rm --name redis-commander --env-file ./local.env -d -p 8081:8081 rediscommander/redis-commander:latest