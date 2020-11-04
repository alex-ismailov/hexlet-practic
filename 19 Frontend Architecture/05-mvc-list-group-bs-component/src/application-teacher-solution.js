import onChange from 'on-change';

// BEGIN
export default () => {
  const state = {
    lists: {},
  };

  const tabs = document.querySelectorAll('[data-toggle="list"]');
  const activeTabs = document.querySelectorAll('[data-toggle="list"].active');

  activeTabs.forEach((activeTab) => {
    const listId = activeTab.closest('div').id;
    state.lists[listId] = {
      tabId: activeTab.id,
      tabPanelId: activeTab.hash.slice(1),
    };
  });

  const watchedState = onChange(state, (path, current, previous) => {
    if (current.tabId === previous.tabId) {
      return;
    }

    const currentBodyEl = document.getElementById(current.tabPanelId);
    currentBodyEl.classList.add('active', 'show');
    const previousBodyEl = document.getElementById(previous.tabPanelId);
    previousBodyEl.classList.remove('active', 'show');

    const currentHeaderEl = document.getElementById(current.tabId);
    currentHeaderEl.classList.add('active');
    const previousHeaderEl = document.getElementById(previous.tabId);
    previousHeaderEl.classList.remove('active');
  });

  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const listEl = e.target.closest('div');
      watchedState.lists[listEl.id] = {
        tabPanelId: e.target.hash.slice(1),
        tabId: e.target.id,
      };
    });
  });
};
// END
