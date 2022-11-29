import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" status="correct" />
        <Cell value="H" />
        <Cell value="U" />
        <Cell value="N" />
        <Cell value="N" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter C is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="I" />
        <Cell value="S" />
        <Cell value="K" status="present" />
        <Cell value="Ʋ" />
        <Cell value="L" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter K is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="H" />
        <Cell value="I" />
        <Cell value="L" status="absent" />
        <Cell value="U" />
        <Cell value="P" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
