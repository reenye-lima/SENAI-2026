# Locadora de Veículos

Contexto: Sistema de locadora de veículos com dois controllers: -
carrosController - clientesController

O objetivo é aplicar funções de manipulação de string no JavaScript.

------------------------------------------------------------------------

# Controller de Carros

## 1. Placa obrigatória e padronizada

Regras: - Não pode ser vazia - Deve ter exatamente 7 caracteres (modelo
antigo) - Deve ser armazenada em maiúsculo - Não pode conter espaços

Funções que devem ser utilizadas: - .trim() - .length - .toUpperCase() -
.includes() - .replace()

------------------------------------------------------------------------

## 2. Marca e modelo com primeira letra maiúscula

Regras: - Não pode estar vazio - Não podem conter espaços em branco - devem ser armazenados em minúsculo - devem ser armazenados separadamente.

Funções que devem ser utilizadas: - .trim() - .split(" ") - .toLowerCase()

------------------------------------------------------------------------

## 3. Ano do veículo deve ter 4 caracteres

Regras: - Deve ter exatamente 4 dígitos - Não pode conter letras

Funções que podem ser utilizadas: - .length - .split("") - .typeof()

------------------------------------------------------------------------

## 4. Não permitir duplicidade de placa

Regra: - Não pode existir dois carros com a mesma placa

------------------------------------------------------------------------

# Controller de Clientes

## 1. Nome completo obrigatório

Regras: - Deve conter pelo menos duas palavras - Não pode ter apenas
espaços

Funções que devem ser utilizadas: - .trim() - .split(" ") - .length

------------------------------------------------------------------------

## 2. CPF deve conter apenas números

Regras: - Deve ter exatamente 11 caracteres - Não pode conter letras -
Pontos e traços devem ser removidos automaticamente

Funções que devem ser utilizadas: - .replace() - .length

Sugestão de abordagem: Remover caracteres não numéricos antes da
validação.

------------------------------------------------------------------------

## 3. Email válido e padronizado

Regras: - Deve conter "@" - Deve conter "." - Deve ser armazenado em
minúsculo

Funções que devem ser utilizadas: - .includes() - .toLowerCase()

------------------------------------------------------------------------

## 4. Não permitir emails duplicados

Regra: - Não pode existir dois clientes com o mesmo email

------------------------------------------------------------------------

## 5. CNH deve começar com número

Regra: - O primeiro caractere deve ser numérico

Funções que devem ser utilizadas: - .split("") - Acesso por índice \[0\]

------------------------------------------------------------------------
