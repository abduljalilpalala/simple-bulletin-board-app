import * as yup from 'yup'

export const schema = yup.object().shape({
  title: yup.string().max(255).required().label('The title'),
  content: yup.string().max(500).required().label('The content'),
})
