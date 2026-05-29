# Relatório de Importação de Empreendimento - Teste (Wide Nova Campinas)

Este relatório documenta a análise técnica e o processo de importação experimental do empreendimento **Wide Nova Campinas** para o site institucional de Cláudia Carlini. A importação foi realizada de forma semi-automática a partir dos arquivos PDF disponibilizados na pasta do projeto.

---

## 1. Arquivos de Origem Analisados
Os arquivos analisados residem no diretório do projeto: `img/Empreendimentos Claudia/Wide Nova Campinas/`.
* **PDF Completo:** `Wide Nova Campinas - Book do cliente.pdf` (50 páginas - Book Digital oficial de vendas da EBM).
* **PDFs Separados por Página:** `Wide Nova Campinas - Book do cliente-1.pdf` a `Wide Nova Campinas - Book do cliente-50.pdf` (arquivos individuais correspondendo a cada página do book).

---

## 2. Empreendimento Identificado
* **Nome do Empreendimento:** Wide Nova Campinas
* **Realização/Incorporação:** EBM Desenvolvimento Imobiliário (Linha Wide)
* **Cidade:** Campinas/SP
* **Bairro:** Nova Campinas - uma das regiões mais tradicionais e desejadas de Campinas/SP.
* **Endereço Completo:** Informações sob consulta (reservado para atendimento consultivo da corretora).

---

## 3. Informações Técnicas Extraídas
* **Tipologias / Metragens das Plantas:** Apartamentos de **104 m²** de área privativa, contendo **3 suítes** com living integrado, elevador semiprivativo e previsão de churrasqueira a gás na varanda gourmet.
* **Projetistas Assinados:**
  * **Projeto de Arquitetura:** XOK Arquitetos.
  * **Projeto de Paisagismo:** Carol Miluzzi.
  * **Decoração de Áreas Comuns:** Martha Gavião.
* **Segurança e Acessos:** Acesso social imponente com guarita blindada, portões com pulmões independentes (social e de serviços), fechaduras eletromagnéticas, controles de acesso facial e sensor para TAG veicular.
* **Diferenciais dos Apartamentos:** Elevador semiprivativo por prumada, fechadura digital eletrônica na porta social, tomadas USB-C em todos os quartos, janelas com venezianas integradas, bancada com cuba dupla no banho master, previsão para ar-condicionado em todas as suítes e sala.
* **Lazer e Conveniências (Condomínio):** Piscina adulto com raia independente (entregue com trocador de calor), solarium, salão de festas decorado com tomadas USB-C, espaço gourmet com integração para a praça de apoio, espaço fitness completo com área funcional externa, coworking climatizado com conectividade, lockers inteligentes para encomendas, minimercado interno (minimarket), bicicletário equipado com ponto para carregar bike elétrica e vaga verde (previsão de tomada de recarga de carro elétrico para cada apartamento).

---

## 4. Informações que Ficaram "Sob Consulta"
Em conformidade com a segurança comercial e a credibilidade institucional da corretora, dados específicos que dependem de tabela ativa ou memorial atualizado da construtora foram mantidos sob sigilo:
* **Valores e Preços:** Definido como `"Sob consulta"` no site.
* **Previsão de Entrega:** Definido como `"Previsão de entrega sob consulta"`.
* **Vagas de Garagem:** Definido como `"Informações sob consulta"` para atração de leads via WhatsApp.

---

## 5. Curadoria de Imagens (Aproveitadas vs. Descartadas)
Extraímos imagens em **altíssima definição (1920px)** dos vetores do PDF e aplicamos compressão de qualidade 80 no formato **WebP** para máxima performance.

### Imagens Selecionadas para o Site (Total: 7 fotos)
1. **`fachada.webp`** (Página 11 do PDF - 199.93 KB): Vista da fachada principal contemporânea do empreendimento.
2. **`area-comum-01.webp`** (Página 13 do PDF - 109.91 KB): Vista do Lobby sofisticado com mobiliário de alto padrão.
3. **`area-comum-02.webp`** (Página 16 do PDF - 193.53 KB): Perspectiva da Piscina adulto climatizada.
4. **`area-comum-03.webp`** (Página 17 do PDF - 139.59 KB): Perspectiva do Espaço Gourmet integrado.
5. **`area-comum-04.webp`** (Página 20 do PDF - 144.38 KB): Perspectiva do Salão de Festas com iluminação sofisticada.
6. **`decorado-01.webp`** (Página 10 do PDF - 158.46 KB): Perspectiva ilustrada de decoração de interiores (Living ampliado).
7. **`planta-01.webp`** (Página 31 do PDF - 205.67 KB): Planta baixa oficial do apartamento tipo de 104 m² com 3 suítes.

---

## 6. Onde as Imagens Foram Salvas
Os arquivos WebP otimizados foram gravados no diretório público do projeto:
`public/img/properties/wide-nova-campinas/`

---

## 7. URL para Revisão Manual do Teste
Uma vez ligado o servidor local com `npm run dev`, a rota experimental poderá ser acessada e validada em:
👉 **[http://localhost:3000/imoveis/teste-wide-nova-campinas](http://localhost:3000/imoveis/teste-wide-nova-campinas)**
