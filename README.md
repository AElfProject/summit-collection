<!--  
 * @Author: Alfred Yang  
 * @Github: https://github.com/cat-walk  
 * @Date: 2019-08-09 00:57:45  
 * @LastEditors: Alfred Yang
 * @LastEditTime: 2019-08-24 14:36:59
 * @Description: file content  
 -->  

# summit-collection  

All summit support website.   

## Install  

`sudo yarn install`  

If you hav install the puppeteer in the project, you can skip the puppeteer's download by run as follows:  

`sudo env PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install`  

Tips:  

1. If you aren't linux user you may also need to download rename with brew  
2. If `sudo yarn install` get stuck when download 'puppeteer' you can try to change the mirror of Chrominum following the code below:  

```bash
vi .npmrc  
type puppeteer_download_host = https://storage.googleapis.com.cnpmjs.org  
```  

3. Lastly, if 2 don't work for you, you can try:  

```bash
sudo PUPPETEER_DOWNLOAD_HOST=https://storage.googleapis.com.cnpmjs.org cnpm i puppeteer -D  
```  
