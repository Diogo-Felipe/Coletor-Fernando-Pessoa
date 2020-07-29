# Coletor Fernando Pessoa

O programa é uma implementação em node.js que coleta os textos do site [Arquivo Pessoa](http://arquivopessoa.net/). A arquitetura foi pensada para facilitar a leitura por um programa externo, como algum código em python, que queira fazer uma análise das obras de pessoa.

Existem 3 funções dentro do coletor, que se encontra no src: getPoemas, que recupera apenas os poemas; getProsa, que recupera todas as prosas; e getObras, que recupera toda a obra.

O métodos resultam em arquivos de texto em que a separação das obras é feita através de uma quebra de linha simples.
