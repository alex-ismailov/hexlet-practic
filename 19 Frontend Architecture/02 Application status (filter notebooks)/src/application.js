const notebooks = [
  {
    model: 'v1', processor: 'intel', frequency: 1.7, memory: 16,
  },
  {
    model: 'd3', processor: 'intel', frequency: 3.5, memory: 8,
  },
  {
    model: 'd2', processor: 'amd', frequency: 2.5, memory: 16,
  },
];

// BEGIN (write your solution here)
const app = () => {
  const state = {
    notebooks: [...notebooks],
    processor: null,
    memory: null,
    freqMin: null,
    freqMax: null,
  };

  const processorSelect = document.querySelector('select[name="processor_eq"]');
  processorSelect.addEventListener('change', (e) => {
    // console.log('changed processor select');
    const procSelectValue = e.target.value;
    // console.log(processorValue);
    state.processor = procSelectValue === ''
      ? null
      : procSelectValue;

    render(state);
  });

  const memorySelect = document.querySelector('select[name="memory_eq"]');
  memorySelect.addEventListener('change', (e) => {
    // console.log('changed memory select');
    const memorySelectValue = e.target.value;
    console.log(memorySelectValue);
    state.memory = memorySelectValue === ''
      ? null
      : Number(memorySelectValue);

    render(state);
  });

  const freqMinInput = document.querySelector('input[name="frequency_gte"]');
  freqMinInput.addEventListener('input', (e) => {
    // console.log('changed freqMinInput');
    const freqMinInputValue = e.target.value;
    // console.log(typeof freqMinInputValue);
    state.freqMin = freqMinInputValue === null
      ? null
      : Number(freqMinInputValue);

    render(state);
  });

  const freqMaxInput = document.querySelector('input[name="frequency_lte"]');
  freqMaxInput.addEventListener('input', (e) => {
    // console.log('changed freqMaxInput');
    const freqMaxInputValue = e.target.value;
    // console.log(freqMaxInputValue);
    state.freqMax = freqMaxInputValue === null
      ? null
      : Number(freqMaxInputValue);

    render(state);
  });

  render(state); // first DOM init
};

const render = (state) => {
  const divResult = document.querySelector('.result');

  const currentNotebooks = state.notebooks.slice();
  // console.log(currentNotebooks);

  const filteredNotebooks = currentNotebooks
    .filter((notebook) => { // processor filter
      if (state.processor === null) {
        return notebook;
      }
      return notebook.processor === state.processor;
    })
    .filter((notebook) => { // memory filter
      if (state.memory === null) {
        return notebook;
      }
      return notebook.memory === state.memory;
    })
    .filter((notebook) => { // freqMin filter
      if (state.freqMin === null) {
        return notebook;
      }
      return notebook.frequency >= state.freqMin;
    })
    .filter((notebook) => { // freqMax filter
      if (state.freqMax === null) {
        return notebook;
      }
      return notebook.frequency <= state.freqMax;
    });
  
  console.log('-------------');
  console.log(filteredNotebooks);

  const ul = document.createElement('ul');
  const listInputs = filteredNotebooks.map((notebook) => `<li>${notebook.model}</li>`).join('');
  ul.innerHTML = listInputs;
  divResult.innerHTML = ul.outerHTML;
};

export default app;
// END

/* полезные топики */
// https://ru.hexlet.io/topics/34708

// Важный момент состоит в том, что render принимает аргументом только состояние,
// поэтому передавать в него результат AJAX-разпроса нельзя.

// https://ru.hexlet.io/topics/27684