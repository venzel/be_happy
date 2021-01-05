# CI-CD: Codeship

[README.md](../README.md)

> **Atencao:** desconsiderar o uso de acentos

## Deploy comandos

### Lembrar que o pm2 precisa ser inizalizado uma vez

```
rsync -avz -e "ssh" ~/clone/ root@<ip>:/opt/project-test
ssh root@<ip> 'cd /opt/project-test && yarn build'
ssh root@<ip> 'sudo pm2 stop all'
ssh root@<ip> 'sudo pm2 start /opt/project-test/dist/Server.js'
```
