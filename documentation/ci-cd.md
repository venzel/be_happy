# CI-CD: Codeship

## Deploy comandos

```
rsync -avz -e "ssh" ~/clone/ root@<ip>:/opt/project-test
ssh root@<ip> 'sudo pm2 stop all'
ssh root@<ip> 'sudo pm2 start /opt/project-test/src/Server.js
```
