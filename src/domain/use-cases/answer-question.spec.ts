import {expect, it} from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer'

const fakeAnswersRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return;
  }
}

it('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta'
  })

  expect((await answer).content).toEqual('Nova resposta')
})