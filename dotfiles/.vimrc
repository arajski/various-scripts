""" sic Configurations
 
set autochdir
set autoindent
set autowrite
set bs=2
set colorcolumn=80
set cursorline
set expandtab
set foldmethod=syntax
set foldminlines=3
set hlsearch
set laststatus=2
set mouse=a
set nocompatible
set number
set ruler
set shiftwidth=4
set showcmd
set showfulltag
set showmode
set smartindent
set tabstop=4
set wildmenu
set wildmode=longest,full
set wrap
set whichwrap+=h,l,<,>
 
""" Options
 
filetype on
syn on
au FocusLost * :wa
 
""" Python options
autocmd BufRead *.py cinwords=if,elif,else,for,while,with,try,except,finally,def,class
 
""" Hard tabs in Makefiles
autocmd FileType make setlocal noexpandtab
 
""" Theme options
 
set background=dark
set t_Co=256
set number 
""" Misc mappings and configs
 
cmap w!! %!sudo tee > /dev/null %
imap <c-c> <Esc>
imap <F1> <Esc>
imap jj <Esc>
nmap <leader> <space>
nnoremap <silent> <C-Left> :tabprevious<CR>
nnoremap <silent> <C-Right> :tabnext<CR>
nnoremap <silent> <C-t> :tabnew<CR>
nnoremap ' `
vmap < <gv
vmap > >gv
