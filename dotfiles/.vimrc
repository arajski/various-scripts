set encoding=utf-8
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'jiangmiao/auto-pairs'
Plugin 'scrooloose/nerdtree'
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'
Plugin 'crusoexia/vim-dracula'
call vundle#end()   
filetype plugin indent on
" __________________ Syntax 
syntax enable
set tabstop=4
set softtabstop=4
set autoindent
set shiftwidth=4
set expandtab
"let g:loaded_matchparen=1
" __________________ UI
set linespace=0
set showcmd
set number
set laststatus=2
set cursorline
set noshowmode
colorscheme dracula
let g:airline_extensions = []
let g:airline_powerline_fonts = 1
let g:airline_theme='deus'
set hlsearch
" ------------------ Mappings
map <C-n> :NERDTreeToggle<CR>
