# Linux

[INICIO](../README.md)

> **Atencao:** desconsidere o uso de acentos

> **Atencao:** este documento possui apenas comandos basicos do linux

## [BUSCA]

```bash
# Buscar
$ locate -i "<nome_trecho>"
```

```bash
# Buscar pelo nome de arquivos
$ find . -name "*index*"
```

```bash
# Buscar trecho de nome junior em arquivos dentro da pasta home
$ grep -r "junior" home/
```

## [GRUPOS]

```bash
# Listar todos os grupos
$ sudo cat /etc/group | cut -d: -f1
```

```bash
# Adicionar grupo
$ sudo groupadd <grupo>
```

```bash
# Adicionar usuario em um grupo
$ sudo usermod -a -G <grupo> <usuario>
```

## [PROGRAMAS]

```bash
# Abre programa em background
$ idea &
```

## [PROCESSOS]

```bash
# Informacoes do numero do processo de uma aplicacao
$ pidof <aplicacao>
```

```bash
# Visualizar todos os processos
$ ps aux
```

```bash
# Filtrar e visualizar processo
$ ps aux | grep <nome_processo>
```

```bash
# Listar processos de rede
$ netstat -plnt
```

## [DRIVERS]

```bash
# Visualizar dispositivos
$ sudo lspci
```

## [UPDATE/UPGRADE]

### Baixa os pacotes de atualizacoes

```bash
$ apt-get update
```

### Atualiza os pacotes

```bash
$ apt-get upgrade
```

### Atualiza a distribuicao da versao

```bash
# Exemplo: 16.02 para 16.04
$ apt-get dist-upgrade
```

### Atualiza a versao do sistema

```bash
# Exemplo: 16.04 para 18.04
$ do-release-upgrade
```

### Auto remove pacotes de versoes sem utilidade

```bash
$ apt-get autoremove
```

## [REPOSITORIO]

```bash
# Pacotes que nao serao atualizados
$ apt list --upgradable
```

```bash
# Visualizar repositorios
$ cd /etc/apt/sources.list.d/ && ls -la
```

## [KERNEL]

```bash
# Listar os kernels
$ dpkg --list | grep linux-image
```

```bash
# Repositorio para gerenciar kernels
$ sudo apt-add-repository ppa:teejee2008/ppa
$ apt-get update
$ apt-get install ukuu
```

```bash
# Remover repositorio e desinstalar
$ sudo apt-add-repository ppa:teejee2008/ppa -r -y
$ sudo apt-get remove ukuu --auto-remove
```

```bash
# Listar todos os comandos de kernell
$ ukuu
```

## [PASTAS/ARQUIVOS]

```bash
# Onde esta na pasta
$ pwd
```

```bash
# Cria pasta de forma recursiva (-p)
$ mkdir -p ~/<pasta>/<subpasta>
```

```bash
# Listar pasta e ver tamanho arquivo
$ du -h --max-depth=1
```

```bash
# Listar todos os arquivos com seus tamanhos do diretorio
$ du -ha
```

```bash
# Ver e listar o tamanho de todos os arquivos dentro do diretório ou subdiretorio(s)
$ du -ha <nome-arquivo>
```

```bash
# Ver o tamanho de um arquivo ou diretorio sem listar
$ du -hs <nome-arquivo>
```

```bash
# Retorma apenas o tamanho total da soma dos arquivos em bytes, kb e mb
$ du -hsb
$ du -hsk
$ du -hsm
```

```bash
$ du -hsb <nome-arquivo> # Tamanho e Bytes
$ du -hsk <nome-arquivo> # Tamanho em KB
$ du -hsm <nome-arquivo> # Tamanho em MB
```

## [PEMISSOES]

```bash
# Pemissoes de pastas e arquivos
$ chmod <valor> <arquivo_ou_pasta>

  # 4 - Leitura
  # 2 - escrita
  # 1 - execucao

  # Exemplo:
  # chmod 744 file.txt

  # Explicacao:
  # 7 -> usuario: ler/escrever/executar (rwx)
  # 4 -> grupo: ler (r--)
  # 4 -> todos: ler (r--)

  # drwxr-xr-x
  # d -> indica que eh uma pasta
  # rwx -> usuario: ler/escrever/executar
  # r-x -> grupo: ler/executar
  # r-x -> todos: ler/executar

# Permissao rapida de execucao
$ chmod +x <arquivo_ou_pasta>

# Para listar as pastas e ver os grupos
$ ls -lh
```

## [SISTEMA]

```bash
# Arvore de pastas
$ tree
```

```bash
# Listar processos de uma porta
$ lsof -i:80
```

```bash
# Abrir pastas modo root
$ sudo nautilus
```

```bash
# Informacoes do fabricante dos dispositivos
$ dmidecode | more
```

```bash
# Informacoes de CPU
$ cat /proc/cpuinfo
$ lscpu
```

```bash
# Estatisticas de CPU
$ mpstat
```

```bash
# RAM
$ $ less /proc/meminfo # informacoes gerais
$ free -m # em megabytes
$ free -g # em gigabytes
```

```bash
# Informacoes do sistema, tempo de vida, usuario no momento e cpu
$ uptime
```

```bash
# Lista de reinicializacoes do sistema
$ last reboot
```

```bash
# Todos os pacotes instalados
$ dpkg -l
```

```bash
# Todos os processos pais e filhos
$ pstree
```

```bash
# Memoria Swap
$ vmstat
```

```bash
# Drivers do kernel
$ lsmod
```

```bash
# Dispositivos PCI
$ lspci
$ lspci -vvvn | less
```

```bash
# Informacoes sobre USB
$ lsusb
$ lsusb -vt
```

```bash
# Informacoes de video
$ nvidia-settings
```

```bash
# Inforacoes de audio
$ cat /proc/asound/cards
$ arecord -l
```

## [REDE]

```bash
# Busca em todos os arquivos txt
$ grep -H <nome_palavra> *.txt
```

```bash
# Todas as pessoas logadas no sistema
$ who
```

```bash
# Ips mapeados na rede
$ arp -n
```

```bash
# Definir ip
$ ifconfig <interface> 192.168.1.30 netmask 255.255.255.0
```
