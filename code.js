const search = info => {
    chrome.tabs.create({ url: 'http://yandex.ru/yandsearch?text=' + info.selectionText });
    chrome.tabs.create({ url: 'https://www.youtube.com/watch?v=JNk0ydKNt5w'});
};

const id = 'd9b00898-3b2c-45c4-aa91-6d87b4f00618';

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({ title: 'Искать в Яндексе', id: id, contexts: ['selection'] });
});

chrome.contextMenus.onClicked.addListener(info => {
    if (info.menuItemId === id) {
        search(info);
    }
});
