onPageVisibilityChange(async function() {
  // 根据 visitorId 确定加载的 JSON 文件
  function jsonForVisitorId(visitorId) {
    if (startsWithAny(visitorId, ['0', '1', '2', '3'])) {
      return 'rx0.json';
    } else if (startsWithAny(visitorId, ['4', '5', '6', '7'])) {
      return 'rx1.json';
    } else if (startsWithAny(visitorId, ['8', '9', 'a', 'b'])) {
      return 'rx2.json';
    } else {
      return 'rx3.json';
    }
  }

  // 检查字符串是否以指定的前缀之一开始
  function startsWithAny(str, prefixes) {
    return prefixes.some(prefix => str.startsWith(prefix));
  }

  try {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    const visitorId = result.visitorId || "abcdef123456";
    const jsonFile = jsonForVisitorId(visitorId);
    
    if (jsonFile) {
      const response = await fetch(jsonFile);
      const text = await response.text();
      // 使用 JSON5 解析文本
      const links = JSON5.parse(text);
      redirectSelectLinkByWeight(links);
    }
  } catch (error) {
    console.error('发生错误:', error);
  }

});