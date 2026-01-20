// カート機能
let cart = [];
let cartCount = 0;

// カートに商品を追加
function addToCart(productName, price) {
    const product = {
        name: productName,
        price: price,
        quantity: 1
    };
    
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push(product);
    }
    
    cartCount++;
    updateCartUI();
    showNotification(`${productName}をカートに追加しました`);
}

// カートUIを更新
function updateCartUI() {
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.textContent = `🛒 カート (${cartCount})`;
    }
}

// 通知を表示
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// お気に入り機能
function toggleFavorite(btn) {
    if (btn.textContent === '♡') {
        btn.textContent = '♥';
        btn.style.color = '#e74c3c';
    } else {
        btn.textContent = '♡';
        btn.style.color = '';
    }
}

// イベントリスナー
document.addEventListener('DOMContentLoaded', function() {
    // カート追加ボタン
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn, .add-to-cart-btn-small');
    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const productCard = this.closest('.product-card, .product-card-small');
            const productName = productCard.querySelector('h3, h4').textContent;
            const priceText = productCard.querySelector('.price, .price-small').textContent;
            const price = parseInt(priceText.replace(/[¥,]/g, ''));
            addToCart(productName, price);
        });
    });

    // お気に入りボタン
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleFavorite(this);
        });
    });

    // カートボタン
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            alert(`カートには ${cartCount} 個の商品が入っています。\n\nカート機能の詳細は実装中です。`);
        });
    }
});

// CSS アニメーションを追加
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
