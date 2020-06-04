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
    processor: '',
    memory: '',
    freqMin: '',
    freqMax: '',
    notebooks: [...notebooks],
  };

  const processorSelect = document.querySelector('select[name="processor_eq"]');
  processorSelect.addEventListener('change', (e) => {
    console.log('changed processor select');
    const processorValue = e.target.value;
    console.log(processorValue);

    state.processor = processorValue;

    render(state);
  });

  const memorySelect = document.querySelector('select[name="memory_eq"]');
  memorySelect.addEventListener('change', (e) => {
    console.log('changed memory select');
    const memoryValue = e.target.value;
    console.log(memoryValue);

    render(state);
  });

  const freqMinInput = document.querySelector('input[name="frequency_gte"]');
  freqMinInput.addEventListener('input', (e) => {
    console.log('changed freqMinInput');
    const freqMin = e.target.value;
    console.log(freqMin);

    render(state);
  });

  const freqMaxInput = document.querySelector('input[name="frequency_lte"]');
  freqMaxInput.addEventListener('input', (e) => {
    console.log('changed freqMaxInput');
    const freqMax = e.target.value;
    console.log(freqMax);

    render(state);
  });

  render(state); // first DOM init
};

const render = (state) => {
  const divResult = document.querySelector('.result');
  // console.log(divResult);
  // state.notebooks = state.notebooks.filter((notebook) => {
  //   notebook.processor === state.processor;
  // });
  // console.log(state);
  // console.log(state.notebooks);
};



export default app;
// END




export default app;
// END

/* полезные топики */
// https://ru.hexlet.io/topics/34708
