
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Foi definido que o projeto utilizará de uma metodologia ágil, nesse caso o SCRUM, além disso, escolhemos pelas ferramentas que suportam a metodologia e que ainda são amplamente usadas no mercado.

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [Github](https://github.com) foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `staging`: versão em teste com dados de produção
- `qa`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `feature`: uma nova funcionalidade ou melhoria que precisa ser introduzida

A configuração inicial separa o repositório em documentação, apresentação e código. Além disso, o fluxo de atualização das *branches* principais segue o esquema de criação e validação de **pull request**. Outro método necessário é a criação de uma *branch* para trabalho em uma tarefa espefícica.  

## Gerenciamento de Projeto

### Divisão de Papéis

**SCRUM Master (SM):** Cassio Borges do Carmo<br>
**Product Owner (PO):** Thiago Souza Dias<br>
**Líder técnico (LT):** Cassio Borges do Carmo e Thiago Souza Dias*<br>
**Desenvolvedores:**<br>
- André Luiz Souza Silva
- David Xavier Soares de Souza
- Wellington Ubiratan da Silva Junior


<sub>* Obs.: Pela equipe reduzida o papel de líder técnico será dividida pelo SCRUM Master e o Product Owner.</sub>

### Processo

O processo seguirá a rotina de cerimônias comuns ao SCRUM. Como referência do SCRUM, foi definido um **time-box** de quinze dias, esse escolha foi definida por seguir um padrão amplamente usado no mercado e criar entregáveis em um intervalo razoável para o cliente. 

Cerimônias adotadas com breve descrição:

- PI Planning
-- Elaboração do backlog inicial e previsão da distribuição das tarefas pelas sprints. Além disso, criação do **definition of done**.
- Cards writing
-- Criação de CARDS com presença obrigatória do SM, PO e um desenvolvedor. 
- Planning
-- Priorização dos CARDS para sprint e estimativa de capacidade por CARD.
- Daily
-- Reporte das tarefas do dia anterior e previsão das tarefas do dia atual. Além de servir para notificação de impedimentos nas tarefas.
- Review
-- Revisão do que foi trabalhado na sprint que se encerra, detalhando o que entregue e quais tarefas foram adiadas.
- Retro
-- Revisão sobre o processo de trabalho da sprint que se encerra, buscando melhorias no processo (feedback contínuo).

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código: VSCode.
- Ferramentas de comunicação: WhatsApp, Microsoft Teams. 
- Ferramentas de desenho de tela: Sigma.
- Ferramenta de gerenciamento de processo: Jira.
