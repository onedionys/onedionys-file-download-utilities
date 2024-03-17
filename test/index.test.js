const assert = require('assert');
const downloadFile = require('../src/fileDownload');

describe('File Download Utilities', function() {
    it('should download a file from a given URL and save it to a specified location', async function() {
        const url = 'http://example.com/file.txt';
        const destination = './downloads/file.txt';
        const downloadedFilePath = await downloadFile(url, destination);
        
        assert.strictEqual(downloadedFilePath, destination);
    });
});
