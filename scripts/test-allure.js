const { spawnSync } = require('child_process');
const path = require('path');

const isWindows = process.platform === 'win32';
const binExtension = isWindows ? '.cmd' : '';

const playwright = path.resolve(
  'node_modules',
  '.bin',
  `playwright${binExtension}`
);

const allure = path.resolve(
  'node_modules',
  '.bin',
  `allure${binExtension}`
);

console.log('\n========================================');
console.log(' QA ERPNext - Testes Automatizados');
console.log('========================================\n');

console.log('▶ Executando testes Playwright...\n');

const testResult = spawnSync(
  playwright,
  ['test', '--headed'],
  {
    stdio: 'inherit',
    shell: isWindows,
  }
);

console.log('\n▶ Gerando relatório Allure...\n');

const reportResult = spawnSync(
  allure,
  [
    'generate',
    'allure-results',
    '--clean',
    '-o',
    'allure-report',
  ],
  {
    stdio: 'inherit',
    shell: isWindows,
  }
);

if (reportResult.error) {
  console.error('\n❌ Erro ao executar o Allure:');
  console.error(reportResult.error.message);
  process.exit(1);
}

if (reportResult.status !== 0) {
  console.error('\n❌ Não foi possível gerar o relatório Allure.\n');
  process.exit(reportResult.status ?? 1);
}

console.log('\n▶ Abrindo relatório Allure...\n');

const openResult = spawnSync(
  allure,
  ['open', 'allure-report'],
  {
    stdio: 'inherit',
    shell: isWindows,
  }
);

if (openResult.error) {
  console.error('\n❌ Erro ao abrir o Allure:');
  console.error(openResult.error.message);
  process.exit(1);
}

if (openResult.status !== 0) {
  console.error('\n❌ Não foi possível abrir o Allure.\n');
  process.exit(openResult.status ?? 1);
}

console.log('\n========================================');
console.log(' Relatório Allure aberto.');
console.log('========================================\n');

process.exit(testResult.status ?? 1);