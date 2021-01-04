# SSH

[INICIO](../README.md)

> **Atencao:** desconsiderar o uso de acentos

## [SERVIDOR]

### Adiciona o usuario e configura as permissoes

```bash
# Adiciona o usuario, pedira para criar uma senha, inserir dados nome etc.
$ adduser <nome_usuario>

# Confirma se foi criado
$ cd /home/ && ls

# Cria a pasta .ssh dentro do super usuario criado
$ mkdir -p /home/<nome_ususario>/.ssh

# Copia a chave do root para o super usuario criado
$ cp ~/.ssh/authorized_keys /home/<nome_ususario>/.ssh/authorized_keys

# Verifica se o arquivo foi copiado com a chave publica
$ cat /home/<nome_ususario>/.ssh/authorized_keys

# Insere seguranca no arquivo authorized_keys
$ chmod 0644 /home/<nome_ususario>/.ssh/authorized_keys

# Acessa a pasta do .ssh
$ cd /home/<nome_ususario>/.ssh

# Dentro da pasta /home/<nome_usuario>/.ssh
$ chown <nome_ususario>:<nome_ususario> authorized_keys

# Dentro da pasta /home/ coloca o usuario no grupo sudo, usuario pode se tornar sudo
$ cd /home/ && usermod -aG sudo <nome_ususario>

# Verifica os grupos do usuario
$ cd /home/ && id <nome_usuario>
```

### Configura o sshd_config

```bash
# Edita o arquivo do ssh
$ nano /etc/ssh/sshd_config

    # Configuracoes
    Port <porta>

    AllowUsers <login_usuario_adicionado>

    PermitRootLogin no

    PubkeyAuthentication yes

    PasswordAuthentication no

# Insere a permissao 644 para o usuario root
$ chmod 644 ~/.ssh/authorized_keys

# Reinicia o servico de ssh
$ service sshd restart
```

## [CLIENTE]

### Gera a chave publica e adiciona no servidor

```bash
# Acessa o super usuario
$ sudo su

# Verifica se o servidor possui ja uma chave publica indo em:
$ cd ~/.ssh/ && ls -la

    # RESULTADO
    authorized_keys
    id_rsa
    id_rsa.pub

# Gera as chaves publicas
$ ssh-keygen

# Verifica se a chave publica foi criada
$ cat ~/.ssh/id_rsa.pub

# Copia a chave pública gerada para o servidor master
$ ssh-copy-id root@<ip_servidor_master> -p <porta>

# Acessa o servidor, se a chave for importada corretamente no passo anterior, nao solcita senha
$ ssh root@<ip_servidor_master> -p <porta>
```
