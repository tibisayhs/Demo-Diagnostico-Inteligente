import { Question, DiagnosticLevel, Recommendation, UserAnswers } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    area: 'Organización de clientes',
    title: '¿Cómo organizas la información de tus clientes?',
    description: 'Gestión de contactos, historial y seguimiento de prospectos.',
    options: [
      { points: 0, label: 'No tengo un sistema definido.' },
      { points: 1, label: 'Utilizo notas o archivos dispersos.' },
      { points: 2, label: 'Utilizo hojas de cálculo.' },
      { points: 3, label: 'Utilizo una herramienta digital organizada.' },
      { points: 4, label: 'Tengo un sistema centralizado con automatizaciones.' },
    ],
  },
  {
    id: 2,
    area: 'Digitalización comercial',
    title: '¿Cómo realizas tus procesos comerciales?',
    description: 'Emisión de cotizaciones, propuestas y acuerdos con clientes.',
    options: [
      { points: 0, label: 'Todo se realiza manualmente.' },
      { points: 1, label: 'Utilizo documentos y mensajes.' },
      { points: 2, label: 'Tengo algunas plantillas.' },
      { points: 3, label: 'Utilizo herramientas que agilizan las actividades.' },
      { points: 4, label: 'Tengo procesos digitales integrados y automatizados.' },
    ],
  },
  {
    id: 3,
    area: 'Utilización de inteligencia artificial',
    title: '¿Cómo utilizas actualmente la inteligencia artificial?',
    description: 'Adopción de herramientas de IA en las tareas operativas o estratégicas.',
    options: [
      { points: 0, label: 'No utilizo herramientas de IA.' },
      { points: 1, label: 'Las utilizo ocasionalmente.' },
      { points: 2, label: 'Las utilizo para crear contenido o documentos.' },
      { points: 3, label: 'Las utilizo regularmente en distintas actividades.' },
      { points: 4, label: 'Tengo procesos específicos apoyados por IA.' },
    ],
  },
  {
    id: 4,
    area: 'Presencia y venta digital',
    title: '¿Cómo ofreces tus servicios o productos digitalmente?',
    description: 'Canales digitales para captar prospectos y concretar ventas.',
    options: [
      { points: 0, label: 'No tengo presencia digital organizada.' },
      { points: 1, label: 'Utilizo principalmente mensajes y redes sociales.' },
      { points: 2, label: 'Tengo una página o catálogo digital.' },
      { points: 3, label: 'Utilizo herramientas de captación y venta.' },
      { points: 4, label: 'Tengo un proceso comercial digital integrado.' },
    ],
  },
  {
    id: 5,
    area: 'Seguimiento de resultados',
    title: '¿Cómo haces seguimiento a tus resultados?',
    description: 'Control de métricas clave, indicadores comerciales y reportes del negocio.',
    options: [
      { points: 0, label: 'No realizo seguimiento.' },
      { points: 1, label: 'Reviso resultados ocasionalmente.' },
      { points: 2, label: 'Llevo registros manuales.' },
      { points: 3, label: 'Utilizo indicadores digitales.' },
      { points: 4, label: 'Tengo indicadores y reportes actualizados de manera sistemática.' },
    ],
  },
];

export const DIAGNOSTIC_LEVELS: DiagnosticLevel[] = [
  {
    id: 'inicial',
    name: 'Nivel inicial',
    scoreRange: '0 a 7 puntos',
    minScore: 0,
    maxScore: 7,
    message:
      'Tu negocio tiene oportunidades importantes para organizar y digitalizar sus procesos. El primer paso es identificar las actividades que consumen más tiempo y comenzar a simplificarlas.',
    badgeColor: '#FF751F',
    accentColor: '#FF751F',
  },
  {
    id: 'intermedio',
    name: 'Nivel intermedio',
    scoreRange: '8 a 14 puntos',
    minScore: 8,
    maxScore: 14,
    message:
      'Ya utilizas herramientas digitales, pero todavía puedes conectar procesos, reducir tareas repetitivas y aprovechar mejor la inteligencia artificial.',
    badgeColor: '#020202',
    accentColor: '#020202',
  },
  {
    id: 'avanzado',
    name: 'Nivel avanzado',
    scoreRange: '15 a 20 puntos',
    minScore: 15,
    maxScore: 20,
    message:
      'Tu negocio cuenta con una base digital sólida según las respuestas del diagnóstico. El siguiente paso es revisar oportunidades de integración, automatización y crecimiento.',
    badgeColor: '#020202',
    accentColor: '#C1FF72',
  },
];

/**
 * Calcula la puntuación total a partir de las respuestas del usuario
 */
export function calculateTotalScore(answers: UserAnswers): number {
  return Object.values(answers).reduce((sum, score) => sum + (score ?? 0), 0);
}

/**
 * Determina el nivel del diagnóstico basado en el puntaje total
 */
export function getDiagnosticLevel(score: number): DiagnosticLevel {
  if (score <= 7) return DIAGNOSTIC_LEVELS[0];
  if (score <= 14) return DIAGNOSTIC_LEVELS[1];
  return DIAGNOSTIC_LEVELS[2];
}

/**
 * Catálogo maestro de oportunidades, acciones y beneficios según el puntaje de cada pregunta
 */
interface AreaDetail {
  area: string;
  getOpportunity: (score: number) => string;
  getAction: (score: number) => string;
  getBenefit: (score: number) => string;
}

