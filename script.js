document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuCloseButton = document.querySelector('.mobile-menu-close');
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
    const teamHeaderContainer = document.querySelector('.team-header-container');

    // ハンバーガーボタンクリックでメニューを開く
    hamburgerButton.addEventListener('click', () => {
        mobileMenuOverlay.classList.toggle('is-active');
        hamburgerButton.classList.toggle('is-active'); // ハンバーガーアイコンのアニメーション用クラス
        if (teamHeaderContainer) {
            teamHeaderContainer.classList.toggle('is-active'); // ヘッダーコンテナのクラスをトグル
        }
        setElementStyles($0, { left: '0px', transform: 'none' });
    });

    // 閉じるボタンクリックでメニューを閉じる
    mobileMenuCloseButton.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('is-active');
        hamburgerButton.classList.remove('is-active');
        if (teamHeaderContainer) {
            teamHeaderContainer.classList.remove('is-active'); // ヘッダーコンテナのクラスを削除
        }
    });

    // オーバーレイクリックでメニューを閉じる
    mobileMenuOverlay.addEventListener('click', (event) => {
        // メニュー本体以外をクリックした場合に閉じる
        if (event.target === mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('is-active');
            hamburgerButton.classList.remove('is-active');
            if (teamHeaderContainer) {
                teamHeaderContainer.classList.remove('is-active'); // ヘッダーコンテナのクラスを削除
            }
        }
    });

    // メニューアイテムクリックでメニューを閉じる (ページ内リンクを考慮)
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('is-active');
            hamburgerButton.classList.remove('is-active');
            if (teamHeaderContainer) {
                teamHeaderContainer.classList.remove('is-active'); // ヘッダーコンテナのクラスを削除
            }
        });
    });
});

// クラスの付け外しのみ
const text = document.querySelector('.text');

text.classList.add('is-active');

setInterval(() => {
  text.classList.toggle('is-active');
}, 2500);


