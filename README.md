# summit-collection

all summit support website

## Install

`sudo yarn install`
If you hav install the puppeteer in the project, you can skip the puppeteer's download by run as follows:
`sudo env PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install`
Tips:

1. If you aren't linux user you may also need to download rename with brew
2. If `sudo yarn install` get stuck when download 'puppeteer' you can try to change the mirror of Chrominum following the code below:

```sh
sudo PUPPETEER_DOWNLOAD_HOST=https://storage.googleapis.com.cnpmjs.org cnpm i puppeteer -D
```

3. Lastly, if 2 don't work for you, you can try:

```sh
vi .npmrc
type puppeteer_download_host = https://npm.taobao.org/mirrors
```
