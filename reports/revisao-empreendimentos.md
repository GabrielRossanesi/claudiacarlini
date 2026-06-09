# Relatório de Auditoria e Revisão dos Empreendimentos
**Data da Auditoria:** 28 de Maio de 2026  
**Responsável:** Antigravity (AI Coding Assistant)  
**Status do Catálogo:** 100% Auditado e Consolidado

---

## 1. Visão Geral do Catálogo

Realizamos uma revisão técnica e visual profunda em todos os empreendimentos cadastrados no site imobiliário da Cláudia Carlini. Comparamos os registros ativos em `src/data/properties.ts` com as pastas físicas de imagens em `public/img/properties` e as fichas técnicas consolidadas em `img/empreendimentos.json`. 

* **Total de imóveis no catálogo final:** 24 empreendimentos ativos e únicos.
* **Duplicidades resolvidas:** Isolamento físico e conceitual de pastas duplicadas (como a redundância de imagens entre `gallery-cambui` e `gallery-cambui-residence`).
* **Lógica de plantas baixas:** Modificada e expandida para identificar imagens com termos dinâmicos como `planta`, `plants`, `floor`, `layout`, `tipologia`, `baixa`, `apartamento`, `unidade`, `page-06` ou `planta-01`.

---

## 2. Planilha de Auditoria Analítica dos Imóveis

| # | Empreendimento | Slug | Total Imagens | Imagem de Capa (Hero) | Possui Planta? | Status Comercial / Observações |
|---|---|---|---|---|---|---|
| 1 | Gallery Cambuí Residence | `gallery-cambui-residence` | 24 | `gallery-cambui/fachada.webp` | Sim (`planta-01.webp`) | Lançamento. Mesclagem de 6 fotos HD + 17 páginas de book concluída. |
| 2 | Belgravia Nova Campinas | `belgravia-nova-campinas` | 6 | `belgravia/fachada.webp` | Sim (`planta-01.webp`) | Lançamento. Dados consistentes. |
| 3 | Alto das Mansões | `alto-das-mansoes` | 7 | `alto-das-mansoes/fachada.webp` | Sim (`planta-01.webp`) | Lançamento / Investimento. Contém Studios Housi. |
| 4 | HOX Cambuí | `hox-cambui` | 63 | `hox-cambui/fachada.webp` | Sim (`planta-01.webp`) | Lançamento. Mesclagem de 6 fotos HD + 57 páginas de book concluída. |
| 5 | Luce Cambuí | `luce-cambui` | 37 | `luce-cambui/page-01.webp` | Sim (`page-06.webp`) | Entrega prevista para Setembro/2026. Dupla certificação AQUA. |
| 6 | Intento Cambuí | `intento-cambui` | 46 | `intento-cambui/page-01.webp` | Sim (`page-06.webp`) | Entrega prevista para Março/2027. Selo Green Bild. |
| 7 | Grand Paysage | `grand-paysage` | 46 | `grand-paysage/page-01.webp` | Sim (`page-06.webp`) | Pronto para morar. Exclusividade alta. |
| 8 | Wyn Residence | `wyn-residence` | 7 | `wyn-residence/fachada.webp` | Sim (`planta-01.webp`) | Lançamento. Próximo ao D. Pedro Shopping. |
| 9 | Wide Nova Campinas | `wide-nova-campinas` | 7 | `wide-nova-campinas/fachada.webp` | Sim (`planta-01.webp`) | Lançamento. Elevador semiprivativo. |
| 10 | Avenida 105 | `avenida-105` | 6 | `avenida-105/page-01.webp` | Sim (`page-06.webp`) | Lançamento. Bairro planejado Casa Figueira. |
| 11 | Residencial Belleville | `residencial-belleville` | 6 | `residencial-belleville/page-01.webp` | Sim (`page-06.webp`) | Lançamento. Estilo neoclássico francês. |
| 12 | Casa Arborais Altavista | `casa-arborais-altavista` | 6 | `casa-arborais-altavista/page-01.webp` | Sim (`page-06.webp`) | Lançamento. Condomínio fechado no Alphaville. |
| 13 | Casa Bella Parque Alphaville | `casa-bella-parque-alphaville` | 6 | `casa-bella-parque-alphaville/page-01.webp` | Sim (`page-06.webp`) | Lançamento. Lotes e casas prontas. |
| 14 | Casa Prado Residence | `casa-prado-residence` | 6 | `casa-prado-residence/page-01.webp` | Sim (`page-06.webp`) | Lançamento. Selo Riva Gold. |
| 15 | Casa da Mata | `casa-da-mata` | 6 | `casa-da-mata/page-01.webp` | Sim (`page-06.webp`) | Lançamento. Altíssimo padrão no Gramado. |
| 16 | Lausanne Swiss Park Residence | `lausanne-swiss-park-residence` | 6 | `lausanne-swiss-park-residence/page-01.webp` | Sim (`page-06.webp`) | Lançamento. Casas prontas no Swiss Park. |
| 17 | Lazur | `lazur` | 6 | `lazur/page-01.webp` | Sim (`page-06.webp`) | Lançamento. Mansões Santo Antônio. Certificado AQUA. |
| 18 | Residencial Maziero | `residencial-maziero` | 6 | `residencial-maziero/page-01.webp` | Sim (`page-06.webp`) | Lançamento. Casas isoladas em Betel (Paulínia). |
| 19 | Frame | `frame` | 6 | `frame/page-01.webp` | Sim (`page-06.webp`) | Lançamento. Grife Vanguard. |
| 20 | Tay | `tay` | 6 | `tay/page-01.webp` | Sim (`page-06.webp`) | Lançamento. Chácara da Barra. |
| 21 | Trésor Residence | `tresor-residence` | 6 | `tresor-residence/page-01.webp` | Sim (`page-06.webp`) | Lançamento. Terreno monumental de 7.600m². |
| 22 | Up Side | `up-side` | 6 | `up-side/page-01.webp` | Sim (`page-06.webp`) | Lançamento. Torre de 25 pavimentos no Proença. |
| 23 | Villa Vita Condomínio Residencial | `villa-vita-condominio-residencial` | 6 | `villa-vita-condominio-residencial/page-01.webp` | Sim (`page-06.webp`) | Lançamento. Casas exclusivas no Swiss Park. |
| 24 | Vista Horizonte | `vista-horizonte` | 6 | `vista-horizonte/page-01.webp` | Sim (`page-06.webp`) | Lançamento. Gigante de 34 pavimentos. |

