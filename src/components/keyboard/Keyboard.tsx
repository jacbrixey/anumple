import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="A" onClick={onClick} status={charStatuses['A']} />
        <Key value="A̱" onClick={onClick} status={charStatuses['A̱']} />
        <Key value="Ʋ" onClick={onClick} status={charStatuses['Ʋ']} />
        <Key value="B" onClick={onClick} status={charStatuses['B']} />
        <Key value="C" onClick={onClick} status={charStatuses['C']} />
        <Key value="E" onClick={onClick} status={charStatuses['E']} />
        <Key value="F" onClick={onClick} status={charStatuses['F']} />

      </div>
      <div className="flex justify-center mb-1">
      <Key value="H" onClick={onClick} status={charStatuses['H']} />
        <Key value="I" onClick={onClick} status={charStatuses['I']} />
        <Key value="I̱" onClick={onClick} status={charStatuses['P']} />
        <Key value="K" onClick={onClick} status={charStatuses['K']} />
        <Key value="L" onClick={onClick} status={charStatuses['L']} />
        <Key value="M" onClick={onClick} status={charStatuses['M']} />
        <Key value="N" onClick={onClick} status={charStatuses['N']} />
        <Key value="O" onClick={onClick} status={charStatuses['O']} />
        <Key value="O̱" onClick={onClick} status={charStatuses['O̱']} />

      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        <Key value="P" onClick={onClick} status={charStatuses['P']} />
        <Key value="S" onClick={onClick} status={charStatuses['S']} />
        <Key value="T" onClick={onClick} status={charStatuses['T']} />
        <Key value="U" onClick={onClick} status={charStatuses['U']} />
        <Key value="W" onClick={onClick} status={charStatuses['W']} />
        <Key value="Y" onClick={onClick} status={charStatuses['Y']} />

        <Key width={65.4} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
    </div>
  )
}
