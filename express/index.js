// 현재의 history state 값을 출력합니다.
const currentHistoryState = () => {
    document.getElementById('state').innerText = JSON.stringify(history.state);
  };
   
  currentHistoryState();
   
  // pushState()
  document.getElementById('push-state1').addEventListener('click', () => {
    history.pushState({data: 'pushState1'}, '', '/push-state1');
    currentHistoryState();
  });
  document.getElementById('push-state2').addEventListener('click', () => {
    history.pushState({data: 'pushState2'}, '', '/push-state2');
    currentHistoryState();
  });
  document.getElementById('push-state3').addEventListener('click', () => {
    history.pushState({data: 'pushState3'}, '', '/push-state3');
    currentHistoryState();
  });
   
  // replaceState()
  document.getElementById('replace-state').addEventListener('click', () => {
    history.replaceState({data: 'replaceState'}, '', '/replace-state');
    currentHistoryState();
  });
   
  // 브라우저의 뒤로가기 / 앞으로가기를 누르면 history state 값을 확인하여 출력합니다.
  window.addEventListener('popstate', () => {
    currentHistoryState();
  });
