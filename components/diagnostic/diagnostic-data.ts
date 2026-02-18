import type { LucideIcon } from "lucide-react";
import {
  Settings,
  BarChart3,
  Wrench,
  Users,
  Sparkles,
  Calculator,
  AlertTriangle,
  TrendingUp,
  Brain,
} from "lucide-react";

/* ──────────────────────────────────────────
   Type definitions
   ────────────────────────────────────────── */

export interface DiagnosticOption {
  text: string;
  score: number;
}

export interface DiagnosticQuestion {
  q: string;
  options: DiagnosticOption[];
}

export interface DiagnosticDimension {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string; // hex color for dynamic use
  questions: DiagnosticQuestion[];
}

export interface MaturityStage {
  id: string;
  name: string;
  subtitle: string;
  range: [number, number];
  color: string; // hex color
  icon: LucideIcon;
  description: string;
  risks: string[];
  actions: string[];
  cta: string;
}

export interface IntroCard {
  icon: LucideIcon;
  label: string;
  color: string;
}

/* ──────────────────────────────────────────
   Dimensions (5 dimensions, 3 questions each = 15 total)
   ────────────────────────────────────────── */

export const DIMENSIONS: DiagnosticDimension[] = [
  {
    id: "processo",
    name: "Estrutura & Processo de TA",
    icon: Settings,
    color: "#818cf8",
    questions: [
      {
        q: "Quem é o principal responsável por conduzir processos seletivos na sua empresa?",
        options: [
          { text: "O próprio gestor da área ou o dono da empresa", score: 1 },
          { text: "Um profissional de RH/DP que acumula outras funções", score: 2 },
          { text: "Um recrutador dedicado (interno ou terceirizado)", score: 3 },
          { text: "Uma equipe de TA estruturada com papéis definidos", score: 4 },
        ],
      },
      {
        q: "Quando surge uma vaga crítica, qual é o processo típico?",
        options: [
          { text: "Pedimos indicações e publicamos em um site de vagas", score: 1 },
          { text: "Temos um fluxo básico: divulgação, triagem, entrevista, oferta", score: 2 },
          { text: "Seguimos etapas padronizadas com critérios de avaliação documentados", score: 3 },
          { text: "Temos scorecards por perfil, SLAs por etapa e rituais de calibração", score: 4 },
        ],
      },
      {
        q: "Existe um processo formal de onboarding para novos contratados?",
        options: [
          { text: "Não — a pessoa chega e vai aprendendo no dia a dia", score: 1 },
          { text: "Fazemos uma integração básica no primeiro dia", score: 2 },
          { text: "Temos um programa estruturado de 1-2 semanas", score: 3 },
          { text: "Temos trilha de 30-60-90 dias com metas e acompanhamento", score: 4 },
        ],
      },
    ],
  },
  {
    id: "dados",
    name: "Dados & Métricas de Recrutamento",
    icon: BarChart3,
    color: "#34d399",
    questions: [
      {
        q: "Vocês sabem, hoje, qual é o tempo médio para preencher uma vaga?",
        options: [
          { text: "Não medimos isso", score: 1 },
          { text: "Temos uma noção, mas não é registrado formalmente", score: 2 },
          { text: "Medimos o time-to-fill e acompanhamos mês a mês", score: 3 },
          { text: "Medimos time-to-fill, custo por contratação e quality of hire", score: 4 },
        ],
      },
      {
        q: "Como a liderança acompanha o andamento das contratações?",
        options: [
          { text: "Perguntando ao RH por WhatsApp ou e-mail", score: 1 },
          { text: "Em reuniões periódicas, com informações verbais", score: 2 },
          { text: "Temos relatórios ou planilhas compartilhadas", score: 3 },
          { text: "Temos dashboards atualizados com indicadores em tempo real", score: 4 },
        ],
      },
      {
        q: "Vocês conseguem identificar em qual etapa do funil perdem mais candidatos?",
        options: [
          { text: "Não temos essa visão", score: 1 },
          { text: "Sabemos intuitivamente, mas sem dados", score: 2 },
          { text: "Temos dados parciais que nos ajudam a entender", score: 3 },
          { text: "Temos funil completo mapeado com taxa de conversão por etapa", score: 4 },
        ],
      },
    ],
  },
  {
    id: "tecnologia",
    name: "Tecnologia & Ferramentas",
    icon: Wrench,
    color: "#f59e0b",
    questions: [
      {
        q: "Qual ferramenta vocês usam para gerenciar os processos seletivos?",
        options: [
          { text: "E-mail, WhatsApp e planilhas", score: 1 },
          { text: "Uma planilha organizada ou Trello/Notion adaptado", score: 2 },
          { text: "Um ATS como Gupy, Kenoby ou similar", score: 3 },
          { text: "ATS integrado com automações, IA para triagem e analytics", score: 4 },
        ],
      },
      {
        q: "Como vocês buscam candidatos ativamente (sourcing)?",
        options: [
          { text: "Esperamos os candidatos se aplicarem nas vagas publicadas", score: 1 },
          { text: "Fazemos buscas manuais no LinkedIn quando necessário", score: 2 },
          { text: "Temos rotina de sourcing ativo com ferramentas dedicadas", score: 3 },
          { text: "Usamos IA, mapeamento de mercado e banco de talentos pré-qualificado", score: 4 },
        ],
      },
      {
        q: "Vocês utilizam alguma ferramenta de assessment ou teste na seleção?",
        options: [
          { text: "Não — avaliamos apenas por entrevista", score: 1 },
          { text: "Usamos testes genéricos ou cases pontuais", score: 2 },
          { text: "Temos assessments padronizados por tipo de vaga", score: 3 },
          { text: "Usamos assessments validados integrados ao ATS com dados comparativos", score: 4 },
        ],
      },
    ],
  },
  {
    id: "lideranca",
    name: "Envolvimento da Liderança",
    icon: Users,
    color: "#f472b6",
    questions: [
      {
        q: "Qual é o papel do CEO ou diretor nos processos seletivos?",
        options: [
          { text: "Entrevista pessoalmente quase todos os candidatos", score: 1 },
          { text: "Entrevista os finalistas de vagas estratégicas", score: 2 },
          { text: "Define a barra de qualidade e participa pontualmente", score: 3 },
          { text: "Define a estratégia de talento e delega a execução com confiança", score: 4 },
        ],
      },
      {
        q: "Os gestores que recebem novos contratados sabem conduzir uma boa entrevista?",
        options: [
          { text: "Não — cada um faz do seu jeito, sem preparo", score: 1 },
          { text: "Alguns são bons, outros precisam de apoio do RH", score: 2 },
          { text: "Oferecemos orientações e roteiros de entrevista", score: 3 },
          { text: "Temos programa de treinamento e calibração contínua de entrevistadores", score: 4 },
        ],
      },
      {
        q: "Quando uma contratação dá errado (saída em menos de 6 meses), o que acontece?",
        options: [
          { text: "Nada — é visto como azar ou 'não deu certo'", score: 1 },
          { text: "Conversamos informalmente sobre o que aconteceu", score: 2 },
          { text: "Fazemos análise de causa e ajustamos o perfil ou processo", score: 3 },
          { text: "Temos indicador de quality of hire e ciclo formal de aprendizado pós-saída", score: 4 },
        ],
      },
    ],
  },
  {
    id: "marca",
    name: "Marca Empregadora & Atração",
    icon: Sparkles,
    color: "#a78bfa",
    questions: [
      {
        q: "Se um candidato pesquisar sua empresa no Google ou LinkedIn, o que encontra?",
        options: [
          { text: "Pouca ou nenhuma informação sobre como é trabalhar aqui", score: 1 },
          { text: "Informações institucionais básicas (site, redes sociais)", score: 2 },
          { text: "Conteúdo sobre cultura, depoimentos e página de carreiras", score: 3 },
          { text: "EVP clara e segmentada, conteúdo consistente em canais de talento", score: 4 },
        ],
      },
      {
        q: "Como vocês comunicam a proposta de valor para candidatos?",
        options: [
          { text: "Só discutimos isso na entrevista, quando o candidato pergunta", score: 1 },
          { text: "Temos uma descrição genérica nos anúncios de vaga", score: 2 },
          { text: "Temos materiais de employer branding e comunicamos ativamente", score: 3 },
          { text: "Temos EVP segmentada por perfil com dados de mercado", score: 4 },
        ],
      },
      {
        q: "Vocês perdem candidatos bons para concorrentes durante o processo?",
        options: [
          { text: "Sim, com frequência — quando fazemos a oferta, já aceitaram outra", score: 1 },
          { text: "Acontece às vezes, principalmente em vagas técnicas", score: 2 },
          { text: "Raramente — nosso processo é competitivo em velocidade", score: 3 },
          { text: "Quase nunca — temos pipeline aquecido e oferta ágil", score: 4 },
        ],
      },
    ],
  },
];

