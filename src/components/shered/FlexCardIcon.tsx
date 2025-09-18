import { Image, ImageSourcePropType } from 'react-native'
import FlexText from './FlexText'
import TextSecondary from './TextSecondary'

const FlexCardIcon = ({
  text,
  image
}: {
  text: string,
  image: ImageSourcePropType
}) => {
  return (
    <FlexText
      style={{
        marginTop: 6
      }}
    >
      <Image
        source={image}
      />
      <TextSecondary
        text={text}
      />
    </FlexText>
  )
}

export default FlexCardIcon
