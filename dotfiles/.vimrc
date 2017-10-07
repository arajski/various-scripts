"  __________________ Plugins
set nocompatible
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'Raimondi/delimitMate'
Plugin 'itchyny/lightline.vim'
Plugin 'scrooloose/nerdtree'
call vundle#end()   
filetype plugin indent on
" __________________ Syntax 
syntax enable
set tabstop=4
set softtabstop=4
set autoindent
set expandtab
" __________________ UI
set showcmd
set number
set laststatus=2
set cursorline
" __________________ Search
set hlsearch
" ------------------ Mappings
map <C-n> :NERDTreeToggle<CR>
