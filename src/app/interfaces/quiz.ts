interface Quiz {
    id: number;
    title: string;
    description: string;
    text: string
}

interface Question {
    id: number;
    quizId: number; 
    text: string   
}

interface Answer {
    id: number;
    questionId: number; 
    text: string;
    value: number;   
}

interface Result {
    id: number;
    quizId: number; 
    text: string;
    minValue ?: number;   
    maxValue ?: number;   
}