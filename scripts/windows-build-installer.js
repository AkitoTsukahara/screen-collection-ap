/* eslint no-console:0 */
var winstaller = require('electron-winstaller');

winstaller.createWindowsInstaller({
  appDirectory: './screen-collection-win32-x64/',
  outputDirectory: './dist',
  authors: 'Akito Tsukahara',
  exe: 'screen-collection.exe'
})
  .then(() => console.log('It worked!'))
  .catch(e => console.log(`No dice: ${e.message}`));
