export const buttonStyle = {
  baseStyle: {
    rounded: '8',
    _text: {
      textTransform: 'uppercase',
      color: 'white',
    },
  },
  variants: {
    solid: {
      rounded: 'full',
      bgColor: 'secondary',
      alignSelf: 'center',
      shadow: '9',
    },
    link: {
      _text: {
        textTransform: 'capitalize',
        color: 'tertiary',
      },
    },
  },
};
