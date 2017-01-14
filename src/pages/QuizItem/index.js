import { connect } from 'react-redux'
import { choicePress } from '../../actions'
import { get } from '../../services/question'
import { QuizItem } from '../../components'

const mapStateToProps = (state) => {
  return {
    quizItem: get()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChoicePress: (id) => {
      dispatch(choicePress(id))
    }
  }
}

const QuizItemPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizItem)

export default QuizItemPage
