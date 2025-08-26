document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: "Mouse Gamer RGB Xtreme", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Mouse+Gamer", description: "Mouse com iluminação personalizável e alta precisão para jogos.", price: 89.90 },
        { id: 2, name: "Teclado Mecânico HyperX", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Teclado+Mecânico", description: "Teclado com switches mecânicos para digitação e jogos rápidos.", price: 249.00 },
        { id: 3, name: "Monitor Ultrawide 29'' LG", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Monitor+Ultrawide", description: "Monitor com tela ampla para multitarefas e entretenimento.", price: 1199.00 },
        { id: 4, name: "Fone de Ouvido sem Fio JBL", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Fone+sem+Fio", description: "Fone com áudio de alta qualidade e bateria de longa duração.", price: 350.00 },
        { id: 5, name: "Webcam Full HD Logitech", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Webcam+Full+HD", description: "Câmera de alta definição para videochamadas e transmissões ao vivo.", price: 180.00 },
        { id: 6, name: "Placa de Vídeo RTX 4080", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Placa+de+Vídeo+RTX", description: "Alto desempenho para jogos e criação de conteúdo 3D.", price: 7500.00 },
        { id: 7, name: "SSD NVMe M.2 1TB Samsung", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=SSD+NVMe", description: "Velocidade de leitura e escrita ultrarrápida para o sistema operacional e jogos.", price: 499.00 },
        { id: 8, name: "Monitor Curvo Gamer 144Hz", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Monitor+Curvo", description: "Curvatura imersiva e alta taxa de atualização para a melhor experiência de jogo.", price: 1850.00 },
        { id: 9, name: "Teclado sem Fio Compacto", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Teclado+Compacto", description: "Design minimalista e conectividade Bluetooth para maior mobilidade.", price: 180.00 },
        { id: 10, name: "Mouse Ergonômico Vertical", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Mouse+Ergonômico", description: "Design vertical para reduzir a tensão no pulso durante longas horas de uso.", price: 75.00 },
        { id: 11, name: "Memória RAM DDR5 16GB", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Memória+DDR5", description: "Módulo de memória de alta velocidade para PCs de última geração.", price: 520.00 },
        { id: 12, name: "Cooler para Processador", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Cooler+CPU", description: "Sistema de refrigeração eficiente para manter a temperatura do processador baixa.", price: 130.00 },
        { id: 13, name: "Gabinete Gamer com RGB", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Gabinete+Gamer", description: "Gabinete com painel de vidro temperado e ventoinhas RGB inclusas.", price: 420.00 },
        { id: 14, name: "Fonte de Alimentação 750W", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Fonte+750W", description: "Fonte de alimentação modular e certificada para alta eficiência.", price: 590.00 },
        { id: 15, name: "Kit de Fones de Ouvido", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Fones+Ouvido", description: "Kit com 3 fones intra-auriculares de diferentes cores.", price: 65.00 },
        { id: 16, name: "Mousepad Gamer Grande", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Mousepad+Gamer", description: "Superfície de tecido com base de borracha para maior aderência.", price: 45.00 },
        { id: 17, name: "Cadeira Gamer Ergonômica", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Cadeira+Gamer", description: "Conforto e suporte para longas sessões de jogo.", price: 950.00 },
        { id: 18, name: "Monitor Gamer 24'' 165Hz", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Monitor+24", description: "Taxa de atualização e tempo de resposta otimizados para e-sports.", price: 1300.00 },
        { id: 19, name: "Webcam 4K Ultra HD", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Webcam+4K", description: "Câmera de altíssima definição para streaming profissional.", price: 499.00 },
        { id: 20, name: "Headset Gamer com Mic", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Headset+Gamer", description: "Áudio 7.1 surround e microfone com cancelamento de ruído.", price: 380.00 },
        { id: 21, name: "Placa-mãe B550", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Placa-mãe+B550", description: "Compatível com processadores AMD Ryzen e suporte a PCIe 4.0.", price: 850.00 },
        { id: 22, name: "Processador Intel Core i7", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Processador+i7", description: "Desempenho de ponta para jogos e aplicativos exigentes.", price: 1900.00 },
        { id: 23, name: "Pendrive USB 3.0 128GB", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Pendrive+128GB", description: "Armazenamento portátil de alta velocidade.", price: 70.00 },
        { id: 24, name: "Adaptador USB-C para HDMI", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Adaptador", description: "Conecte seu notebook a um monitor externo com facilidade.", price: 55.00 },
        { id: 25, name: "Cartão de Memória 64GB", image: "https://placehold.co/400x300/F0F2F5/6b7280?text=Cartão+Memória", description: "Ideal para câmeras e smartphones.", price: 40.00 }
    ];

    const productsPerPage = 12;
    let currentPage = 1;
    let currentProducts = products;

    const productContainer = document.getElementById('product-container');
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.getElementById('close-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCountElement = document.getElementById('cart-count');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');
    const searchInput = document.getElementById('search-input');
    const favoritesButton = document.getElementById('favorites-button');
    const favoritesCountElement = document.getElementById('favorites-count');
    const paginationContainer = document.getElementById('pagination-container');
    
    let cart = [];
    let favorites = [];

    // Função para renderizar os produtos na página
    function renderProducts() {
        productContainer.innerHTML = '';
        
        // Calcula os produtos para a página atual
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToRender = currentProducts.slice(startIndex, endIndex);

        if (productsToRender.length === 0) {
            productContainer.innerHTML = '<p class="text-center text-gray-500 text-xl col-span-full">Nenhum produto encontrado.</p>';
        }

        productsToRender.forEach(product => {
            const isFavorited = favorites.includes(product.id);
            const favoriteIconClass = isFavorited ? 'fill-red-500' : 'fill-none';

            const productCard = document.createElement('div');
            productCard.className = 'bg-white rounded-xl shadow-md overflow-hidden product-card relative';
            productCard.innerHTML = `
                <button data-product-id="${product.id}" class="favorite-btn absolute top-2 right-2 p-2 rounded-full bg-white bg-opacity-75 hover:bg-opacity-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="favorite-icon w-6 h-6 ${favoriteIconClass}" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-.318-.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-semibold text-lg mb-2">${product.name}</h3>
                    <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-xl text-teal-600">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                        <button data-product-id="${product.id}" class="add-to-cart-btn bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                            Adicionar
                        </button>
                    </div>
                </div>
            `;
            productContainer.appendChild(productCard);
        });

        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.productId);
                addToCart(productId);
            });
        });

        document.querySelectorAll('.favorite-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.productId);
                toggleFavorite(productId);
            });
        });
    }

    // Função para renderizar os botões de paginação
    function renderPagination() {
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(currentProducts.length / productsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.className = `px-4 py-2 rounded-lg transition-colors ${i === currentPage ? 'bg-teal-600 text-white font-bold' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`;
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderProducts();
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            paginationContainer.appendChild(pageButton);
        }
    }

    // Função para adicionar um produto ao carrinho
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            updateCartDisplay();
        }
    }

    // Função para remover um produto do carrinho
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartDisplay();
    }

    // Função para adicionar/remover dos favoritos
    function toggleFavorite(productId) {
        const index = favorites.indexOf(productId);
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(productId);
        }
        favoritesCountElement.textContent = favorites.length;
        renderProducts();
        renderPagination();
    }

    // Função para atualizar a exibição do carrinho
    function updateCartDisplay() {
        cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-center text-gray-500">O carrinho está vazio.</p>';
        } else {
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'flex justify-between items-center bg-gray-50 p-3 rounded-lg';
                itemElement.innerHTML = `
                    <span>${item.name} x ${item.quantity}</span>
                    <div class="flex items-center space-x-2">
                        <span class="font-semibold text-teal-600">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                        <button data-product-id="${item.id}" class="remove-from-cart-btn text-red-500 hover:text-red-700 transition-colors text-2xl leading-none">&times;</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemElement);
                total += item.price * item.quantity;
            });
        }
        
        cartTotalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

        document.querySelectorAll('.remove-from-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.productId);
                removeFromCart(productId);
            });
        });
    }

    // Eventos para abrir e fechar o modal do carrinho
    cartButton.addEventListener('click', () => {
        cartModal.classList.remove('hidden');
        updateCartDisplay();
    });

    closeModal.addEventListener('click', () => {
        cartModal.classList.add('hidden');
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.classList.add('hidden');
        }
    });

    // Evento para finalizar a compra
    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            const total = cart.reduce((t, item) => t + item.price * item.quantity, 0);
            
            const messageBox = document.createElement('div');
            messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50';
            messageBox.innerHTML = `
                <div class="bg-white rounded-lg p-6 w-full max-w-sm shadow-xl text-center">
                    <h3 class="text-xl font-semibold mb-4">Compra Finalizada!</h3>
                    <p class="mb-4">Obrigado por comprar conosco. Total: <span class="text-teal-600 font-bold">R$ ${total.toFixed(2).replace('.', ',')}</span></p>
                    <button id="close-message" class="bg-teal-600 text-white px-4 py-2 rounded-lg">Fechar</button>
                </div>
            `;
            document.body.appendChild(messageBox);
            
            document.getElementById('close-message').addEventListener('click', () => {
                messageBox.remove();
            });

            cart = [];
            updateCartDisplay();
            cartModal.classList.add('hidden');
        } else {
            const messageBox = document.createElement('div');
            messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50';
            messageBox.innerHTML = `
                <div class="bg-white rounded-lg p-6 w-full max-w-sm shadow-xl text-center">
                    <h3 class="text-xl font-semibold mb-4">Atenção</h3>
                    <p class="mb-4">Seu carrinho está vazio.</p>
                    <button id="close-message" class="bg-teal-600 text-white px-4 py-2 rounded-lg">Fechar</button>
                </div>
            `;
            document.body.appendChild(messageBox);

            document.getElementById('close-message').addEventListener('click', () => {
                messageBox.remove();
            });
        }
    });

    // Evento para a barra de pesquisa
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        currentProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.description.toLowerCase().includes(query)
        );
        currentPage = 1; // Volta para a primeira página após a busca
        renderProducts();
        renderPagination();
    });

    // Evento para exibir apenas os favoritos
    favoritesButton.addEventListener('click', () => {
        currentProducts = products.filter(product => favorites.includes(product.id));
        currentPage = 1;
        renderProducts();
        renderPagination();
    });

    // Renderizar os produtos e a paginação ao carregar a página
    renderProducts();
    renderPagination();
});
