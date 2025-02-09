const todosProjetos  = [
    {
        titulo: 'Hashzap',
        githubLink: 'https://github.com/Emersonpinho/Hashzap',
        descricao: 'Hashzap é um aplicativo de chat desenvolvido em Python com a biblioteca Flet. Ele permite a interação em tempo real, sendo ideal para aprender sobre construção de interfaces dinâmicas e comunicação em tempo real.',
        tipos: ['HTML', 'PYTHON'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'Automação de login',
        githubLink: 'https://github.com/Emersonpinho/automacaoDeLogin',
        descricao: 'Este projeto demonstra uma automação simples para fazer login em um sistema web e cadastrar produtos de uma base de dados utilizando a biblioteca PyAutoGUI. Com o uso do Python, a automação é capaz de abrir o navegador, acessar uma página de login, realizar o login automaticamente e, em seguida, cadastrar produtos a partir de um arquivo CSV.',
        tipos: ['PYTHON', 'PyAutoGUI'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'Top Musics',
        githubLink: 'https://github.com/LucasFelip/TopMusic',
        descricao: 'Projeto de interface para a listagem e detalhes de dados para o usuário, dados da API do Spotify.',
        tipos: ['Swift', 'UIKit'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'Vendedores',
        githubLink: 'https://github.com/LucasFelip/projeto-sds3',
        descricao: 'Sistema relatório de dados de vendas de funcionários com uma interface em React e uma API Spring.',
        tipos: ['Java', 'Spring', 'React'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'ListJogos',
        githubLink: 'https://github.com/LucasFelip/sistemaDeRecomendacaoJogos',
        descricao: 'Sistema que recomenda jogos com base no parâmetro IMDB e com parâmetros solicitados pelo usuário.',
        tipos: ['Python', 'Analysts'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'Redes',
        githubLink: 'https://github.com/LucasFelip/AmbienteRedesComputadores',
        descricao: 'Ambiente de redes de computadores focando no desenvolvimento de rede com servidores e PC\'s.',
        tipos: ['Redes de computadores', 'Cisco'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'iMobility',
        githubLink: 'https://github.com/LucasFelip/iMobility',
        descricao: 'Aplicativo iOS para registro de problemas em vias públicas e análise de ocorrências.',
        tipos: ['Swift', 'SwiftUI', 'MapKIT'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'Ponto Eletrônico',
        githubLink: 'https://github.com/LucasFelip/pontoEletronico',
        descricao: 'Sistema de ponto eletrônico para cálculo de horas extras e atrasos, com base nas horas de trabalho e na marcação',
        tipos: ['Java', 'Spring', 'JS', 'Bootstrap'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'Gestão Financeira',
        githubLink: 'https://github.com/LucasFelip/gestao',
        descricao: 'Sistema de Gestão Financeira para controle de gastos e ganhos para cada usuário logado, para planejamento financeiro',
        tipos: ['Java', 'Spring', 'JS', 'MySQL'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'Aplicativo de Transporte Vai de Ferry',
        descricao: 'Desenvolvimento do backend para aplicativo que fornece informações de transporte ferroviário e aquático.',
        tipos: ['Java', 'Spring Boot', 'PostgreSQL'],
        tipoProjeto: 'Acadêmico'
    },
    {
        titulo: 'Tabuleiro BD - Jogo Educacional',
        descricao: 'Assistência técnica no desenvolvimento de um jogo para ensino de banco de dados, com gamificação.',
        tipos: ['Gamificação', 'Banco de Dados'],
        tipoProjeto: 'Acadêmico'
    },
    {
        titulo: 'Aplicativo Educativo sobre Segurança da Informação',
        descricao: 'Aplicativo interativo para ensino de segurança da informação com jogos educativos.',
        tipos: ['Segurança', 'Educação', 'Desenvolvimento'],
        tipoProjeto: 'Acadêmico'
    }
];

const INITIAL_PROJECTS_TO_SHOW = 3;
let projectsDisplayed = INITIAL_PROJECTS_TO_SHOW;

function criarCardProjeto(card) {
    return `
    <article class="project-card">
      <header class="project-card__header">
        <div class="project-card__title">
          <h3>${card.titulo}</h3>
        </div>
        <span class="badge-info">${card.tipoProjeto}</span>
      </header>
      <p class="project-card__description">${card.descricao}</p>
      <footer>
        ${card.githubLink ? `<a href="${card.githubLink}" class="project-card__button" target="_blank">Ver mais</a>` : ''}
      </footer>
    </article>
  `;
}

function renderProjects() {
    const projetosContainer = document.getElementById('projetosContainer');
    const projetosAtuais = projetosContainer.children.length;

    todosProjetos.slice(projetosAtuais, projectsDisplayed).forEach((card, index) => {
        const cardHTML = criarCardProjeto(card);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cardHTML;

        const novoProjeto = tempDiv.firstElementChild;
        novoProjeto.classList.add('fade-in');
        novoProjeto.style.animationDelay = `${index * 0.2}s`;

        projetosContainer.appendChild(novoProjeto);
    });

    const loadMoreButton = document.getElementById('loadMoreButton');
    if (projectsDisplayed >= todosProjetos.length) {
        loadMoreButton.style.display = 'none';
    }
}

const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        opacity: 0;
        transform: translateY(15px);
        animation: fadeInUp 0.5s ease-out forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(15px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

function loadMoreProjects() {
    projectsDisplayed += 3;
    renderProjects();
}

document.getElementById('loadMoreButton').addEventListener('click', loadMoreProjects);

renderProjects();
