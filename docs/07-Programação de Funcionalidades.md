# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>
<br>
<p>
Os sistemas são separados entre a perspectiva de prestador de serviço e usuário contratante. Funcionalidades em comum se encontram em um mesmo arquivo javascript, afim de ser expandido posteriormente no caso do projeto seguir para utilização de algum sistema backend / disponibilização de dados via API Restful.</p>
<p>Por hora há a troca de informações entere os dois tipos de usuário na forma de um "contrato", em json, cujo tráfego de informações nos devidos campos determina em que ponto está uma contratação:</p>
-Proposta feita pelo contratante<br>
-Seleção de data disponível<br>
-Aceite ou recusa por conta do prestador<br>
-Serviço completo / encerrado<br>
-Qualificação / feedback<br>
<br>
<p>Desta forma, o que temos não deixa de ser uma máquina de estados finitos, como utilizado em diferentes tipos de aplicações e / ou até mesmo bancos de dados.</p><br>
<p>Querries são feitas em javascript vanilla e ajax, sem uso de quaisquer frameworks ou supersets de javascript.</p>