const AREA_DETAILS: Record<number, AreaDetail> = {
  1: {
    area: 'Organización de clientes',
    getOpportunity: (score) => {
      if (score <= 1) {
        return 'La información de clientes y prospectos se encuentra fragmentada o dispersa, lo que provoca olvidos y pérdidas de ventas potenciales.';
      }
      if (score === 2) {
        return 'Las hojas de cálculo han servido de soporte inicial, pero carecen de historial unificado, alertas automáticas y seguimiento continuo.';
      }
      return 'Cuentas con una herramienta digital, pero aún existen brechas de sincronización con tus canales de atención y seguimiento.';
    },
    getAction: () =>
      'Centralizar toda la base de contactos en un sistema ágil y establecer un proceso claro de seguimiento para cada etapa de la relación.',
    getBenefit: () =>
      'Reducción de tiempos de respuesta, mayor retención de clientes y visibilidad completa sobre cada oportunidad comercial.',
  },
  2: {
    area: 'Digitalización comercial',
    getOpportunity: (score) => {
      if (score <= 1) {
        return 'Los presupuestos y propuestas se generan de manera manual y personalizada desde cero, retrasando la respuesta al cliente.';
      }
      if (score === 2) {
        return 'El uso de plantillas básicas reduce el esfuerzo, pero sigue requiriendo armado manual y seguimiento manual de aprobaciones.';
      }
      return 'Dispones de herramientas para cotizar, pero el flujo entre cotización, aceptación y facturación aún no está conectado.';
    },
    getAction: () =>
      'Utilizar una herramienta o cotizador digital que estandarice precios, acelere el envío de cotizaciones y registre el estado de cada solicitud.',
    getBenefit: () =>
      'Respuestas comerciales en minutos en lugar de horas o días, aumentando notablemente la tasa de conversión y cierre.',
  },
  3: {
    area: 'Utilización de inteligencia artificial',
    getOpportunity: (score) => {
      if (score <= 1) {
        return 'No se está aprovechando el potencial de la IA para delegar tareas operativas, repetitivas o redacción de respuestas frecuentes.';
      }
      if (score === 2) {
        return 'La IA se usa únicamente de forma esporádica para redactar textos, sin integrarse a los flujos reales de toma de decisiones o servicio.';
      }
      return 'Hay adopción regular de IA, pero todavía se realiza de forma individual sin plantillas ni asistentes propios del negocio.';
    },
    getAction: () =>
      'Identificar una tarea recurrente de alto consumo de tiempo y diseñar un asistente o prompt estandarizado con IA para resolverla en segundos.',
    getBenefit: () =>
      'Ahorro de hasta un 40% de horas operativas a la semana y respuestas más ágiles y consistentes para tu equipo y clientes.',
  },
  4: {
    area: 'Presencia y venta digital',
    getOpportunity: (score) => {
      if (score <= 1) {
        return 'La captación depende casi exclusivamente de canales informales, sin un punto digital que explique tu oferta con claridad.';
      }
      if (score === 2) {
        return 'Existe una página o catálogo digital, pero no cuenta con un camino directo y guiado para convertir visitantes en prospectos calificados.';
      }
      return 'Cuentas con herramientas de venta, pero la experiencia del cliente aún presenta fricciones al momento de agendar o contratar.';
    },
    getAction: () =>
      'Estructurar una página o catálogo interactivo con llamadas a la acción directas, preguntas de calificación y enlace a agenda o WhatsApp.',
    getBenefit: () =>
      'Captación activa de prospectos calificados las 24 horas del día con una presentación clara y profesional de tus servicios.',
  },
  5: {
    area: 'Seguimiento de resultados',
    getOpportunity: (score) => {
      if (score <= 1) {
        return 'Las decisiones estratégicas se toman sin métricas objetivas de ventas, tiempos de atención o satisfacción de clientes.';
      }
      if (score === 2) {
        return 'Los registros manuales quedan desactualizados rápidamente y no permiten anticipar cuellos de botella ni prever ingresos con precisión.';
      }
      return 'Existen datos digitales aislados en distintas plataformas, pero falta una vista integral y periódica del rendimiento.';
    },
    getAction: () =>
      'Definir los tres indicadores clave del negocio y centralizarlos en un reporte o tablero simple de actualización sistemática.',
    getBenefit: () =>
      'Claridad total sobre la salud comercial y operativa del negocio para tomar decisiones informadas y detectar fallas a tiempo.',
  },
};

/**
 * Genera exactamente tres recomendaciones prácticas mediante reglas predefinidas:
 * 1. Identifica las preguntas con menor puntuación.
 * 2. Prioriza las áreas con mayores oportunidades de mejora (menor puntuación primero).
 * 3. En caso de empate, conserva el orden original de las preguntas (1 a 5).
 * 4. Sin llamadas a APIs externas.
 */
export function generateRecommendations(answers: UserAnswers): Recommendation[] {
  // Construir lista con id de pregunta y puntaje
  const scoredQuestions = QUESTIONS.map((q) => ({
    questionId: q.id,
    area: q.area,
    score: answers[q.id] ?? 0,
  }));

  // Ordenar de menor a mayor puntuación.
  // En caso de empate, mantener el orden original de las preguntas (qA.questionId - qB.questionId)
  scoredQuestions.sort((a, b) => {
    if (a.score !== b.score) {
      return a.score - b.score; // Menor puntaje primero
    }
    return a.questionId - b.questionId; // En empate, orden original
  });

  // Tomar las primeras 3 preguntas
  const topThree = scoredQuestions.slice(0, 3);

  // Mapear a recomendaciones completas
  return topThree.map((item) => {
    const detail = AREA_DETAILS[item.questionId];
    return {
      questionId: item.questionId,
      area: detail.area,
      userScore: item.score,
      opportunity: detail.getOpportunity(item.score),
      action: detail.getAction(item.score),
      benefit: detail.getBenefit(item.score),
    };
  });
}
