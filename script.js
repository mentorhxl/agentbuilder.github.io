// 导航栏隐藏/显示切换功能
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('.ms-nav');
  const qrCode = document.querySelector('.qr-code-container');
  const toggleBtn = document.createElement('button');
  
  toggleBtn.className = 'nav-toggle';
  toggleBtn.innerHTML = '&lt;';
  document.body.appendChild(toggleBtn);
  
  let isHidden = false;
  
  toggleBtn.addEventListener('click', function() {
    isHidden = !isHidden;
    
    document.body.classList.toggle('nav-hidden', isHidden);
    nav.classList.toggle('hidden', isHidden);
    qrCode.classList.toggle('hidden', isHidden);
    toggleBtn.classList.toggle('hidden', isHidden);
    
    this.innerHTML = isHidden ? '&gt;' : '&lt;';
  });
});