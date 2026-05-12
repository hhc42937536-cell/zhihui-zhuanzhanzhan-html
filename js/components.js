// 取得目前頁面名稱，用於 active 狀態
const currentPage = location.pathname.split('/').pop() || 'index.html';

const navLinks = [
  { href: 'index.html', label: '首頁' },
  { href: 'pain-point-hub.html', label: '痛點中心' },
  { href: 'solution-gallery.html', label: 'AI解法實驗室', sub: '解決痛點的方法' },
  { href: 'tool-library.html', label: '工具箱', sub: '創作者的自研應用' },
  { href: 'education.html', label: '學習轉運' },
  { href: 'honor-board.html', label: '榮譽榜' },
  { href: 'faq.html', label: '常見問題' },
  { href: 'coin-shop.html', label: '兌換商店' },
  { href: 'coin-rules.html', label: '幣規則' },
];

function renderNav() {
  const linksHTML = navLinks.map(link => {
    const isActive = currentPage === link.href;
    return `
      <a href="${link.href}" class="px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap flex flex-col items-center leading-tight ${isActive ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-gray-50'}">
        <span>${link.label}</span>
        ${link.sub ? `<span class="text-[10px] font-normal mt-0.5 ${isActive ? 'text-orange-400' : 'text-gray-400'}">${link.sub}</span>` : ''}
      </a>`;
  }).join('');

  const mobileLinksHTML = navLinks.map(link => `
    <a href="${link.href}" class="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg text-sm font-medium">${link.label}</a>
  `).join('');

  document.getElementById('navbar').innerHTML = `
    <nav class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <a href="index.html" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <i class="ri-lightbulb-flash-line text-xl text-white"></i>
            </div>
            <span class="text-xl font-bold text-gray-900">智慧轉運站</span>
          </a>
          <div class="hidden lg:flex items-center space-x-1">${linksHTML}</div>
          <div class="flex items-center space-x-3">
            <a href="pain-point-hub.html" class="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all">
              <i class="ri-add-line mr-1"></i>分享痛點
            </a>
            <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-600 hover:text-orange-600">
              <i class="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
        ${mobileLinksHTML}
        <a href="pain-point-hub.html" class="block px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium text-center mt-2">分享痛點</a>
      </div>
    </nav>`;

  document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });
}

function renderFooter() {
  document.getElementById('footer').innerHTML = `
    <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div class="md:col-span-2">
            <h3 class="text-2xl font-bold mb-4">智慧轉運站</h3>
            <p class="text-orange-100 leading-relaxed mb-6">
              讓每一個痛點，都轉成未來的智慧機會。<br>
              分享問題、學習 AI 解法、探索工具與機會的平台。
            </p>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"><i class="ri-facebook-fill text-xl"></i></a>
              <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"><i class="ri-twitter-fill text-xl"></i></a>
              <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"><i class="ri-instagram-fill text-xl"></i></a>
              <a href="#" class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"><i class="ri-linkedin-fill text-xl"></i></a>
            </div>
          </div>
          <div>
            <h4 class="font-bold text-lg mb-4">快速連結</h4>
            <ul class="space-y-3">
              <li><a href="tool-library.html" class="text-orange-100 hover:text-white transition-colors">AI工具箱</a></li>
              <li><a href="pain-point-hub.html" class="text-orange-100 hover:text-white transition-colors">痛點中心</a></li>
              <li><a href="solution-gallery.html" class="text-orange-100 hover:text-white transition-colors">AI解法實驗室</a></li>
              <li><a href="honor-board.html" class="text-orange-100 hover:text-white transition-colors">榮譽榜</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-lg mb-4 flex items-center gap-2"><i class="ri-shield-check-line text-orange-400"></i>法律與資源</h4>
            <ul class="space-y-3">
              <li><a href="faq.html" class="text-orange-100 hover:text-white transition-colors flex items-center gap-2"><i class="ri-question-line text-sm"></i>常見問題</a></li>
              <li><a href="coin-rules.html" class="text-orange-100 hover:text-white transition-colors flex items-center gap-2"><i class="ri-coin-line text-sm"></i>幣規則說明</a></li>
              <li><a href="terms-of-service.html" class="text-orange-100 hover:text-white transition-colors flex items-center gap-2"><i class="ri-file-text-line text-sm"></i>服務條款</a></li>
              <li><a href="privacy-policy.html" class="text-orange-100 hover:text-white transition-colors flex items-center gap-2"><i class="ri-lock-line text-sm"></i>隱私政策</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/10 pt-8 text-center text-orange-200 text-sm">
          © 2026 智慧轉運站 All rights reserved.
        </div>
      </div>
    </footer>`;
}

// 數字滾動動畫
function countUp(el, target, duration = 1600) {
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = Math.floor(eased * target);
    el.textContent = target >= 1000 ? (val / 1000).toFixed(1) + 'k+' : val + '+';
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target >= 1000 ? (target / 1000).toFixed(1) + 'k+' : target + '+';
  };
  requestAnimationFrame(step);
}

function initCountUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        countUp(el, parseInt(el.dataset.target));
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('[data-target]').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
  initCountUp();
});
