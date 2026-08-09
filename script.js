document.addEventListener("DOMContentLoaded", function() {
    // Cria a caixinha escura no fundo da tela
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'welcome-modal-overlay';
    
    // Conteúdo da mensagem de boas-vindas
    modalOverlay.innerHTML = `
        <div class="welcome-modal-card">
            <div class="welcome-icon">
                <i class="fas fa-car-side"></i>
            </div>
            <h2>Seja bem-vindo(a)! 🚗🔧</h2>
            <p>É um prazer receber você na <strong>Pingo Reparação Automotiva</strong>. Estamos prontos para cuidar do seu veículo com qualidade e transparência. Como podemos te ajudar hoje?</p>
            <button id="welcome-close-btn">Explorar o Site</button>
        </div>
    `;

    document.body.appendChild(modalOverlay);

    // Estilos visuais do pop-up
    const style = document.createElement('style');
    style.innerHTML = `
        #welcome-modal-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex; justify-content: center; align-items: center;
            z-index: 9999; animation: fadeIn 0.4s ease-in-out;
        }
        .welcome-modal-card {
            background: #ffffff; padding: 35px 25px; border-radius: 15px;
            max-width: 420px; width: 90%; text-align: center;
            box-shadow: 0 10px 25px rgba(0,0,0,0.4);
            font-family: Arial, sans-serif;
        }
        .welcome-icon { font-size: 50px; color: #ffc107; margin-bottom: 15px; }
        .welcome-modal-card h2 { font-size: 24px; color: #222222; margin-bottom: 12px; font-weight: 700; }
        .welcome-modal-card p { font-size: 14px; color: #555555; line-height: 1.5; margin-bottom: 25px; }
        #welcome-close-btn {
            background-color: #25d366; color: white; border: none;
            padding: 12px 30px; border-radius: 8px; cursor: pointer;
            font-weight: bold; font-size: 16px; width: 100%;
            transition: background-color 0.2s;
        }
        #welcome-close-btn:hover { background-color: #1ebe5d; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    `;
    document.head.appendChild(style);

    // Faz o pop-up sumir quando clicar no botão verde
    document.getElementById('welcome-close-btn').addEventListener('click', function() {
        modalOverlay.style.opacity = '0';
        modalOverlay.style.transition = 'opacity 0.3s ease';
        setTimeout(() => { modalOverlay.remove(); }, 300);
    });
});