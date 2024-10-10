import { Entity } from "../../core/entities/entity";
interface answerProps {
  content: string
  questionId: string
  authorId: string
}
export class Answer extends Entity<answerProps> {
  get content() {
    return this.props.content
  }
  constructor(props: answerProps, id?: string) {
    super(props, id)
  }
}