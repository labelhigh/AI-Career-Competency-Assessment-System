import { UserAnswers, AssessmentResult, Answer } from '../types';

// --- Persona 1: The Innovative Problem Solver ---
const INNOVATIVE_SOLVER: AssessmentResult = {
  personaTitle: "創新驅動的問題解決者",
  summary: "您是一位天生的創新者，善於將複雜的挑戰分解為可管理的步驟，並提出跳脫框架的解決方案。您重視團隊協作和個人成長，並被那些能對社會產生積極影響的機會所驅動。您在技術和人際互動方面都表現出潛力，使您成為一個多才多藝的專業人士。",
  skillAnalysis: [
    { name: '分析思維', score: 85 }, { name: '創新解難', score: 92 },
    { name: '領導力', score: 75 }, { name: '協作能力', score: 88 },
    { name: '適應性', score: 80 }, { name: '策略規劃', score: 78 },
  ],
  topStrengths: [
    "卓越的創新思維與創造力", "強烈的同理心與協作精神",
    "以成長為導向的學習心態", "在模糊環境中尋找解決方案的能力"
  ],
  developmentSuggestions: [
    { area: "數據驅動決策", suggestion: "雖然您擅長直覺和創新，但可以透過學習基礎的數據分析工具（如 SQL 或 Power BI）來增強您的決策能力，讓您的創意更有說服力。" },
    { area: "專案管理框架", suggestion: "探索敏捷（Agile）或 Scrum 等專案管理方法，這將幫助您更有效地組織您的創新專案，並與團隊更順暢地協作。" }
  ],
  careerMatches: [
    { career: "產品經理", matchPercentage: 95, reasoning: "此職位完美結合了您的創新思維、同理心和策略規劃能力。您將能引導產品從概念到上市的全過程，解決使用者問題。" },
    { career: "使用者體驗 (UX) 設計師", matchPercentage: 90, reasoning: "您對人的關注和解決問題的熱情非常適合 UX 領域。您可以將您的創意轉化為直觀、好用的數位產品。" },
    { career: "管理顧問", matchPercentage: 85, reasoning: "您分析複雜問題並提出創新解決方案的能力是管理顧問的核心。您將能幫助不同行業的客戶克服挑戰，實現增長。" }
  ]
};

// --- Persona 2: The Strategic Leader ---
const STRATEGIC_LEADER: AssessmentResult = {
    personaTitle: "高瞻遠矚的策略家",
    summary: "您具備宏觀視野，能夠預見趨勢並制定長遠計劃。您是天生的領導者，善於組織資源並激勵團隊朝著共同目標前進。您在決策時果斷且注重數據，使您在複雜的商業環境中脫穎而出。",
    skillAnalysis: [
        { name: '分析思維', score: 90 }, { name: '創新解難', score: 78 },
        { name: '領導力', score: 95 }, { name: '協作能力', score: 82 },
        { name: '適應性', score: 85 }, { name: '策略規劃', score: 98 },
    ],
    topStrengths: [
        "卓越的策略規劃與前瞻能力", "天生的領導才能與團隊激勵能力",
        "數據驅動的決策模式", "在高壓環境下保持冷靜"
    ],
    developmentSuggestions: [
        { area: "同理心溝通", suggestion: "您專注於目標，有時可能忽略團隊成員的情感需求。練習積極傾聽和給予建設性回饋，能提升團隊的凝聚力。" },
        { area: "敏捷性與彈性", suggestion: "在長期規劃的同時，也應保持對市場快速變化的敏銳度。學習敏捷方法論有助於您在策略執行上更具彈性。" }
    ],
    careerMatches: [
        { career: "企業策略師", matchPercentage: 98, reasoning: "這完全是為您量身打造的職位。您將負責制定公司級的長期戰略，引領企業走向成功。" },
        { career: "營運總監 (COO)", matchPercentage: 92, reasoning: "您的領導力和組織能力在此職位上能得到充分發揮，確保公司日常營運的高效與順暢。" },
        { career: "風險投資分析師", matchPercentage: 88, reasoning: "您能快速評估市場潛力和商業模式，非常適合在投資領域中發掘下一個獨角獸。" }
    ]
};

