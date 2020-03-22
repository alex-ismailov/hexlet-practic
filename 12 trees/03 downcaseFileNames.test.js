import {
  mkdir, mkfile,
} from '@hexlet/immutable-fs-trees';
import downcaseFileNames from './03 downcaseFileNames.js';

test('downcase file names', () => {
  const tree = mkdir('/', [
    mkdir('eTc', [
      mkdir('NgiNx'),
      mkdir('CONSUL', [
        mkfile('config.JSON'),
      ]),
    ]),
    mkfile('hOsts'),
  ]);
  const actual = downcaseFileNames(tree);

  const expected = {
    name: '/',
    type: 'directory',
    meta: {},
    children: [
      {
        name: 'eTc',
        type: 'directory',
        meta: {},
        children: [
          {
            name: 'NgiNx',
            type: 'directory',
            meta: {},
            children: [],
          },
          {
            name: 'CONSUL',
            type: 'directory',
            meta: {},
            children: [{ name: 'config.json', type: 'file', meta: {} }],
          },
        ],
      },
      { name: 'hosts', type: 'file', meta: {}, },
    ],
  };

  expect(actual).toEqual(expected);
});