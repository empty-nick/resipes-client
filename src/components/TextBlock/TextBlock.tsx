import styles from './TextBlock.module.css'

type TBorderColor = 'red' | 'blue' | 'default'
type TFontSize = [number, 'px'|'em'|'rem']

interface ITextBlockProps {
  children: string;
  borderColor: TBorderColor;
  fontSize: TFontSize;
  isUserSelectable?: boolean;
  isCopyTextContent?: boolean;
}

export const TextBlock = ({ children, borderColor, fontSize, isUserSelectable = true, isCopyTextContent = false }: ITextBlockProps) => {
  const getColor = (color: TBorderColor) => {
    switch (color) {
      case 'blue':
        return '#005aa9'
      case 'red':
        return '#a90000'

      default:
        return '#601970'
    }
  }

  // TODO: add side effect to show 'Copied'
  const copyToClipboard = async () => {
    if (!isCopyTextContent)
      return

    await navigator.clipboard.writeText(children)
  }

  return (
    <div className={styles.content} onClick={copyToClipboard} style={{
        fontSize: fontSize.join(''),
        border: `5px solid ${getColor(borderColor)}`,
        userSelect: isUserSelectable ? 'auto' : 'none'
      }}>
      {children}
    </div>
  )
}
