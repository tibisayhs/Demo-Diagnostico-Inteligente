/**
 * Tipos y modelos de datos para el Diagnóstico Inteligente de Negocios
 * Identidad visual y concepto: Tiby Hernández
 */

export type Screen = 'inicio' | 'cuestionario' | 'resultados' | 'recomendaciones' | 'proximo_paso';

export interface Option {
  points: number; // 0 a 4
  label: string;
}

export interface Question {
  id: number; // 1 a 5
  area: string;
  title: string;
  description?: string;
  options: Option[];
}

export type UserAnswers = Record<number, number>; // questionId -> points (0-4)

export type DiagnosticLevelId = 'inicial' | 'intermedio' | 'avanzado';

export interface DiagnosticLevel {
  id: DiagnosticLevelId;
  name: string;
  scoreRange: string;
  minScore: number;
  maxScore: number;
  message: string;
  badgeColor: string;
  accentColor: string;
}

export interface Recommendation {
  questionId: number;
  area: string;
  userScore: number;
  opportunity: string;
  action: string;
  benefit: string;
}
