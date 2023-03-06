//import { sha256, sha224 } from 'js-sha256';

// 获取遮罩层和弹窗元素
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');

// 获取关闭按钮和输入框
//const popupCloseBtn = document.getElementById('popup-close');
//const popupInput = document.getElementById('popup-input');

// 网页加载完成后执行
window.addEventListener('load', function() {
  // 显示遮罩层和弹窗
  overlay.style.display = 'block';
  popup.style.display = 'block';

  // 禁用背景和内容交互
  document.body.classList.add('disable');
  document.getElementById('content').classList.add('disable');
});

//// 点击关闭按钮，关闭弹窗
//popupCloseBtn.addEventListener('click', function() {
//    // 判断输入框内容是否为 123
//    if (sha224(sha256(popupInput.value)) === 'c7ffe87f0a89c45ec246fd4274829e75fb1258b218e4f4885ad19fb4') {
//      // 如果是 123，关闭弹窗并恢复背景和内容交互
//      overlay.style.display = 'none';
//      popup.style.display = 'none';
//      document.body.classList.remove('disable');
//      document.getElementById('content').classList.remove('disable');
//    } else {
//      // 如果不是 123，清空输入框
//      popupInput.value = '';
//    }
//  });