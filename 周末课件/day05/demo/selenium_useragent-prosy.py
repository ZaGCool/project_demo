# !/usr/bin/env python
# _*_ coding:utf-8 _*_

from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import json, traceback
d = DesiredCapabilities.CHROME
d['loggingPrefs'] = { 'performance':'ALL' }
def getHttpRequestHeader(driver):
    # 获取request的headrs
    for responseReceived in driver.get_log('performance'):
        try:
            # print(driver.get_log('performance'))
            # print(json.loads(responseReceived[u'message'])[u'message'][u'params'][u'request'])
            response = json.loads(responseReceived[u'message'])[u'message'][u'params'][u'request']
            if response[u'url'] == driver.current_url:
                return response[u'headers']
        except:
            # print(traceback.format_exc())
            pass
    return None


