import styles from './TextBlock.module.css'
import { ReactNode } from "react";

type TBorderColor = 'red' | 'blue' | 'default' | 'purple'
type TFontSize = [number, 'px'|'em'|'rem']
type TBorderSize = [number, 'px'|'em'|'rem']

interface ITextBlockProps {
  children: string | ReactNode;
  borderColor: TBorderColor;
  borderSize: TBorderSize;
  fontSize: TFontSize;
  isUserSelectable?: boolean;
  isCopyTextContent?: boolean;
}

export const TextBlock = ({ children, borderColor, fontSize, isUserSelectable = true, isCopyTextContent = false, borderSize }: ITextBlockProps) => {
  const getColor = (color: TBorderColor) => {
    switch (color) {
      case 'purple':
        return '#601970'
      case 'red':
        return '#b60000'

      case 'blue':
      default:
        return '#006085'
    }
  }

  // TODO: add side effect to show 'Copied'
  const copyToClipboard = async () => {
    if (!isCopyTextContent)
      return
    if (typeof children === "string") {
      await navigator.clipboard.writeText(children)
    }
  }

  return (
    <div className={`${styles.content} `} onClick={copyToClipboard} style={{
        fontSize: fontSize.join(''),
        border: `${borderSize.join('')} solid ${getColor(borderColor)}`,
        userSelect: isUserSelectable ? 'auto' : 'none'
      }}>
      {children}
    </div>
  )
}
