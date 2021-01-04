# ZSH

[INICIO](../README.md)

> **Atencao:** desconsidere o uso de acentos

> **Documentacao:** https://blog.rocketseat.com.br/terminal-com-oh-my-zsh-spaceship-dracula-e-mais/

```bash
# Vai para raiz
$ cd ~

# Instala o zsh
$ apt-get install zsh

# Instalando Oh My Zsh
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# Instala plugins de auto complete e etc
$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/zdharma/zplugin/master/doc/install.sh)"
```

### [.zshrc]

```bash
# Edita o arquivo
$ nano ~/.zshrc

  # ALTERA
  plugins=(git docker docker-compose)

  # INSERE DEPOIS DE: End of Zinit's installer chunk
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

zinit light zdharma/fast-syntax-highlighting
zinit light zsh-users/zsh-autosuggestions
zinit light zsh-users/zsh-history-substring-search
zinit light zsh-users/zsh-completions
zinit light buonomo/yarn-completion

pasteinit() {
OLD_SELF_INSERT=${${(s.:.)widgets[self-insert]}[2,3]}
zle -N self-insert url-quote-magic # I wonder if you'd need `.url-quote-magic`?
}

pastefinish() {
zle -N self-insert \$OLD_SELF_INSERT
}
zstyle :bracketed-paste-magic paste-init pasteinit
zstyle :bracketed-paste-magic paste-finish pastefinish
```

### [SPACESHIP]

> **Documentacao:** https://openbase.io/js/spaceship-zsh-theme

> **Emojis:** https://emojipedia.org/

```bash
# Clona o repositorio
$ git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"

# Cria um link simbolico
$ ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"

# Edita
$ nano ~/.zshrc

  # ALTERA
  ZSH_THEME="spaceship"

  # INSERE
  SPACESHIP_PROMPT_ORDER=(
    user          # Username section
    dir           # Current directory section
    host          # Hostname section
    git           # Git section (git_branch + git_status)
    hg            # Mercurial section (hg_branch  + hg_status)
    exec_time     # Execution time
    line_sep      # Line break
    vi_mode       # Vi-mode indicator
    jobs          # Background jobs indicator
    exit_code     # Exit code section
    char          # Prompt character
  )

  SPACESHIP_USER_SHOW=always
  SPACESHIP_PROMPT_ADD_NEWLINE=false
  SPACESHIP_CHAR_SYMBOL="🦍 ➜"
  #SPACESHIP_CHAR_SYMBOL="⭐ ➜"
  #SPACESHIP_CHAR_SYMBOL="🤖 ➜"
  #SPACESHIP_CHAR_SYMBOL="☂️ ➜"
  #SPACESHIP_CHAR_SYMBOL_ROOT="🦍 ➜"
  #SPACESHIP_CHAR_SYMBOL_ROOT="⭐ ➜"
  #SPACESHIP_CHAR_SYMBOL_ROOT="🤖 ➜"
  #SPACESHIP_CHAR_SYMBOL_ROOT="☂️ ➜"
  SPACESHIP_CHAR_SUFFIX=" "

  # Simplify prompt if we're using Hyper
  if [[ "$TERM_PROGRAM" == "Hyper" ]]; then
    SPACESHIP_PROMPT_SEPARATE_LINE=false
    SPACESHIP_DIR_SHOW=false
    SPACESHIP_GIT_BRANCH_SHOW=false
  fi
```

### [DRACULA]

> **Documentacao:** https://draculatheme.com/zsh

```bash
# Vai para root e baixa o arquivo
$ cd ~ && pwd && wget https://github.com/dracula/zsh/archive/master.zip

# Descompacta
$ unzip master.zip && cd zsh-master

# Copia o arquivo dracula.zsh-theme para themes da .oh-my-zsh
$ cp dracula.zsh-theme ../.oh-my-zsh/themes

# Copia toda pasta lib para para themes da .oh-my-zsh
$ cp -r lib ../.oh-my-zsh/themes

# Vai para raiz e edita
$ cd ~ && nano .zshrc

  # ALTERA
  ZSH_THEME="dracula"
```
