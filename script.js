document.addEventListener('DOMContentLoaded', () => {
    // Arrays de dados de produtos para simular um catálogo de loja
    const products = [
        {
            id: 1,
            name: "Mouse Gamer Logitech G502",
            description: "Mouse de alta precisão com 11 botões programáveis e peso ajustável.",
            price: 299.00,
            category: "periféricos",
            image: "imagens/mouse.png"
        },
        {
            id: 2,
            name: "Teclado Mecânico HyperX Alloy",
            description: "Teclado mecânico com switches Cherry MX, iluminação RGB e durabilidade extrema.",
            price: 450.00,
            category: "periféricos",
            image: "imagens/teclado.png"
        },
        {
            id: 3,
            name: "Monitor Gamer Samsung Odyssey",
            description: "Monitor curvo de 27 polegadas com 144Hz e tempo de resposta de 1ms.",
            price: 1899.90,
            category: "hardware",
            image: "imagens/monitor.png"
        },
        {
            id: 4,
            name: "Headset Gamer Redragon H510",
            description: "Headset com som surround 7.1, microfone removível e construção em metal.",
            price: 220.00,
            category: "acessórios",
            image: "imagens/headset.png"
        },
        {
            id: 5,
            name: "Placa de Vídeo RTX 4070",
            description: "GPU de última geração para rodar todos os jogos em 4K com alto desempenho.",
            price: 4500.00,
            category: "hardware",
            image: "imagens/placa.png",
            outOfStock: true
        },
        {
            id: 6,
            name: "SSD M.2 NVMe de 1TB",
            description: "Armazenamento ultrarrápido para carregamento instantâneo de jogos e programas.",
            price: 650.00,
            category: "hardware",
            image: "imagens/ssd.png"
        },
        {
            id: 7,
            name: "Webcam Logitech C920S",
            description: "Webcam Full HD 1080p para streaming e videochamadas com clareza profissional.",
            price: 350.00,
            category: "acessórios",
            image: "imagens/webcam.png"
        },
        {
            id: 8,
            name: "Cadeira Gamer ThunderX3",
            description: "Cadeira ergonômica com apoio lombar e de cabeça ajustáveis para longas sessões de jogo.",
            price: 990.00,
            category: "acessórios",
            image: "imagens/cadeira.png"
        },
        {
            id: 9,
            name: "Processador Intel Core i9",
            description: "O processador mais rápido para multitarefas e jogos exigentes.",
            price: 3200.00,
            category: "hardware",
            image: "imagens/processador.png"
        },
        {
            id: 10,
            name: "Mousepad Gamer XXL",
            description: "Mousepad gigante para total liberdade de movimento e base antiderrapante.",
            price: 85.00,
            category: "periféricos",
            image: "imagens/mousepad.png"
        },
        {
            id: 11,
            name: "Memória RAM DDR5 16GB",
            description: "Módulo de memória de alta velocidade para jogos e aplicações de performance.",
            price: 580.00,
            category: "hardware",
            image: "imagens/ram.png"
        },
        {
            id: 12,
            name: "Fonte de Alimentação 750W",
            description: "Fonte modular com certificação 80 Plus Gold para alta eficiência e segurança.",
            price: 620.00,
            category: "hardware",
            image: "imagens/fonte.png"
        },
        {
            id: 13,
            name: "Placa-Mãe ASUS ROG",
            description: "Placa-mãe de alta performance com suporte a CPU e RAM de última geração.",
            price: 1500.00,
            category: "hardware",
            image: "imagens/placamae.png"
        },
        {
            id: 14,
            name: "Cooler Líquido Corsair",
            description: "Sistema de arrefecimento líquido para manter a temperatura do CPU baixa.",
            price: 750.00,
            category: "hardware",
            image: "imagens/cooler.png"
        },
        {
            id: 15,
            name: "Gabinete Gamer NZXT",
            description: "Gabinete com design elegante, vidro temperado e excelente fluxo de ar.",
            price: 890.00,
            category: "hardware",
            image: "imagens/gabinete.png"
        },
        {
            id: 16,
            name: "Óculos de Realidade Virtual",
            description: "Experiência imersiva de jogo com óculos VR de alta resolução.",
            price: 2500.00,
            category: "acessórios",
            image: "imagens/vr.png"
        },
        {
            id: 17,
            name: "Volante de Corrida Logitech",
            description: "Volante de simulação de corrida com Force Feedback para uma experiência realista.",
            price: 1300.00,
            category: "acessórios",
            image: "imagens/volante.png"
        },
        {
            id: 18,
            name: "Joystick de Voo Logitech",
            description: "Controle de voo para simuladores de avião e jogos de espaço.",
            price: 550.00,
            category: "acessórios",
            image: "imagens/joystick.png"
        },
        {
            id: 19,
            name: "Controle Xbox Wireless",
            description: "Controle sem fio para jogos no PC com design ergonômico.",
            price: 320.00,
            category: "periféricos",
            image: "imagens/controle.png"
        },
        {
            id: 20,
            name: "Headset sem fio Razer BlackShark",
            description: "Headset com som espacial, microfone de alta clareza e bateria de longa duração.",
            price: 680.00,
            category: "acessórios",
            image: "imagens/headset-razer.png"
        },
        {
            id: 21,
            name: "Roteador Gamer ASUS",
            description: "Roteador de alta velocidade para minimizar o lag em jogos online.",
            price: 1200.00,
            category: "acessórios",
            image: "imagens/roteador.png"
        },
        {
            id: 22,
            name: "Webcam Full HD Logitech",
            description: "Webcam Full HD 1080p para streaming e videochamadas com clareza profissional.",
            price: 350.00,
            category: "acessórios",
            image: "imagens/webcam-fullhd.png"
        },
        {
            id: 23,
            name: "Placa de som externa Creative",
            description: "Melhora a qualidade do áudio do seu PC com esta placa de som de alta fidelidade.",
            price: 450.00,
            category: "periféricos",
            image: "imagens/placadesom.png"
        },
        {
            id: 24,
            name: "Ventoinhas RGB Corsair",
            description: "Conjunto de ventoinhas com iluminação RGB personalizável para o seu gabinete.",
            price: 250.00,
            category: "hardware",
            image: "imagens/ventoinhas.png"
        }
    ];

    let cart = [];
    let favorites = [];
    const productsPerPage = 8;
    let currentPage = 1;
    let filteredProducts = products;

    const productContainer = document.getElementById('product-container');
    const searchInput = document.getElementById('search-input');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageInfoSpan = document.getElementById('page-info');
    const cartButton = document.getElementById('cart-button');
    const favoritesButton = document.getElementById('favorites-button');
    const cartCountSpan = document.getElementById('cart-count');
    const favoritesCountSpan = document.getElementById('favorites-count');
    const cartModal = document.getElementById('cart-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');

    const formatPrice = (price) => `R$ ${price.toFixed(2).replace('.', ',')}`;

    const showMessageBox = (title, message) => {
        const messageBox = document.createElement('div');
        messageBox.className = 'message-box';
        messageBox.innerHTML = `
            <div class="message-content">
                <h3>${title}</h3>
                <p>${message}</p>
                <button id="close-message">OK</button>
            </div>
        `;
        document.body.appendChild(messageBox);
        document.getElementById('close-message').addEventListener('click', () => {
            document.body.removeChild(messageBox);
        });
    };

    const renderProductCard = (product) => {
        const isFavorited = favorites.some(item => item.id === product.id);
        const card = document.createElement('div');
        card.className = `product-card flex flex-col items-center p-4 rounded-xl shadow-lg border border-gray-700 relative`;

        card.innerHTML = `
            <div class="relative w-full">
                <img src="imagens/fora.png" alt="Produto fora de estoque" class="rounded-md w-full h-48 object-cover mb-4">
            </div>
            <h3 class="text-xl font-semibold text-white mb-2 text-center">${product.name}</h3>
            <p class="text-gray-400 text-sm mb-4 text-center flex-grow">${product.description}</p>
            <div class="flex items-center justify-between w-full mt-auto">
                <span class="text-2xl font-bold text-teal-400">${formatPrice(product.price)}</span>
                <div class="flex items-center space-x-2">
                    <button class="add-to-cart-btn bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition-colors" data-id="${product.id}">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 1a1 1 0 000 2h1a1 1 0 00.992.836l3.411 9.914A2 2 0 009.431 16H17a1 1 0 000-2h-7.569a.999.999 0 01-.97-1.168l.4-1.168A1 1 0 008.431 10h6.216a2 2 0 001.972-1.664l2.5-7A1 1 0 0018 1H3zM10 18a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </button>
                    <button class="add-to-favorites-btn p-2 rounded-full transition-colors ${isFavorited ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-800 hover:bg-gray-700'}" data-id="${product.id}">
                        <svg class="w-6 h-6 ${isFavorited ? 'text-white' : 'text-red-500'}" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        return card;
    };

    const renderProducts = (productsToRender) => {
        productContainer.innerHTML = '';
        const start = (currentPage - 1) * productsPerPage;
        const end = start + productsPerPage;
        const productsOnPage = productsToRender.slice(start, end);

        if (productsOnPage.length === 0) {
            productContainer.innerHTML = '<p class="text-center text-xl text-gray-400 col-span-full">Nenhum produto encontrado.</p>';
        }

        productsOnPage.forEach(product => {
            productContainer.appendChild(renderProductCard(product));
        });
        updatePaginationInfo(productsToRender.length);
    };

    const updatePaginationInfo = (totalProducts) => {
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        pageInfoSpan.textContent = `Página ${currentPage} de ${totalPages}`;
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage >= totalPages || totalPages === 0;
    };

    const handleSearch = () => {
        const query = searchInput.value.toLowerCase();
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
        currentPage = 1;
        renderProducts(filteredProducts);
    };

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts(filteredProducts);
        }
    });

    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts(filteredProducts);
        }
    });

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartDisplay();
        showMessageBox('Adicionado ao Carrinho', `${product.name} foi adicionado ao seu carrinho.`);
    };

    const updateCartDisplay = () => {
        cartCountSpan.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        cartItemsContainer.innerHTML = '';
        let total = 0;
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-center text-gray-500">Seu carrinho está vazio.</p>';
        } else {
            cart.forEach(item => {
                total += item.price * item.quantity;
                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'flex items-center justify-between py-2 border-b border-gray-700 last:border-b-0';
                cartItemElement.innerHTML = `
                    <div>
                        <h4 class="font-semibold text-white">${item.name}</h4>
                        <p class="text-sm text-gray-400">${formatPrice(item.price)} x ${item.quantity}</p>
                    </div>
                    <button class="remove-from-cart-btn text-red-500 hover:text-red-400 transition-colors" data-id="${item.id}">&times;</button>
                `;
                cartItemsContainer.appendChild(cartItemElement);
            });
        }
        cartTotalSpan.textContent = formatPrice(total);
    };

    const removeFromCart = (productId) => {
        const itemIndex = cart.findIndex(item => item.id == productId);
        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
            updateCartDisplay();
        }
    };

    const toggleFavorite = (product) => {
        const isFavorited = favorites.some(item => item.id === product.id);
        if (isFavorited) {
            favorites = favorites.filter(item => item.id !== product.id);
        } else {
            favorites.push(product);
        }
        updateFavoritesCount();
        renderProducts(filteredProducts);
    };

    const updateFavoritesCount = () => {
        favoritesCountSpan.textContent = favorites.length;
    };

    productContainer.addEventListener('click', (event) => {
        const addToCartBtn = event.target.closest('.add-to-cart-btn');
        const addToFavoritesBtn = event.target.closest('.add-to-favorites-btn');

        if (addToCartBtn) {
            const productId = parseInt(addToCartBtn.dataset.id);
            const product = products.find(p => p.id === productId);
            if (product) {
                addToCart(product);
            }
        }

        if (addToFavoritesBtn) {
            const productId = parseInt(addToFavoritesBtn.dataset.id);
            const product = products.find(p => p.id === productId);
            if (product) {
                toggleFavorite(product);
            }
        }
    });

    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.closest('.remove-from-cart-btn')) {
            const productId = e.target.closest('.remove-from-cart-btn').dataset.id;
            removeFromCart(productId);
        }
    });

    cartButton.addEventListener('click', () => {
        cartModal.classList.remove('hidden');
        updateCartDisplay();
    });

    closeModalBtn.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.add('hidden');
        }
    });

    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            cart = [];
            updateCartDisplay();
            cartModal.classList.add('hidden');
            showMessageBox('Compra Finalizada', 'Obrigado pela sua compra! O seu pedido foi processado.');
        } else {
            showMessageBox('Carrinho Vazio', 'O seu carrinho está vazio. Adicione itens antes de finalizar a compra.');
        }
    });

    renderProducts(filteredProducts);
    searchInput.addEventListener('input', handleSearch);
});