const menubar = document.querySelector(".menubar");
const open_menu = document.querySelector(".navigation-bar");

function clickMenu(){
    if(menubar.style.display ==='none'){
        menubar.style.display = 'block';
    }
    else {
        menubar.style.display ='none'
    }
}



open_menu.addEventListener("click", clickMenu);



// pushState()
document.getElementById('board_free').addEventListener('click', () => {
    history.pushState({data: 'board_free'}, '', '/자유');
    currentHistoryState();
  });
  document.getElementById('board_secret').addEventListener('click', () => {
    history.pushState({data: 'board_secret'}, '', '/비밀');
    currentHistoryState();
  });
  document.getElementById('board_info').addEventListener('click', () => {
    history.pushState({data: 'board_info'}, '', '/정보');
    currentHistoryState();
  });
  document.getElementById('board_promote').addEventListener('click', () => {
    history.pushState({data: 'board_promote'}, '', '/홍보');
    currentHistoryState();
  });
  document.getElementById('board_SW').addEventListener('click', () => {
    history.pushState({data: 'board_SW'}, '', '/SW');
    currentHistoryState();
  });
   