// --- Persona 3: The Empathetic Communicator ---
const EMPATHETIC_COMMUNICATOR: AssessmentResult = {
    personaTitle: "富同理心的溝通者",
    summary: "您擁有與生俱來的人際交往天賦，善於傾聽、理解並連結他人。您是團隊的黏著劑，能夠化解衝突並建立一個積極合作的工作氛圍。您相信人的價值，並致力於幫助他人成長與發展。",
    skillAnalysis: [
        { name: '分析思維', score: 75 }, { name: '創新解難', score: 80 },
        { name: '領導力', score: 85 }, { name: '協作能力', score: 98 },
        { name: '適應性', score: 90 }, { name: '策略規劃', score: 72 },
    ],
    topStrengths: [
        "卓越的人際溝通與建立關係能力", "高度的同理心與情商",
        "解決衝突與促進團隊合作", "擅長教練與指導他人"
    ],
    developmentSuggestions: [
        { area: "量化分析能力", suggestion: "您的決策多基於質化觀察。學習基礎的數據分析，能讓您在提出人力或文化相關建議時，更具說服力。" },
        { area: "果斷決策", suggestion: "您傾向於尋求共識，有時可能延誤決策。練習在資訊不完全時，基於核心原則做出果斷判斷，將提升您的領導效能。" }
    ],
    careerMatches: [
        { career: "人力資源經理", matchPercentage: 97, reasoning: "您的天賦在於人。從招聘、員工關係到組織文化建設，您都能在這個領域大放異彩。" },
        { career: "公關專家", matchPercentage: 91, reasoning: "您擅長建立和維護正面的公眾形象，能有效地向外界傳遞組織的價值與故事。" },
        { career: "非營利組織專案經理", matchPercentage: 86, reasoning: "您的使命感和溝通能力，能幫助您有效地推動社會公益項目，連結資源並擴大影響力。" }
    ]
};

export const generateCareerReport = async (answers: UserAnswers): Promise<AssessmentResult> => {
  console.log("正在為以下回答生成模擬報告:", answers);

  // 基於多元答案的更智慧的模擬邏輯
  const { q1, q2, q3, q4, q5 } = answers;

  // 類型斷言
  const rankingAnswer = q3 as string[];
  const slidersAnswer = q4 as Record<string, number>;
  const swipeAnswer = q5 as string[];

  let scoreStrategic = 0;
  let scoreInnovative = 0;
  let scoreEmpathetic = 0;

  // 分析選擇
  if (q1 === 'data-driven' || q1 === 'analytical') scoreStrategic++;
  if (q1 === 'innovative') scoreInnovative++;
  if (q2 === 'strategic' || q2 === 'proactive') scoreStrategic++;
  if (q2 === 'empathetic' || q2 === 'collaborative') scoreEmpathetic++;
  
  // 分析排序
  if (rankingAnswer[0] === 'ambition') scoreStrategic++;
  if (rankingAnswer[0] === 'growth') scoreInnovative++;
  if (rankingAnswer[0] === 'impact' || rankingAnswer[0] === 'balance') scoreEmpathetic++;
  
  // 分析滑桿
  const sliderValues = Object.values(slidersAnswer);
  const avgSlider = sliderValues.reduce((a, b) => a + b, 0) / sliderValues.length;
  if (slidersAnswer['challenge-driven'] > 75) scoreInnovative++;
  if (slidersAnswer['autonomy-driven'] > 75) scoreStrategic++;
  if (slidersAnswer['team-oriented'] > 75) scoreEmpathetic++;
  
  // 分析卡片
  if (swipeAnswer.includes('technical') || swipeAnswer.includes('quantitative')) scoreStrategic++;
  if (swipeAnswer.includes('creative')) scoreInnovative++;
  if (swipeAnswer.includes('interpersonal')) scoreEmpathetic++;

  let persona = INNOVATIVE_SOLVER; // Default
  if (scoreStrategic > scoreInnovative && scoreStrategic > scoreEmpathetic) {
    persona = STRATEGIC_LEADER;
  } else if (scoreEmpathetic > scoreInnovative && scoreEmpathetic > scoreStrategic) {
    persona = EMPATHETIC_COMMUNICATOR;
  }

  // 模擬網路延遲
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(persona);
    }, 4000);
  });
};