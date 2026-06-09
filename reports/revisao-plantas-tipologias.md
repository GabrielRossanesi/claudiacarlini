# Relatório de Revisão: Seção "Plantas e Tipologias"

Este relatório documenta a auditoria e correção da seção "Plantas e Tipologias" em todas as páginas de empreendimentos do site da Cláudia Carlini. A lógica anterior baseada em buscas automáticas (regex) no array de imagens gerava falsos positivos (exibindo fotos de arquitetos, páginas conceituais ou capas).

Foi implementada uma lógica robusta utilizando o campo explícito `floorPlanImage?: string` e o componente cliente `PropertyFloorPlanSection` para exibir imagens apenas quando forem plantas reais.

---

## Tabela de Auditoria dos Empreendimentos

| Nome do Empreendimento | Slug | Imagem Anteriormente Exibida | Status Anterior | Nova Imagem (`floorPlanImage`) | Seção Ocultada? | Observações |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Gallery Cambuí Residence** | `gallery-cambui-residence` | `page-06.webp` | ❌ Incorreta | `/img/properties/gallery-cambui/planta-01.webp` | Não | Corrigido de page-06 (falso positivo) para a planta real. |
| **Belgravia Nova Campinas** | `belgravia-nova-campinas` | `planta-01.webp` |  Correta | `/img/properties/belgravia/planta-01.webp` | Não | Mantida a planta correta. |
| **Alto das Mansões** | `alto-das-mansoes` | `planta-01.webp` |  Correta | `/img/properties/alto-das-mansoes/planta-01.webp` | Não | Mantida a planta correta. |
| **HOX Cambuí** | `hox-cambui` | `page-06.webp` | ❌ Incorreta | `/img/properties/hox-cambui/planta-01.webp` | Não | Corrigido o falso positivo da page-06 para a planta real. |
| **Luce Cambuí** | `luce-cambui` | `page-06.webp` | ❌ Incorreta | `/img/properties/luce-cambui/planta-01.webp` | Não | Recuperada a planta real existente no diretório físico. |
| **Intento Cambuí** | `intento-cambui` | `page-06.webp` | ❌ Incorreta | `/img/properties/intento-cambui/planta-01.webp` | Não | Recuperada a planta real existente no diretório físico. |
| **Wyn Residence** | `wyn-residence` | `planta-01.webp` |  Correta | `/img/properties/wyn-residence/planta-01.webp` | Não | Mantida a planta correta. |
| **Wide Nova Campinas** | `wide-nova-campinas` | `planta-01.webp` |  Correta | `/img/properties/wide-nova-campinas/planta-01.webp` | Não | Mantida a planta correta. |
| **Grand Paysage** | `grand-paysage` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |
| **Avenida 105** | `avenida-105` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |
| **Residencial Belleville** | `residencial-belleville` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |
| **Casa Arborais Altavista** | `casa-arborais-altavista` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |
| **Casa Bella Parque Alphaville** | `casa-bella-parque-alphaville` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |
| **Casa Prado Residence** | `casa-prado-residence` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |
| **Casa da Mata** | `casa-da-mata` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |
| **Lausanne Swiss Park Residence** | `lausanne-swiss-park-residence` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |
| **Lazur** | `lazur` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |
| **Residencial Maziero** | `residencial-maziero` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |
| **Frame** | `frame` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |
| **Tay** | `tay` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |
| **Trésor Residence** | `tresor-residence` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |
| **Up Side** | `up-side` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |
| **Villa Vita Condomínio Residencial** | `villa-vita-condominio-residencial` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |
| **Vista Horizonte** | `vista-horizonte` | `page-06.webp` | ❌ Incorreta | Nenhuma | Sim | Ocultada a seção por não possuir planta real nem dados textuais. |

---

## Resumo Estatístico

* **Total de empreendimentos auditados**: 24
* **Falsos positivos corrigidos** (exibiam `page-06.webp` ou similar incorretamente): 18
* **Empreendimentos com planta real definida** (`floorPlanImage`): 8
* **Empreendimentos com a seção ocultada de forma limpa**: 16
