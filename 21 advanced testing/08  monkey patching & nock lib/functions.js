import _ from 'lodash';
import { Octokit } from '@octokit/rest';

const OctokitConstructor = Octokit;

const getUserMainLanguage = async (username, client = new OctokitConstructor()) => {
  const { data } = await client.repos.listForUser({ username });
  if (data.length === 0) {
    return null;
  }
  const languages = data.map((repo) => repo.language)
    .reduce((acc, name) => {
      const count = _.get(acc, `${name}.count`, 0) + 1;
      return { ...acc, [name]: { count, name } };
    }, {});
  const { name } = _.maxBy(Object.values(languages), (lang) => lang.count);
  return name;
};

const functions = {
  right1: getUserMainLanguage,
  wrong1: _.noop,
};

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return functions[name];
};
