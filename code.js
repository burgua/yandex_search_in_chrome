function search (info, tab) {
  window.open('http://yandex.ru/yandsearch?text='+info.selectionText);
};

chrome.contextMenus.create({
  'title': 'Искать в Яндексе',
  'contexts':['selection'],
  'onclick': search
});

