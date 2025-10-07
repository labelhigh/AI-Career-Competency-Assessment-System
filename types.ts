export type QuestionType = 'multiple-choice' | 'sjt' | 'ranking' | 'sliders' | 'card-swipe';

export interface QuestionOption {
  text: string;
  value: string;
}

export interface SliderOption {
    id: string;
    label: string;
}

export interface CardOption {
    id: string;
    text: string;
}

export interface Question {
  id: string;
  dimension: string;
  type: QuestionType;
  text: string;
  scenario?: string;
  options?: QuestionOption[]; // For multiple-choice, sjt
  items?: QuestionOption[];   // For ranking
  sliders?: SliderOption[];   // For sliders
  cards?: CardOption[];       // For card-swipe
}

export type Answer = string | string[] | Record<string, number>;

export interface UserAnswers {
  [questionId: string]: Answer;
}

export interface CareerMatch {
  career: string;
  matchPercentage: number;
  reasoning: string;
}

export interface SkillDimension {
  name: string;
  score: number;
}

export interface DevelopmentSuggestion {
  area: string;
  suggestion: string;
  resourceLink?: string;
}

export interface AssessmentResult {
  personaTitle: string;
  summary: string;
  skillAnalysis: SkillDimension[];
  topStrengths: string[];
  developmentSuggestions: DevelopmentSuggestion[];
  careerMatches: CareerMatch[];
}