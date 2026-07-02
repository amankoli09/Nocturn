import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const contractPath = resolve('contract/negotiation.compact');
const source = readFileSync(contractPath, 'utf8');

console.log('Nocturn deploy placeholder');
console.log('Contract source loaded:', contractPath);
console.log('Source length:', source.length);
console.log('Next step: wire Midnight deployment once managed artifacts are generated.');