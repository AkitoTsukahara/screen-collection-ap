'use strict';

const builder = require('electron-builder');
const fs = require('fs');
const packagejson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const Platform = builder.Platform;

builder.build({
    targets: Platform.WINDOWS.createTarget(),
    config: {
        'appId': 'screen-collection',
        'productName': 'SCREEN COLLECTION',
        'win': {
            'target': {
                'target': 'nsis',
                'arch': [
                    'x64',
                    'ia32',
                ]
            }
        },
    },
});