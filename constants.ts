import { Question } from './types';

export const ASSESSMENT_QUESTIONS: Question[] = [
  {
    id: 'q1',
    dimension: '認知能力',
    type: 'multiple-choice',
    text: '當面對複雜問題時，您傾向於：',
    options: [
      { text: '將其分解為更小、更符合邏輯的步驟。', value: 'analytical' },
      { text: '腦力激盪，想出創新的、跳脫框架的解決方案。', value: 'innovative' },
      { text: '依賴過去的經驗和已經被證明有效的方法。', value: 'practical' },
      { text: '在做決定前，盡可能收集最多的資料。', value: 'data-driven' },
    ],
  },
  {
    id: 'q2',
    dimension: '軟技能',
    type: 'sjt',
    scenario: '您的團隊在一個關鍵專案上進度落後。一名核心成員在處理任務時遇到困難，導致延誤。',
    text: '您最可能採取的行動是什麼？',
    options: [
      { text: '主動幫助他們完成任務，讓專案重回軌道。', value: 'collaborative' },
      { text: '私下與他們溝通，了解問題所在並提供支持。', value: 'empathetic' },
      { text: '告知專案經理可能影響交付期限的風險。', value: 'proactive' },
      { text: '重新組織團隊的工作量，以便更妥善地分配任務。', value: 'strategic' },
    ],
  },
  {
    id: 'q3',
    dimension: '價值觀',
    type: 'ranking',
    text: '請將對您最重要的工作價值觀由上至下排序。',
    items: [
      { text: '清晰的晉升管道和高收入潛力。', value: 'ambition' },
      { text: '健康的工作與生活平衡及彈性的工作時間。', value: 'balance' },
      { text: '持續學習和發展技能的機會。', value: 'growth' },
      { text: '對社會或社群產生正面的影響。', value: 'impact' },
    ],
  },
  {
    id: 'q4',
    dimension: '動機與驅動力',
    type: 'sliders',
    text: '請用滑桿評估以下因素對您的激勵程度（0 表示完全沒有，100 表示極度激勵）。',
    sliders: [
      { id: 'challenge-driven', label: '解決一個具挑戰性的難題或問題。' },
      { id: 'team-oriented', label: '與一個優秀的團隊合作。' },
      { id: 'results-oriented', label: '從頭到尾完成一個專案。' },
      { id: 'autonomy-driven', label: '擁有管理自己時程和任務的自由。' },
    ],
  },
    {
    id: 'q5',
    dimension: '興趣領域',
    type: 'card-swipe',
    text: '滑動卡片來選擇您感興趣的活動類型。',
    cards: [
      { id: 'quantitative', text: '處理數字、數據和試算表。' },
      { id: 'creative', text: '寫作、設計或行銷等創意任務。' },
      { id: 'technical', text: '程式設計、系統管理或工程等技術性任務。' },
      { id: 'interpersonal', text: '銷售、客戶支援或人力資源等與人互動的任務。' },
      { id: 'organizing', text: '規劃活動、管理流程或建立系統。'},
    ],
  },
];

export const LOADING_MESSAGES: string[] = [
  '正在分析您的認知模式...',
  '正在將您的技能與未來產業進行匹配...',
  '正在評估您的核心動機...',
  '正在與數千種職涯路徑進行交叉比對...',
  '正在產生您的個人化職涯藍圖...',
  '正在匯總您獨特的優勢與潛力...',
];