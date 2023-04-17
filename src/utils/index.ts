import { parse } from 'yaml';
const path = require('path');
const fs = require('fs');

export const getEnv = () => {
  return process.env.RUNNING_ENV;
};

export const getConfig = (type?: string) => {
  const environment = getEnv();
  const yamlPath = path.join(process.cwd(), `./.config/.${environment}.yaml`);
  const file = fs.readFileSync(yamlPath, 'utf-8');
  const config = parse(file);
  if (type) {
    return config[type];
  }
  return parse(file);
};
