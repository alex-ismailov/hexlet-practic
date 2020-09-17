export default () => {
  // BEGIN (write your solution here)
  /* Найти табы */
  const navTabs = document.querySelectorAll('[data-toggle="tab"]');

  /* обработчик табов */
  const handleTab = (e) => {
    e.preventDefault();
    /* получаем кликнутый элемент */
    const { target } = e;
    /* получаем вкладку с id как href hash кликнутого */
    const newActiveTabPane = document.querySelector(`${target.hash}`);
    
    /* находим ближнего родителя nav к кликнутому */
    const nav = target.closest('.nav');
    /* находим ближнего род-ля tab-content к вкладке с id из href кликнутого */
    const tabContent = newActiveTabPane.closest('.tab-content');

    /* снимаем класс active с текущего активного таба */
    const currentActiveTab = nav.querySelector('.active');
    currentActiveTab.classList.remove('active');
    /* снимаем класс active с текущей активной вкладки */
    const currentActiveTabPane = tabContent.querySelector('.active');
    currentActiveTabPane.classList.remove('active');

    /* добав. класс active к кликнутому элементу */
    target.classList.add('active');
    /* добав. класс active к вкладке с id из href кликнутого эл-ма */
    newActiveTabPane.classList.add('active');
  };

  /* повесить обработчик на каждый tab */
  navTabs.forEach((tab) => tab.addEventListener('click', handleTab));
  // END
};