/* ──────────────────────────────────────────
   Maturity stages
   ────────────────────────────────────────── */

export const STAGES: MaturityStage[] = [
  {
    id: "reativo",
    name: "Reativo",
    subtitle: "Apagando Incêndios",
    range: [15, 27],
    color: "#ef4444",
    icon: AlertTriangle,
    description:
      "Sua operação de TA funciona no modo urgência. As contratações são reativas — só acontecem quando alguém sai ou a dor fica insuportável. O CEO ou gestor é o recrutador de facto, e o custo invisível de vagas abertas corrói a receita.",
    risks: [
      "Vagas críticas ficam abertas por meses, gerando sobrecarga na equipe",
      "Contratações erradas são frequentes — alto turnover nos primeiros 6 meses",
      "O CEO gasta 30-40% do tempo em entrevistas em vez de estratégia",
      "Sem dados, é impossível saber onde o processo quebra",
    ],
    actions: [
      "Mapear as 3 vagas mais críticas e calcular o Custo de Vacância de cada uma",
      "Definir um fluxo mínimo de 4 etapas para todo processo seletivo",
      "Escolher uma ferramenta básica de gestão (pode ser Notion ou Trello)",
      "Treinar os 3 gestores que mais contratam em técnicas básicas de entrevista",
    ],
    cta: "Diagnóstico de Urgência — sessão focada em estancar o sangramento e montar o plano de 30 dias.",
  },
  {
    id: "operacional",
    name: "Operacional",
    subtitle: "Tem Processo, Falta Inteligência",
    range: [28, 39],
    color: "#f59e0b",
    icon: Settings,
    description:
      "Sua empresa já tem algum processo de recrutamento, mas opera sem dados e sem visibilidade. O RH executa, mas não consegue provar o valor da operação nem antecipar problemas. A liderança sente que precisa supervisionar tudo.",
    risks: [
      "Decisões de contratação baseadas em feeling, não em evidência",
      "Impossibilidade de justificar investimento em TA para a diretoria",
      "Gargalos invisíveis que prolongam o time-to-fill sem explicação",
      "Perda de candidatos bons por lentidão no processo",
    ],
    actions: [
      "Implementar 3 métricas essenciais: time-to-fill, funil de conversão e fonte",
      "Construir o primeiro dashboard de recrutamento — Google Sheets basta",
      "Padronizar scorecards de entrevista por família de cargo",
      "Criar SLAs de tempo entre etapas: triagem 48h, feedback 5 dias",
    ],
    cta: "Programa de Aceleração — 6 semanas para implementar métricas, dashboards e SLAs que transformam TA em área estratégica.",
  },
  {
    id: "estrategico",
    name: "Estratégico",
    subtitle: "Dados Guiam Decisões",
    range: [40, 51],
    color: "#10b981",
    icon: TrendingUp,
    description:
      "Sua operação de TA usa dados para decidir, tem processos documentados e a liderança confia no sistema. O próximo passo é antecipar necessidades e usar tecnologia avançada para vantagem competitiva na atração.",
    risks: [
      "Risco de acomodação — o sistema funciona, mas não evolui",
      "Concorrentes com TA mais sofisticado podem capturar seus candidatos",
      "Planejamento de workforce ainda é reativo, baseado em vagas e não competências futuras",
    ],
    actions: [
      "Implementar análise preditiva de turnover e necessidade de contratação",
      "Construir programa de Employer Branding segmentado por perfil",
      "Desenvolver banco de talentos ativo com nurturing de candidatos passivos",
      "Conectar métricas de TA a indicadores de negócio: receita por funcionário",
    ],
    cta: "Advisory Estratégico — acompanhamento mensal para elevar a maturidade de TA ao nível preditivo.",
  },
  {
    id: "preditivo",
    name: "Preditivo",
    subtitle: "Talento como Vantagem Competitiva",
    range: [52, 60],
    color: "#8b5cf6",
    icon: Brain,
    description:
      "Sua empresa trata talento como ativo estratégico. O TA antecipa necessidades, usa inteligência de mercado e dados preditivos para garantir as pessoas certas antes de precisar delas. Pouquíssimas empresas de médio porte chegam aqui.",
    risks: [
      "O principal risco é perder essa maturidade por rotatividade da equipe de TA",
      "Manter o investimento contínuo em tecnologia e desenvolvimento do time",
    ],
    actions: [
      "Documentar e sistematizar o conhecimento para não depender de pessoas",
      "Explorar IA generativa para sourcing e engajamento de candidatos",
      "Construir programa de talent intelligence integrado ao planejamento estratégico",
      "Tornar-se referência de employer brand no seu setor",
    ],
    cta: "Masterclass ou Mentoria Executiva — troca de alto nível para manter a vanguarda.",
  },
];

/* ──────────────────────────────────────────
   Intro cards (dimension preview in landing)
   ────────────────────────────────────────── */

export const INTRO_CARDS: IntroCard[] = [
  { icon: Settings, label: "Processo", color: "#818cf8" },
  { icon: BarChart3, label: "Dados", color: "#34d399" },
  { icon: Wrench, label: "Tecnologia", color: "#f59e0b" },
  { icon: Users, label: "Liderança", color: "#f472b6" },
  { icon: Sparkles, label: "Marca", color: "#a78bfa" },
  { icon: Calculator, label: "Custo", color: "#fb923c" },
];

/* ──────────────────────────────────────────
   Helper functions
   ────────────────────────────────────────── */

export function getStage(score: number): MaturityStage {
  return STAGES.find((s) => score >= s.range[0] && score <= s.range[1]) || STAGES[0];
}

export function getDimScore(answers: Record<number, number>, dimIndex: number): number {
  let total = 0;
  for (let i = dimIndex * 3; i < dimIndex * 3 + 3; i++) {
    if (answers[i] !== undefined) total += answers[i];
  }
  return total;
}