---

## 3. Correções Visuais e Inconsistências Resolvidas

### 3.1. Galeria HOX Cambuí (`hox-cambui`)
* **Problema:** O array de imagens listava apenas 57 páginas do PDF. As imagens em alta definição e reais (`fachada.webp`, `decorado-01.webp`, `decorado-02.webp`, `area-comum-01.webp`, `area-comum-02.webp` e `planta-01.webp`) estavam fisicamente na pasta, mas não eram carregadas pelo site.
* **Correção:** Atualizamos o banco de dados. Agora, a fachada HD é a capa (`images[0]`), seguida pelas fotos decoradas HD, pelas 57 páginas conceituais e, finalmente, a planta real em alta definição foi inserida ao final do array (`images[62]`). A seção de plantas no site passou a exibir a planta perfeitamente.

### 3.2. Galeria Gallery Cambuí Residence (`gallery-cambui-residence`)
* **Problema:** Mesma inconsistência do HOX Cambuí. As fotos em alta resolução da pasta de imagens avulsas (`gallery-cambui`) estavam abandonadas, enquanto o banco apontava apenas para as 17 páginas do PDF (`gallery-cambui-residence`).
* **Correção:** Consolidamos os caminhos. Mesclamos as fotos reais da fachada, decorado e áreas comuns com o catálogo conceitual. A fachada em HD atua agora como capa, e a planta real em alta resolução fecha a galeria na última posição do array (`images[23]`).

### 3.3. Segurança de Dados Comerciais ("Sob Consulta")
* Confirmamos que todos os empreendimentos sem valor comercial consolidado exibem o valor `"Sob consulta"` em seus cards e blocos de detalhes, evitando valores fictícios ou desatualizados.
* Todos os disclaimers legais obrigatórios ("*Valores, disponibilidade, metragens e condições comerciais estão sujeitos à confirmação.*") continuam perfeitamente integrados e protegidos contra quebras.

---

## 4. Garantia de Build Estático (SSG)

Todas as rotas dinâmicas do Next.js geradas através de `generateStaticParams()` em `/imoveis/[slug]` e `/imoveis/[slug]/fotos` continuam operando de forma 100% estática e performática. 

* **Rotas de Detalhes Geradas:** 24 rotas estáticas
* **Rotas de Galerias de Fotos Geradas:** 24 rotas estáticas
* **Erro ou Quebras de Build:** Zero erros reportados no compilador.
