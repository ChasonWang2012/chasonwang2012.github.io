function loadDailyPoem() {
  // 使用第三方诗词API，这里以"今日诗词"为例
  fetch('https://v2.jinrishici.com/one.json')
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        const poem = data.data;
        document.getElementById('poem-text').innerHTML = 
          poem.content.replace(/。/g, '。<br>');
        document.getElementById('poem-author').textContent = 
          `—— ${poem.origin.author}《${poem.origin.title}》`;
      }
    })
    .catch(error => {
      console.error('获取诗词失败:', error);
      document.getElementById('poem-text').textContent = '诗词加载失败';
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  loadDailyPoem();
  
  // 绑定刷新按钮事件
  const refreshBtn = document.getElementById('refresh-poem');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', loadDailyPoem);
  }
});