import { EmotionTrends } from './emotionTrends';

export interface Emotion {
    name: string,
    series: Array<EmotionTrends>
}

export interface ConsolidatedEmotion {
    name: string,
    value: number
}