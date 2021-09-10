import './App.css';

//a foto vai ficar legal com uma borda borrada amarela
function Header() {
  return(
    <header>
      <div className="content-wrap">
        <h1>Guilherme Dumas Peres</h1>
        <h2>Desenvolvedor procurando por novas oportunidades</h2>
      </div>
    </header>
  );
}

function Education() {
  return(
    <section className="education">
      <div className="content-wrap item-details">
        <h2>Educação</h2>
        <section>
          <h3>Instituto de Computação - IC - Universidade Estadual de Campinas (UNICAMP).</h3>
          <p>Bacharelado em Ciência da Computação, 2016-2021.</p>
        </section>
      </div>
    </section>
  );
}

function WorkExperience() {
  return(
    <section className="work-experience">
      <div className="content-wrap item-details divider">
        <h2>Experiência Profissional</h2>
        <section className="job-skill-item">
          <div className="job-skill-details">
            <h3>Estágiário</h3>
            <p>Safia Brasil - importação e exportação de produtos alimentícios</p>
            <p>Fevereiro 2021 - Agosto 2021</p>
          </div>
          <div className="job-skill-summary">
            <p>Automatizou planilhas do Excel com a biblioteca openpyxl do Python para agilizar o
               trabalho do setor financeiro da empresa, programou uma parte do software da plataforma 
               de investimentos da empresa em C# utilizando o Windows Forms da plataforma .NET e o 
               Microsoft SQL Server como banco de dados e programou uma versão mais simples dessa mesma
               plataforma no Microsoft PowerApps. Prestou suporte ao usuário na utilização do 
               ERP(brERP) e auxiliou na manutenção da infraestrutura garantindo fluidez e 
               continuidade dos trabalhos da empresa.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

function Skills() {
  return(
    <section className="skills">
      <div className="content-wrap item-details divider">
        <h2>Competências</h2>
        <section className="job-skill-item">
          <div className="job-skill-details">
            <h3>Idiomas</h3>
          </div>
          <div className="job-skill-summary">
            <p>Inglês intermediário(Cambridge B1 Preliminary).</p>
            <p>Francês iniciante(nível A1/A2 do CEFR).</p>
          </div>
        </section>
        <section className="job-skill-item">
          <div className="job-skill-details">
            <h3>Linguagens de programação</h3>
          </div>
          <div className="job-skill-summary">
            <p>Python - Avançado.</p>
            <p>JavaScript - Intermediário.</p>
            <p>C - Iniciante.</p>
            <p>C# - Iniciante.</p>
            <p>Java - Iniciante.</p>
          </div>
        </section>
        <section className="job-skill-item">
          <div className="job-skill-details">
            <h3>Linguagens de marcação e estilo</h3>
          </div>
          <div className="job-skill-summary">
            <p>HTML - Intermediário.</p>
            <p>CSS - Intermediário.</p>
          </div>
        </section>
        <section className="job-skill-item">
          <div className="job-skill-details">
            <h3>Ferramentas e tecnologias</h3>
          </div>
          <div className="job-skill-summary">
            <p>GitHub - Intermediário.</p>
            <p>Django - Iniciante.</p>
            <p>React.js - Iniciante.</p>
            <p>Node.js - Iniciante.</p>
            <p>REST APIs - Iniciante.</p>
          </div>
        </section>
        <section className="job-skill-item">
          <div className="job-skill-details">
            <h3>Processos</h3>
          </div>
          <div className="job-skill-summary">
            <p>Scrum - Iniciante.</p>
          </div>
        </section>
        <section className="job-skill-item">
          <div className="job-skill-details">
            <h3>Cursos</h3>
          </div>
          <div className="job-skill-summary">
            <p>Node.js Essential Training - LinkedIn Learning - 2021.</p>
            <p>Scrum: The Basics - LinkedIn Learning - 2021.</p>
            <p>Learning REST APIs - LinkedIn Learning - 2021.</p>
            <p>React.js Essential Training - LinkedIn Learning - 2021.</p>
            <p>JavaScript Essential Training - LinkedIn Learning - 2021.</p>
            <p>Learning Django - LinkedIn Learning - 2021.</p>
            <p>CSS Essential Training – LinkedIn Learning - 2021.</p>
            <p>HTML Essential Training - LinkedIn Learning - 2021.</p>
            <p>SQL Essential Training - LinkedIn Learning - 2021.</p>
            <p>MS-900: Microsoft 365 Fundamentals - Green Tecnologia - 2021.</p>
            <p>Learning Cloud Computing: Core Concepts - LinkedIn Learning - 2021.</p>
            <p>WordPress 5 Essential Training - LinkedIn Learning - 2021.</p>
            <p>JavaScript Essential Training (2017) - LinkedIn Learning - 2021.</p>
            <p>Python Automation and Testing - LinkedIn Learning - 2021.</p>
            <p>How to Make a Freaking Android App - Udemy - 2020.</p>
            <p>Automate the Boring Stuff with Python Programming - Udemy - 2020.</p>  
          </div>
        </section>
      </div>
    </section>
  );
}

function Footer() {
  return(
    <footer>
      <div className="content-wrap">
        <h2>Redes sociais</h2>
        <ul className="contact-list">
          <li><a href="https://github.com/guidumasperes/" target="_blank">github.com</a></li>
          <li><a href="https://www.linkedin.com/in/guilherme-dumas-peres/" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Education />
      <WorkExperience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;