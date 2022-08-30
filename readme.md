#### commands to run the server and test a subscription

```
$ ./start-server.sh
$ curl -X POST -H "Content-Type: application/json" -d '{ "url": "http://localhost:8000/event"}' http://localhost:8000/subscribe/topic1
$ curl -X POST -H "Content-Type: application/json" -d '{"message": "hello"}' http://localhost:8000/publish/topic1
$ curl http://localhost:8000/event
```
